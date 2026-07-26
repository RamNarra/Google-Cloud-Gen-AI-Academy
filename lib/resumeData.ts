export interface ResumeBulletItem {
  id: string;
  title: string;
  projectName: string;
  roleTitle: string;
  dates: string;
  scaryHrVersion: string;
  humanTranslation: string;
  oneSentencePitch: string;
  script30Sec: string;
  interviewerFollowUpQuestions: {
    question: string;
    honestAnswer: string;
  }[];
  crossLinkedModuleIds: string[]; // Maps to INTERVIEW_MODULES ids
}

export const RESUME_DEINFLATOR_ITEMS: ResumeBulletItem[] = [
  {
    id: 'pollaris-project',
    title: 'Pollaris — Cloud Native Enterprise Polling Platform',
    projectName: 'Pollaris (PalTech Project)',
    roleTitle: 'Full Stack & DevOps Developer',
    dates: 'May 2026',
    scaryHrVersion:
      'Engineered fault-tolerant voting modules using Firestore ACID Transactions, eliminating race conditions during concurrent updates and strictly enforcing one-vote-per-user constraints. Architected a deterministic build configuration decoupling runtime SDK credentials from static compilation.',
    humanTranslation:
      'We built a web app where users can vote online. I used Firebase Firestore transactions to make sure that when 100 people click "Vote" at the exact same time, nobody\'s vote is lost and nobody can vote twice.',
    oneSentencePitch:
      'Pollaris is an online polling web application built with Next.js and Firebase that handles concurrent voting safely using transactions.',
    script30Sec:
      'Pollaris is an enterprise polling web application I built using Next.js 16 and Firebase Firestore. The main technical challenge was preventing duplicate votes and race conditions during high concurrent traffic. I implemented Firestore ACID transactions to ensure atomic vote updates and strictly enforce one-vote-per-user. We also containerized the app using Docker and set up automated CI/CD with GitHub Actions.',
    interviewerFollowUpQuestions: [
      {
        question: 'What is a race condition in voting and how did Firestore ACID transactions solve it?',
        honestAnswer:
          'A race condition happens when two users vote simultaneously, and both read the same old count before updating. Firestore ACID transactions read the current count, lock it temporarily, and write the new count atomically, so no votes are overwritten.'
      },
      {
        question: 'What do you mean by decoupling runtime SDK credentials from static compilation?',
        honestAnswer:
          'It means we didn\'t hardcode database secrets into the built Docker image. Instead, we injected environment variables at runtime when the container starts.'
      }
    ],
    crossLinkedModuleIds: ['sql-joins-keys', 'git-docker-devops', 'rest-api-backend']
  },
  {
    id: 'infor-internship-ai',
    title: 'Infor AI Internship — Predictive Supply Chain & Compliance Chatbot',
    projectName: 'Infor AI Projects',
    roleTitle: 'AI Intern',
    dates: 'July 2025 – Oct 2025',
    scaryHrVersion:
      'Engineered and deployed predictive supply chain models utilizing AWS DeepAR, effectively forecasting sales contract demand. Architected a highly secure AI chatbot leveraging OpenAI GPT-4 APIs automating hazardous material storage compliance.',
    humanTranslation:
      'During my internship at Infor, I helped test an AWS machine learning tool to forecast product demand and integrated OpenAI\'s ChatGPT API to create a chatbot that answers warehouse safety questions.',
    oneSentencePitch:
      'I evaluated AWS machine learning forecasting models and built a GPT-4 powered chatbot for warehouse safety compliance.',
    script30Sec:
      'During my AI internship at Infor, I worked on two main initiatives. First, I assisted in preprocessing ERP datasets to evaluate AWS DeepAR time-series models for forecasting sales demand. Second, I integrated OpenAI\'s GPT-4 API to build a prototype chatbot that answers warehouse safety and hazardous material compliance questions quickly.',
    interviewerFollowUpQuestions: [
      {
        question: 'What was your specific individual contribution to the GPT-4 chatbot?',
        honestAnswer:
          'I created the prompt templates and integrated the OpenAI API endpoints in Python/Node.js to receive warehouse queries and output structured compliance guidelines.'
      },
      {
        question: 'What is AWS DeepAR in simple terms?',
        honestAnswer:
          'AWS DeepAR is a machine learning service for forecasting scalar time-series data, like predicting next month\'s inventory demand based on past sales history.'
      }
    ],
    crossLinkedModuleIds: ['rest-api-backend', 'git-docker-devops', 'hr-behavioral-intro']
  },
  {
    id: 'iot-smart-locker',
    title: 'IoT Smart Parcel Locker — Cloud Integrated Logistics',
    projectName: 'IoT Smart Parcel Locker',
    roleTitle: 'Embedded Systems & Cloud Developer',
    dates: 'Jan 2026 – Mar 2026',
    scaryHrVersion:
      'Validated seamless synchronization between embedded C/C++ microcontrollers (Arduino/NodeMCU) and Adafruit IO. Designed security testing for Two-Factor Authentication (2FA) access mechanism validating dynamic OTP protocols.',
    humanTranslation:
      'I built a smart parcel locker using Arduino sensors. When a delivery person puts a package inside, the locker sends a 2FA OTP pin code to the customer\'s phone via SMS to unlock it.',
    oneSentencePitch:
      'An automated parcel locker using Arduino microcontrollers that sends OTP codes to customers for secure package pickup.',
    script30Sec:
      'The IoT Smart Parcel Locker is an automated package delivery system. We used Arduino microcontrollers and infrared sensors to detect package occupancy. When a package is placed inside, the system generates a dynamic One-Time Password sent to the user via SMS. Once the user enters the correct OTP on the keypad, the locker opens securely.',
    interviewerFollowUpQuestions: [
      {
        question: 'How did the microcontroller communicate with the cloud?',
        honestAnswer:
          'The NodeMCU microcontroller used Wi-Fi to publish sensor data over the MQTT protocol to Adafruit IO cloud dashboards.'
      }
    ],
    crossLinkedModuleIds: ['rest-api-backend', 'sdlc-se']
  },
  {
    id: 'ai-surveillance',
    title: 'AI Wide Area Surveillance — Cloud-Edge Threat Intelligence',
    projectName: 'AI Wide Area Surveillance',
    roleTitle: 'Computer Vision & Edge Developer',
    dates: 'Jan 2025 – Mar 2025',
    scaryHrVersion:
      'Deployed a deep learning YOLOv8 inference pipeline onto edge hardware integrated with OpenCV feature-matching. Architected low-latency remote cloud-alerting pipeline via SMTP servers and Flask web dashboard.',
    humanTranslation:
      'I set up a security camera system using YOLOv8 AI model to detect humans in video streams and send email alerts with a Flask dashboard when motion is detected.',
    oneSentencePitch:
      'A smart camera surveillance system using YOLOv8 for real-time human detection and instant email alert dispatching.',
    script30Sec:
      'This project is a smart surveillance system built using YOLOv8 deep learning model and OpenCV. It processes camera frames on edge devices to detect human threats in real-time. When a threat is detected, it triggers an asynchronous alert pipeline that sends an email notification with photo telemetry and updates a Flask web dashboard.',
    interviewerFollowUpQuestions: [
      {
        question: 'Why did you use asynchronous multi-threading in frame buffering?',
        honestAnswer:
          'Video processing is heavy. Multi-threading separates the frame capturing thread from the AI detection thread so the camera feed doesn\'t freeze or lag.'
      }
    ],
    crossLinkedModuleIds: ['rest-api-backend', 'dsa-stack-queue']
  }
];
