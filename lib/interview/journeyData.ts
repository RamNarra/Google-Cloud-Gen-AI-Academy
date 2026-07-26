export interface ChapterItem {
  id: string;
  partId: string;
  partTitle: string;
  chapterNumber: number;
  title: string;
  shortTitle: string;
  icon: string;
  estimatedMinutes: number;
  question: string;
  analogyStory: {
    title: string;
    text: string;
    takeaway: string;
  };
  diagramType: 'software-app' | 'sdlc-loop' | 'agile-loop' | 'jvm-coffee' | 'cookie-class' | 'tv-remote' | 'family-inherit' | 'actor-poly' | 'car-abstract' | 'array-lockers' | 'stack-plates' | 'queue-line' | 'hashmap-mail' | 'sql-library' | 'rest-waiter' | 'spring-factory' | 'git-docs' | 'docker-ship' | 'cloud-power' | 'ai-copilot' | 'fsm-store' | 'resume-story' | 'star-hr';
  simpleExplanation: string;
  commonMistake: string;
  whatToTellInterviewer: {
    heading: string;
    structurePoints: string[];
    exampleScript: string;
    durationSec: number;
    tip: string;
  };
  onePictureSummary: string[];
}

export interface PartItem {
  id: string;
  partNumber: number;
  title: string;
  description: string;
  icon: string;
}

export const TEXTBOOK_PARTS: PartItem[] = [
  { id: 'part-1', partNumber: 1, title: 'Section I: FSM & Enterprise SaaS Domain', description: 'Renuka\'s Infor Experience, FSM Associate Role, SaaS, Multi-Tenancy, ERP Systems', icon: '🏢' },
  { id: 'part-2', partNumber: 2, title: 'Section II: Software Engineering & Agile SDLC', description: 'SDLC 6 Phases, Scrum vs Kanban, Jira Tickets (Not in Brain!), Sprint Meetings', icon: '🏃' },
  { id: 'part-3', partNumber: 3, title: 'Section III: Java / J2EE & Object-Oriented Principles', description: 'Java, JVM, What is J2EE?, Maven, Classes, Encapsulation, Inheritance, Polymorphism, Abstraction', icon: '☕' },
  { id: 'part-4', partNumber: 4, title: 'Section IV: Data Structures & Algorithms (DSA)', description: 'Arrays, Stacks, Queues, HashMaps, Hash Collision Handling, O(1) Complexity', icon: '🧱' },
  { id: 'part-5', partNumber: 5, title: 'Section V: Relational & NoSQL Databases', description: 'Oracle DB, SQL Server, Primary/Foreign Keys, SQL Joins, NoSQL Firestore', icon: '🔗' },
  { id: 'part-6', partNumber: 6, title: 'Section VI: Backend Frameworks & Web Services', description: 'SOAP vs REST APIs, HTTP Verbs, Spring Boot 3-Tier, Spring Data JPA, Spring Security, Postman', icon: '🍽️' },
  { id: 'part-7', partNumber: 7, title: 'Section VII: AI Tools & Unit Testing Evidences', description: 'GitHub Copilot, Prompt Engineering, Honest AI Usage, Unit Testing Logs & Evidence', icon: '🤖' },
  { id: 'part-8', partNumber: 8, title: 'Section VIII: DevOps, Containers & Cloud Infrastructure', description: 'Git PR Workflows, Docker, Kubernetes, CI/CD Pipelines, AWS/Azure/GCP Cloud', icon: '📦' },
  { id: 'part-9', partNumber: 9, title: 'Section IX: Resume Stories (Infor & Pollaris) & HR', description: 'Infor 4-Month Internship Story, Pollaris Voting App, Self Introduction, STAR Method', icon: '🗣️' },
];

export const TEXTBOOK_CHAPTERS: ChapterItem[] = [
  // SECTION I: FSM & ENTERPRISE SAAS DOMAIN
  {
    id: 'ch-1-fsm-role',
    partId: 'part-1',
    partTitle: 'Section I: FSM & SaaS',
    chapterNumber: 1,
    title: 'Chapter 1: Associate Software Engineer on the FSM Team',
    shortTitle: '1. FSM SE Role',
    icon: '🏢',
    estimatedMinutes: 6,
    question: 'What is the role of an Associate Software Engineer on the Financials & Supply Management (FSM) team?',
    analogyStory: {
      title: 'The Line Chef in a Global Enterprise Restaurant',
      text: 'Imagine a global restaurant serving 10,000 customers in 50 countries simultaneously. Senior chefs design the master menu, but the Associate Software Engineer is the talented line chef who cooks clean meals (Java code), tests every dish for safety (Unit Testing), and uses smart automated kitchen tools (AI Copilot) to deliver food fast! On the FSM team, you build modern Java SaaS applications that manage company money and warehouse inventory globally.',
      takeaway: 'Your role is to design, develop, test, and maintain Java SaaS applications for the FSM product suite.'
    },
    diagramType: 'fsm-store',
    simpleExplanation: 'As an Associate Software Engineer on the Financials & Supply Management (FSM) product engineering team, your daily responsibility is to design, develop, test, and maintain scalable Java-based enterprise SaaS applications. You collaborate with Product Managers, QA, and UX teams in Agile sprints, write clean well-documented code, and leverage AI tools like GitHub Copilot to accelerate software delivery across the SDLC.',
    commonMistake: 'Thinking an Associate Software Engineer only fixes small bugs. You participate in sprint planning, architectural discussions, and build core features under senior engineer guidance!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. State your title and core responsibility (Design, develop, test, and maintain Java SaaS applications).',
        '2. Mention Agile team collaboration (Working with Product Managers, QA, and UX designers).',
        '3. Conclude with quality assurance (Writing clean code, unit testing, and leveraging AI tools).'
      ],
      exampleScript: 'As an Associate Software Engineer on the FSM product engineering team, my role is to design, develop, test, and maintain scalable Java-based SaaS applications. I collaborate with cross-functional teams like Product Management, QA, and UX in Agile sprints. I focus on writing clean code, performing unit testing, and using AI tools to accelerate development.',
      durationSec: 28,
      tip: 'Speak with steady confidence. Highlight designing, developing, testing, and maintaining Java SaaS apps.'
    },
    onePictureSummary: ['💻 Modern Java Backend', '↓ 💰 FSM Enterprise SaaS', '↓ 🤖 AI SDLC Tools', '↓ 🏃 Agile Team Delivery']
  },
  {
    id: 'ch-2-enterprise-saas',
    partId: 'part-1',
    partTitle: 'Section I: FSM & SaaS',
    chapterNumber: 2,
    title: 'Chapter 2: What is Enterprise SaaS & Multi-Tenancy?',
    shortTitle: '2. Enterprise SaaS',
    icon: '☁️',
    estimatedMinutes: 6,
    question: 'What is Enterprise SaaS and what does multi-tenancy mean in cloud applications?',
    analogyStory: {
      title: 'The Big Apartment Building',
      text: 'Imagine a big apartment building. Instead of every family building their own private water tank and generator, everyone lives in the same apartment building and shares the main water pipe and power grid. However, every family has their own private front door lock so no neighbor can enter another apartment! Enterprise SaaS Multi-Tenancy works the exact same way: thousands of company clients use the same cloud software application, but their data is completely locked and separated.',
      takeaway: 'Multi-tenancy means multiple business clients share one cloud software system while keeping their private data strictly isolated.'
    },
    diagramType: 'software-app',
    simpleExplanation: 'Enterprise Software-as-a-Service (SaaS) is cloud software delivered over the internet on a subscription basis. Multi-tenancy is an architectural design where a single running instance of software serves thousands of different enterprise customers (tenants) simultaneously, while using strict security rules to keep each customer\'s private data completely isolated and secure.',
    commonMistake: 'Thinking multi-tenancy means different enterprise clients can see or accidentally access each other\'s data.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Enterprise SaaS (Cloud-hosted software delivered over the web).',
        '2. Explain Multi-Tenancy (Single software instance serving multiple enterprise customers).',
        '3. Highlight Data Isolation (Shared server infrastructure with private tenant database locks).'
      ],
      exampleScript: 'Enterprise SaaS is cloud software hosted centrally and delivered over the web. Multi-tenancy means a single application instance securely serves multiple enterprise customers simultaneously. The architecture shares underlying server infrastructure while maintaining strict mathematical data isolation for every customer.',
      durationSec: 25,
      tip: 'Use the phrase: Shared cloud infrastructure with private tenant data isolation.'
    },
    onePictureSummary: ['🏬 One Cloud App Building', '↓ 🔑 Private Tenant Locks', '↓ ☁️ Web Access', '↓ Secure Multi-Tenancy']
  },
  {
    id: 'ch-3-fsm-domain',
    partId: 'part-1',
    partTitle: 'Section I: FSM & SaaS',
    chapterNumber: 3,
    title: 'Chapter 3: Financials & Supply Management (FSM) Domain',
    shortTitle: '3. FSM Domain',
    icon: '🏢',
    estimatedMinutes: 6,
    question: 'What is Financials & Supply Management (FSM) software and why do global businesses use it?',
    analogyStory: {
      title: 'The Global Store Super-Brain',
      text: 'Imagine a global company selling goods in 50 countries. Every single day, they buy raw materials from suppliers, pay factory workers, ship boxes across oceans, pay taxes in different currencies, and invoice customers. If they wrote all this down on paper, they would make huge mistakes! FSM software acts as a global super-brain that automatically tracks every dollar spent (Financials) and every product moving through warehouses (Supply Management) in real time.',
      takeaway: 'FSM software manages company money (Financials) and warehouse product movement (Supply Management).'
    },
    diagramType: 'fsm-store',
    simpleExplanation: 'Financials and Supply Management (FSM) software is an enterprise SaaS platform that automates core business operations. The Financials module tracks general accounting ledgers, customer billing invoices, supplier payments, and multi-currency global tax reporting. The Supply Management module manages raw material purchasing, warehouse inventory levels, order fulfillment, and global shipping logistics.',
    commonMistake: 'Getting lost in complicated accounting rules instead of explaining high-level SaaS features like billing, inventory, and supplier tracking.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define FSM acronym (Financials and Supply Management).',
        '2. Explain Financials side (Accounting ledgers, customer invoices, supplier payments).',
        '3. Explain Supply side (Warehouse inventory tracking, procurement, logistics).'
      ],
      exampleScript: 'FSM stands for Financials and Supply Management. It is an enterprise cloud SaaS platform that powers global business operations. The Financials module tracks accounting ledgers and customer invoices, while the Supply Management module manages warehouse inventory, procurement, and global supply chain logistics.',
      durationSec: 26,
      tip: 'Financial money tracking + Warehouse inventory supply chain.'
    },
    onePictureSummary: ['💰 Financial Invoices', '↓ 📦 Supply Warehouse', '↓ 📊 Real-time Ledger', '↓ Enterprise FSM SaaS']
  },

  // SECTION II: SOFTWARE ENGINEERING & AGILE SDLC (JIRA TICKETS - NOT IN BRAIN!)
  {
    id: 'ch-4-sdlc-phases',
    partId: 'part-2',
    partTitle: 'Section II: Software Engineering & Agile SDLC',
    chapterNumber: 4,
    title: 'Chapter 4: The 6 Phases of SDLC',
    shortTitle: '4. SDLC 6 Phases',
    icon: '🔄',
    estimatedMinutes: 7,
    question: 'What is SDLC and what are its main 6 phases?',
    analogyStory: {
      title: 'Baking a Custom Birthday Cake',
      text: 'Before baking a custom birthday cake, you don\'t just throw flour into the oven! First, you ask the customer what flavor they want (Requirements). Second, you sketch the cake design (Design). Third, you bake the cake in the oven (Coding). Fourth, you taste test the cake for safety (Testing). Fifth, you deliver the cake to the party (Deployment). Sixth, you fix any melted candles (Maintenance). SDLC is this exact step-by-step master recipe for building great software.',
      takeaway: 'SDLC guarantees software goes through planning, coding, testing, and release.'
    },
    diagramType: 'sdlc-loop',
    simpleExplanation: 'SDLC stands for Software Development Life Cycle. It is a step-by-step engineering process that ensures software is built with high quality and zero defects. The 6 phases are: 1) Requirements Analysis, 2) System Design & Architecture, 3) Implementation (Coding), 4) Software Testing & QA, 5) Production Deployment, and 6) Ongoing Maintenance.',
    commonMistake: 'Thinking coding is the first step of SDLC. Requirements gathering and system design always come first!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define SDLC as structured engineering process.',
        '2. List the 6 phases sequentially in order.',
        '3. Highlight that testing and requirements come before deployment.'
      ],
      exampleScript: 'SDLC is the structured engineering process used to deliver high-quality enterprise software. It consists of six sequential phases: Requirements Gathering, System Design, Implementation, Software Testing, Production Deployment, and Ongoing Maintenance.',
      durationSec: 25,
      tip: 'List all 6 phases clearly: Requirements -> Design -> Coding -> Testing -> Deployment -> Maintenance.'
    },
    onePictureSummary: ['📝 Requirements', '↓ 📐 Design', '↓ 💻 Coding', '↓ 🧪 Testing', '↓ 🚀 Deployment']
  },
  {
    id: 'ch-5-jira-agile-process',
    partId: 'part-2',
    partTitle: 'Section II: Software Engineering & Agile SDLC',
    chapterNumber: 5,
    title: 'Chapter 5: Agile Sprints & Jira Ticket Tracking (Not in Brain!)',
    shortTitle: '5. Jira & Sprints',
    icon: '📋',
    estimatedMinutes: 7,
    question: 'How do software teams track requirements and daily task progress in real projects?',
    analogyStory: {
      title: 'The Digital Ticket Board (Never Keep Tasks in Memory!)',
      text: 'In real software engineering, engineers NEVER track requirements or tasks "in their brain"! Instead, Business Analysts log user requirements into official digital cards called JIRA TICKETS. Every Jira ticket has an ID number (e.g. FSM-104), description, acceptance criteria, and status (To Do, In Progress, Code Review, Done). Engineers pick tickets during 2-week Agile Sprints and update status daily.',
      takeaway: 'Requirements and daily progress are tracked in Jira tickets during 2-week Agile sprints.'
    },
    diagramType: 'agile-loop',
    simpleExplanation: 'In professional software development, projects follow Agile methodology using Jira tracking tools. Requirements are broken down into User Stories and Jira Tickets. Engineers commit to user stories during 2-week Sprints, moving tickets across status boards (To Do -> In Progress -> Code Review -> QA -> Done) to provide 100% transparency.',
    commonMistake: 'Never say requirements are stored "in memory" or "in brain". Always say requirements are logged as Jira tickets by Product Managers and tracked in Agile sprints!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain Agile Sprint process (2-week time-boxed sprints).',
        '2. Mention Jira tickets (Requirements logged as User Stories in Jira).',
        '3. Explain ticket workflow (Moving tickets from To Do -> In Progress -> Review -> Done).'
      ],
      exampleScript: 'In our engineering workflow, we follow Agile Scrum methodology in 2-week sprints. Requirements are logged by Product Managers as User Stories and Jira tickets. We track daily task progress on Jira boards, moving tickets through To Do, In Progress, Code Review, and Done states.',
      durationSec: 27,
      tip: 'Emphasize Jira tickets and Agile 2-week sprint workflows.'
    },
    onePictureSummary: ['📋 Product Backlog', '↓ 🎫 Jira Tickets (FSM-104)', '↓ 🏃 2-Week Sprint', '↓ 🎯 Status Board (Done)']
  },
  {
    id: 'ch-6-scrum-meetings',
    partId: 'part-2',
    partTitle: 'Section II: Software Engineering & Agile SDLC',
    chapterNumber: 6,
    title: 'Chapter 6: Sprint Planning, Daily Stand-ups & Retrospectives',
    shortTitle: '6. Sprint Meetings',
    icon: '⏰',
    estimatedMinutes: 7,
    question: 'What happens during Sprint Planning, Daily Stand-up, and Sprint Retrospective meetings?',
    analogyStory: {
      title: 'The Football Team Game Plan',
      text: 'A professional football team does 3 things every match week. On Monday, they meet in the locker room to pick plays for the game (Sprint Planning). Every morning, they huddle for 5 minutes on the field to ask: "Did anyone get hurt? What is today\'s play?" (Daily Stand-up). On Sunday evening after the game, they watch video recordings to see what went wrong and how to play better next week (Retrospective)!',
      takeaway: 'Sprint Planning picks tasks, Daily Stand-up reviews progress, Retrospective improves the process.'
    },
    diagramType: 'agile-loop',
    simpleExplanation: 'Agile Scrum uses 3 key meetings: 1) Sprint Planning happens at the start of a sprint to pick priority tasks from the backlog. 2) Daily Stand-up is a quick 15-minute morning huddle where every engineer answers 3 questions: What did I do yesterday? What will I do today? Are there any blockers? 3) Sprint Retrospective happens at sprint end to reflect on what went well and what team processes to improve.',
    commonMistake: 'Rambling during daily stand-up for 30 minutes! Stand-ups must be crisp and under 15 minutes.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain Sprint Planning (Selecting Jira backlog items for 2-week sprint).',
        '2. Explain Daily Stand-up (15-minute huddle: Yesterday\'s work, Today\'s plan, Blockers).',
        '3. Explain Retrospective (End-of-sprint review to improve team process).'
      ],
      exampleScript: 'Sprint Planning selects backlog user stories for the upcoming 2-week sprint. Daily Stand-up is a 15-minute morning huddle where we share yesterday\'s progress, today\'s goals, and any technical blockers. Sprint Retrospective allows the team to reflect on performance and continuously improve engineering workflows.',
      durationSec: 28,
      tip: 'Stand-up 3 questions: Yesterday\'s work, Today\'s plan, Blockers.'
    },
    onePictureSummary: ['📋 Sprint Planning', '↓ ⏱️ Daily Stand-up (15m)', '↓ 🏃 2-Week Sprint', '↓ 💡 Retrospective Review']
  },

  // SECTION III: JAVA / J2EE & OBJECT-ORIENTED PRINCIPLES
  {
    id: 'ch-7-java-jvm',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 7,
    title: 'Chapter 7: What is Java & the JVM (Java Virtual Machine)?',
    shortTitle: '7. Java & JVM',
    icon: '☕',
    estimatedMinutes: 8,
    question: 'What is Java and how does the JVM achieve "Write Once, Run Anywhere"?',
    analogyStory: {
      title: 'The Universal Language Translator',
      text: 'If a famous book is written in English, people in Japan, France, and India cannot read it directly unless they have an on-the-spot translator. Java works the exact same way! When you write Java code, the compiler turns your code into a universal language called "Bytecode" (.class file). Then, a special program called the Java Virtual Machine (JVM) sits on Windows, Mac, or Linux and translates Bytecode into local machine instructions instantly!',
      takeaway: 'JVM executes Java Bytecode on any operating system without rewriting code.'
    },
    diagramType: 'jvm-coffee',
    simpleExplanation: 'Java is an object-oriented, platform-independent programming language. When Java code is compiled using `javac`, it produces platform-neutral intermediate code called Bytecode (.class file). The Java Virtual Machine (JVM) interprets and executes Bytecode on any target operating system, delivering Java\'s core promise: Write Once, Run Anywhere.',
    commonMistake: 'Confusing JVM (executes bytecode) with JDK (Java Development Kit containing compiler tools).',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Java (Object-oriented, platform-independent language).',
        '2. Explain Compilation (javac compiles source code into Bytecode).',
        '3. Explain Execution (JVM translates Bytecode to native OS machine code).'
      ],
      exampleScript: 'Java is an object-oriented, platform-independent language. The Java compiler turns source code into intermediate Bytecode. The Java Virtual Machine (JVM) interprets Bytecode into native machine instructions for Windows, Mac, or Linux, enabling Write Once, Run Anywhere.',
      durationSec: 28,
      tip: 'Bytecode + JVM = Platform Independence.'
    },
    onePictureSummary: ['📝 Java Code (.java)', '↓ ⚙️ javac Compiler', '↓ 📦 Bytecode (.class)', '↓ ☕ JVM Execution']
  },
  {
    id: 'ch-8-what-is-j2ee',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 8,
    title: 'Chapter 8: What is J2EE / Jakarta EE (Java Enterprise Edition)?',
    shortTitle: '8. What is J2EE?',
    icon: '🏢',
    estimatedMinutes: 7,
    question: 'What is J2EE (Jakarta EE) and how does it differ from standard Core Java (J2SE)?',
    analogyStory: {
      title: 'The Standard Car Engine vs The Industrial Freight Train',
      text: 'Core Java (J2SE) is like a standard car engine: it gives you basic wheels, steering, and engine parts to write simple desktop scripts. J2EE (Java Enterprise Edition) is an industrial freight train specification! It adds heavy enterprise features: web servlets, database transaction managers, security rules, and messaging queues so massive global companies can run enterprise applications 24/7.',
      takeaway: 'J2EE adds enterprise web specifications (Servlets, JPA, Transactions) on top of Core Java.'
    },
    diagramType: 'software-app',
    simpleExplanation: 'J2EE (Java 2 Enterprise Edition, now known as Jakarta EE) is a set of enterprise specifications built on top of standard Java (J2SE). It provides enterprise libraries and runtime specifications for building large-scale, multi-tiered, secure web applications. Key J2EE specifications include Servlets (web request handling), JSP, EJB, JPA (database mapping), and JMS (enterprise messaging).',
    commonMistake: 'Thinking J2EE is a completely different programming language from Java. J2EE is just Java with extra enterprise libraries.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Differentiate Core Java J2SE vs J2EE.',
        '2. Define J2EE (Enterprise specification extending Java for web applications).',
        '3. List key specs (Servlets, JPA database mapping, Transactions, Web Services).'
      ],
      exampleScript: 'Core Java (J2SE) provides foundational language features like Collections and I/O. J2EE (now Jakarta EE) is an enterprise specification built on top of Java for enterprise web applications. It defines specifications for Servlets, database transactions, security, and web services.',
      durationSec: 27,
      tip: 'Core Java = base language; J2EE = enterprise web & transaction specification.'
    },
    onePictureSummary: ['☕ Core Java (J2SE)', '↓ ➕ Enterprise Spec (J2EE)', '↓ Servlets + Transactions', '↓ Enterprise Web Application']
  },
  {
    id: 'ch-9-encapsulation',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 9,
    title: 'Chapter 9: Encapsulation & Data Hiding',
    shortTitle: '9. Encapsulation',
    icon: '📺',
    estimatedMinutes: 8,
    question: 'What is Encapsulation and how do you achieve it in Java?',
    analogyStory: {
      title: 'The TV Remote Control',
      text: 'When you change TV volume, you press the Volume Up button. You don\'t open the TV with a screwdriver to touch internal high-voltage electrical wires! The plastic remote control buttons protect internal wires from being damaged or corrupted by mistake. In Java, Encapsulation puts safe public buttons (Getters and Setters) over private variables.',
      takeaway: 'Encapsulation protects class data by making fields private and providing safe getter/setter buttons.'
    },
    diagramType: 'tv-remote',
    simpleExplanation: 'Encapsulation is the Object-Oriented Programming principle of bundling data variables and methods together inside a single class while hiding direct access to internal fields. In Java, we achieve encapsulation by declaring class variables as `private` and providing `public` getter and setter methods to control how data is read or modified safely.',
    commonMistake: 'Thinking encapsulation means hiding whole classes instead of restricting direct variable mutation.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Encapsulation (Bundling data and restricting direct field access).',
        '2. Explain Java implementation (Private fields + public getters and setters).',
        '3. State benefit (Data validation and protection against illegal modifications).'
      ],
      exampleScript: 'Encapsulation is the OOP principle of bundling data and methods inside a single class while restricting direct access to fields. In Java, we declare class variables as private and provide public getter and setter methods for safe data access and validation.',
      durationSec: 26,
      tip: 'Private variables + public getters/setters = 100% full marks.'
    },
    onePictureSummary: ['📺 TV Remote', '↓ Public Buttons (Getters/Setters)', '↓ Private Wires', '↓ Encapsulation']
  },

  // SECTION IV: DATA STRUCTURES & ALGORITHMS (DSA)
  {
    id: 'ch-10-hashmaps-collision',
    partId: 'part-4',
    partTitle: 'Section IV: DSA',
    chapterNumber: 10,
    title: 'Chapter 10: HashMaps & Hash Collision Handling (O(1) Time)',
    shortTitle: '10. HashMaps O(1)',
    icon: '📬',
    estimatedMinutes: 9,
    question: 'How does a HashMap work internally in Java and how does it handle hash collisions?',
    analogyStory: {
      title: 'Apartment Mailboxes & Shared Key Buckets',
      text: 'In an apartment building with 100 mailboxes, each mailbox has a key number like "Box 4B". When mail arrives, you calculate the key number and drop mail directly into Box 4B in O(1) instant time! If two different letters accidentally calculate the exact same Box 4B key (a Hash Collision), Java attaches a small chain envelope (LinkedList) inside Box 4B to store both letters safely.',
      takeaway: 'HashMap uses hashCode() for O(1) bucket lookups and LinkedList/Tree nodes for hash collisions.'
    },
    diagramType: 'hashmap-mail',
    simpleExplanation: 'A HashMap stores data in Key-Value pairs using an underlying array of buckets. When `put(key, value)` or `get(key)` is called, Java computes the key\'s `hashCode()` to calculate the bucket array index directly in O(1) average time. If two distinct keys produce the same bucket index (Hash Collision), Java stores them in the same bucket using a LinkedList (or a Red-Black Tree in Java 8+ when bucket size exceeds 8).',
    commonMistake: 'Saying HashMap search takes O(N) linear time like a loop. HashMap average time complexity is O(1).',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Key-Value storage and average O(1) time complexity.',
        '2. Explain hashCode() bucket index calculation.',
        '3. Explain Collision Handling (LinkedList chaining, converting to Red-Black Tree if bucket size exceeds 8).'
      ],
      exampleScript: 'A HashMap stores Key-Value pairs. It uses key.hashCode() to locate bucket array indices directly in O(1) average time. If two keys collide in the same bucket, Java handles collisions by chaining entries in a LinkedList, converting to a Red-Black Tree if bucket size exceeds 8.',
      durationSec: 28,
      tip: 'Key-Value pairs + O(1) lookup + LinkedList/Tree collision chaining.'
    },
    onePictureSummary: ['📬 Key.hashCode()', '↓ Direct Array Bucket Index', '↓ O(1) Constant Lookup', '↓ LinkedList Collision Chain']
  },

  // SECTION V: RELATIONAL & NOSQL DATABASES
  {
    id: 'ch-11-sql-joins',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 11,
    title: 'Chapter 11: SQL Joins (INNER vs LEFT JOIN)',
    shortTitle: '11. SQL Joins',
    icon: '🔗',
    estimatedMinutes: 9,
    question: 'What is the difference between INNER JOIN and LEFT JOIN in SQL?',
    analogyStory: {
      title: 'Matching Pair of Shoes',
      text: 'INNER JOIN is combining left and right shoes only when a matching pair exists! LEFT JOIN keeps ALL left shoes, even if some don\'t have a matching right shoe in the closet.',
      takeaway: 'INNER JOIN = Matching rows only. LEFT JOIN = All left rows + matching right rows.'
    },
    diagramType: 'sql-library',
    simpleExplanation: 'SQL JOIN combines rows from two tables using a common key. `INNER JOIN` returns matching records in both tables; `LEFT JOIN` returns all records from the left table plus matched records from the right table.',
    commonMistake: 'Confusing LEFT JOIN with FULL OUTER JOIN.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define INNER JOIN (Returns only records with matching keys in both tables).',
        '2. Define LEFT JOIN (Returns all records from left table + matched right records).',
        '3. Mention NULL handling (Unmatched right columns return NULL).'
      ],
      exampleScript: 'An INNER JOIN combines records from two tables only where the join condition matches in both tables. A LEFT JOIN returns all records from the left table and matched records from the right table, filling non-matching right columns with NULL.',
      durationSec: 27,
      tip: 'Matching rows only (INNER) vs All left rows (LEFT).'
    },
    onePictureSummary: ['👟 Left Table', '↓ 👟 Right Table', '↓ INNER JOIN (Matches)', '↓ LEFT JOIN (All Left)']
  },

  // SECTION VI: BACKEND FRAMEWORKS & WEB SERVICES
  {
    id: 'ch-12-spring-boot',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 12,
    title: 'Chapter 12: Spring Boot & 3-Tier Architecture',
    shortTitle: '12. Spring Boot',
    icon: '🔌',
    estimatedMinutes: 9,
    question: 'What is Spring Boot and why do we use 3-tier architecture (@RestController, @Service, @Repository)?',
    analogyStory: {
      title: 'The 3-Worker Kitchen Assembly Line',
      text: 'In Spring Boot: `@RestController` is reception taking customer orders. `@Service` is chef executing business recipes. `@Repository` is pantry worker fetching ingredients from database cabinet.',
      takeaway: 'Controller handles HTTP -> Service handles logic -> Repository handles DB access.'
    },
    diagramType: 'spring-factory',
    simpleExplanation: 'Spring Boot is a Java framework that simplifies building microservices with auto-configuration. 3-tier architecture separates concerns cleanly into Controller, Service, and Repository layers.',
    commonMistake: 'Writing database SQL queries directly inside `@RestController`. Keep DB logic in `@Repository`!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Spring Boot (Java framework for building standalone microservices quickly).',
        '2. Explain 3-Tier Architecture (@RestController -> @Service -> @Repository).',
        '3. Highlight Separation of Concerns (HTTP mapping vs Business logic vs Database access).'
      ],
      exampleScript: 'Spring Boot is a Java framework used to build production-ready web services quickly. We use 3-tier architecture to separate concerns cleanly: RestController manages HTTP endpoints, Service layer handles business logic, and Repository layer interacts with the database.',
      durationSec: 27,
      tip: 'Explain Controller -> Service -> Repository flow.'
    },
    onePictureSummary: ['🌐 RestController', '↓ 🧠 Service Logic', '↓ 🛢️ Repository DB', '↓ 🔌 Spring Boot']
  },

  // SECTION VII: AI TOOLS & UNIT TESTING EVIDENCES (HONEST AI USAGE + UNIT TEST LOGS)
  {
    id: 'ch-13-unit-test-evidences',
    partId: 'part-7',
    partTitle: 'Section VII: AI & Unit Testing',
    chapterNumber: 13,
    title: 'Chapter 13: Unit Testing & Capturing Test Evidences',
    shortTitle: '13. Unit Test Logs',
    icon: '🧪',
    estimatedMinutes: 7,
    question: 'Why is Unit Testing important and how do you capture test evidences before code release?',
    analogyStory: {
      title: 'The Flight Safety Inspection Log',
      text: 'Before an airplane takes off, engineers don\'t just hope the wings work! They perform mandatory safety checks and sign an official inspection log. Unit testing (using JUnit and Mockito) tests individual methods in isolation. Capturing test evidences (execution logs and pass screenshots) proves to senior leads that your code is 100% safe before merging.',
      takeaway: 'Unit testing verifies code logic; test evidences provide proof of quality.'
    },
    diagramType: 'ai-copilot',
    simpleExplanation: 'Unit testing verifies individual methods or components in isolation using frameworks like JUnit 5 and Mockito. Senior engineers expect developers to capture test evidences (execution logs, test coverage reports, and passing assertion logs) to prove code stability before opening Pull Requests.',
    commonMistake: 'Pushing code to QA without running unit tests or capturing test execution logs.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Unit Testing (Testing individual methods in isolation with JUnit).',
        '2. Explain Test Evidences (Capturing execution logs and pass reports).',
        '3. Highlight Quality Benefit (Preventing regressions before QA deployment).'
      ],
      exampleScript: 'I write unit tests using JUnit 5 and Mockito to test individual methods in isolation. Before creating a Pull Request, I capture test evidences—such as execution logs and test pass reports—to verify that my code handles edge cases and prevents regressions.',
      durationSec: 26,
      tip: 'JUnit unit testing + capturing test logs/evidences.'
    },
    onePictureSummary: ['🧪 JUnit 5 Unit Tests', '↓ 📸 Capture Test Evidences', '↓ 🔍 Peer PR Review', '↓ 0 Regression Release']
  },
  {
    id: 'ch-14-honest-ai-usage',
    partId: 'part-7',
    partTitle: 'Section VII: AI & Unit Testing',
    chapterNumber: 14,
    title: 'Chapter 14: Honest AI Usage in Development Workflows',
    shortTitle: '14. Honest AI Usage',
    icon: '🤖',
    estimatedMinutes: 7,
    question: 'How do you leverage AI tools like GitHub Copilot in your daily development workflow?',
    analogyStory: {
      title: 'The Smart Copilot Assistant (You are the Pilot!)',
      text: 'In a commercial airplane, the autopilot helps keep altitude smoothly, but human pilots fly the aircraft and make all landing decisions! In software development, you write and understand the code yourself, but use GitHub Copilot to autocomplete boilerplate methods and draft test cases fast.',
      takeaway: 'Write code yourself; use AI tools to assist and accelerate workflow.'
    },
    diagramType: 'ai-copilot',
    simpleExplanation: 'Modern enterprise developers use AI assistants (like GitHub Copilot and ChatGPT) to accelerate SDLC productivity. When interviewers ask about AI usage, state clearly: "I write and understand the code logic myself, but I leverage AI tools to assist with boilerplate completion, prompt engineering for debugging, and drafting unit test cases."',
    commonMistake: 'Never pretend you don\'t use AI tools, but NEVER copy AI code blindly without understanding every line.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. State your personal code ownership (I write and understand the core logic myself).',
        '2. Explain AI assistance (Using AI for boilerplate completion and test case drafts).',
        '3. Highlight productivity gains (Accelerating debugging and documentation).'
      ],
      exampleScript: 'I write and understand all code logic myself. However, I actively leverage AI tools like GitHub Copilot to assist with autocompleting boilerplate code, generating unit test templates, and analyzing complex error stack traces during debugging.',
      durationSec: 27,
      tip: 'State clearly: "I write code myself, but leverage AI to accelerate development."'
    },
    onePictureSummary: ['💻 Write Code Myself', '↓ 🤖 AI Assistant (Copilot)', '↓ ⚡ Faster Boilerplate', '↓ 100% Code Quality']
  },

  // SECTION VIII: DEVOPS & CLOUD INFRASTRUCTURE
  {
    id: 'ch-15-git-pull-req',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 15,
    title: 'Chapter 15: Git Version Control & Pull Requests',
    shortTitle: '15. Git Workflows',
    icon: '🌿',
    estimatedMinutes: 8,
    question: 'What is your Git workflow when developing a new feature with a global team?',
    analogyStory: {
      title: 'The Time-Machine Notebook',
      text: 'Git is a time-machine notebook. You pull latest main code, branch off (`git checkout -b feature`), write code, snapshot (`git commit`), and submit a Pull Request (PR) for team members to review before merging to main!',
      takeaway: 'Pull Requests ensure team code review before merging changes.'
    },
    diagramType: 'git-docs',
    simpleExplanation: 'In Git, developers create isolated feature branches from main (`git checkout -b`), commit incremental changes (`git commit -m`), push to remote repositories (`git push`), and open Pull Requests for peer code review before merging.',
    commonMistake: 'Committing code directly to production main branch without PR review.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain branching (Pulling main and creating feature branch git checkout -b).',
        '2. Explain commits (Incremental atomic commits with clear messages).',
        '3. Explain Pull Requests (Opening PR for peer review and CI/CD validation).'
      ],
      exampleScript: 'My Git workflow starts by pulling the latest main branch, creating a feature branch with git checkout -b, committing incremental atomic changes, pushing remote, and opening a Pull Request for code review before merging.',
      durationSec: 27,
      tip: 'Feature branching + Pull Request peer review.'
    },
    onePictureSummary: ['🌿 Feature Branch', '↓ 📸 Commit Snapshot', '↓ 🔍 Pull Request Review', '↓ 🔀 Merge to Main']
  },

  // SECTION IX: RESUME STORIES & BEHAVIORAL HR (INFOR EXPERIENCE + POLLARIS + SELF INTRO)
  {
    id: 'ch-16-infor-experience',
    partId: 'part-9',
    partTitle: 'Section IX: Resume & HR',
    chapterNumber: 16,
    title: 'Chapter 16: Renuka\'s Infor Experience (Enterprise AI Internship)',
    shortTitle: '16. Infor Internship',
    icon: '🏢',
    estimatedMinutes: 7,
    question: 'Tell me about your 4-month experience at Infor and the projects you worked on.',
    analogyStory: {
      title: 'The Enterprise AI Inventory Predictor',
      text: 'During her 4-month internship at Infor, Renuka worked on enterprise AI workflows. She built an AI Chatbot using GPT-4 and integrated AWS DeepAR time-series forecasting to predict inventory demand, helping enterprise customers avoid stocking out of products!',
      takeaway: '4-month Infor internship focusing on AWS DeepAR demand forecasting & GPT-4 chatbot integration.'
    },
    diagramType: 'resume-story',
    simpleExplanation: 'At Infor, Renuka gained hands-on experience in enterprise AI applications. She contributed to an AI-powered conversational chatbot using GPT-4 and worked with AWS DeepAR forecasting models to analyze supply chain demand patterns.',
    commonMistake: 'Forgetting to mention the technical tools used (AWS DeepAR, GPT-4, enterprise cloud integration).',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. State company and duration (4-month internship at Infor).',
        '2. Mention project focus (Enterprise AI tools, GPT-4 chatbot, AWS DeepAR forecasting).',
        '3. Conclude with impact (Gaining hands-on experience in enterprise SaaS workflows).'
      ],
      exampleScript: 'During my 4-month internship at Infor, I worked on enterprise AI capabilities. I contributed to an AI conversational chatbot using GPT-4 and worked with AWS DeepAR time-series models for inventory demand forecasting, gaining practical experience in enterprise cloud workflows.',
      durationSec: 28,
      tip: 'Highlight 4-month Infor internship + AWS DeepAR & GPT-4 AI tools.'
    },
    onePictureSummary: ['🏢 Infor 4-Month Internship', '↓ 🤖 GPT-4 AI Chatbot', '↓ 📊 AWS DeepAR Forecasting', '↓ Enterprise SaaS Skills']
  },
  {
    id: 'ch-17-pollaris-story',
    partId: 'part-9',
    partTitle: 'Section IX: Resume & HR',
    chapterNumber: 17,
    title: 'Chapter 17: Pollaris Voting App (Firestore ACID Transactions)',
    shortTitle: '17. Pollaris Project',
    icon: '🗳️',
    estimatedMinutes: 8,
    question: 'Can you explain your project Pollaris and the technical challenges you solved?',
    analogyStory: {
      title: 'The Single-Slot Vote Box',
      text: 'When 100 people try to drop a vote into a box at the exact same millisecond, votes collide. Pollaris used Firestore ACID transactions to lock the vote box safely, guaranteeing 100% one-vote-per-user integrity without duplicate votes!',
      takeaway: 'Used Firestore ACID Transactions to eliminate vote concurrency race conditions.'
    },
    diagramType: 'resume-story',
    simpleExplanation: 'Pollaris is an enterprise polling platform built with Next.js 16 and Firebase Firestore. We used Firestore ACID transactions to eliminate race conditions during concurrent voting.',
    commonMistake: 'Reciting scary HR resume buzzwords without explaining the core technical problem.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. State project stack (Next.js 16 + Firebase Firestore).',
        '2. State technical challenge (Preventing duplicate votes during concurrent high-traffic voting).',
        '3. State solution (Using Firestore ACID transactions for 100% data integrity).'
      ],
      exampleScript: 'Pollaris is a cloud-native polling platform built with Next.js 16 and Firebase Firestore. The main technical challenge was preventing race conditions when multiple users voted simultaneously. I solved this using Firestore ACID transactions to enforce one-vote-per-user constraint, ensuring 100% data integrity.',
      durationSec: 30,
      tip: 'Problem (concurrent vote race conditions) -> Solution (Firestore ACID transactions).'
    },
    onePictureSummary: ['🗳️ Pollaris Voting App', '↓ Next.js + Firestore', '↓ ACID Transactions', '↓ 100% Vote Integrity']
  },
  {
    id: 'ch-18-renuka-self-intro',
    partId: 'part-9',
    partTitle: 'Section IX: Resume & HR',
    chapterNumber: 18,
    title: 'Chapter 18: Renuka\'s Master Self-Introduction',
    shortTitle: '18. Self Introduction',
    icon: '🗣️',
    estimatedMinutes: 5,
    question: 'Tell me about yourself and your background.',
    analogyStory: {
      title: 'The 45-Second Technical Elevator Pitch',
      text: 'You enter an elevator with the Hiring Manager. State 4 clear facts before floor 5: 1) ECE degree from JNTU, 2) Core hands-on skills (Java, SQL, REST APIs, Spring Boot), 3) Infor 4-month internship & Pollaris project, 4) Enthusiasm for joining the FSM team.',
      takeaway: 'Structure: Background (JNTU ECE) ➔ Tech Stack ➔ Infor/Pollaris Projects ➔ FSM Role Enthusiasm.'
    },
    diagramType: 'star-hr',
    simpleExplanation: 'Keep your self-introduction under 45 seconds. State your name, B.Tech ECE degree from JNTU, core technical stack (Java, SQL, REST APIs, Cloud, AI), 4-month Infor internship experience, and enthusiasm for the Associate Software Engineer FSM role.',
    commonMistake: 'Talking about high school marks instead of core technical skills and projects.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Greeting & Education (Hello, I am Renuka. B.Tech ECE graduate from JNTU).',
        '2. Technical Stack (Passionate about Java, SQL, REST APIs, and AI tools).',
        '3. Practical Experience (4-month Infor internship working on enterprise AI & Pollaris project).',
        '4. Role Enthusiasm (Excited to join the FSM team to build scalable SaaS applications).'
      ],
      exampleScript: 'Hello, thank you for this opportunity. I am Renuka. I completed my B.Tech in Electronics and Communication Engineering from JNTU. I am passionate about software development and enterprise SaaS solutions. My core technical skills include Java, SQL, REST APIs, and Spring Boot. I completed a 4-month internship at Infor working on enterprise AI tools, and built cloud projects like Pollaris. I am eager to join the FSM product engineering team to build scalable enterprise solutions.',
      durationSec: 38,
      tip: 'Keep it crisp, technical, structured, and under 40 seconds.'
    },
    onePictureSummary: ['🎓 JNTU ECE Degree', '↓ Java, SQL, REST APIs', '↓ Infor 4-Month Internship', '↓ Ready for FSM Team']
  }
];
