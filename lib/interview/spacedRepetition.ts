export interface UserTopicState {
  conceptId: string;
  status: 'confident' | 'revising' | 'panic';
  lastReviewedTimestamp: number; // Date.now()
  intervalDays: number; // 1, 3, 7, 14, 30
  memoryScore: number; // 0 to 100
  speakingScore: number; // 0 to 100
  followUpScore: number; // 0 to 100
}

const LOCAL_STORAGE_KEY = "fsm_interview_user_progress_v3";

export function loadUserProgress(): Record<string, UserTopicState> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return {};
    const parsed: Record<string, UserTopicState> = JSON.parse(raw);

    // Apply memory decay check
    const now = Date.now();
    Object.keys(parsed).forEach((key) => {
      const state = parsed[key];
      const elapsedDays = (now - state.lastReviewedTimestamp) / (1000 * 60 * 60 * 24);

      // If more than 7 days passed since last review and was confident, downgrade to revising
      if (elapsedDays > 7 && state.status === "confident") {
        state.status = "revising";
        state.memoryScore = Math.max(state.memoryScore - 20, 50);
      }
    });

    return parsed;
  } catch (e) {
    console.error("Failed to load user progress:", e);
    return {};
  }
}

export function saveUserTopicState(
  conceptId: string,
  status: 'confident' | 'revising' | 'panic',
  scores?: { memory?: number; speaking?: number; followUp?: number }
): Record<string, UserTopicState> {
  const current = loadUserProgress();
  const existing = current[conceptId] || {
    conceptId,
    status: 'revising',
    lastReviewedTimestamp: Date.now(),
    intervalDays: 1,
    memoryScore: 60,
    speakingScore: 50,
    followUpScore: 40,
  };

  const nextInterval = status === 'confident' ? existing.intervalDays * 2 : 1;

  current[conceptId] = {
    ...existing,
    status,
    lastReviewedTimestamp: Date.now(),
    intervalDays: Math.min(nextInterval, 30),
    memoryScore: scores?.memory ?? (status === 'confident' ? 90 : status === 'revising' ? 65 : 30),
    speakingScore: scores?.speaking ?? existing.speakingScore,
    followUpScore: scores?.followUp ?? existing.followUpScore,
  };

  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(current));
  }

  return current;
}

export function calculateMasteryMetrics(progressMap: Record<string, UserTopicState>, totalConceptsCount: number) {
  const entries = Object.values(progressMap);
  if (entries.length === 0) {
    return { memoryMastery: 20, speakingMastery: 15, followUpMastery: 10, overall: 15 };
  }

  const sumMemory = entries.reduce((acc, curr) => acc + curr.memoryScore, 0);
  const sumSpeaking = entries.reduce((acc, curr) => acc + curr.speakingScore, 0);
  const sumFollowUp = entries.reduce((acc, curr) => acc + curr.followUpScore, 0);

  const memoryMastery = Math.round(sumMemory / totalConceptsCount);
  const speakingMastery = Math.round(sumSpeaking / totalConceptsCount);
  const followUpMastery = Math.round(sumFollowUp / totalConceptsCount);

  const overall = Math.round((memoryMastery * 0.4) + (speakingMastery * 0.4) + (followUpMastery * 0.2));

  return { memoryMastery, speakingMastery, followUpMastery, overall };
}
