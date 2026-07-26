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
  { id: 'part-2', partNumber: 2, title: 'Section II: Software Engineering & Agile SDLC', description: 'SDLC 6 Phases, Scrum vs Kanban, WIP Limits, Jira Tickets, Sprint Ceremonies, Teamwork', icon: '🏃' },
  { id: 'part-3', partNumber: 3, title: 'Section III: Java / J2EE & Object-Oriented Principles', description: 'Java, JVM, J2EE, Maven, Classes, Encapsulation, Inheritance, Polymorphism, Abstraction', icon: '☕' },
  { id: 'part-4', partNumber: 4, title: 'Section IV: Data Structures & Algorithms (DSA)', description: 'Arrays, ArrayList vs Vector, Stacks, Queues, HashMaps, hashCode & equals, Trees, Algorithmic Patterns', icon: '🧱' },
  { id: 'part-5', partNumber: 5, title: 'Section V: Relational & NoSQL Databases', description: 'Oracle DB, SQL Server, Primary/Foreign Keys, SQL Joins, Indexing, Sharding, NoSQL Firestore', icon: '🔗' },
  { id: 'part-6', partNumber: 6, title: 'Section VI: Backend Frameworks & Web Services', description: 'SOAP vs REST APIs, HTTP Verbs, Spring Boot 3-Tier, Spring Data JPA, Spring Security, Microservices API Gateway', icon: '🍽️' },
  { id: 'part-7', partNumber: 7, title: 'Section VII: AI Tools & Unit Testing Evidences', description: 'GitHub Copilot, Gemini Assist, Prompt Engineering, Honest AI Framing, JUnit 5 & Mockito Unit Test Evidences', icon: '🤖' },
  { id: 'part-8', partNumber: 8, title: 'Section VIII: DevOps, Containers & Cloud Infrastructure', description: 'Git PR Workflows, Docker Multi-Stage Builds, Kubernetes Pods & Rolling Updates, CI/CD Pipelines, Cloud Scaling', icon: '📦' },
  { id: 'part-9', partNumber: 9, title: 'Section IX: SOLID Principles & System Architecture', description: 'S-O-L-I-D Deep Dives (SRP, OCP, LSP, ISP, DIP), LLD vs HLD, Scalable Microservices & Redis Caching', icon: '📐' },
  { id: 'part-10', partNumber: 10, title: 'Section X: Resume Stories & HR Exam', description: 'Infor AWS DeepAR & GPT-4 RAG Internship Story, Pollaris Firestore ACID Transactions, Self Intro & 100-MCQ Exam', icon: '🗣️' },
];

export const TEXTBOOK_CHAPTERS: ChapterItem[] = [
  // SECTION I: FSM & ENTERPRISE SAAS DOMAIN (1-3)
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
      title: 'The Line Chef in a Global Restaurant',
      text: 'Imagine a very busy restaurant that serves thousands of customers every single day across many different cities. The senior head chef spends time designing the overall menu and deciding what new dishes to offer. However, the restaurant depends on a team of skilled line chefs who work in the kitchen every morning. These line chefs cook fresh meals following clear recipes, check every dish to make sure it is clean and safe to eat, and use modern kitchen tools like automatic choppers to work faster. As an Associate Software Engineer on the FSM team, you are like that talented line chef. Senior architects design the big system, but you write clean Java code, write unit tests to ensure there are no bugs, and use smart tools like GitHub Copilot to build applications that manage money and warehouse inventory for large companies around the world.',
      takeaway: 'Your role is to design, develop, test, and maintain high-quality Java SaaS applications for the FSM product suite.'
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
      title: 'The Modern Apartment Building with Private Locks',
      text: 'Think about a large modern apartment building where hundreds of families live. Instead of every family building their own private water tank, electric generator, and security gate outside, all families share the building\'s main water pipes, electricity grid, and elevator. This saves a huge amount of money and effort for everyone. However, even though families share the same building infrastructure, every apartment has a private front door with a unique key. Family A can never walk into Family B\'s living room or open their private drawers. Enterprise SaaS and Multi-Tenancy work in the exact same way. Instead of every business buying expensive physical servers, hundreds of companies share the same cloud application. But special security rules ensure that Company A can never see or touch the private financial data of Company B. High-availability SLAs guarantee that the building never loses power or water.',
      takeaway: 'Multi-tenancy lets multiple businesses share cloud software while keeping their private data completely separated and secure.'
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
      title: 'The Global Store Super-Brain',
      text: 'Imagine a company that sells bicycles in 20 different countries. Every day, they buy metal pipes from suppliers, pay factory workers, ship boxes across oceans, pay taxes in different currencies, and send bills to customers. If the business owner tried to write down all these numbers in paper notebooks, people would lose papers, make math errors, and run out of stock without knowing it! FSM software acts as a central digital super-brain for the entire company. The Financials part tracks every dollar entering or leaving the company, manages invoices, and handles tax reports. The Supply Management part tracks how many bicycle parts are sitting inside warehouses, when to order more metal from suppliers, and when shipments arrive at stores.',
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

  // SECTION II: SOFTWARE ENGINEERING & AGILE SDLC (4-7)
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
      title: 'Building a Family House from Scratch',
      text: 'Suppose a family wants to build their dream house. They do not start by buying bricks and cementing walls on day one! First, they sit down with an architect and discuss what they need—how many bedrooms, how big the kitchen should be, and what their budget is (Requirements Gathering). Second, the architect draws detailed paper blueprints and structural plans for plumbers and electricians (System Design). Third, builders arrive at the site to lay bricks, pour concrete, and install windows (Coding/Implementation). Fourth, inspectors test the water pipes for leaks and check if the electrical wiring is safe (Testing). Fifth, the family moves into the completed house (Deployment). Sixth, over the coming years, if a roof tile breaks or a faucet leaks, plumbers come to fix it (Maintenance). SDLC is this exact step-by-step master plan for building software without making costly mistakes.',
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
      title: 'The Bakery Batch Oven vs The Car Repair Garage',
      text: 'Think about a bakery versus a car repair garage. A bakery follows Scrum. Every 2 weeks, the bakers sit down, plan what cakes to bake for the upcoming fortnight, bake that batch, show the cakes to customers, and review how to bake better next time. Everything happens in clean 2-week time boxes called Sprints. On the other hand, a car repair garage follows Kanban. Cars arrive continuously throughout the day without waiting for a 2-week schedule. To prevent mechanics from getting stressed and making mistakes, the garage puts up a strict sign: "Maximum 3 cars in the repair bay at one time!" This is a Work-In-Progress (WIP) limit. If 3 cars are already being worked on, new cars wait outside until a mechanic finishes one car. Scrum uses fixed 2-week sprints; Kanban uses continuous flow with WIP limits to stop bottlenecks.',
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
    title: 'Chapter 6: Jira Ticket Tracking & Agile Sprints (Not in Brain!)',
    shortTitle: '6. Jira & Sprints',
    icon: '📋',
    estimatedMinutes: 7,
    question: 'How do software teams track requirements and daily task progress in real projects?',
    analogyStory: {
      title: 'The Hospital Medical File Board',
      text: 'Imagine a doctor working in a busy hospital with 50 patients. The doctor does not try to remember every patient\'s blood test results or medicine schedule in their personal memory! If they relied on memory, they would give the wrong medicine to the wrong patient. Instead, every patient has an official medical folder on a central wall chart. The folder states the patient\'s name, symptom, required treatment, and status (Admitted, In Treatment, Ready for Discharge). In software development, engineers work the exact same way. We NEVER keep tasks or requirements in our memory! Product Managers create digital cards called Jira Tickets (e.g. FSM-104). Each ticket describes what feature to build, acceptance rules, and who is working on it. During 2-week sprints, engineers move tickets across digital boards from To Do to In Progress, Code Review, and Done.',
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
    id: 'ch-7-sprint-meetings',
    partId: 'part-2',
    partTitle: 'Section II: Software Engineering & Agile SDLC',
    chapterNumber: 7,
    title: 'Chapter 7: Sprint Meetings & Cross-Functional Teamwork',
    shortTitle: '7. Sprint Meetings',
    icon: '⏰',
    estimatedMinutes: 7,
    question: 'What happens during Sprint Planning, Daily Stand-up, and Sprint Retrospective meetings?',
    analogyStory: {
      title: 'The Football Team Match Week Routine',
      text: 'Consider how a professional sports team prepares for matches every week. On Monday morning, the coach and players sit in the locker room to study the game strategy and choose which plays they will execute during the week (Sprint Planning). Every morning before practice, players stand together on the field for a quick 5-minute huddle. They answer three simple questions: "What did I accomplish yesterday? What will I work on today? Is anything blocking me?" (Daily Stand-up). Finally, after the match on Sunday, the team watches video replay footage together to celebrate good goals and talk openly about how to improve their defense next week (Sprint Retrospective). These three meetings keep the team organized, focused, and constantly improving.',
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

  // SECTION III: JAVA / J2EE & OBJECT-ORIENTED PRINCIPLES (8-14)
  {
    id: 'ch-8-java-jvm',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 8,
    title: 'Chapter 8: What is Java & the JVM (Java Virtual Machine)?',
    shortTitle: '8. Java & JVM',
    icon: '☕',
    estimatedMinutes: 8,
    question: 'What is Java and how does the JVM achieve "Write Once, Run Anywhere"?',
    analogyStory: {
      title: 'The Universal Secret Code Book & Reading Glasses',
      text: 'Suppose an author writes a wonderful adventure book. If she writes it only in English, people in Japan, France, and Germany cannot read it unless it is translated for each country. Writing a separate book for every country takes a lot of time. Java solves this problem in a very clever way! When you write Java code, the Java compiler translates your code into a universal intermediate language called "Bytecode" (.class file). Then, a special helper program called the Java Virtual Machine (JVM) sits on Windows computers, Mac computers, and Linux servers. The JVM acts like smart reading glasses that instantly reads Bytecode and converts it into local instructions for that specific computer. Because of this, developers write Java code once, and it runs anywhere seamlessly.',
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
    id: 'ch-9-j2ee-maven',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 9,
    title: 'Chapter 9: What is J2EE / Jakarta EE & Maven Build Automation?',
    shortTitle: '9. J2EE & Maven',
    icon: '🏢',
    estimatedMinutes: 7,
    question: 'What is J2EE (Jakarta EE) and how does Maven automate Java dependencies via pom.xml?',
    analogyStory: {
      title: 'The Industrial Train & Automated Part Delivery Robot',
      text: 'Standard Java (J2SE) is like a reliable engine for a small family car. It gives you basic tools like loops, arrays, and math functions. However, if you want to build a massive commercial freight train with 50 carriages, database connections, and web servers, you need extra enterprise tools! J2EE (now Jakarta EE) is that powerful set of enterprise rules for web applications. Now imagine building this train. Instead of searching hardware shops manually to find metal pipes and screws, you give a shopping list (`pom.xml`) to a smart automated robot called Maven. Maven reads your list, connects to central internet warehouses, downloads the exact library files (.jar) you need, and packages your application automatically.',
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
    id: 'ch-10-classes-objects',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 10,
    title: 'Chapter 10: Classes vs Objects & Memory Allocation (Heap vs Stack)',
    shortTitle: '10. Classes & Objects',
    icon: '🍪',
    estimatedMinutes: 7,
    question: 'What is the difference between a Class and an Object, and how are they stored in Heap vs Stack memory?',
    analogyStory: {
      title: 'The Metal Cookie Cutter & Real Chocolate Cookies',
      text: 'Imagine a metal cookie cutter sitting on a kitchen table. The cookie cutter itself is not something you eat; it is simply a metal shape or blueprint. When you press the cookie cutter into dough and bake it in the oven using the `new` keyword, you get a real, delicious chocolate cookie! A Class is that metal cookie cutter—it defines what properties a cookie will have. An Object is the actual baked cookie created in memory. In computer memory, the variable name pointing to the cookie lives on a fast desk called Stack Memory, while the actual sweet cookie dough lives in a big storage room called Heap Memory.',
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
  {
    id: 'ch-11-encapsulation',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 11,
    title: 'Chapter 11: OOP Principle #1 - Encapsulation & Access Modifiers',
    shortTitle: '11. Encapsulation',
    icon: '📺',
    estimatedMinutes: 7,
    question: 'What is Encapsulation in Java and how do private fields and public getters/setters protect data?',
    analogyStory: {
      title: 'The Television Remote Control',
      text: 'Think about how you use a television in your living room. If you want to increase the volume, you press the volume button on the remote control. You do not open the back plastic panel of the TV with a screwdriver and manually touch high-voltage wires inside! If the TV manufacturer left those wires exposed, someone might accidentally shock themselves or ruin the TV. The manufacturer ENCAPSULATES the sensitive wires inside a protective plastic casing and gives you safe, friendly buttons on the outside. In Java programming, encapsulation works the exact same way. We mark class variables as `private` to hide sensitive data, and provide safe `public` getter and setter methods so other code can interact with the data without breaking things.',
      takeaway: 'Encapsulation hides internal data fields using private modifiers and exposes safe public methods.'
    },
    diagramType: 'tv-remote',
    simpleExplanation: 'Encapsulation is the OOP principle of bundling fields and methods inside a class while restricting direct access to object state. Fields are declared `private`, and controlled access is provided via `public` getter and setter methods. This protects object state from invalid mutations.',
    commonMistake: 'Declaring class fields `public` directly, allowing external code to overwrite variables without validation.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Encapsulation (Bundling data and methods while restricting direct access).',
        '2. Explain Implementation (Private fields + Public getters and setters).',
        '3. Highlight Data Protection (Preventing invalid data mutation from external classes).'
      ],
      exampleScript: 'Encapsulation is bundling data fields and methods within a class while restricting direct external access. We declare class fields private and expose public getter and setter methods, ensuring data validation and protecting object state from unauthorized mutation.',
      durationSec: 26,
      tip: 'Private fields + Public getters/setters = Encapsulation.'
    },
    onePictureSummary: ['📺 Encapsulated TV Shell', '↓ 🔒 Private Fields', '↓ 🔘 Public Getters/Setters', '↓ 🛡️ Data Protection']
  },
  {
    id: 'ch-12-inheritance',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 12,
    title: 'Chapter 12: OOP Principle #2 - Inheritance & Code Reusability',
    shortTitle: '12. Inheritance',
    icon: '👨‍👦',
    estimatedMinutes: 7,
    question: 'What is Inheritance in Java and how does the `extends` keyword enable code reusability?',
    analogyStory: {
      title: 'The Passed-Down Family Recipe',
      text: 'Imagine a grandmother who creates a secret recipe for vegetable soup that tastes wonderful. Her daughter learns this recipe, reuses all the grandmother\'s ingredients, and simply adds a spoonful of cream at the end to make cream soup. The daughter did not spend 10 years experimenting from zero to reinvent the soup base—she inherited the working foundation! In Java, inheritance allows a child class (`class AdminUser extends User`) to inherit existing fields and methods from a parent class using the `extends` keyword. This saves time, prevents code duplication, and keeps your project neat.',
      takeaway: 'Subclasses inherit superclass attributes and methods using extends, promoting DRY code.'
    },
    diagramType: 'family-inherit',
    simpleExplanation: 'Inheritance allows a subclass to acquire fields and methods from a superclass using the `extends` keyword. This promotes the DRY (Don\'t Repeat Yourself) principle, allowing shared logic to be written once in a parent class (e.g. `User`) and inherited by child classes (e.g. `AdminUser`). Java supports single class inheritance.',
    commonMistake: 'Thinking Java supports multiple class inheritance (`extends ClassA, ClassB`). Java supports single class inheritance only!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Inheritance (Subclass inheriting fields and methods from superclass).',
        '2. State Keyword (Using extends keyword).',
        '3. Highlight Benefit (Promoting code reusability and DRY principle).'
      ],
      exampleScript: 'Inheritance allows a child class to inherit fields and methods from a parent class using the extends keyword. This promotes code reusability and DRY design, allowing common attributes to be defined in a superclass while child classes add specific functionality.',
      durationSec: 26,
      tip: 'Parent Superclass -> extends -> Child Subclass.'
    },
    onePictureSummary: ['👨 Parent Superclass', '↓ 🔑 extends Keyword', '↓ 👦 Child Subclass', '↓ ♻️ Code Reusability']
  },
  {
    id: 'ch-13-polymorphism',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 13,
    title: 'Chapter 13: OOP Principle #3 - Polymorphism: Overloading vs Overriding',
    shortTitle: '13. Polymorphism',
    icon: '🎭',
    estimatedMinutes: 8,
    question: 'What is Polymorphism in Java, and what is the difference between Method Overloading and Method Overriding?',
    analogyStory: {
      title: 'The Talented Stage Actor',
      text: 'The word Polymorphism comes from Greek, meaning "many forms". Imagine a talented actor working in a theater. On Monday night, he puts on a white coat and plays a doctor. On Tuesday night, he puts on a hat and plays a detective. On Wednesday, he plays a teacher. He is the exact same actor, but he takes on different behaviors depending on the role! Method Overloading is compile-time polymorphism where methods in the SAME class share the same name but accept different parameters (like a doctor treating an adult versus a child). Method Overriding is runtime polymorphism where a child class redefines a method inherited from its parent using `@Override` (like a child actor performing a classic scene in their own unique way).',
      takeaway: 'Overloading = Same class, different parameters (Compile-time); Overriding = Subclass redefines parent method (Runtime).'
    },
    diagramType: 'actor-poly',
    simpleExplanation: 'Polymorphism allows objects to take many forms. Method Overloading is compile-time polymorphism where methods in the SAME class share the same name but have different parameter signatures. Method Overriding is runtime polymorphism where a SUBCLASS redefines a method inherited from a superclass using `@Override`.',
    commonMistake: 'Confusing Overloading (same class, different params) with Overriding (subclass redefining parent method).',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Polymorphism (Ability of methods to take multiple forms).',
        '2. Explain Overloading (Compile-time: same class, different parameter signatures).',
        '3. Explain Overriding (Runtime: subclass redefining superclass method using @Override).'
      ],
      exampleScript: 'Polymorphism enables objects to take on multiple forms. Method Overloading occurs at compile-time when methods in the same class share a name with different parameter signatures. Method Overriding occurs at runtime when a subclass provides a specific implementation for a parent method.',
      durationSec: 29,
      tip: 'Overloading = Same Class + Diff Params; Overriding = Subclass + @Override.'
    },
    onePictureSummary: ['🎭 Polymorphism', '↓ ⚙️ Overloading (Compile-time)', '↓ 🔄 Overriding (Runtime)', '↓ 🎯 Flexible Execution']
  },
  {
    id: 'ch-14-abstraction',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 14,
    title: 'Chapter 14: OOP Principle #4 - Abstraction: Abstract Classes vs Interfaces',
    shortTitle: '14. Abstraction',
    icon: '🚗',
    estimatedMinutes: 8,
    question: 'What is Abstraction in Java, and what is the difference between an Abstract Class and an Interface?',
    analogyStory: {
      title: 'Driving a Car without Inspecting the Pistons',
      text: 'When you sit behind the steering wheel of a car, you turn the key, press the gas pedal, and steer down the road. You do not need to understand how liquid fuel ignites inside engine cylinders or how gears turn inside the gearbox. The steering wheel and pedals form an ABSTRACTION—they hide all the complicated mechanical machinery underneath so you can drive easily. In Java, Abstraction hides complex internal code while showing simple method contracts. Abstract Classes can hold partial code and variables; Interfaces act as pure contracts defining method names that implementing classes must fulfill.',
      takeaway: 'Abstraction hides internal implementation details. Abstract classes hold partial state; Interfaces define pure contracts.'
    },
    diagramType: 'car-abstract',
    simpleExplanation: 'Abstraction hides internal implementation details while exposing essential features to users. In Java, Abstraction is achieved via Abstract Classes (`abstract class`, can hold instance fields and partial implementations) and Interfaces (`interface`, pure contracts defining method signatures). Classes use `implements` for interfaces.',
    commonMistake: 'Trying to instantiate an abstract class or interface directly using `new AbstractClass()`. They can only be extended or implemented!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Abstraction (Hiding internal implementation complexity while exposing clear contracts).',
        '2. Compare Abstract Class vs Interface (Abstract classes hold instance state & partial methods; Interfaces define pure contracts).',
        '3. Highlight Java 8+ Interfaces (Supporting default and static methods).'
      ],
      exampleScript: 'Abstraction hides complex internal implementation details behind clean contracts. Abstract classes can maintain instance variables and partial method implementations, whereas Interfaces define pure behavioral contracts that implementing classes fulfill.',
      durationSec: 28,
      tip: 'Abstract Class = partial state; Interface = pure contract.'
    },
    onePictureSummary: ['🚗 Car Steering Interface', '↓ ⚙️ Hidden Engine Complexity', '↓ 📄 Abstract Class State', '↓ 🔌 Interface Contract']
  },

  // SECTION IV: DATA STRUCTURES & ALGORITHMS (15-18)
  {
    id: 'ch-15-arrays-arraylist',
    partId: 'part-4',
    partTitle: 'Section IV: DSA Deep Dive',
    chapterNumber: 15,
    title: 'Chapter 15: Arrays, ArrayList vs Vector & Dynamic Memory Resizing',
    shortTitle: '15. Arrays & ArrayList',
    icon: '🧱',
    estimatedMinutes: 8,
    question: 'What is the difference between Array, ArrayList, and Vector, and how does dynamic array resizing work?',
    analogyStory: {
      title: 'The Fixed Wooden Shoe Rack vs The Expanding Magic Suitcase',
      text: 'Imagine buying a fixed wooden shoe rack that has exactly 5 slots. If you buy a 6th pair of shoes tomorrow, you cannot squeeze them into the rack—you must throw away the rack and buy a bigger one! That is a standard Java Array. An ArrayList is like a magic expanding suitcase. When you fill all 10 slots inside the suitcase, it automatically creates a new suitcase 50% larger (1.5x growth factor), moves all your clothes into the new suitcase, and discards the old one automatically. You can keep adding items smoothly. Vector is an older version of ArrayList that locks the suitcase every time anyone touches it (synchronized for thread safety).',
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
    id: 'ch-16-stacks-queues-heaps',
    partId: 'part-4',
    partTitle: 'Section IV: DSA Deep Dive',
    chapterNumber: 16,
    title: 'Chapter 16: Stacks (LIFO), Queues (FIFO) & PriorityQueue (Min/Max Heaps)',
    shortTitle: '16. Stacks & Queues',
    icon: '🥞',
    estimatedMinutes: 8,
    question: 'How do Stacks, Queues, and PriorityQueues differ, and what are their real-world enterprise applications?',
    analogyStory: {
      title: 'Cafeteria Trays vs Ticket Line vs Hospital Emergency Room',
      text: 'Picture three real-life situations. First, look at a stack of cafeteria plates on a counter. The dishwasher puts new plates on top, and customers take plates off the top (Last-In, First-Out LIFO Stack). Second, look at a line of people waiting to buy ice cream. The first person who arrived in line gets served first (First-In, First-Out FIFO Queue). Third, look at a hospital emergency room. Even if 10 people with mild headaches arrived first, if an ambulance arrives with a severe patient, the doctors treat the severe patient immediately! That is a PriorityQueue—it uses a Binary Heap to always keep the highest priority item at the top.',
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
    id: 'ch-17-hashmap-hashset-deep-dive',
    partId: 'part-4',
    partTitle: 'Section IV: DSA Deep Dive',
    chapterNumber: 17,
    title: 'Chapter 17: HashMap & HashSet Mechanics: hashCode(), equals() & Treeification (>8)',
    shortTitle: '17. HashMap Deep Dive',
    icon: '📫',
    estimatedMinutes: 9,
    question: 'How does HashMap work internally in Java 8+, and why is overriding hashCode() and equals() critical?',
    analogyStory: {
      title: 'The Post Office Mailboxes and the Smart Postmaster',
      text: 'Imagine a post office with 16 numbered mailboxes on the wall (`Node<K,V>[] table`). When a letter arrives with a person\'s name (Key), the postmaster runs a math formula called `hashCode()` on the name to calculate which mailbox number it belongs in. If two different names produce mailbox #7 (Hash Collision), the postmaster hangs both letters in a line on a string (LinkedList) inside mailbox #7. However, if mailbox #7 gets overcrowded with more than 8 letters, searching down a long string becomes slow. In Java 8+, when a bucket gets more than 8 items, the postmaster transforms the long string into a neat organized tree (Red-Black Tree)! Searching a tree is super fast—it turns slow search back into logarithmic speed. The contract mandates that if two keys are equal, their `hashCode()` MUST match so they go to the same mailbox.',
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
    id: 'ch-18-trees-bst-traversals',
    partId: 'part-4',
    partTitle: 'Section IV: DSA Deep Dive',
    chapterNumber: 18,
    title: 'Chapter 18: Binary Search Trees (BST), Traversals & Algorithmic Patterns',
    shortTitle: '18. Trees & Patterns',
    icon: '🌲',
    estimatedMinutes: 8,
    question: 'What is a Binary Search Tree (BST), what are the tree traversals, and what algorithmic patterns are commonly tested?',
    analogyStory: {
      title: 'The Number Guessing Game & Two-Pointer Runners',
      text: 'Play a guessing game with a friend who chooses a number between 1 and 100. If you guess 50 and she says "too high", you immediately know the secret number is in the lower half (1 to 49). You cut half the numbers away in one second! A Binary Search Tree operates on this exact rule: every left child is smaller than parent, and right child is larger. Walking through the tree In-Order prints all numbers in clean sorted order. Algorithmic patterns like Two Pointers (two runners starting from ends of an array) and Sliding Window (expanding a window frame across items) solve complex array problems efficiently.',
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

  // SECTION V: RELATIONAL & NOSQL DATABASES (19-22)
  {
    id: 'ch-19-oracle-sqlserver-db',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 19,
    title: 'Chapter 19: Oracle DB & SQL Server Enterprise Relational Foundations',
    shortTitle: '19. Relational DBs',
    icon: '🛢️',
    estimatedMinutes: 7,
    question: 'Why do Enterprise SaaS platforms rely on Oracle DB and SQL Server for core data persistence?',
    analogyStory: {
      title: 'The Underground Bank Vault Ledgers',
      text: 'If a bank kept account balances on loose paper sticky notes, a sudden gust of wind would blow away millions of dollars! Oracle DB and SQL Server act as massive underground bank vaults. They organize data into strict tables with fixed rows and columns, enforcing security permissions and ensuring zero data loss even during power outages.',
      takeaway: 'Relational databases store structured enterprise data securely in ACID-compliant tables.'
    },
    diagramType: 'sql-library',
    simpleExplanation: 'Relational Database Management Systems (RDBMS) like Oracle DB and Microsoft SQL Server power enterprise SaaS applications. They organize data into structured tables defined by strict schemas, support complex SQL querying, and guarantee high-availability transactional integrity.',
    commonMistake: 'Storing unstructured JSON data directly into flat SQL string columns without proper normalization.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Identify Enterprise RDBMS (Oracle DB and Microsoft SQL Server).',
        '2. Explain Data Structure (Organizing structured data into schemas, tables, rows, and columns).',
        '3. Highlight Core Value (Providing ACID transaction reliability and high-speed indexing).'
      ],
      exampleScript: 'Enterprise SaaS applications rely on RDBMS platforms like Oracle DB and SQL Server to manage structured transactional data. They enforce strict relational schemas and provide robust ACID compliance for critical financial and inventory records.',
      durationSec: 27,
      tip: 'Enterprise RDBMS = Oracle & SQL Server table persistence.'
    },
    onePictureSummary: ['🛢️ Oracle DB / SQL Server', '↓ 📊 Structured Tables', '↓ 🛡️ ACID Compliance', '↓ ⚡ High-Speed Queries']
  },
  {
    id: 'ch-20-primary-foreign-keys',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 20,
    title: 'Chapter 20: Primary Keys, Foreign Keys & Referential Integrity',
    shortTitle: '20. Keys & Integrity',
    icon: '🔑',
    estimatedMinutes: 7,
    question: 'What is the difference between a Primary Key and a Foreign Key, and what is Referential Integrity?',
    analogyStory: {
      title: 'The Student ID Badge & Library Checkout Slip',
      text: 'Your National ID card number (Primary Key) uniquely identifies you—no two citizens share the same ID number! When you borrow a library book, the librarian stamps your National ID onto the book checkout slip (Foreign Key). This connects the book record to your identity without duplicating your name and address.',
      takeaway: 'Primary Key uniquely identifies a row; Foreign Key connects child table rows to parent table Primary Keys.'
    },
    diagramType: 'sql-library',
    simpleExplanation: 'A Primary Key (PK) is a unique, non-null column that uniquely identifies every record in a table. A Foreign Key (FK) is a column in a child table that points to the Primary Key of a parent table, establishing a relational link. Referential Integrity ensures child FK references always point to valid parent PK records.',
    commonMistake: 'Deleting a parent table row while child table rows still reference its Foreign Key, causing constraint violations.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Primary Key (Unique non-null identifier for table rows).',
        '2. Define Foreign Key (Column in child table referencing parent Primary Key).',
        '3. Explain Referential Integrity (Guaranteeing child references always point to existing parent records).'
      ],
      exampleScript: 'A Primary Key uniquely identifies each record in a database table. A Foreign Key resides in a child table and points to the Primary Key of a parent table. Referential integrity guarantees that child Foreign Key references always match valid parent records.',
      durationSec: 28,
      tip: 'PK = Unique ID; FK = Reference link to Parent PK.'
    },
    onePictureSummary: ['🔑 Primary Key (Users)', '↓ 🔗 Foreign Key (Orders)', '↓ 🛡️ Referential Integrity', '↓ 📊 Linked Relational Data']
  },
  {
    id: 'ch-21-sql-joins-acid',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 21,
    title: 'Chapter 21: SQL Joins (INNER, LEFT, RIGHT, FULL) & ACID Transactions',
    shortTitle: '21. Joins & ACID',
    icon: '🤝',
    estimatedMinutes: 8,
    question: 'How do SQL Joins work, and what are the 4 ACID transaction guarantees in enterprise databases?',
    analogyStory: {
      title: 'Matching Party Guest Lists & The Unbreakable Bank Transfer',
      text: 'Imagine List A (Invited Guests) and List B (Attended Guests). INNER JOIN returns only guests on BOTH lists. LEFT JOIN returns all invited guests, putting NULL next to those who didn\'t show up. ACID transactions guarantee that bank transfers deduct from Account A and credit Account B completely, or cancel 100% on error.',
      takeaway: 'INNER JOIN = Matching keys; LEFT JOIN = All left rows; ACID = Atomicity, Consistency, Isolation, Durability.'
    },
    diagramType: 'sql-library',
    simpleExplanation: 'SQL Joins combine columns from multiple tables: `INNER JOIN` returns matching records, `LEFT JOIN` preserves all left-table rows with NULL fallbacks. ACID transactions guarantee Atomicity (all or nothing), Consistency (schema valid), Isolation (concurrent safety), and Durability (persisted writes).',
    commonMistake: 'Forgetting to include `JOIN` conditions or foreign keys, resulting in disastrous Cartesian products (Cross Joins)!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Differentiate SQL Joins (INNER JOIN matches keys; LEFT JOIN preserves left table rows).',
        '2. Explain ACID Properties (Atomicity, Consistency, Isolation, Durability for reliable transactions).',
        '3. Highlight Transaction Rollback (Undoing changes completely if an exception occurs).'
      ],
      exampleScript: 'INNER JOIN returns matching records between tables, whereas LEFT JOIN preserves all left-table rows with NULL fallbacks. Relational engines enforce ACID properties—Atomicity, Consistency, Isolation, and Durability—to ensure transactions execute completely or roll back safely.',
      durationSec: 30,
      tip: 'PK + FK + INNER/LEFT JOIN + ACID.'
    },
    onePictureSummary: ['🔑 Primary Key', '↓ 🔗 Foreign Key', '↓ 🤝 INNER/LEFT JOIN', '↓ 🛡️ ACID Guarantee']
  },
  {
    id: 'ch-22-indexing-nosql',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 22,
    title: 'Chapter 22: Database Indexing, GROUP BY vs HAVING & NoSQL Firestore',
    shortTitle: '22. Indexing & NoSQL',
    icon: '📖',
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

  // SECTION VI: BACKEND FRAMEWORKS & WEB SERVICES (23-26)
  {
    id: 'ch-23-rest-apis-http',
    partId: 'part-6',
    partTitle: 'Section VI: Spring Boot & REST APIs',
    chapterNumber: 23,
    title: 'Chapter 23: Web Services: SOAP vs REST APIs, HTTP Verbs & Status Codes',
    shortTitle: '23. REST APIs & HTTP',
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
    id: 'ch-24-spring-boot-architecture',
    partId: 'part-6',
    partTitle: 'Section VI: Spring Boot & REST APIs',
    chapterNumber: 24,
    title: 'Chapter 24: Spring Boot 3-Tier Architecture (@RestController, @Service, @Repository)',
    shortTitle: '24. Spring 3-Tier',
    icon: '⚡',
    estimatedMinutes: 8,
    question: 'How is a Spring Boot application structured across 3 tiers using stereotype annotations?',
    analogyStory: {
      title: 'The Enterprise Factory Assembly Line',
      text: 'Spring Boot operates a 3-Tier assembly line: 1) `@RestController` accepts HTTP requests at the front desk, 2) `@Service` executes business logic rules, 3) `@Repository` manages database access via Spring Data JPA.',
      takeaway: 'Controller routes HTTP requests; Service holds business logic; Repository handles database calls.'
    },
    diagramType: 'spring-factory',
    simpleExplanation: 'Spring Boot follows 3-Tier Layered Architecture: `@RestController` handles HTTP routing and serialization, `@Service` executes business logic, and `@Repository` manages database access via Spring Data JPA. Stereotype annotations register classes as Spring Beans for automated Dependency Injection.',
    commonMistake: 'Writing raw database SQL calls inside `@RestController` classes instead of delegating to `@Service` and `@Repository` tiers.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain 3-Tier Layers (Controller for HTTP routing; Service for business logic; Repository for data access).',
        '2. Mention Spring Beans (Stereotype annotations registering components for Dependency Injection).',
        '3. Highlight Separation of Concerns (Keeping HTTP logic separated from database persistence).'
      ],
      exampleScript: 'Our Spring Boot applications follow 3-Tier architecture: RestControllers handle HTTP routing, Service classes execute business logic, and Repositories manage database access via Spring Data JPA, ensuring clean separation of concerns.',
      durationSec: 28,
      tip: 'Controller -> Service -> Repository.'
    },
    onePictureSummary: ['⚡ @RestController', '↓ 🧠 @Service Logic', '↓ 🛢️ @Repository JPA', '↓ 📦 Spring Beans']
  },
  {
    id: 'ch-25-spring-jpa-transactional',
    partId: 'part-6',
    partTitle: 'Section VI: Spring Boot & REST APIs',
    chapterNumber: 25,
    title: 'Chapter 25: Spring Data JPA & @Transactional Database Boundaries',
    shortTitle: '25. JPA & @Transactional',
    icon: '🛢️',
    estimatedMinutes: 8,
    question: 'How does Spring Data JPA eliminate boilerplate SQL, and how does @Transactional enforce ACID boundaries?',
    analogyStory: {
      title: 'The Automated SQL Generator & Safety Net',
      text: 'Instead of writing manual JDBC SQL strings, Spring Data JPA reads method names like `findByEmail(String email)` and generates SQL automatically! `@Transactional` acts as a safety net: if any exception occurs halfway through updating 3 database tables, Spring rolls back all 3 updates automatically.',
      takeaway: 'JpaRepository derives SQL queries from method names; @Transactional rolls back on runtime exceptions.'
    },
    diagramType: 'spring-factory',
    simpleExplanation: 'Spring Data JPA (`JpaRepository`) inspects repository method signatures like `findByStatus()` and derives SQL queries automatically at runtime. `@Transactional` wraps method execution in a database transaction, committing on success or rolling back completely if an unhandled runtime exception occurs.',
    commonMistake: 'Catching runtime exceptions inside `@Transactional` methods with empty try-catch blocks, preventing Spring from detecting failures and rolling back!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain Spring Data JPA (Deriving SQL queries automatically from method signatures).',
        '2. Explain @Transactional (Wrapping business methods in ACID transaction boundaries).',
        '3. Highlight Rollback Behavior (Automatically rolling back database writes on runtime exceptions).'
      ],
      exampleScript: 'Spring Data JPA derives SQL queries automatically from repository method names like findByEmail(). We use @Transactional on service methods to establish ACID transaction boundaries, ensuring all database operations commit together or roll back completely on runtime exceptions.',
      durationSec: 29,
      tip: 'JpaRepository method names + @Transactional rollback safety.'
    },
    onePictureSummary: ['🛢️ JpaRepository', '↓ ⚙️ Auto Derived SQL', '↓ 🛡️ @Transactional Lock', '↓ 🔄 Automatic Rollback']
  },
  {
    id: 'ch-26-microservices-api-gateway',
    partId: 'part-6',
    partTitle: 'Section VI: Spring Boot & REST APIs',
    chapterNumber: 26,
    title: 'Chapter 26: Microservices Architecture & API Gateway Pattern',
    shortTitle: '26. Microservices & Gateway',
    icon: '🌐',
    estimatedMinutes: 9,
    question: 'What is Microservices Architecture and what role does an API Gateway play?',
    analogyStory: {
      title: 'The Reception Desk & Autonomous Department Buildings',
      text: 'Instead of putting 1,000 employees inside one giant monolithic room where a single pipe leak shuts down the whole company, Microservices places each department (Billing, Inventory) in its own autonomous building. An API Gateway is the central reception desk that routes visitors, verifies security tokens, and limits traffic before letting anyone enter.',
      takeaway: 'Microservices decouple systems into autonomous services; API Gateway provides unified entry routing and security.'
    },
    diagramType: 'microservices-gateway',
    simpleExplanation: 'Microservices Architecture breaks monolithic applications into small, autonomous, independently deployable services organized around business capabilities. An API Gateway (Spring Cloud Gateway) acts as a reverse proxy entry point that handles request routing, rate limiting, JWT authentication, and SSL termination for internal services.',
    commonMistake: 'Sharing a single database between 10 microservices. Each microservice MUST own its private database schema!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Microservices (Autonomous, independently deployable services with private databases).',
        '2. Explain API Gateway (Central entry point for routing, authentication, and rate limiting).',
        '3. Highlight Scalability (Scaling high-traffic services independently without affecting others).'
      ],
      exampleScript: 'Microservices architecture decomposes applications into autonomous, independently deployable services that own private databases. An API Gateway acts as a central entry point, handling routing, rate limiting, and JWT authentication across backend services.',
      durationSec: 30,
      tip: 'Decoupled services + Private databases + API Gateway entry.'
    },
    onePictureSummary: ['🌐 API Gateway', '↓ 🔑 Auth & Rate Limit', '↓ ⚡ Autonomous Microservices', '↓ 🛢️ Private Databases']
  },

  // SECTION VII: AI TOOLS & UNIT TESTING EVIDENCES (27-28)
  {
    id: 'ch-27-ai-tools-sdlc',
    partId: 'part-7',
    partTitle: 'Section VII: AI Tools & Unit Testing',
    chapterNumber: 27,
    title: 'Chapter 27: Leveraging GenAI Tools (GitHub Copilot & Gemini) in SDLC & Honest Framing',
    shortTitle: '27. GenAI in SDLC',
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
    id: 'ch-28-unit-testing-evidences',
    partId: 'part-7',
    partTitle: 'Section VII: AI Tools & Unit Testing',
    chapterNumber: 28,
    title: 'Chapter 28: Automated Unit Testing (JUnit 5 & Mockito) & Test Evidences',
    shortTitle: '28. Unit Test Evidences',
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

  // SECTION VIII: DEVOPS, CONTAINERS & CLOUD INFRASTRUCTURE (29-31)
  {
    id: 'ch-29-git-workflows',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 29,
    title: 'Chapter 29: Git Feature Branching & Peer Review Pull Request Workflows',
    shortTitle: '29. Git & PRs',
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
    id: 'ch-30-docker-kubernetes-cicd',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 30,
    title: 'Chapter 30: Docker Multi-Stage Builds & Kubernetes Pod Orchestration',
    shortTitle: '30. Docker & K8s',
    icon: '📦',
    estimatedMinutes: 9,
    question: 'How do Docker containerization and Kubernetes orchestration work together?',
    analogyStory: {
      title: 'The Shipping Container Cargo Ship & Automated Crane',
      text: 'Docker packages your Java app and JRE runtime into an identical cargo container image. Multi-stage Docker builds use Maven in Stage 1 to compile code, then copy ONLY the final JAR into a lightweight JRE image in Stage 2 to minimize container size. Kubernetes acts as the cargo ship captain: auto-scaling containers in Pods and running Rolling Updates for zero downtime.',
      takeaway: 'Docker packages apps; Multi-stage builds shrink images; Kubernetes orchestrates zero-downtime rolling updates.'
    },
    diagramType: 'docker-ship',
    simpleExplanation: 'Docker containerizes applications with their runtime dependencies. Multi-stage `Dockerfile` builds compile the app with Maven in Stage 1 and copy the JAR artifact into a slim JRE runtime in Stage 2, minimizing container footprint. Kubernetes (K8s) manages Pod clusters, executing automated health checks, auto-scaling, and zero-downtime Rolling Updates.',
    commonMistake: 'Packaging full JDK build tools into production Docker images instead of using Multi-Stage builds.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Explain Docker & Multi-Stage Builds (Packaging app into containers and using multi-stage builds to optimize image size).',
        '2. Explain Kubernetes (Orchestrating Pod clusters, auto-scaling, and zero-downtime rolling updates).',
        '3. Explain Runtime Footprint (Shrinking production images by removing build tools).'
      ],
      exampleScript: 'We containerize applications using Multi-Stage Docker builds—compiling with Maven in Stage 1 and transferring the artifact into a slim JRE runtime in Stage 2. Kubernetes orchestrates container Pods, delivering auto-scaling and zero-downtime rolling updates.',
      durationSec: 32,
      tip: 'Multi-stage Docker + K8s rolling updates.'
    },
    onePictureSummary: ['🐳 Docker Multi-Stage', '↓ 📦 Slim JRE Image', '↓ 🏗️ K8s Rolling Update', '↓ 🚀 Zero Downtime']
  },
  {
    id: 'ch-31-cicd-cloud-deployments',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 31,
    title: 'Chapter 31: CI/CD Pipelines & High-Availability Cloud Deployments',
    shortTitle: '31. CI/CD & Cloud',
    icon: '🚀',
    estimatedMinutes: 8,
    question: 'What is a CI/CD pipeline and how are applications deployed to AWS/Azure/GCP cloud environments?',
    analogyStory: {
      title: 'The Automated Inspection Conveyor Belt',
      text: 'CI/CD is an automated conveyor belt. When a developer pushes code, the CI server automatically compiles the code, executes JUnit tests, runs static security scans, and builds a Docker image. If all checks pass, CD automatically deploys the image to cloud server clusters.',
      takeaway: 'CI automates building and testing; CD automates cloud deployments.'
    },
    diagramType: 'ci-cd-pipeline',
    simpleExplanation: 'CI/CD stands for Continuous Integration and Continuous Deployment (or Delivery). CI pipelines (GitHub Actions, Jenkins) trigger on code push to automatically build, run unit test suites, and analyze code coverage. CD pipelines automate deploying validated artifacts to cloud environments (AWS EC2, Elastic Beanstalk, EKS), ensuring fast, reliable releases.',
    commonMistake: 'Manually uploading compiled JAR files via FTP to cloud servers instead of using automated CI/CD pipelines.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define CI (Continuous Integration: automated compiling, testing, and static analysis on code push).',
        '2. Define CD (Continuous Deployment: automated release of validated artifacts to cloud infrastructure).',
        '3. State Tooling (Using GitHub Actions or Jenkins pipelines).'
      ],
      exampleScript: 'CI/CD automates our software release pipeline. Continuous Integration automatically compiles code and executes test suites on every Git commit. Continuous Deployment automatically deploys validated Docker artifacts to cloud environments, ensuring rapid and error-free releases.',
      durationSec: 29,
      tip: 'CI = automated build & test; CD = automated cloud release.'
    },
    onePictureSummary: ['⚙️ Git Push', '↓ 🧪 CI Automated Build/Test', '↓ 📦 Docker Artifact', '↓ 🚀 CD Cloud Release']
  },

  // SECTION IX: SOLID PRINCIPLES & SYSTEM ARCHITECTURE (32-37)
  {
    id: 'ch-32-solid-srp',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 32,
    title: 'Chapter 32: SOLID Principle #1 - S: Single Responsibility Principle (SRP)',
    shortTitle: '32. S: SRP',
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
    id: 'ch-33-solid-ocp',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 33,
    title: 'Chapter 33: SOLID Principle #2 - O: Open/Closed Principle (OCP)',
    shortTitle: '33. O: OCP',
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
    id: 'ch-34-solid-lsp',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 34,
    title: 'Chapter 34: SOLID Principle #3 - L: Liskov Substitution Principle (LSP)',
    shortTitle: '34. L: LSP',
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
    id: 'ch-35-solid-isp',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 35,
    title: 'Chapter 35: SOLID Principle #4 - I: Interface Segregation Principle (ISP)',
    shortTitle: '35. I: ISP',
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
    id: 'ch-36-solid-dip',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 36,
    title: 'Chapter 36: SOLID Principle #5 - D: Dependency Inversion Principle (DIP)',
    shortTitle: '36. D: DIP',
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
    id: 'ch-37-lld-hld-microservices',
    partId: 'part-9',
    partTitle: 'Section IX: SOLID Principles',
    chapterNumber: 37,
    title: 'Chapter 37: LLD vs HLD & Scalable Microservices Caching (Redis)',
    shortTitle: '37. LLD/HLD & Microservices',
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

  // SECTION X: RESUME STORIES & BEHAVIORAL HR (38-40)
  {
    id: 'ch-38-infor-experience',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 38,
    title: 'Chapter 38: Renuka\'s Infor Experience (Enterprise AI Internship)',
    shortTitle: '38. Infor Internship',
    icon: '🏢',
    estimatedMinutes: 8,
    question: 'Tell me about your 4-month experience at Infor and the technical AI projects you worked on.',
    analogyStory: {
      title: 'Predicting Warehouse Demand & The GPT-4 AI Assistant',
      text: 'During her 4-month internship at Infor, Renuka worked in the enterprise SaaS engineering group focusing on AI tools for Supply Chain and Inventory Management. She worked on two key projects. First, she integrated a conversational AI assistant using GPT-4 and Retrieval-Augmented Generation (RAG) vector embeddings. Enterprise workers could ask natural language questions like "What is the reorder threshold for Product SKU-409 in the Chicago warehouse?", and the chatbot searched internal vector documents to return accurate answers without hallucinating. Second, she worked with AWS DeepAR time-series forecasting models on Amazon SageMaker. Traditional models fail when predicting new products with short sales history, but AWS DeepAR trains a deep learning Recurrent Neural Network across thousands of related inventory SKUs simultaneously to predict seasonal demand spikes and prevent warehouse stock-outs.',
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
    id: 'ch-39-pollaris-story',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 39,
    title: 'Chapter 39: Pollaris Online Polling Platform (Firestore ACID Transactions)',
    shortTitle: '39. Pollaris Project',
    icon: '🗳️',
    estimatedMinutes: 9,
    question: 'Can you explain your project Pollaris, its lifecycle, and how you solved race conditions using Firestore ACID Transactions?',
    analogyStory: {
      title: 'The Atomic Ballot Box & Secret Invite Link',
      text: 'Pollaris is an online polling platform built with Next.js 16 and Firebase Firestore. Imagine a voting room where 100 people try to push their vote cards into a single slot at the exact same millisecond. If the ballot box is not locked properly, votes get double-counted or overwritten! Pollaris solves this using Firestore ACID Transactions (`db.runTransaction()`). A transaction locks the poll document and voter ledger atomically in a single step, verifying that the poll status is Open, recording the user\'s vote, and updating aggregate counts without race conditions. Polls follow a clear lifecycle: Draft (creator editing), Open (voting enabled, options locked), and Closed (read-only). Private polls are secured using unguessable 16-character share tokens with server-side security rules checking if the voter\'s email is in the invitees list.',
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
    id: 'ch-40-mega-mcq-exam',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 40,
    title: 'Chapter 40: Mega 100-Question Interview Master MCQ Exam',
    shortTitle: '40. Mega 100 MCQs Exam',
    icon: '🏆',
    estimatedMinutes: 45,
    question: 'Are you ready to test your total mastery across all 10 sections with 100 high-yield interview MCQs?',
    analogyStory: {
      title: 'The Ultimate Interview Master Examination',
      text: 'Test your knowledge across 100 real-world interview questions sourced from Reddit, Glassdoor, and tech interview panels. Select options A, B, C, or D, receive instant right/wrong feedback, and read exhaustive option-by-option breakdowns (Why A, Why B, Why C, Why D) for 100% interview confidence!',
      takeaway: '100 MCQs covering FSM SaaS, Agile, Java, OOP, DSA, SQL, Spring Boot, AI, DevOps, SOLID, and Projects.'
    },
    diagramType: 'mega-mcq',
    simpleExplanation: 'Chapter 40 contains an interactive 100-question master examination player. Answer questions, track your live score, and read exhaustive option-by-option explanations.',
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
