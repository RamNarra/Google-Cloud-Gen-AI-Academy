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
  diagramType: 'software-app' | 'sdlc-loop' | 'agile-loop' | 'scrum-vs-kanban' | 'jvm-coffee' | 'cookie-class' | 'tv-remote' | 'family-inherit' | 'actor-poly' | 'car-abstract' | 'array-lockers' | 'stack-plates' | 'queue-line' | 'arraylist-vs-linkedlist' | 'hashmap-mail' | 'tree-bst' | 'sql-library' | 'rest-waiter' | 'spring-factory' | 'microservices-gateway' | 'git-docs' | 'ci-cd-pipeline' | 'docker-ship' | 'cloud-power' | 'ai-copilot' | 'fsm-store' | 'multi-tenant-saas' | 'resume-story' | 'star-hr' | 'pollaris-arch' | 'mega-mcq';
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
  { id: 'part-1', partNumber: 1, title: 'Section I: FSM & Enterprise SaaS Domain', description: 'FSM Associate Role, Enterprise SaaS, Multi-Tenancy Models, ERP Systems, SLA Uptime', icon: '🏢' },
  { id: 'part-2', partNumber: 2, title: 'Section II: Software Engineering & Agile SDLC', description: 'SDLC 6 Phases, Scrum vs Kanban Deep Dive, WIP Limits, Jira Tickets, Sprint Ceremonies', icon: '🏃' },
  { id: 'part-3', partNumber: 3, title: 'Section III: Java / J2EE & Object-Oriented Principles', description: 'Java, JVM, What is J2EE?, Maven, Classes, Encapsulation, Inheritance, Polymorphism, Abstraction', icon: '☕' },
  { id: 'part-4', partNumber: 4, title: 'Section IV: Data Structures & Algorithms (DSA)', description: 'Arrays, ArrayList vs Vector, Stacks, Queues, HashMaps, hashCode & equals, Tree Traversals, Algorithmic Patterns', icon: '🧱' },
  { id: 'part-5', partNumber: 5, title: 'Section V: Relational & NoSQL Databases', description: 'Oracle DB, SQL Server, Primary/Foreign Keys, SQL Joins, Indexing, Sharding, NoSQL Firestore', icon: '🔗' },
  { id: 'part-6', partNumber: 6, title: 'Section VI: Backend Frameworks & Web Services', description: 'SOAP vs REST APIs, HTTP Verbs, Spring Boot 3-Tier, Spring Data JPA, Spring Security, Microservices API Gateway', icon: '🍽️' },
  { id: 'part-7', partNumber: 7, title: 'Section VII: AI Tools & Unit Testing Evidences', description: 'GitHub Copilot, Gemini Assist, Prompt Engineering, Honest AI Usage, JUnit 5 & Mockito Unit Test Evidences', icon: '🤖' },
  { id: 'part-8', partNumber: 8, title: 'Section VIII: DevOps, Containers & Cloud Infrastructure', description: 'Git PR Workflows, Docker Multi-Stage Builds, Kubernetes Pods & Rolling Updates, CI/CD Pipelines, Cloud Scaling', icon: '📦' },
  { id: 'part-9', partNumber: 9, title: 'Section IX: SOLID Principles & System Architecture', description: 'S-O-L-I-D Deep Dives (SRP, OCP, LSP, ISP, DIP), LLD vs HLD, Scalable Microservices & Redis Caching', icon: '📐' },
  { id: 'part-10', partNumber: 10, title: 'Section X: Resume Stories (Infor & Pollaris) & HR', description: 'Infor AWS DeepAR & GPT-4 RAG Internship Story, Pollaris Firestore ACID Transactions, Self Intro & STAR Method', icon: '🗣️' },
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
    title: 'Chapter 2: What is Enterprise SaaS & Multi-Tenancy Architecture?',
    shortTitle: '2. Enterprise SaaS',
    icon: '☁️',
    estimatedMinutes: 7,
    question: 'What is Enterprise SaaS, what are the multi-tenancy models, and how is SLA Uptime maintained?',
    analogyStory: {
      title: 'The Secure Multi-Apartment Complex',
      text: 'Instead of every family building their own private water tank and generator, everyone lives in a central luxury apartment complex sharing main utility pipes. However, every apartment has a digital lock so no tenant can enter another tenant\'s rooms! Multi-tenancy models range from Shared Database with Tenant ID discriminators to Database-Per-Tenant isolation. High availability SLAs (e.g. 99.99% uptime) guarantee the complex never loses power.',
      takeaway: 'Multi-tenancy shares application infrastructure while strictly isolating client data with high-availability SLAs.'
    },
    diagramType: 'multi-tenant-saas',
    simpleExplanation: 'Enterprise Software-as-a-Service (SaaS) is cloud software hosted centrally and accessed via subscriptions. Multi-Tenancy serves multiple customers (tenants) from shared infrastructure while enforcing strict tenant isolation (e.g., using `tenant_id` row discriminators or schema isolation). High availability SLAs (Service Level Agreements) mandate 99.99% uptime via automated failover and redundant cloud infrastructure.',
    commonMistake: 'Thinking multi-tenancy means different enterprise clients share un-partitioned database tables without tenant filters.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Enterprise SaaS (Cloud software delivered over the web).',
        '2. Explain Multi-Tenancy (Serving multiple clients from shared infrastructure with strict tenant data isolation).',
        '3. Highlight Enterprise SLAs (Guaranteeing 99.99% high-availability uptime via redundant cloud deployments).'
      ],
      exampleScript: 'Enterprise SaaS delivers cloud applications over the web. Multi-tenancy allows a single application deployment to serve multiple enterprise clients while enforcing strict tenant data isolation using tenant discriminators or private schemas. We ensure enterprise reliability by adhering to 99.99% high-availability SLAs.',
      durationSec: 29,
      tip: 'Highlight multi-tenant data isolation + 99.99% SLA uptime guarantees.'
    },
    onePictureSummary: ['☁️ Enterprise SaaS', '↓ 🔑 Multi-Tenant Isolation', '↓ 🛢️ Tenant Discriminator', '↓ ⏱️ 99.99% SLA Uptime']
  },
  {
    id: 'ch-3-fsm-domain',
    partId: 'part-1',
    partTitle: 'Section I: FSM & SaaS',
    chapterNumber: 3,
    title: 'Chapter 3: Financials & Supply Management (FSM) Domain Concepts',
    shortTitle: '3. FSM Domain',
    icon: '🏢',
    estimatedMinutes: 6,
    question: 'What is Financials & Supply Management (FSM) software and why do global businesses use it?',
    analogyStory: {
      title: 'The Global Enterprise Store Super-Brain',
      text: 'A global business buys raw materials, pays suppliers, ships products across oceans, collects customer payments, and files multi-currency taxes daily. FSM software acts as a global super-brain: the Financials module manages general ledgers, accounts payable/receivable, and invoices; the Supply Management module manages warehouse stock levels, purchase requisitions, and order fulfillment.',
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
    id: 'ch-5-scrum-vs-kanban',
    partId: 'part-2',
    partTitle: 'Section II: Software Engineering & Agile SDLC',
    chapterNumber: 5,
    title: 'Chapter 5: Agile Scrum vs Kanban Deep Dive & WIP Limits',
    shortTitle: '5. Scrum vs Kanban',
    icon: '🏃',
    estimatedMinutes: 8,
    question: 'What is the difference between Scrum and Kanban, and how do Work-In-Progress (WIP) limits work?',
    analogyStory: {
      title: 'The Time-Boxed Restaurant vs The Fast Food Assembly Line',
      text: 'Scrum is a time-boxed restaurant that serves a 5-course dinner in fixed 2-week intervals (Sprints), holding planning meetings before serving. Kanban is a continuous fast-food assembly line with a strict rule: "No more than 3 burgers on the grill at once!" (Work-In-Progress WIP Limit). If the grill is full, workers must help finish active orders before taking new ones.',
      takeaway: 'Scrum uses time-boxed Sprints and ceremonies; Kanban uses continuous flow with WIP limits to prevent bottlenecks.'
    },
    diagramType: 'scrum-vs-kanban',
    simpleExplanation: 'Agile Scrum organizes work into fixed time-boxed Sprints (usually 2 weeks) led by 3 roles (Product Owner, Scrum Master, Developers), featuring 4 ceremonies (Sprint Planning, Daily Stand-up, Sprint Review/Demo, Sprint Retrospective) and 3 artifacts (Product Backlog, Sprint Backlog, Increment). Kanban focuses on continuous flow, visualizing work on Kanban boards, and enforcing Work-In-Progress (WIP) limits to prevent team overload and measure Lead Time (commit to delivery) and Cycle Time (start to finish).',
    commonMistake: 'Confusing Scrum sprints with Kanban continuous flow. Scrum is time-boxed; Kanban is continuous with WIP limits.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain Scrum (Fixed 2-week time-boxed Sprints, 3 roles, 4 ceremonies: Planning, Standup, Review, Retro).',
        '2. Explain Kanban (Continuous flow board with Work-In-Progress WIP limits to eliminate bottlenecks).',
        '3. Contrast metrics (Scrum tracks Sprint Velocity & Burndown; Kanban tracks Lead Time & Cycle Time).'
      ],
      exampleScript: 'Agile Scrum operates in fixed 2-week Sprints with defined roles, backlog planning, daily stand-ups, and retrospectives, measuring velocity. Kanban focuses on continuous flow without fixed sprint boundaries, utilizing Work-In-Progress (WIP) limits on columns to prevent bottleneck overload and optimize Lead Time.',
      durationSec: 32,
      tip: 'Scrum = Time-boxed Sprints & Velocity; Kanban = Continuous Flow & WIP Limits.'
    },
    onePictureSummary: ['⏱️ Scrum 2-Week Sprint', '↓ 📊 Kanban Continuous Flow', '↓ 🛑 WIP Limits', '↓ 🎯 Lead/Cycle Time']
  },
  {
    id: 'ch-6-jira-agile-process',
    partId: 'part-2',
    partTitle: 'Section II: Software Engineering & Agile SDLC',
    chapterNumber: 6,
    title: 'Chapter 6: Jira Ticket Tracking & Sprint Meetings (Not in Brain!)',
    shortTitle: '6. Jira & Meetings',
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
    id: 'ch-8-j2ee-maven',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 8,
    title: 'Chapter 8: J2EE / Jakarta EE & Maven Build Automation',
    shortTitle: '8. J2EE & Maven',
    icon: '🏢',
    estimatedMinutes: 7,
    question: 'What is J2EE (Jakarta EE) and how does Maven automate Java dependencies via pom.xml?',
    analogyStory: {
      title: 'The Industrial Train & Automated Library Download Bot',
      text: 'Core Java (J2SE) is a standard car engine. J2EE is an industrial freight train specification adding servlets, database transactions, and security rules! Maven reads your dependency manifest (`pom.xml`) and automatically downloads external J2EE library JARs from central repositories.',
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
    onePictureSummary: ['🏢 J2EE Enterprise Specs', '↓ ⚙️ pom.xml Manifest', '↓ 📦 Automated JAR Download', '↓ 🚀 Executable Build']
  },
  {
    id: 'ch-9-classes-objects',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 9,
    title: 'Chapter 9: Classes vs Objects & Memory Allocation',
    shortTitle: '9. Classes & Objects',
    icon: '🍪',
    estimatedMinutes: 7,
    question: 'What is the difference between a Class and an Object, and how are they stored in Heap vs Stack memory?',
    analogyStory: {
      title: 'The Cookie Cutter & Real Baked Cookies',
      text: 'A Class is a metal cookie cutter shape. It is not something you can eat! An Object is a real baked cookie created from that cookie cutter using the `new` keyword. Object instance fields live in Heap memory, while variable references live on Stack memory.',
      takeaway: 'Class = Blueprint; Object = Real instance residing in Heap memory.'
    },
    diagramType: 'cookie-class',
    simpleExplanation: 'A Class is a blueprint defining fields and methods. An Object is a concrete instance created from that blueprint using `new`. In memory, primitive local variables and object reference pointers reside in Stack memory, while real object instances and fields reside in Heap memory.',
    commonMistake: 'Confusing object reference pointers on Stack with real object data stored in Heap memory.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Class vs Object (Blueprint vs Heap instance).',
        '2. Explain Stack Memory (Stores local variables and reference pointers).',
        '3. Explain Heap Memory (Stores object instances allocated with new).'
      ],
      exampleScript: 'A Class is a blueprint that defines data structures and behaviors. An Object is an active instance allocated in Heap memory using the new keyword. Local variable references are stored on the Stack, pointing to object instances allocated on the Heap.',
      durationSec: 26,
      tip: 'Class = Blueprint; Object = Heap instance.'
    },
    onePictureSummary: ['📐 Class Blueprint', '↓ 🍪 new Object()', '↓ 📚 Stack References', '↓ 🛢️ Heap Objects']
  },

  // SECTION IV: DATA STRUCTURES & ALGORITHMS (DSA DEEP DIVE)
  {
    id: 'ch-10-arrays-arraylist',
    partId: 'part-4',
    partTitle: 'Section IV: DSA Deep Dive',
    chapterNumber: 10,
    title: 'Chapter 10: Arrays, ArrayList vs Vector & Dynamic Memory Resizing',
    shortTitle: '10. Arrays & ArrayList',
    icon: '🧱',
    estimatedMinutes: 8,
    question: 'What is the difference between Array, ArrayList, and Vector, and how does dynamic array resizing work?',
    analogyStory: {
      title: 'The Fixed Storage Locker vs The Expanding Suitcase',
      text: 'A standard Array is a fixed row of 5 storage lockers; you cannot add a 6th locker without building a whole new locker room! An ArrayList is an expanding smart suitcase: when full, it creates a new suitcase 50% larger (1.5x growth factor) and copies everything over automatically in amortized O(1) time. Vector is an older synchronized version of ArrayList.',
      takeaway: 'Array has fixed size; ArrayList dynamically resizes with 1.5x growth factor; Vector is thread-safe synchronized.'
    },
    diagramType: 'arraylist-vs-linkedlist',
    simpleExplanation: 'Standard Java Arrays have fixed contiguous memory size and O(1) index lookup access. `ArrayList` is a dynamic array wrapper that resizes automatically by creating a new internal array with a $1.5\times$ growth factor when full, achieving amortized O(1) element insertions. `Vector` is legacy synchronized (thread-safe) with $2.0\times$ growth factor.',
    commonMistake: 'Thinking ArrayList expands by 1 element every insert. It resizes by 50% (1.5x capacity) to maintain amortized O(1) speed!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Differentiate Array vs ArrayList (Fixed size vs dynamic resizing wrapper).',
        '2. Explain Resizing Mechanics (ArrayList resizes by 1.5x growth factor when capacity is reached).',
        '3. Contrast Vector (Synchronized legacy class vs unsynchronized fast ArrayList).'
      ],
      exampleScript: 'Standard Arrays have fixed contiguous size with O(1) index access. ArrayList dynamically resizes by instantiating a new internal array with a 1.5x growth factor when full, ensuring amortized O(1) insertions. Vector is an older synchronized counterpart to ArrayList.',
      durationSec: 30,
      tip: 'Array = Fixed; ArrayList = Dynamic 1.5x growth; Vector = Synchronized.'
    },
    onePictureSummary: ['🔒 Fixed Array', '↓ 🧳 ArrayList 1.5x Growth', '↓ ⚡ Amortized O(1)', '↓ 🔒 Vector Synchronized']
  },
  {
    id: 'ch-11-stacks-queues-heaps',
    partId: 'part-4',
    partTitle: 'Section IV: DSA Deep Dive',
    chapterNumber: 11,
    title: 'Chapter 11: Stacks (LIFO), Queues (FIFO) & PriorityQueue (Min/Max Heaps)',
    shortTitle: '11. Stacks & Queues',
    icon: '🥞',
    estimatedMinutes: 8,
    question: 'How do Stacks, Queues, and PriorityQueues differ, and what are their real-world enterprise applications?',
    analogyStory: {
      title: 'The Buffet Plate Stack vs Ticket Line vs VIP Queue',
      text: 'A Stack is a stack of cafeteria plates: the last plate put on top is the first one taken off (LIFO). A Queue is a movie ticket line: the first person in line gets served first (FIFO). A PriorityQueue is a hospital emergency room: patients with critical priority (VIP / Min-Max Heap key) get treated first regardless of arrival time!',
      takeaway: 'Stack = LIFO (push/pop); Queue = FIFO (offer/poll); PriorityQueue = Priority Binary Heap.'
    },
    diagramType: 'stack-plates',
    simpleExplanation: 'Stacks operate on LIFO (Last-In, First-Out) via `push()` and `pop()` (used in JVM call stack, Undo/Redo, DFS). Queues operate on FIFO (First-In, First-Out) via `offer()` and `poll()` (used in messaging queues, BFS). `PriorityQueue` orders elements using a Binary Heap structure, offering O(log N) insertions and retrieval of min/max elements (used in Dijkstra shortest path & job scheduling).',
    commonMistake: 'Using java.util.Stack (legacy synchronized class) instead of `ArrayDeque` for modern high-performance stacks.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Differentiate Stack vs Queue (LIFO via push/pop vs FIFO via offer/poll).',
        '2. Explain PriorityQueue (Binary Heap ordering elements by natural/comparator priority in O(log N)).',
        '3. State Real-World Use Cases (Stack: Call stacks/Undo; Queue: Task queues/BFS; PriorityQueue: Task schedulers).'
      ],
      exampleScript: 'Stacks follow LIFO order for call stacks and undo operations. Queues follow FIFO order for message processing. PriorityQueue utilizes a Binary Heap to retrieve highest-priority elements in O(log N) time for task scheduling.',
      durationSec: 29,
      tip: 'Stack = LIFO ArrayDeque; Queue = FIFO; PriorityQueue = Binary Heap O(log N).'
    },
    onePictureSummary: ['🥞 Stack LIFO', '↓ 🎟️ Queue FIFO', '↓ 🏆 PriorityQueue Heap', '↓ ⚡ O(log N) Priority']
  },
  {
    id: 'ch-12-hashmap-hashset-deep-dive',
    partId: 'part-4',
    partTitle: 'Section IV: DSA Deep Dive',
    chapterNumber: 12,
    title: 'Chapter 12: HashMap & HashSet Mechanics: hashCode(), equals() & Red-Black Tree Threshold (>8)',
    shortTitle: '12. HashMap Deep Dive',
    icon: '📫',
    estimatedMinutes: 9,
    question: 'How does HashMap work internally in Java 8+, and why is overriding hashCode() and equals() critical?',
    analogyStory: {
      title: 'The Post Office Mailbox Buckets',
      text: 'A HashMap is a row of numbered mailboxes (`Node<K,V>[] table`). When you insert a key, `key.hashCode()` computes the mailbox number. If two keys land in mailbox #7 (Hash Collision), Java chains them in a LinkedList. If mailbox #7 gets over 8 items, Java 8+ transforms the LinkedList into a fast Red-Black Tree, turning O(N) lookup back into O(log N)!',
      takeaway: 'HashMap uses hashCode() for bucket indexing and equals() for key matching. Bucket threshold > 8 treeifies to Red-Black Tree.'
    },
    diagramType: 'hashmap-mail',
    simpleExplanation: 'Java\'s `HashMap` uses an array of buckets (`Node<K,V>[] table`). Key insertion computes `hashCode()` to determine array index. Hash collisions chain entries in a LinkedList. In Java 8+, if a bucket length exceeds 8 entries (and total capacity >= 64), the bucket converts from LinkedList (O(N)) to a Red-Black Tree (O(log N)). `hashCode()` and `equals()` contract mandates that equal objects must return identical hash codes.',
    commonMistake: 'Overriding `equals()` without overriding `hashCode()`, causing HashMap lookups to fail!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain Internal Structure (Node<K,V>[] bucket array using hashCode() index mapping).',
        '2. Explain Collision Resolution (LinkedList chaining converted to Red-Black Tree when bucket size > 8 in Java 8+).',
        '3. Emphasize contract (Overriding equals() requires overriding hashCode() to locate the same bucket).'
      ],
      exampleScript: 'HashMap stores key-value pairs in a bucket array indexed by hashCode(). Collisions are chained in a LinkedList, which Java 8+ treeifies into a Red-Black Tree if bucket count exceeds 8, optimizing lookup from O(N) to O(log N). Overriding equals() mandates overriding hashCode() to preserve lookup consistency.',
      durationSec: 33,
      tip: 'Mention: Bucket array + hashCode() + equals() contract + Red-Black tree threshold > 8.'
    },
    onePictureSummary: ['📫 hashCode() Bucket', '↓ 🔗 LinkedList Chaining', '↓ 🌲 Red-Black Tree (>8)', '↓ ⚡ O(1) Average Lookup']
  },
  {
    id: 'ch-13-trees-bst-traversals',
    partId: 'part-4',
    partTitle: 'Section IV: DSA Deep Dive',
    chapterNumber: 13,
    title: 'Chapter 13: Binary Search Trees (BST), Traversals & Algorithmic Patterns',
    shortTitle: '13. Trees & Patterns',
    icon: '🌲',
    estimatedMinutes: 8,
    question: 'What is a Binary Search Tree (BST), what are the tree traversals, and what algorithmic patterns are commonly tested?',
    analogyStory: {
      title: 'The Sorted Family Tree & Two-Pointer Runners',
      text: 'A Binary Search Tree is a family tree where every left child is smaller than parent, and right child is larger! In-Order traversal prints elements in perfect sorted numerical order. Algorithmic patterns like Two Pointers (runners from start/end) and Sliding Window (expanding/shrinking window) solve search problems in O(N) time.',
      takeaway: 'BST enforces Left < Root < Right. In-Order traversal yields sorted output. Two Pointers & Sliding Window optimize array searches.'
    },
    diagramType: 'tree-bst',
    simpleExplanation: 'A Binary Search Tree (BST) is a hierarchical node structure where left child < parent < right child, supporting O(log N) search. Traversals include: In-Order (Left, Root, Right -> sorted order), Pre-Order (Root, Left, Right), Post-Order (Left, Right, Root). Core interview patterns include Two Pointers (paired indices), Sliding Window (subarray bounds), and Fast/Slow Pointers (Floyd\'s Cycle Detection).',
    commonMistake: 'Forgetting that a skewed degenerate BST devolves into an O(N) linked list unless self-balanced (like AVL or Red-Black Trees).',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define BST Property (Left child < Root < Right child, enabling O(log N) search).',
        '2. List Traversals (In-Order yields sorted order; Pre-Order; Post-Order).',
        '3. Highlight Algorithmic Patterns (Two Pointers, Sliding Window, Fast/Slow Pointers for optimal complexity).'
      ],
      exampleScript: 'A BST satisfies Left < Root < Right for O(log N) search. In-Order traversal visits nodes in sorted order. For problem solving, I utilize core patterns like Two Pointers, Sliding Window, and Fast/Slow pointers to achieve optimal time complexity.',
      durationSec: 30,
      tip: 'BST Left < Root < Right; In-Order = Sorted; Two Pointers / Sliding Window.'
    },
    onePictureSummary: ['🌲 BST Node Order', '↓ 🔀 In-Order = Sorted', '↓ 🏃 Two Pointers', '↓ 🪟 Sliding Window']
  },

  // SECTION V: RELATIONAL & NOSQL DATABASES
  {
    id: 'ch-14-sql-joins-acid',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 14,
    title: 'Chapter 14: Relational Databases: Primary Keys, Foreign Keys, SQL Joins & ACID',
    shortTitle: '14. SQL & ACID',
    icon: '🔗',
    estimatedMinutes: 8,
    question: 'How do Primary Keys, Foreign Keys, SQL Joins, and ACID transactions work in Oracle and SQL Server?',
    analogyStory: {
      title: 'The Library Book Tag & Unbreakable Contract',
      text: 'Every library book has a unique barcode ID (Primary Key). When a student checks out a book, the loan receipt links the student ID (Foreign Key). INNER JOIN returns only books currently checked out by active students. ACID properties guarantee that money transfers or ledger updates happen 100% completely or roll back to zero state on error!',
      takeaway: 'Primary Keys uniquely identify rows; Foreign Keys link tables; INNER JOIN matches keys; ACID guarantees 100% data integrity.'
    },
    diagramType: 'sql-library',
    simpleExplanation: 'Relational databases (Oracle, SQL Server) organize structured data into tables. Primary Keys uniquely identify records; Foreign Keys establish relational integrity between parent and child tables. `INNER JOIN` returns matching records between tables; `LEFT JOIN` preserves all left-table rows with NULL fallbacks. ACID transactions guarantee Atomicity (all or nothing), Consistency, Isolation, and Durability.',
    commonMistake: 'Forgetting to include `JOIN` conditions or foreign keys, resulting in disastrous Cartesian products (Cross Joins)!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Relational Keys (Primary Key for unique identification; Foreign Key for table relationship).',
        '2. Differentiate Joins (INNER JOIN for matching records; LEFT JOIN to preserve left table rows).',
        '3. Explain ACID Properties (Atomicity, Consistency, Isolation, Durability for reliable transactions).'
      ],
      exampleScript: 'Primary Keys uniquely identify table rows while Foreign Keys maintain referential integrity across tables. INNER JOIN fetches matching records between tables. Relational engines guarantee ACID properties—Atomicity, Consistency, Isolation, and Durability—to protect transactional data integrity.',
      durationSec: 30,
      tip: 'PK + FK + INNER/LEFT JOIN + ACID.'
    },
    onePictureSummary: ['🔑 Primary Key', '↓ 🔗 Foreign Key', '↓ 🤝 INNER/LEFT JOIN', '↓ 🛡️ ACID Guarantee']
  },
  {
    id: 'ch-15-indexing-nosql',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 15,
    title: 'Chapter 15: Database Indexing, GROUP BY vs HAVING & NoSQL Firestore',
    shortTitle: '15. Indexing & NoSQL',
    icon: '🛢️',
    estimatedMinutes: 8,
    question: 'What is a Database Index, how do GROUP BY and HAVING differ, and how does NoSQL differ from SQL?',
    analogyStory: {
      title: 'The Book Index vs Loose Document Binders',
      text: 'Scanning a 1,000-page book page-by-page takes hours! A B-Tree Index acts as a 2-page index at the back of the book, taking you directly to page 409 in 1 second. `WHERE` filters rows before grouping; `HAVING` filters aggregated summaries. NoSQL databases (like Firestore) store flexible JSON documents instead of rigid table grids.',
      takeaway: 'Indexes speed up lookups; WHERE filters rows before GROUP BY; HAVING filters aggregated groups; NoSQL stores flexible JSON.'
    },
    diagramType: 'sql-library',
    simpleExplanation: 'A Database Index (B-Tree) speeds up read queries by avoiding full table scans at the expense of extra storage and slower writes. `WHERE` filters rows before aggregation; `HAVING` filters aggregated groups produced by `GROUP BY`. NoSQL document databases (like Firebase Firestore) store semi-structured JSON documents in collections, scaling horizontally without rigid SQL schemas.',
    commonMistake: 'Using `WHERE` to filter aggregate functions like `COUNT()` or `SUM()`. Aggregates must be filtered using `HAVING`!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain Database Index (B-Tree structure speeding up SELECT queries).',
        '2. Contrast WHERE vs HAVING (WHERE filters individual rows before GROUP BY; HAVING filters aggregate groups).',
        '3. Contrast SQL vs NoSQL (Relational tables vs flexible NoSQL JSON collections).'
      ],
      exampleScript: 'A Database Index uses B-Trees to accelerate SELECT queries by eliminating full table scans. WHERE filters rows before aggregation, whereas HAVING filters summary groups post-GROUP BY. SQL uses rigid schemas, whereas NoSQL document stores like Firestore manage flexible JSON schemas.',
      durationSec: 31,
      tip: 'Index = fast lookup; WHERE before GROUP BY; HAVING after GROUP BY; NoSQL = flexible JSON.'
    },
    onePictureSummary: ['📖 B-Tree Index', '↓ 🔍 WHERE (Before)', '↓ 📊 GROUP BY + HAVING', '↓ 📄 NoSQL JSON']
  },

  // SECTION VI: BACKEND FRAMEWORKS & WEB SERVICES
  {
    id: 'ch-16-rest-apis-http',
    partId: 'part-6',
    partTitle: 'Section VI: Spring Boot & REST APIs',
    chapterNumber: 16,
    title: 'Chapter 16: REST APIs vs SOAP, HTTP Verbs & Status Codes',
    shortTitle: '16. REST APIs & HTTP',
    icon: '🍽️',
    estimatedMinutes: 8,
    question: 'What is a REST API, how does it differ from SOAP, and what are standard HTTP verbs and status codes?',
    analogyStory: {
      title: 'The Restaurant Waiter & Menu Contract',
      text: 'A REST API is an efficient restaurant waiter. You order food from the menu (HTTP GET to read, POST to create, PUT to update, DELETE to remove), and the waiter brings back a clean plate (JSON payload with 200 OK or 201 Created status). SOAP is an older rigid legal contract wrapped in heavy XML envelopes.',
      takeaway: 'REST uses lightweight JSON over HTTP verbs (GET, POST, PUT, DELETE); SOAP is XML protocol.'
    },
    diagramType: 'rest-waiter',
    simpleExplanation: 'REST (Representational State Transfer) is an architectural style for lightweight web services utilizing standard HTTP verbs (GET, POST, PUT, DELETE) and JSON payloads. SOAP is a strict XML-based protocol. Common HTTP status codes include: `200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`, and `500 Internal Server Error`.',
    commonMistake: 'Using GET requests to create or update server resources. GET must remain safe and read-only!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define REST API (Lightweight HTTP service utilizing JSON payloads).',
        '2. List HTTP Verbs (GET for read, POST for create, PUT for update, DELETE for remove).',
        '3. State Key Status Codes (200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Error).'
      ],
      exampleScript: 'REST is a lightweight architectural style using JSON over standard HTTP. We use GET for reading, POST for creating, PUT for updating, and DELETE for removing resources. Common status codes include 200 OK for successful reads, 201 Created for POSTs, 404 for Not Found, and 500 for internal errors.',
      durationSec: 30,
      tip: 'REST + JSON + GET/POST/PUT/DELETE + 200/201/404/500.'
    },
    onePictureSummary: ['🍽️ REST API Menu', '↓ 📥 GET/POST/PUT/DELETE', '↓ 📄 JSON Payload', '↓ 🏷️ Status Codes (200/201)']
  },
  {
    id: 'ch-17-spring-boot-architecture',
    partId: 'part-6',
    partTitle: 'Section VI: Spring Boot & REST APIs',
    chapterNumber: 17,
    title: 'Chapter 17: Spring Boot 3-Tier Architecture & Microservices API Gateway',
    shortTitle: '17. Spring Boot & Gateway',
    icon: '⚡',
    estimatedMinutes: 9,
    question: 'How is a Spring Boot application structured across 3 tiers, and how does an API Gateway integrate with Microservices?',
    analogyStory: {
      title: 'The Enterprise Factory Assembly Line & Reception Gate',
      text: 'An API Gateway is the security reception desk at the factory entrance: it checks visitor badges (Auth), routes visitors to the right department, and limits traffic. Inside, Spring Boot operates a 3-Tier assembly line: 1) `@RestController` accepts orders, 2) `@Service` executes business logic, 3) `@Repository` queries the database.',
      takeaway: 'Controller routes HTTP requests; Service holds business logic; Repository handles database calls; API Gateway routes microservices.'
    },
    diagramType: 'microservices-gateway',
    simpleExplanation: 'Spring Boot follows 3-Tier Layered Architecture: `@RestController` handles HTTP routing and serialization, `@Service` executes business logic and transaction boundaries (`@Transactional`), and `@Repository` manages database access via Spring Data JPA. In Microservices, an API Gateway (Spring Cloud Gateway) handles reverse proxy routing, rate limiting, and JWT authentication.',
    commonMistake: 'Writing raw database SQL calls inside `@RestController` classes instead of delegating to `@Service` and `@Repository` tiers.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain 3-Tier Layers (Controller for HTTP routing; Service for business logic; Repository for data access).',
        '2. Mention Spring Data JPA & @Transactional (Automating database queries and transaction boundaries).',
        '3. Explain API Gateway (Central entry point routing traffic to decoupled microservices).'
      ],
      exampleScript: 'Our Spring Boot applications follow 3-Tier architecture: RestControllers handle HTTP routing, Service classes execute business logic with @Transactional boundaries, and Repositories manage database access via Spring Data JPA. In microservices, an API Gateway acts as a central entry point for routing and authentication.',
      durationSec: 32,
      tip: 'Controller -> Service -> Repository + API Gateway.'
    },
    onePictureSummary: ['🌐 API Gateway', '↓ ⚡ @RestController', '↓ 🧠 @Service Logic', '↓ 🛢️ @Repository JPA']
  },

  // SECTION VII: AI TOOLS & UNIT TESTING EVIDENCES
  {
    id: 'ch-18-ai-tools-sdlc',
    partId: 'part-7',
    partTitle: 'Section VII: AI Tools & Unit Testing',
    chapterNumber: 18,
    title: 'Chapter 18: Leveraging GenAI Tools (GitHub Copilot & Gemini) in SDLC & Honest Framing',
    shortTitle: '18. GenAI in SDLC',
    icon: '🤖',
    estimatedMinutes: 8,
    question: 'How do you leverage AI/GenAI tools during SDLC, and how should you frame AI usage in technical interviews?',
    analogyStory: {
      title: 'The Co-Pilot Navigation Computer',
      text: 'A pilot doesn\'t let the auto-pilot fly blind into a thunderstorm! The pilot flies the plane, but uses auto-pilot to maintain altitude and check weather charts. In software engineering, YOU own the code logic, but you use GitHub Copilot and Gemini Code Assist to autocomplete boilerplate code, draft unit test templates, generate PR documentation, and analyze stack traces fast.',
      takeaway: 'Always take personal code ownership while explaining responsible AI productivity acceleration.'
    },
    diagramType: 'ai-copilot',
    simpleExplanation: 'Modern enterprise developers leverage AI tools like GitHub Copilot and Gemini Code Assist to enhance productivity across the SDLC: generating boilerplate code, drafting JUnit test cases, writing documentation, and diagnosing runtime errors. In interviews, emphasize that you write and understand all code logic personally, using AI as an efficiency assistant.',
    commonMistake: 'Saying "AI writes all my code". Senior leads expect full technical ownership and deep understanding from candidates!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Assert Code Ownership (I design and write core business logic myself).',
        '2. Highlight AI Acceleration (Using Copilot/Gemini for boilerplate, test generation, and doc drafting).',
        '3. Mention Quality Checks (Reviewing and verifying all AI-assisted code before committing).'
      ],
      exampleScript: 'I personally design and own all core application logic. However, I actively leverage AI tools like GitHub Copilot and Gemini Code Assist to accelerate routine SDLC tasks—such as generating boilerplate code, drafting JUnit test templates, writing PR notes, and analyzing error tracebacks.',
      durationSec: 29,
      tip: 'Personal code ownership + AI productivity assistant.'
    },
    onePictureSummary: ['👨‍💻 Personal Code Control', '↓ 🤖 GitHub Copilot Assist', '↓ 🧪 Test Generation', '↓ ⚡ 2x SDLC Speed']
  },
  {
    id: 'ch-19-unit-testing-evidences',
    partId: 'part-7',
    partTitle: 'Section VII: AI Tools & Unit Testing',
    chapterNumber: 19,
    title: 'Chapter 19: Automated Unit Testing (JUnit 5 & Mockito) & Test Evidences',
    shortTitle: '19. Unit Test Evidences',
    icon: '🧪',
    estimatedMinutes: 8,
    question: 'How do JUnit 5 and Mockito work, and why are Unit Test Evidences mandatory before merging Pull Requests?',
    analogyStory: {
      title: 'The Flight Safety Checklist & Stunt Dummy',
      text: 'Before a commercial flight takes off, pilots don\'t just say "trust me, the engine works!" They run an automated safety checklist (JUnit 5) and attach the test logs. Mockito creates stunt dummies (`@Mock`) to simulate external engine parts so you can test the plane without crashing real hardware!',
      takeaway: 'JUnit 5 executes test assertions; Mockito mocks dependencies; Test Evidences prove code safety.'
    },
    diagramType: 'ai-copilot',
    simpleExplanation: 'Automated unit testing uses JUnit 5 (`@Test`, `assertEquals()`) to verify isolated class methods. Mockito (`@Mock`, `when().thenReturn()`) creates mock dependencies to isolate the class under test without invoking live external databases or APIs. Unit Test Evidences (execution logs showing 0 failures and coverage reports) are mandatory PR artifacts proving quality governance.',
    commonMistake: 'Merging Pull Requests without attaching passing unit test logs or coverage evidences.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain JUnit 5 & Mockito (Writing unit tests and mocking external dependencies).',
        '2. Explain Test Evidences (Capturing test execution logs proving 0 failures).',
        '3. Highlight PR Quality Governance (Attaching evidences to Jira tickets and GitHub PRs).'
      ],
      exampleScript: 'We write unit tests using JUnit 5 and isolate dependencies using Mockito mocks. Before merging any Pull Request, we capture Unit Test Evidences—execution logs showing zero failures and code coverage reports—and attach them to our Jira tickets to guarantee quality governance.',
      durationSec: 30,
      tip: 'JUnit 5 + Mockito + Test Evidences attached to PRs.'
    },
    onePictureSummary: ['🧪 JUnit 5 Tests', '↓ 🎭 Mockito Mocks', '↓ 📄 Test Evidences', '↓ 🔀 PR Quality Gate']
  },

  // SECTION VIII: DEVOPS, CONTAINERS & CLOUD INFRASTRUCTURE
  {
    id: 'ch-20-git-workflows',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 20,
    title: 'Chapter 20: Git Branching & Peer Review Pull Request Workflows',
    shortTitle: '20. Git & PRs',
    icon: '🌿',
    estimatedMinutes: 7,
    question: 'What is feature branching in Git and how does the Pull Request (PR) code review workflow operate?',
    analogyStory: {
      title: 'The Architect\'s Blueprint Copy',
      text: 'You never draw crayon marks directly on an original master blueprint (`main` branch)! Instead, you make a photocopy (`git checkout -b feature/fsm-104`), add your changes, and submit a review request (Pull Request). Two senior architects inspect your drawing, approve it, and then merge it into the master blueprint safely.',
      takeaway: 'Create feature branches for changes; submit Pull Requests for peer code review before merging.'
    },
    diagramType: 'git-docs',
    simpleExplanation: 'Professional Git workflows use Feature Branching (`git checkout -b feature/name`). Developers commit changes locally, push to remote repositories, and open a Pull Request (PR). Senior team members review the code, verify CI build checks pass, and approve the PR before merging into the primary `main` branch.',
    commonMistake: 'Committing code directly to `main` branch without peer code reviews or CI build checks.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. State Branching Strategy (Creating feature branches off main for every Jira ticket).',
        '2. Explain Pull Request (Opening PRs for peer code review and automated CI checks).',
        '3. Conclude with Merge (Merging into main only after approval and passing test suites).'
      ],
      exampleScript: 'We follow feature branching in Git: for every Jira ticket, we create a dedicated feature branch off main. Once development and unit testing are complete, we open a Pull Request for peer code review and automated CI verification before merging into main.',
      durationSec: 28,
      tip: 'Feature branch -> Pull Request -> Peer Review -> CI Check -> Merge.'
    },
    onePictureSummary: ['🌿 Feature Branch', '↓ 📸 Local Commits', '↓ 🔀 Pull Request Review', '↓ 🚀 Main Branch Merge']
  },
  {
    id: 'ch-21-docker-kubernetes-cicd',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 21,
    title: 'Chapter 21: Docker Multi-Stage Builds, Kubernetes & CI/CD Pipelines',
    shortTitle: '21. Docker & K8s',
    icon: '📦',
    estimatedMinutes: 9,
    question: 'How do Docker containerization, Kubernetes orchestration, and CI/CD pipelines work together?',
    analogyStory: {
      title: 'The Shipping Container Cargo Ship & Automated Crane',
      text: 'Docker packages your Java app and JRE runtime into an identical cargo container image. Multi-stage Docker builds use Maven in Stage 1 to compile code, then copy ONLY the final JAR into a lightweight JRE image in Stage 2 to minimize container size. Kubernetes acts as the cargo ship captain: auto-scaling containers in Pods and running Rolling Updates for zero downtime.',
      takeaway: 'Docker packages apps; Multi-stage builds shrink images; Kubernetes orchestrates zero-downtime rolling updates.'
    },
    diagramType: 'docker-ship',
    simpleExplanation: 'Docker containerizes applications with their runtime dependencies. Multi-stage `Dockerfile` builds compile the app with Maven in Stage 1 and copy the JAR artifact into a slim JRE runtime in Stage 2, minimizing container footprint. Kubernetes (K8s) manages Pod clusters, executing automated health checks, auto-scaling, and zero-downtime Rolling Updates. CI/CD pipelines (GitHub Actions/Jenkins) automate building, testing, and deploying images.',
    commonMistake: 'Packaging full JDK build tools into production Docker images instead of using Multi-Stage builds.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain Docker & Multi-Stage Builds (Packaging app into containers and using multi-stage builds to optimize image size).',
        '2. Explain Kubernetes (Orchestrating Pod clusters, auto-scaling, and zero-downtime rolling updates).',
        '3. Explain CI/CD Integration (Automating build, test, and deployment steps on Git commit).'
      ],
      exampleScript: 'We containerize applications using Multi-Stage Docker builds—compiling with Maven in Stage 1 and transferring the artifact into a slim JRE runtime in Stage 2. Kubernetes orchestrates container Pods, delivering auto-scaling and zero-downtime rolling updates. CI/CD pipelines automate building, testing, and deployment.',
      durationSec: 33,
      tip: 'Multi-stage Docker + K8s rolling updates + CI/CD automation.'
    },
    onePictureSummary: ['🐳 Docker Multi-Stage', '↓ 📦 Slim JRE Image', '↓ 🏗️ K8s Rolling Update', '↓ ⚙️ CI/CD Pipeline']
  },

  // SECTION IX: SOLID PRINCIPLES & SYSTEM ARCHITECTURE
  {
    id: 'ch-22-solid-srp',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 22,
    title: 'Chapter 22: SOLID Principle #1 - S: Single Responsibility Principle (SRP)',
    shortTitle: '22. S: SRP',
    icon: '✂️',
    estimatedMinutes: 8,
    question: 'What is the Single Responsibility Principle (SRP) and how do you enforce it in Java classes?',
    analogyStory: {
      title: 'The Swiss Army Knife vs Professional Chef Knives',
      text: 'A cheap Swiss Army knife has a blade, scissors, corkscrew, flashlight, and magnifying glass attached. It does 10 things poorly! A professional chef uses a chef knife for slicing meat and a paring knife for peeling fruit. SRP mandates that a Java class should be a focused professional knife with only one clear reason to change.',
      takeaway: 'A class should have one, and only one, reason to change.'
    },
    diagramType: 'car-abstract',
    simpleExplanation: 'The Single Responsibility Principle (SRP) states that a class should have one, and only one, reason to change. If a class handles database persistence, HTTP routing, and PDF report generation simultaneously, it violates SRP. Splitting it into `UserRepository`, `UserController`, and `PdfReportService` ensures maintainability and easy testing.',
    commonMistake: 'Creating giant "God Classes" containing 3,000 lines of code doing everything in one file.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define SRP (A class should have only one reason to change).',
        '2. Explain violation risk (God classes performing multiple unrelated duties).',
        '3. State solution (Splitting classes by single functional responsibility).'
      ],
      exampleScript: 'The Single Responsibility Principle states that a class should have only one reason to change. Instead of creating a single class that handles database access, business logic, and PDF generation, we split responsibilities into distinct dedicated classes.',
      durationSec: 27,
      tip: 'One class = One reason to change.'
    },
    onePictureSummary: ['✂️ Split God Class', '↓ 📄 UserRepo (DB)', '↓ ⚡ UserService (Logic)', '↓ 🖨️ PdfService (PDF)']
  },
  {
    id: 'ch-23-solid-ocp',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 23,
    title: 'Chapter 23: SOLID Principle #2 - O: Open/Closed Principle (OCP)',
    shortTitle: '23. O: OCP',
    icon: '🔌',
    estimatedMinutes: 8,
    question: 'What is the Open/Closed Principle (OCP) and how do Interfaces enable adding features without modifying code?',
    analogyStory: {
      title: 'The Wall Electrical Socket Adapter',
      text: 'When you buy a new laptop, you don\'t break open the brick walls of your home to solder new copper wires! The wall electrical socket is CLOSED for modification, but OPEN for extension using standard plug adapters. OCP uses Java Interfaces (`PaymentStrategy`) so you can add new payment options (`PayPalPayment`, `CryptoPayment`) without altering existing working code.',
      takeaway: 'Open for extension (new classes/interfaces), closed for modification (don\'t touch working code).'
    },
    diagramType: 'car-abstract',
    simpleExplanation: 'The Open/Closed Principle (OCP) states that software entities should be open for extension, but closed for modification. You should be able to extend system behavior by adding new classes that implement interfaces, rather than modifying existing tested production code.',
    commonMistake: 'Adding endless `if-else` or `switch` statements inside core classes every time a new feature request comes in.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define OCP (Open for extension, closed for modification).',
        '2. Explain the anti-pattern (Modifying core working classes with if-else logic).',
        '3. State the solution (Polymorphic interfaces allowing new strategy classes).'
      ],
      exampleScript: 'The Open/Closed Principle states that classes should be open for extension but closed for modification. We achieve this by using interfaces and polymorphic design patterns, allowing us to add new features by creating new classes without altering existing tested code.',
      durationSec: 28,
      tip: 'Interfaces allow adding features without touching existing tested code.'
    },
    onePictureSummary: ['🔌 Interface Socket', '↓ ➕ Add New Strategy Class', '↓ 🔒 Zero Edits to Core Code', '↓ 🎯 Clean OCP Design']
  },
  {
    id: 'ch-24-solid-lsp',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 24,
    title: 'Chapter 24: SOLID Principle #3 - L: Liskov Substitution Principle (LSP)',
    shortTitle: '24. L: LSP',
    icon: '🦆',
    estimatedMinutes: 8,
    question: 'What is the Liskov Substitution Principle (LSP) and how do unexpected exceptions break inheritance?',
    analogyStory: {
      title: 'The Toy Rubber Duck vs Real Flying Duck',
      text: 'If a child asks for a `Duck` that can swim and quack, and you hand them a battery-powered plastic rubber duck that needs batteries and cannot fly, you broke the contract! If a subclass `Ostrich extends Bird` throws an `UnsupportedOperationException` on `fly()`, it violates LSP because you cannot replace parent `Bird` with child `Ostrich`.',
      takeaway: 'Subclasses must be substitutable for superclasses without breaking program behavior.'
    },
    diagramType: 'family-inherit',
    simpleExplanation: 'The Liskov Substitution Principle (LSP) mandates that objects of a subclass must be completely substitutable for objects of their superclass without breaking program correctness or throwing unexpected runtime exceptions. Subclasses must honor all behavior promises defined by superclasses.',
    commonMistake: 'Creating a subclass that throws `UnsupportedOperationException` for parent interface methods.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define LSP (Subclasses must be substitutable for superclasses without breaking behavior).',
        '2. Explain violation (Subclasses overriding parent methods to throw UnsupportedOperationException).',
        '3. State solution (Proper inheritance hierarchy and interface segregation).'
      ],
      exampleScript: 'The Liskov Substitution Principle mandates that subclasses must be completely substitutable for their superclasses without throwing unexpected exceptions or altering program correctness. Subclasses must fully honor all behavioral contracts of their parent class.',
      durationSec: 27,
      tip: 'Subclasses must honor parent contracts without throwing runtime errors.'
    },
    onePictureSummary: ['🦆 Parent Class Contract', '↓ 🔄 Subclass Substitutability', '↓ 0 Unexpected Exceptions', '↓ Clean LSP']
  },
  {
    id: 'ch-25-solid-isp',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 25,
    title: 'Chapter 25: SOLID Principle #4 - I: Interface Segregation Principle (ISP)',
    shortTitle: '25. I: ISP',
    icon: '✂️',
    estimatedMinutes: 8,
    question: 'What is the Interface Segregation Principle (ISP) and why prefer small focused interfaces over fat interfaces?',
    analogyStory: {
      title: 'The Overcrowded Gym Membership Contract',
      text: 'Imagine signing a basic gym membership contract, but the contract forces you to sign clauses agreeing to pay for scuba diving lessons, horse riding, and helicopter piloting even though you only want to use the treadmill! That is a fat interface. ISP breaks fat contracts into small specific passes (`TreadmillPass`, `ScubaPass`) so clients only sign what they actually use.',
      takeaway: 'Many small specific interfaces are better than one bloated fat interface.'
    },
    diagramType: 'car-abstract',
    simpleExplanation: 'The Interface Segregation Principle (ISP) states that clients should not be forced to depend upon interfaces they do not use. Instead of creating a single "fat" interface containing 30 methods, ISP breaks it into small, specific role interfaces so implementing classes do not write dummy empty method bodies.',
    commonMistake: 'Creating a giant interface with 30 methods, forcing every implementing class to provide empty dummy method bodies.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define ISP (Clients should not be forced to depend on interface methods they do not use).',
        '2. Explain the problem with fat interfaces (Classes implementing forced dummy empty methods).',
        '3. State solution (Splitting giant interfaces into small, role-specific interfaces).'
      ],
      exampleScript: 'The Interface Segregation Principle states that clients should not be forced to depend on interface methods they do not use. Instead of creating one large, bloated interface that forces implementing classes to write dummy empty methods, we split it into smaller, role-specific interfaces.',
      durationSec: 28,
      tip: 'Small, role-specific interfaces > Giant fat interfaces.'
    },
    onePictureSummary: ['✂️ Split Fat Interface', '↓ Small Specific Interfaces', '↓ 0 Dummy Empty Methods', '↓ Clean Implementation']
  },
  {
    id: 'ch-26-solid-dip',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 26,
    title: 'Chapter 26: SOLID Principle #5 - D: Dependency Inversion Principle (DIP)',
    shortTitle: '26. D: DIP',
    icon: '🔌',
    estimatedMinutes: 9,
    question: 'What is Dependency Inversion Principle (DIP) and how does Spring Boot use Dependency Injection (@Autowired)?',
    analogyStory: {
      title: 'The Desk Lamp & Wall Electrical Socket',
      text: 'If a desk lamp\'s electrical cord was soldered directly into copper wires inside your house wall, you could never unplug the lamp to move it to another room! Instead, the lamp plugs into a standard wall socket interface. In Spring Boot, DIP means `@Service` classes depend on a `Repository` interface, while Spring injects (`@Autowired`) the concrete implementation automatically.',
      takeaway: 'Depend on abstract interfaces, not concrete classes. Spring `@Autowired` implements Dependency Injection.'
    },
    diagramType: 'spring-factory',
    simpleExplanation: 'The Dependency Inversion Principle (DIP) states: 1) High-level modules should not depend on low-level modules; both should depend on abstractions. 2) Abstractions should not depend on details; details should depend on abstractions. In Spring Boot, service classes declare interface dependencies, letting Spring inject concrete implementations via `@Autowired` or Constructor Injection.',
    commonMistake: 'Using the `new` keyword directly inside service classes to instantiate hardcoded database dependencies.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define DIP (High-level modules should depend on abstract interfaces, not concrete classes).',
        '2. Explain Spring Boot integration (Using Dependency Injection with @Autowired or Constructor Injection).',
        '3. Highlight testing benefit (Easy mocking with Mockito during unit testing).'
      ],
      exampleScript: 'The Dependency Inversion Principle states that high-level modules should depend on abstractions rather than concrete implementations. In Spring Boot, we implement this using Dependency Injection: service classes depend on interface abstractions, and Spring automatically injects the concrete implementation via Constructor Injection or @Autowired.',
      durationSec: 29,
      tip: 'Depend on interfaces, not concrete implementations + Spring @Autowired.'
    },
    onePictureSummary: ['🔌 Interface Abstraction', '↓ High-Level Service Class', '↓ 💉 Spring @Autowired Injection', '↓ Easy Mocking & Testing']
  },
  {
    id: 'ch-27-lld-hld-microservices',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 27,
    title: 'Chapter 27: LLD vs HLD & Scalable Microservices Caching (Redis)',
    shortTitle: '27. LLD/HLD & Microservices',
    icon: '🌐',
    estimatedMinutes: 8,
    question: 'How do LLD and HLD differ, and how do you design scalable microservices with Redis caching?',
    analogyStory: {
      title: 'The Helicopter City Map & School Hallway Notice Board',
      text: 'High-Level Design (HLD) is the city map from a helicopter: API Gateways and microservices. Low-Level Design (LLD) is the class diagram and table schema. Redis Caching is the hallway notice board: 999 students read the notice in 1 second without disturbing the principal\'s office database!',
      takeaway: 'HLD = Macro services; LLD = Micro classes; Redis = Fast sub-second in-memory caching.'
    },
    diagramType: 'cloud-power',
    simpleExplanation: 'HLD defines macro service architecture and database choices; LLD defines micro class diagrams and database schemas. In microservices architecture, an API Gateway routes incoming traffic, while Redis in-memory caching serves read-heavy queries in sub-second latency.',
    commonMistake: 'Sharing a single database between 10 microservices. Each microservice must own its private database!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Differentiate HLD vs LLD (Macro architecture vs Micro class designs).',
        '2. Explain Microservices & API Gateway (Autonomous services behind a single entry point).',
        '3. Explain Redis Caching (In-memory caching for high-availability read performance).'
      ],
      exampleScript: 'HLD defines macro architecture like API Gateways and microservices, while LLD defines detailed class diagrams and database schemas. For high availability, microservices use Redis in-memory caching to serve frequent read queries with sub-second latency.',
      durationSec: 28,
      tip: 'HLD vs LLD + API Gateway + Redis in-memory caching.'
    },
    onePictureSummary: ['🏙️ HLD Macro System', '↓ 🔌 LLD Micro Classes', '↓ 🌐 API Gateway Entry', '↓ ⚡ Redis Cache']
  },

  // SECTION X: RESUME STORIES & BEHAVIORAL HR
  {
    id: 'ch-28-infor-experience',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 28,
    title: 'Chapter 28: Renuka\'s Infor Experience (Enterprise AI Internship)',
    shortTitle: '28. Infor Internship',
    icon: '🏢',
    estimatedMinutes: 8,
    question: 'Tell me about your 4-month experience at Infor and the technical AI projects you worked on.',
    analogyStory: {
      title: 'The Enterprise AI Inventory Predictor & GPT-4 Assistant',
      text: 'During her 4-month internship at Infor, Renuka worked in the enterprise SaaS engineering group focusing on AI capabilities for Supply Chain and Inventory Management. She worked on two key solutions: 1) Integrating a conversational AI chatbot using GPT-4 for internal enterprise documentation and query routing, and 2) Working with AWS DeepAR time-series forecasting models to predict warehouse inventory demand across thousands of SKUs.',
      takeaway: '4-month Infor internship focusing on AWS DeepAR demand forecasting & GPT-4 RAG chatbot integration.'
    },
    diagramType: 'resume-story',
    simpleExplanation: 'At Infor, Renuka gained hands-on experience in enterprise AI applications for Supply Chain Management. AWS DeepAR is a deep learning time-series model (using Recurrent Neural Networks) that trains a unified model across thousands of related SKUs to predict demand spikes and prevent warehouse stock-outs. The GPT-4 chatbot uses Retrieval-Augmented Generation (RAG) with vector embeddings so users can query inventory reorder thresholds in natural language.',
    commonMistake: 'Giving a vague answer about AI without explaining AWS DeepAR time-series forecasting or GPT-4 RAG vector embeddings.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. High-Level Story: 4-month internship at Infor working in the enterprise SaaS engineering group on AI capabilities for Supply Chain & Inventory Management.',
        '2. Technical Solution #1: AWS DeepAR time-series forecasting models (Amazon SageMaker deep learning RNNs) trained across thousands of SKUs to predict warehouse inventory demand spikes.',
        '3. Technical Solution #2: Conversational AI assistant using GPT-4 and RAG (Retrieval-Augmented Generation) vector embeddings to query inventory reorder policies without hallucinations.'
      ],
      exampleScript: 'During my 4-month internship at Infor, I worked in the enterprise SaaS engineering group focusing on AI capabilities for Supply Chain and Inventory Management. My work centered on two key solutions: 1) Integrating a conversational AI chatbot using GPT-4 and RAG vector embeddings for enterprise query routing, and 2) Working with AWS DeepAR time-series forecasting models on SageMaker to predict multi-region warehouse inventory demand across thousands of SKUs.',
      durationSec: 32,
      tip: 'Mention: 4-month Infor internship + AWS DeepAR time-series forecasting + GPT-4 RAG vector embeddings.'
    },
    onePictureSummary: ['🏢 Infor 4-Month Internship', '↓ 🤖 GPT-4 RAG Vector Assistant', '↓ 📊 AWS DeepAR Time-Series RNN', '↓ Enterprise FSM AI Skills']
  },
  {
    id: 'ch-29-pollaris-story',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 29,
    title: 'Chapter 29: Pollaris Online Polling Platform (Firestore ACID Transactions)',
    shortTitle: '29. Pollaris Project',
    icon: '🗳️',
    estimatedMinutes: 9,
    question: 'Can you explain your project Pollaris, its lifecycle, and how you solved race conditions using Firestore ACID Transactions?',
    analogyStory: {
      title: 'The Atomic Single-Slot Vote Box & Private Security Token',
      text: 'When 100 users try to drop a vote into a box at the exact same millisecond, concurrent writes collide! Pollaris uses Firestore ACID Transactions (`db.runTransaction()`) to lock the target poll document and voter ledger atomically, guaranteeing 100% one-vote-per-user data integrity without duplicate votes. Private polls use unguessable 16-character share URLs and server security rules to verify invitee emails.',
      takeaway: 'Used Firestore ACID Transactions (`db.runTransaction()`) to eliminate vote concurrency race conditions.'
    },
    diagramType: 'pollaris-arch',
    simpleExplanation: 'Pollaris is an enterprise online polling platform built with Next.js 16 and Firebase Firestore. Key technical highlights: 1) Lifecycle: Polls move from Draft (editable) to Open (voting enabled, options locked) to Closed (read-only, auto-closed when end-at passes). 2) Security: Private polls use unguessable 16-character share tokens and server-side rules checking if user email exists in the invitees array. 3) Concurrency: `db.runTransaction()` locks poll documents atomically, enforcing one-vote-per-user constraint and updating aggregate counts without race conditions.',
    commonMistake: 'Forgetting to mention `db.runTransaction()` when asked how race conditions and duplicate voting were prevented.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Project Architecture: Built with Next.js 16 and Firebase Firestore featuring Draft -> Open -> Closed lifecycle states.',
        '2. Concurrency & Integrity: Used db.runTransaction() to lock poll documents atomically, replacing prior user selections and updating aggregate counts without race conditions.',
        '3. Security & Visibility: Private polls use unguessable 16-character share tokens with server-side security rules verifying invited emails. Single-choice sums to 100%; Multi-choice calculates per distinct respondent.'
      ],
      exampleScript: 'Pollaris is an enterprise online polling platform built with Next.js 16 and Firebase Firestore. The core technical challenge was preventing race conditions when multiple users voted simultaneously. I solved this using Firestore ACID transactions via db.runTransaction(), which locks the poll document atomically, enforces the one-vote-per-user constraint, and updates aggregate counts safely. Private polls are secured with unguessable 16-character share URLs and server-side invitee security rules.',
      durationSec: 35,
      tip: 'Problem (concurrent vote race conditions) -> Solution (Firestore ACID transactions via db.runTransaction()).'
    },
    onePictureSummary: ['🗳️ Next.js 16 + Firestore', '↓ 📋 Draft ➔ Open ➔ Closed Lifecycle', '↓ 🔒 db.runTransaction() ACID Lock', '↓ 100% Vote Integrity & Token Security']
  },
  {
    id: 'ch-30-renuka-self-intro',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 30,
    title: 'Chapter 30: Renuka\'s Master Self-Introduction & STAR Method',
    shortTitle: '30. Self Intro & STAR',
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
  },
  {
    id: 'ch-31-mega-mcq-exam',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 31,
    title: 'Chapter 31: Mega 100-Question Interview Master MCQ Exam',
    shortTitle: '31. Mega 100 MCQs Exam',
    icon: '🏆',
    estimatedMinutes: 45,
    question: 'Are you ready to test your total mastery across all 10 sections with 100 high-yield interview MCQs?',
    analogyStory: {
      title: 'The Ultimate Interview Master Examination',
      text: 'Test your knowledge across 100 real-world interview questions sourced from Reddit, Glassdoor, and tech interview panels. Select options A, B, C, or D, receive instant right/wrong feedback, and read exhaustive option-by-option breakdowns (Why A, Why B, Why C, Why D) for 100% interview confidence!',
      takeaway: '100 MCQs covering FSM SaaS, Agile, Java, OOP, DSA, SQL, Spring Boot, AI, DevOps, SOLID, and Projects.'
    },
    diagramType: 'mega-mcq',
    simpleExplanation: 'Chapter 31 contains an interactive 100-question master examination player. Answer questions, track your live score, and read exhaustive option-by-option explanations.',
    commonMistake: 'Rushing through answers without reading the detailed option-by-option explanations.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Continuous Practice: Tested and verified comprehensive technical knowledge across 100 real-world interview MCQs.',
        '2. Technical Breadth: Covered Java, Spring Boot, SQL, DSA, Cloud, SOLID, and Enterprise SaaS.',
        '3. Practical Readiness: Confident in answering theoretical, scenario-based, and project-specific questions.'
      ],
      exampleScript: 'I have tested my technical knowledge across 100 real-world interview questions covering Java, Spring Boot, SQL, DSA, System Design, and Enterprise SaaS. This comprehensive exam has validated my ability to diagnose trade-offs and explain core software engineering concepts clearly.',
      durationSec: 30,
      tip: 'Use this 100-MCQ exam for rapid revision before the live interview.'
    },
    onePictureSummary: ['🏆 100 High-Yield MCQs', '↓ Instant Right/Wrong Feedback', '↓ Exhaustive Option Explanations', '↓ 100% Interview Mastery']
  }
];
