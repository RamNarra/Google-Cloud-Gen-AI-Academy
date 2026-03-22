import Link from "next/link";

export default function TrackThreePage() {
  return (
    <section className="glass-panel mx-auto max-w-3xl rounded-3xl p-10 text-center shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
      <p className="mb-4 inline-flex rounded-full border border-[#ff6b6b]/35 bg-[#ff6b6b]/14 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-[#ffd1d1]">
        Track 3
      </p>
      <h1 className="mb-4 text-4xl font-semibold sm:text-5xl">Coming Soon</h1>
      <p className="mb-8 text-lg text-[#c4cce5]">
        Track 3 content will be published after the session materials are
        released.
      </p>
      <Link
        href="/"
        className="inline-block rounded-full border border-[#5b8fff]/35 bg-[#5b8fff]/14 px-6 py-2.5 text-sm font-medium text-[#d8e0f0] transition hover:-translate-y-0.5 hover:bg-[#5b8fff]/22"
      >
        Back to Home
      </Link>
    </section>
  );
}
