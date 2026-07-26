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
  { id: 'part-1', partNumber: 1, title: 'Section I: FSM & Enterprise SaaS Domain', description: 'FSM Associate Role, Enterprise SaaS, Multi-Tenancy, ERP Systems', icon: '🏢' },
  { id: 'part-2', partNumber: 2, title: 'Section II: Software Engineering & Agile SDLC', description: 'SDLC 6 Phases, Scrum vs Kanban, Jira Tickets (Not in Brain!), Sprint Meetings, PM/QA/UX Teamwork', icon: '🏃' },
  { id: 'part-3', partNumber: 3, title: 'Section III: Java / J2EE & Object-Oriented Principles', description: 'Java, JVM, What is J2EE?, Maven, Classes, Encapsulation, Inheritance, Polymorphism, Abstraction', icon: '☕' },
  { id: 'part-4', partNumber: 4, title: 'Section IV: Data Structures & Algorithms (DSA)', description: 'Arrays, Stacks, Queues, HashMaps, Hash Collision Handling, O(1) Complexity', icon: '🧱' },
  { id: 'part-5', partNumber: 5, title: 'Section V: Relational & NoSQL Databases', description: 'Oracle DB, SQL Server, Primary/Foreign Keys, SQL Joins, NoSQL Firestore', icon: '🔗' },
  { id: 'part-6', partNumber: 6, title: 'Section VI: Backend Frameworks & Web Services', description: 'SOAP vs REST APIs, HTTP Verbs, Spring Boot 3-Tier, Spring Data JPA, Spring Security, Postman', icon: '🍽️' },
  { id: 'part-7', partNumber: 7, title: 'Section VII: AI Tools & Unit Testing Evidences', description: 'GitHub Copilot, Prompt Engineering, Honest AI Usage, Unit Testing Logs & Evidence', icon: '🤖' },
  { id: 'part-8', partNumber: 8, title: 'Section VIII: DevOps, Containers & Cloud Infrastructure', description: 'Git PR Workflows, Docker, Kubernetes, CI/CD Pipelines, AWS/Azure/GCP Cloud', icon: '📦' },
  { id: 'part-9', partNumber: 9, title: 'Section IX: System Design & Architectural Principles (JD Core)', description: 'SOLID Design Principles, LLD vs HLD, Microservices Architecture, Caching, Architectural Discussions', icon: '📐' },
  { id: 'part-10', partNumber: 10, title: 'Section X: Resume Stories (Infor & Pollaris) & HR', description: 'Infor 4-Month Internship Story, Pollaris Voting App, Self Introduction, STAR Method', icon: '🗣️' },
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

  // SECTION II: SOFTWARE ENGINEERING & AGILE SDLC
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
    title: 'Chapter 6: Sprint Meetings & Cross-Functional Teamwork',
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
    title: 'Chapter 8: What is J2EE / Jakarta EE & Maven Build Tools?',
    shortTitle: '8. J2EE & Maven',
    icon: '🏢',
    estimatedMinutes: 7,
    question: 'What is J2EE (Jakarta EE) and how does Maven automate Java project dependencies?',
    analogyStory: {
      title: 'The Industrial Train & Automated Grocery Delivery Bot',
      text: 'Core Java (J2SE) is a standard car engine. J2EE is an industrial freight train specification adding servlets, database transactions, and security rules! Maven reads your shopping list (`pom.xml`) and automatically downloads external J2EE library JARs from central repositories.',
      takeaway: 'J2EE adds enterprise web specifications; Maven automates library downloading and builds.'
    },
    diagramType: 'software-app',
    simpleExplanation: 'J2EE (now Jakarta EE) is a set of enterprise specifications (Servlets, JPA, Transactions) extending Core Java to build enterprise web applications. Maven is a build tool that manages project dependencies by downloading required `.jar` libraries via `pom.xml` and packaging executable JAR/WAR files.',
    commonMistake: 'Manually downloading `.jar` files and pasting them into folders instead of declaring dependencies in `pom.xml`.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define J2EE (Enterprise specification extending Core Java for web apps).',
        '2. Explain Maven role (Managing dependencies via pom.xml and automating builds).',
        '3. Highlight packaging (Building deployable JAR or WAR artifacts).'
      ],
      exampleScript: 'J2EE is an enterprise specification extending Core Java with Servlets, JPA, and database transaction managers. Maven automates dependency management by downloading required JAR libraries via pom.xml and packaging code into deployable JAR artifacts.',
      durationSec: 27,
      tip: 'J2EE = enterprise specs; Maven = dependency pom.xml automation.'
    },
    onePictureSummary: ['☕ Core Java (J2SE)', '↓ ➕ J2EE Enterprise Spec', '↓ 📋 pom.xml Maven Download', '↓ 📦 Executable JAR']
  },
  {
    id: 'ch-9-classes-objects',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 9,
    title: 'Chapter 9: Classes, Objects & Memory Allocation',
    shortTitle: '9. Classes & Objects',
    icon: '🍪',
    estimatedMinutes: 8,
    question: 'What is a Class and an Object in Java, and where are they stored in memory?',
    analogyStory: {
      title: 'The Metal Cookie Cutter',
      text: 'A CLASS is a metal cookie cutter shape. An OBJECT is the real chocolate cookie stamped out in memory! You can stamp out 100 cookies (objects) from one cutter (class). The cookie cutter lives in code blueprint storage, but every real chocolate cookie takes up physical space on the kitchen counter (Heap Memory).',
      takeaway: 'Class is the blueprint; Object is the real instance created in heap memory.'
    },
    diagramType: 'cookie-class',
    simpleExplanation: 'A Class is a blueprint or template defining properties (fields) and behaviors (methods). An Object is a specific instance of a class instantiated in Heap Memory using the `new` keyword. Stack Memory stores local variables and object reference pointers, while Heap Memory stores the actual object data.',
    commonMistake: 'Thinking a class takes up heap memory before the `new` keyword is executed.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Class (Blueprint or template defining fields and methods).',
        '2. Define Object (Instance created in Heap Memory via new keyword).',
        '3. Explain memory storage (Stack stores references; Heap stores actual object data).'
      ],
      exampleScript: 'A Class is a blueprint that defines properties and behaviors. An Object is an actual instance created in heap memory using the new keyword. Local variable references are stored on the Stack, pointing to objects on the Heap.',
      durationSec: 26,
      tip: 'Class = Blueprint; Object = Heap Memory Instance.'
    },
    onePictureSummary: ['📐 Class Blueprint', '↓ new Keyword', '↓ 🍪 Heap Object', '↓ Executable Instance']
  },
  {
    id: 'ch-10-encapsulation',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 10,
    title: 'Chapter 10: Encapsulation & Data Hiding',
    shortTitle: '10. Encapsulation',
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
  {
    id: 'ch-11-inheritance',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 11,
    title: 'Chapter 11: Inheritance & Code Reusability',
    shortTitle: '11. Inheritance',
    icon: '🧬',
    estimatedMinutes: 8,
    question: 'What is Inheritance and how is it implemented in Java?',
    analogyStory: {
      title: 'Parent & Child Attributes',
      text: 'A child inherits eye color, height, and last name from their parents automatically, but the child can also learn new skills like playing guitar! In Java, a Child Class inherits fields and methods from a Parent Class using the `extends` keyword, saving you from rewriting identical code twice.',
      takeaway: 'Inheritance allows child classes to reuse parent code and add new features.'
    },
    diagramType: 'family-inherit',
    simpleExplanation: 'Inheritance is an OOP mechanism where a subclass (child class) inherits attributes and methods from a superclass (parent class) using the `extends` keyword. It promotes code reusability and establishes an IS-A relationship (for example: a `Dog` IS-A `Animal`).',
    commonMistake: 'Thinking Java supports multiple inheritance with classes (Java supports single class inheritance, multiple interface implementation).',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Inheritance (Subclass inheriting fields and methods from superclass).',
        '2. State keyword (Using extends keyword).',
        '3. State relationship (Establishes IS-A relationship for code reusability).'
      ],
      exampleScript: 'Inheritance is an OOP concept where a subclass inherits properties and methods from a superclass using the extends keyword. It promotes code reusability and establishes an IS-A relationship between classes.',
      durationSec: 25,
      tip: 'Mention extends keyword and IS-A relationship.'
    },
    onePictureSummary: ['👨‍👩‍👧 Parent Class (Superclass)', '↓ extends Keyword', '↓ 👧 Child Class (Subclass)', '↓ Code Reuse']
  },
  {
    id: 'ch-12-polymorphism',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 12,
    title: 'Chapter 12: Polymorphism (Overloading vs Overriding)',
    shortTitle: '12. Polymorphism',
    icon: '🎭',
    estimatedMinutes: 9,
    question: 'What is Polymorphism and what is the difference between Overloading and Overriding?',
    analogyStory: {
      title: 'The Actor on Stage',
      text: 'An actor plays a hero in an action movie, a comedian in a show, and a father at home. Same single actor, but completely different behavior depending on the situation! In Java, Polymorphism ("many forms") allows a single method name to behave differently depending on parameter arguments or child class definitions.',
      takeaway: 'Overloading = Same class (compile-time). Overriding = Subclass (runtime).'
    },
    diagramType: 'actor-poly',
    simpleExplanation: 'Polymorphism means "many forms". Method Overloading occurs within the SAME class when methods share the same name but have different parameter lists (compile-time polymorphism). Method Overriding occurs when a SUBCLASS redefines a method inherited from its superclass with the exact same name and signature (runtime polymorphism).',
    commonMistake: 'Thinking Method Overloading happens between parent and child classes. Overloading is inside the SAME class!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Polymorphism (One method taking many forms).',
        '2. Explain Overloading (Compile-time inside SAME class with different parameters).',
        '3. Explain Overriding (Runtime inside SUBCLASS with @Override annotation).'
      ],
      exampleScript: 'Polymorphism allows one method name to take multiple forms. Method Overloading occurs within the same class with different parameter signatures at compile time. Method Overriding occurs when a subclass redefines a parent class method at runtime.',
      durationSec: 28,
      tip: 'Compile-time (Overloading) vs Runtime (Overriding) distinction is key.'
    },
    onePictureSummary: ['🎭 Polymorphism', '↓ Overloading (Same Class)', '↓ Overriding (Subclass)', '↓ Flexible Behavior']
  },
  {
    id: 'ch-13-abstraction',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 13,
    title: 'Chapter 13: Abstraction (Abstract Classes vs Interfaces)',
    shortTitle: '13. Abstraction',
    icon: '🚗',
    estimatedMinutes: 9,
    question: 'What is Abstraction and how does an Abstract Class differ from an Interface?',
    analogyStory: {
      title: 'The Car Steering Wheel',
      text: 'When driving a car, you turn the steering wheel to go left or right. You don\'t need to know how high-pressure power steering fluid flows inside the engine pipes! Abstraction shows essential user controls while hiding internal mechanical complexity.',
      takeaway: 'Interface = 100% abstract contract. Abstract Class = Partial contract with shared code.'
    },
    diagramType: 'car-abstract',
    simpleExplanation: 'Abstraction is the OOP principle of hiding internal implementation details and exposing only essential functionality. In Java, we achieve abstraction using Abstract Classes (which can contain both abstract methods and concrete implemented methods) and Interfaces (which define 100% abstract contracts that implementing classes must fulfill).',
    commonMistake: 'Confusing Abstraction (hiding implementation complexity) with Encapsulation (hiding data variables behind getters/setters).',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Abstraction (Hiding internal implementation details).',
        '2. Explain Abstract Class (Partial implementation allowing state).',
        '3. Explain Interface (100% abstract contract definition).'
      ],
      exampleScript: 'Abstraction hides internal implementation details and shows only essential features. In Java, we use Abstract Classes for partial implementation and Interfaces for 100% contract specification.',
      durationSec: 26,
      tip: 'Abstraction hides complexity; Encapsulation protects data.'
    },
    onePictureSummary: ['🚗 Car Steering Wheel', '↓ Essential Controls', '↓ Hidden Engine Complexity', '↓ Abstraction']
  },

  // SECTION IV: DATA STRUCTURES & ALGORITHMS (DSA)
  {
    id: 'ch-14-arrays',
    partId: 'part-4',
    partTitle: 'Section IV: DSA',
    chapterNumber: 14,
    title: 'Chapter 14: Arrays & Memory Contiguity',
    shortTitle: '14. Arrays',
    icon: '📦',
    estimatedMinutes: 7,
    question: 'What is an Array and what are its advantages and limitations?',
    analogyStory: {
      title: 'The Row of Hotel Rooms',
      text: 'An Array is like a row of 10 numbered hotel rooms side by side. If you know room index 4, you can walk straight to room 4 instantly in O(1) time! But you cannot expand the hotel row dynamically once built.',
      takeaway: 'Array provides O(1) index access but has fixed size.'
    },
    diagramType: 'array-lockers',
    simpleExplanation: 'An Array is a contiguous block of memory storing elements of the same data type. Elements are accessed via 0-based index numbers in O(1) time.',
    commonMistake: 'Trying to resize a standard Java array dynamically without using ArrayList.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Array (Linear contiguous memory data structure).',
        '2. Mention O(1) index access advantage.',
        '3. State fixed-size limitation.'
      ],
      exampleScript: 'An Array is a linear data structure storing fixed-size elements of the same data type in contiguous memory locations. It provides fast O(1) index access but has a fixed size determined at creation.',
      durationSec: 25,
      tip: 'Contiguous memory + O(1) index access.'
    },
    onePictureSummary: ['🏨 Hotel Room Row', '↓ Contiguous Memory', '↓ O(1) Index Access', '↓ Fixed Size']
  },
  {
    id: 'ch-15-stack-queue',
    partId: 'part-4',
    partTitle: 'Section IV: DSA',
    chapterNumber: 15,
    title: 'Chapter 15: Stacks & Queues (LIFO vs FIFO)',
    shortTitle: '15. Stack & Queue',
    icon: '🧱',
    estimatedMinutes: 8,
    question: 'What is the difference between a Stack and a Queue?',
    analogyStory: {
      title: 'Plate Stack & Movie Ticket Line',
      text: 'A STACK is plates stacked at a buffet: the last plate put on top is the first taken (LIFO). A QUEUE is standing in line for tickets: the first person in line gets tickets first (FIFO).',
      takeaway: 'Stack = LIFO (push/pop). Queue = FIFO (enqueue/dequeue).'
    },
    diagramType: 'stack-plates',
    simpleExplanation: 'Stack follows LIFO (Last In First Out) using `push` and `pop`. Queue follows FIFO (First In First Out) using `enqueue` and `dequeue`.',
    commonMistake: 'Mixing up push/pop with enqueue/dequeue.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Stack (LIFO: Last In First Out via push and pop).',
        '2. Define Queue (FIFO: First In First Out via enqueue and dequeue).',
        '3. Give real example (Stack = browser back button; Queue = ticket line).'
      ],
      exampleScript: 'A Stack follows Last-In, First-Out principle (LIFO) where elements are added and removed from the top using push and pop. A Queue follows First-In, First-Out principle (FIFO) where elements enter at the rear and exit from the front.',
      durationSec: 25,
      tip: 'LIFO vs FIFO is the fundamental difference.'
    },
    onePictureSummary: ['🍽️ Plate Stack (LIFO)', '↓ Push / Pop', '🚶 Ticket Line (FIFO)', '↓ Enqueue / Dequeue']
  },
  {
    id: 'ch-16-hashmaps-collision',
    partId: 'part-4',
    partTitle: 'Section IV: DSA',
    chapterNumber: 16,
    title: 'Chapter 16: HashMaps & Hash Collision Handling (O(1) Time)',
    shortTitle: '16. HashMaps O(1)',
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
    id: 'ch-17-oracle-sqlserver',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 17,
    title: 'Chapter 17: Relational DBs (Oracle & Microsoft SQL Server)',
    shortTitle: '17. Oracle & SQL Server',
    icon: '🔑',
    estimatedMinutes: 8,
    question: 'What is a Relational Database (RDBMS) like Oracle or SQL Server?',
    analogyStory: {
      title: 'The Organized Library File Cabinet',
      text: 'An RDBMS like Oracle or SQL Server is an organized library file cabinet. Every file folder is a table with strict columns (Book Title, Author, Year). Every single book is a row with a unique sticker badge (Primary Key).',
      takeaway: 'RDBMS stores structured data in tables with fixed columns and primary key relationships.'
    },
    diagramType: 'sql-library',
    simpleExplanation: 'Relational Database Management Systems (RDBMS) like Oracle Database and Microsoft SQL Server store data in structured tables consisting of rows and columns. They enforce data integrity, schema consistency, and ACID transactions (Atomicity, Consistency, Isolation, Durability).',
    commonMistake: 'Thinking relational databases allow saving arbitrary unstructured JSON without table schemas.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define RDBMS (Oracle/SQL Server storing data in structured tables).',
        '2. Explain Relational Integrity (Primary Key to Foreign Key relationships).',
        '3. State transaction guarantee (ACID properties for financial safety).'
      ],
      exampleScript: 'Relational databases like Oracle and SQL Server store structured enterprise data in tables with predefined schemas. They enforce relational integrity using Primary and Foreign Keys, and guarantee ACID properties for financial transactions.',
      durationSec: 26,
      tip: 'Structured tables + Primary/Foreign Keys + ACID transactions.'
    },
    onePictureSummary: ['📊 Structured SQL Tables', '↓ 🔑 Primary & Foreign Keys', '↓ 🛡️ ACID Transactions', '↓ Enterprise Oracle/SQL Server']
  },
  {
    id: 'ch-18-sql-joins',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 18,
    title: 'Chapter 18: SQL Joins (INNER vs LEFT JOIN)',
    shortTitle: '18. SQL Joins',
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
  {
    id: 'ch-19-nosql-firestore',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 19,
    title: 'Chapter 19: NoSQL Databases & Document Storage (Firestore)',
    shortTitle: '19. NoSQL Databases',
    icon: '🗂️',
    estimatedMinutes: 7,
    question: 'How do NoSQL databases differ from SQL relational databases?',
    analogyStory: {
      title: 'The Flexible Document Folder Drawer',
      text: 'A SQL database is like a strict Excel table where every row must fit fixed columns. A NoSQL database (like Google Cloud Firestore or MongoDB) is like a drawer of JSON document folders where each document can hold different fields without table schema locks.',
      takeaway: 'SQL = Fixed relational tables. NoSQL = Flexible JSON document collections.'
    },
    diagramType: 'sql-library',
    simpleExplanation: 'NoSQL databases store unstructured or semi-structured data as JSON documents or Key-Value pairs without fixed table schemas, allowing horizontal scaling and flexible schema iterations.',
    commonMistake: 'Thinking NoSQL is always better than SQL. SQL is preferred for complex relational financial data.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Differentiate SQL (Rigid tables with fixed schemas).',
        '2. Differentiate NoSQL (Flexible JSON documents without table schemas).',
        '3. State benefit (Schema flexibility and horizontal scaling for cloud apps).'
      ],
      exampleScript: 'SQL databases use rigid tables with predefined schemas and ACID transactions for relational data. NoSQL databases store flexible JSON documents, providing schema agility and easy horizontal scaling for modern cloud applications.',
      durationSec: 26,
      tip: 'Fixed schema tables (SQL) vs Flexible JSON documents (NoSQL).'
    },
    onePictureSummary: ['📊 SQL Rigid Tables', '↓ 🗂️ NoSQL JSON Documents', '↓ Schema Flexibility', '↓ Horizontal Scaling']
  },

  // SECTION VI: BACKEND FRAMEWORKS & WEB SERVICES
  {
    id: 'ch-20-soap-vs-rest',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 20,
    title: 'Chapter 20: Web Services: SOAP vs REST APIs',
    shortTitle: '20. SOAP vs REST',
    icon: '🌐',
    estimatedMinutes: 7,
    question: 'What is a Web Service and what is the difference between SOAP and REST APIs?',
    analogyStory: {
      title: 'The Heavy Certified Letter vs The Quick Text Message',
      text: 'SOAP is like sending a heavy certified letter sealed in a strict wax envelope (XML format only) with strict legal protocols. REST is like sending a quick text message (JSON format over HTTP). REST is fast, lightweight, and easy to read.',
      takeaway: 'SOAP uses strict XML envelopes; REST uses lightweight JSON payloads over HTTP.'
    },
    diagramType: 'rest-waiter',
    simpleExplanation: 'Web Services allow applications to communicate over networks. SOAP (Simple Object Access Protocol) is a strict protocol using XML messaging. REST (Representational State Transfer) is a lightweight architectural style using JSON over standard HTTP methods.',
    commonMistake: 'Thinking SOAP and REST are programming languages. They are communication standards.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Web Service (Network communication between applications).',
        '2. Explain SOAP (Strict protocol using XML format).',
        '3. Explain REST (Lightweight architectural style using JSON over HTTP).'
      ],
      exampleScript: 'SOAP is a strict protocol relying on XML format and strict contracts. REST is a lightweight architectural style using standard HTTP methods and JSON payloads, making it faster and preferred for modern web APIs.',
      durationSec: 26,
      tip: 'SOAP = XML protocol; REST = JSON HTTP architectural style.'
    },
    onePictureSummary: ['✉️ SOAP Wax Envelope (XML)', '↓ 📱 REST Text Message (JSON)', '↓ HTTP Transport', '↓ Modern Web API']
  },
  {
    id: 'ch-21-http-methods',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 21,
    title: 'Chapter 21: HTTP Methods & Status Codes',
    shortTitle: '21. HTTP Methods',
    icon: '🍽️',
    estimatedMinutes: 8,
    question: 'What are common HTTP methods (GET, POST, PUT, DELETE) and status codes (200, 201, 404, 500)?',
    analogyStory: {
      title: 'The Library Counter Operations',
      text: 'GET is reading a book (Fetch). POST is registering a new library card (Create). PUT is updating your home address on the card (Update). DELETE is canceling your card (Remove). 200 OK means success; 404 Not Found means book isn\'t on the shelf!',
      takeaway: 'GET = Read, POST = Create, PUT = Update, DELETE = Remove.'
    },
    diagramType: 'rest-waiter',
    simpleExplanation: 'REST APIs use standard HTTP verbs: `GET` (retrieve data), `POST` (create data), `PUT` (update data), `DELETE` (remove data). Common status codes: `200 OK` (Success), `201 Created` (Resource Created), `404 Not Found` (Resource Missing), `500 Internal Server Error` (Backend Exception).',
    commonMistake: 'Using GET to create or delete data. GET should only read data without side effects.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. List HTTP Verbs (GET for fetch, POST for create, PUT for update, DELETE for remove).',
        '2. List Success Codes (200 OK, 201 Resource Created).',
        '3. List Error Codes (404 Not Found, 500 Internal Server Error).'
      ],
      exampleScript: 'REST APIs use HTTP methods: GET to fetch data, POST to create resources, PUT to update resources, and DELETE to remove resources. Key status codes are 200 OK, 201 Created, 404 Not Found, and 500 Internal Error.',
      durationSec: 27,
      tip: 'GET/POST/PUT/DELETE + 200/404 status codes.'
    },
    onePictureSummary: ['GET (Read)', '↓ POST (Create)', '↓ PUT (Update)', '↓ DELETE (Remove)']
  },
  {
    id: 'ch-22-spring-boot',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 22,
    title: 'Chapter 22: Spring Boot & 3-Tier Architecture',
    shortTitle: '22. Spring Boot',
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
  {
    id: 'ch-23-spring-data-jpa',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 23,
    title: 'Chapter 23: Spring Data JPA & Hibernate (Object-Relational Mapping)',
    shortTitle: '23. Spring Data JPA',
    icon: '🛢️',
    estimatedMinutes: 8,
    question: 'What is ORM and how does Spring Data JPA simplify database queries?',
    analogyStory: {
      title: 'The Automatic Translator for Databases',
      text: 'Java speaks in Objects (`new User()`), but SQL databases speak in Tables (`INSERT INTO users`). Instead of writing raw SQL strings manually, Spring Data JPA acts as an automatic translator (ORM) converting Java objects into database tables automatically!',
      takeaway: 'Spring Data JPA maps Java objects to SQL tables automatically.'
    },
    diagramType: 'spring-factory',
    simpleExplanation: 'ORM (Object-Relational Mapping) maps Java entity classes to relational database tables. Spring Data JPA uses Hibernate to generate SQL queries automatically from method names (like `findByEmail()`), eliminating repetitive JDBC SQL boilerplate.',
    commonMistake: 'Writing raw JDBC SQL connection boilerplate instead of extending `JpaRepository`.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define ORM (Object-Relational Mapping converting Java objects to SQL tables).',
        '2. Explain Spring Data JPA role (Built on Hibernate to generate SQL queries automatically).',
        '3. Highlight benefit (Eliminating JDBC SQL boilerplate code).'
      ],
      exampleScript: 'Spring Data JPA is an ORM abstraction built on Hibernate. It automatically maps Java entity classes to database tables and generates SQL queries from method signatures, eliminating manual JDBC boilerplate code.',
      durationSec: 26,
      tip: 'Object-Relational Mapping (ORM) maps Java Objects to SQL Tables.'
    },
    onePictureSummary: ['☕ Java User Object', '↓ 🔄 Spring Data JPA / Hibernate', '↓ 🛢️ SQL User Table', '↓ Automatic Mapping']
  },
  {
    id: 'ch-24-spring-security-jwt',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 24,
    title: 'Chapter 24: Spring Security & JWT Tokens (API Authentication)',
    shortTitle: '24. Spring Security',
    icon: '🔒',
    estimatedMinutes: 8,
    question: 'How do you secure REST APIs using Spring Security and JWT (JSON Web Tokens)?',
    analogyStory: {
      title: 'The VIP Concert Wristband',
      text: 'When you enter a concert venue, the guard checks your ID once and gives you a stamped VIP wristband (JWT Token). For the rest of the night, whenever you buy drinks, you show your wristband instead of showing your ID over and over! A JWT token allows users to authenticate once and access REST endpoints securely.',
      takeaway: 'JWT tokens authenticate REST API calls statelessly without storing sessions on the server.'
    },
    diagramType: 'spring-factory',
    simpleExplanation: 'Spring Security protects REST APIs from unauthorized access. JSON Web Tokens (JWT) provide stateless authentication: after the user logs in, the server signs a encrypted JWT token sent in the HTTP Authorization header on every subsequent request.',
    commonMistake: 'Storing passwords in plain text instead of hashing them using BCryptPasswordEncoder.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Spring Security (Managing authentication and role authorization).',
        '2. Explain JWT Tokens (Stateless encrypted tokens signed by server).',
        '3. Explain request flow (Sending JWT in HTTP Authorization header).'
      ],
      exampleScript: 'Spring Security manages API authentication and authorization. We use JWT tokens for stateless authentication: upon login, the server issues a signed JWT token that the client sends in the HTTP Authorization header for subsequent API requests.',
      durationSec: 27,
      tip: 'Stateless JWT tokens sent in HTTP Authorization header.'
    },
    onePictureSummary: ['🔑 User Login', '↓ 🎟️ Signed JWT Token', '↓ 🛡️ Spring Security Filter', '↓ Authorized REST Access']
  },
  {
    id: 'ch-25-postman-swagger',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 25,
    title: 'Chapter 25: Postman & Swagger / OpenAPI (API Testing & Docs)',
    shortTitle: '25. Postman & Swagger',
    icon: '🧪',
    estimatedMinutes: 6,
    question: 'How do you test and document REST APIs using Postman and Swagger/OpenAPI?',
    analogyStory: {
      title: 'The Menu Catalog & Quality Inspector',
      text: 'Swagger is the interactive menu catalog that lists every available dish and ingredient automatically. Postman is the quality inspector taking orders, sending test requests, and verifying the response food delivered!',
      takeaway: 'Postman tests REST API calls; Swagger auto-generates interactive API documentation.'
    },
    diagramType: 'rest-waiter',
    simpleExplanation: 'Postman is an API client tool used to send HTTP requests (GET, POST, PUT, DELETE) and test REST API endpoints. Swagger (OpenAPI) automatically inspects `@RestController` annotations to generate interactive web documentation for developers.',
    commonMistake: 'Sending REST requests blindly without inspecting HTTP status codes and JSON response bodies.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain Postman (API client used to test HTTP requests and validate JSON responses).',
        '2. Explain Swagger/OpenAPI (Auto-generating web documentation from Spring Boot annotations).',
        '3. Highlight team benefit (Seamless frontend-backend API integration).'
      ],
      exampleScript: 'Postman is an API client used to execute and validate HTTP requests during API development. Swagger OpenAPI automatically generates interactive web documentation from Spring Boot annotations for frontend team integration.',
      durationSec: 26,
      tip: 'Postman = endpoint testing; Swagger = automatic API documentation.'
    },
    onePictureSummary: ['🧪 Postman API Testing', '↓ 📄 Swagger Web Docs', '↓ 🌐 Endpoint Verification', '↓ Seamless Integration']
  },

  // SECTION VII: AI TOOLS & UNIT TESTING EVIDENCES
  {
    id: 'ch-26-ai-codegen-honest',
    partId: 'part-7',
    partTitle: 'Section VII: AI & Unit Testing',
    chapterNumber: 26,
    title: 'Chapter 26: GitHub Copilot & Honest AI Usage in Development',
    shortTitle: '26. AI Workflows',
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
  {
    id: 'ch-27-unit-test-evidences',
    partId: 'part-7',
    partTitle: 'Section VII: AI & Unit Testing',
    chapterNumber: 27,
    title: 'Chapter 27: Prompt Engineering & Capturing Unit Test Evidences',
    shortTitle: '27. Unit Test Evidences',
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

  // SECTION VIII: DEVOPS, CONTAINERS & CLOUD INFRASTRUCTURE
  {
    id: 'ch-28-git-pull-req',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 28,
    title: 'Chapter 28: Git Version Control & Pull Request Workflows',
    shortTitle: '28. Git Workflows',
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
  {
    id: 'ch-29-docker-k8s-cicd',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 29,
    title: 'Chapter 29: Docker Containers, Kubernetes & CI/CD Pipelines',
    shortTitle: '29. Docker & CI/CD',
    icon: '📦',
    estimatedMinutes: 8,
    question: 'What is a CI/CD pipeline and how do Docker and Kubernetes automate production deployments?',
    analogyStory: {
      title: 'The Automated Factory Conveyor Belt',
      text: 'A CI/CD Pipeline (using GitHub Actions or Jenkins) is an automated factory conveyor belt! As soon as a developer pushes code to Git, the belt automatically runs unit tests, packages the app into a sealed Docker container, and triggers Kubernetes to perform a rolling update in production with zero downtime!',
      takeaway: 'CI/CD pipeline automates testing, Docker container packaging, and Kubernetes rolling deployment.'
    },
    diagramType: 'docker-ship',
    simpleExplanation: 'CI/CD (Continuous Integration / Continuous Deployment) automates software building, testing, and deployment. Developers push code to Git, triggering automated build pipelines (GitHub Actions/Jenkins). The pipeline builds a multi-stage Docker image, runs unit tests, pushes the image to a container registry, and notifies Kubernetes to execute a zero-downtime rolling update.',
    commonMistake: 'Manually uploading `.zip` files to servers instead of using automated CI/CD pipelines.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain CI (Continuous Integration: Automating build and unit testing on Git push).',
        '2. Explain Docker & K8s (Building Docker images and orchestrating Kubernetes rolling updates).',
        '3. Highlight CD benefit (Continuous Deployment ensuring zero downtime).'
      ],
      exampleScript: 'In our DevOps workflow, pushing code to Git triggers an automated CI/CD pipeline. The pipeline executes automated unit tests, builds a multi-stage Docker container image, and deploys to Kubernetes using rolling updates to ensure zero downtime.',
      durationSec: 28,
      tip: 'Git Push -> Automated CI Test -> Docker Build -> Kubernetes Rolling Deploy.'
    },
    onePictureSummary: ['🌿 Git Push', '↓ ⚙️ CI Automated Test', '↓ 📦 Docker Image Build', '↓ 🏗️ K8s Rolling Deploy']
  },
  {
    id: 'ch-30-cloud-aws-gcp',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 30,
    title: 'Chapter 30: Cloud Platforms (AWS, Azure & GCP)',
    shortTitle: '30. Cloud Platforms',
    icon: '⚡',
    estimatedMinutes: 7,
    question: 'What are the main advantages of Cloud Platforms like AWS, Azure, and GCP?',
    analogyStory: {
      title: 'The City Power Grid',
      text: 'Instead of building your own private electrical generator in your backyard, you plug into the city power grid and pay only for the electricity you consume. Cloud platforms like AWS, Azure, and GCP let companies rent virtual servers and databases on demand without owning physical server hardware.',
      takeaway: 'Cloud provides elastic computing resources on demand without physical hardware overhead.'
    },
    diagramType: 'cloud-power',
    simpleExplanation: 'Cloud platforms (Amazon Web Services, Microsoft Azure, Google Cloud Platform) provide on-demand computing power, storage, and databases over the internet. They eliminate physical hardware maintenance and enable global auto-scaling.',
    commonMistake: 'Thinking cloud platforms are only for file storage like Google Drive.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Cloud Platforms (On-demand infrastructure, managed databases, computing over internet).',
        '2. Mention major providers (AWS, Azure, Google Cloud Platform).',
        '3. State key benefits (Elastic scaling, zero physical hardware maintenance, global availability).'
      ],
      exampleScript: 'Cloud platforms like AWS, Azure, and GCP offer on-demand infrastructure, managed databases, and scalable computing services. They enable elastic scaling, global availability, and pay-as-you-go cost optimization.',
      durationSec: 26,
      tip: 'On-demand servers + elastic scaling + zero physical hardware maintenance.'
    },
    onePictureSummary: ['⚡ On-Demand Virtual Servers', '↓ 🌐 Global Availability', '↓ 📈 Elastic Scaling', '↓ Cloud AWS / Azure / GCP']
  },

  // SECTION IX: SYSTEM DESIGN & ARCHITECTURAL PRINCIPLES (JD CORE DESIGN)
  {
    id: 'ch-31-solid-lld-hld',
    partId: 'part-9',
    partTitle: 'Section IX: System Design',
    chapterNumber: 31,
    title: 'Chapter 31: SOLID Design Principles & LLD vs HLD',
    shortTitle: '31. SOLID & Design',
    icon: '📐',
    estimatedMinutes: 9,
    question: 'What are the SOLID principles and how do High-Level (HLD) and Low-Level (LLD) design differ?',
    analogyStory: {
      title: 'The City Map vs Room 204 Electrical Blueprint',
      text: 'High-Level Design (HLD) is the city map from a helicopter: where hospitals, highways, and airports connect. Low-Level Design (LLD) is the room electrical blueprint inside the hospital room! SOLID principles (Lego building blocks) ensure every room wire and class stays clean and modular.',
      takeaway: 'HLD defines macro service architecture; LLD defines micro class diagrams; SOLID ensures modular code.'
    },
    diagramType: 'car-abstract',
    simpleExplanation: 'HLD focuses on macro architecture, microservices, API Gateways, and databases. LLD focuses on micro details: class diagrams, OOP design patterns, and database schemas. SOLID principles (Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion) keep LLD code modular and maintainable.',
    commonMistake: 'Writing 2,000 lines of unorganized code inside a single class without using SOLID principles.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Differentiate HLD (Macro system architecture and services) vs LLD (Micro class diagrams and schemas).',
        '2. Explain SOLID Principles (5 core guidelines ensuring modular maintainable code).',
        '3. Highlight Single Responsibility & Dependency Inversion benefits.'
      ],
      exampleScript: 'High-Level Design defines macro service architecture and database choices, while Low-Level Design defines micro class diagrams and schemas. I apply SOLID design principles—like Single Responsibility and Dependency Inversion—to ensure classes remain modular, maintainable, and easy to extend.',
      durationSec: 28,
      tip: 'HLD = Macro services; LLD = Micro classes; SOLID = Modular code.'
    },
    onePictureSummary: ['🏙️ HLD System Architecture', '↓ 🔌 LLD Class Diagrams', '↓ 📐 SOLID Principles', '↓ Modular Codebase']
  },
  {
    id: 'ch-32-microservices-caching',
    partId: 'part-9',
    partTitle: 'Section IX: System Design',
    chapterNumber: 32,
    title: 'Chapter 32: Microservices System Design & Scalable Caching (Redis)',
    shortTitle: '32. Microservices & Caching',
    icon: '🌐',
    estimatedMinutes: 8,
    question: 'How do you design scalable microservices using API Gateways, Caching, and Database Replicas?',
    analogyStory: {
      title: 'The Airport Security Gate & School Hallway Notice Board',
      text: 'An API Gateway acts as the single airport entrance routing traffic to independent backend services. In-memory Redis Caching is like posting a notice on the school hallway board: 999 students read the notice in 1 second without overloading the principal\'s office database!',
      takeaway: 'API Gateways route traffic; Redis caching and DB read replicas ensure high-availability scaling.'
    },
    diagramType: 'cloud-power',
    simpleExplanation: 'Microservices architecture decomposes applications into autonomous REST services behind an API Gateway. To achieve high availability and sub-second latency, we implement in-memory Redis Caching for frequent reads and database read-replicas for load distribution.',
    commonMistake: 'Sharing a single database between 10 microservices. Each microservice must own its private database!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain Microservices & API Gateway (Autonomous services behind a single entry gateway).',
        '2. Explain Caching (Using Redis in-memory cache to reduce database load).',
        '3. Mention DB scaling (Read-replicas and database-per-service isolation).'
      ],
      exampleScript: 'In Microservices Architecture, we decompose applications into autonomous services behind an API Gateway. To scale for high availability, we use Redis in-memory caching for frequent read queries and database read-replicas to ensure fast sub-second response times.',
      durationSec: 28,
      tip: 'API Gateway + Redis caching + Database-per-service.'
    },
    onePictureSummary: ['🌐 API Gateway Entry', '↓ 📦 Microservice Isolation', '↓ ⚡ Redis In-Memory Cache', '↓ 🛢️ DB Read Replicas']
  },

  // SECTION X: RESUME STORIES & BEHAVIORAL HR
  {
    id: 'ch-33-infor-experience',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 33,
    title: 'Chapter 33: Renuka\'s Infor Experience (Enterprise AI Internship)',
    shortTitle: '33. Infor Internship',
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
    id: 'ch-34-pollaris-story',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 34,
    title: 'Chapter 34: Pollaris Voting App (Firestore ACID Transactions)',
    shortTitle: '34. Pollaris Project',
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
    id: 'ch-35-renuka-self-intro',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 35,
    title: 'Chapter 35: Renuka\'s Master Self-Introduction & STAR Method',
    shortTitle: '35. Self Intro & STAR',
    icon: '🗣️',
    estimatedMinutes: 6,
    question: 'Tell me about yourself and how you handle technical challenges using the STAR method.',
    analogyStory: {
      title: 'The 45-Second Technical Elevator Pitch & STAR Compass',
      text: 'State 4 clear facts: 1) JNTU ECE degree, 2) Core stack (Java, SQL, REST APIs, Spring Boot), 3) Infor 4-month internship & Pollaris project, 4) Using STAR (Situation -> Task -> Action -> Result) to answer behavioral questions.',
      takeaway: 'Structure: Background (JNTU ECE) ➔ Tech Stack ➔ Infor/Pollaris Projects ➔ STAR Method.'
    },
    diagramType: 'star-hr',
    simpleExplanation: 'Keep your self-introduction under 45 seconds. State your name, B.Tech ECE degree from JNTU, core technical stack (Java, SQL, REST APIs, Cloud, AI), 4-month Infor internship experience, and enthusiasm for the Associate Software Engineer FSM role. Use STAR (Situation, Task, Action, Result) for behavioral questions.',
    commonMistake: 'Talking about high school marks instead of core technical skills and projects.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Greeting & Education (Hello, I am Renuka. B.Tech ECE graduate from JNTU).',
        '2. Technical Stack (Passionate about Java, SQL, REST APIs, and AI tools).',
        '3. Practical Experience (4-month Infor internship working on enterprise AI & Pollaris project).',
        '4. Behavioral Approach (Using STAR method: Situation, Task, Action, Result).'
      ],
      exampleScript: 'Hello, thank you for this opportunity. I am Renuka. I completed my B.Tech in Electronics and Communication Engineering from JNTU. I am passionate about software development and enterprise SaaS solutions. My core technical skills include Java, SQL, REST APIs, and Spring Boot. I completed a 4-month internship at Infor working on enterprise AI tools, and built cloud projects like Pollaris. When faced with technical challenges, I use the STAR method to focus on clear actions and measurable results.',
      durationSec: 38,
      tip: 'Keep it crisp, technical, structured, and under 40 seconds.'
    },
    onePictureSummary: ['🎓 JNTU ECE Degree', '↓ Java, SQL, REST APIs', '↓ Infor 4-Month Internship', '↓ STAR Method Framework']
  }
];
