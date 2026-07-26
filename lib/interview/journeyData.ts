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
  script30Sec: {
    answerText: string;
    durationSec: number;
  };
  onePictureSummary: string[];
  interviewTip: string;
}

export interface PartItem {
  id: string;
  partNumber: number;
  title: string;
  description: string;
  icon: string;
}

export const TEXTBOOK_PARTS: PartItem[] = [
  { id: 'part-1', partNumber: 1, title: 'Section I: FSM & Enterprise SaaS Domain', description: 'Enterprise SaaS, Multi-Tenancy, Financials & Supply Management, ERP Systems', icon: '🏢' },
  { id: 'part-2', partNumber: 2, title: 'Section II: Software Engineering & Agile SDLC', description: 'SDLC Phases, Scrum vs Kanban, Sprint Planning, Stand-ups, Retrospectives, PM/QA/UX Teamwork', icon: '🏃' },
  { id: 'part-3', partNumber: 3, title: 'Section III: Java / J2EE & Object-Oriented Principles', description: 'Java, JVM, What is J2EE?, Maven/Gradle, Classes, Encapsulation, Inheritance, Polymorphism, Abstraction', icon: '☕' },
  { id: 'part-4', partNumber: 4, title: 'Section IV: Data Structures & Algorithms (DSA)', description: 'Arrays, Stacks, Queues, HashMaps, Hash Collision Handling, O(1) Complexity', icon: '🧱' },
  { id: 'part-5', partNumber: 5, title: 'Section V: Relational & NoSQL Databases', description: 'Oracle DB, SQL Server, Primary/Foreign Keys, SQL Joins, NoSQL Firestore', icon: '🔗' },
  { id: 'part-6', partNumber: 6, title: 'Section VI: Backend Frameworks & Web Services', description: 'SOAP vs REST APIs, HTTP Verbs, Spring Boot 3-Tier, Spring Data JPA, Spring Security, Postman', icon: '🍽️' },
  { id: 'part-7', partNumber: 7, title: 'Section VII: AI Tools & GenAI in the SDLC Workflow', description: 'GitHub Copilot Code Generation, Prompt Engineering for Debugging, AI Automated Unit Testing', icon: '🤖' },
  { id: 'part-8', partNumber: 8, title: 'Section VIII: DevOps, Containers & Cloud Infrastructure', description: 'Git PR Workflows, Docker, Kubernetes, CI/CD Pipelines, AWS/Azure/GCP Cloud', icon: '📦' },
  { id: 'part-9', partNumber: 9, title: 'Section IX: Resume Project Stories & Behavioral HR', description: 'Pollaris Voting App, Firestore ACID Transactions, Tell Me About Yourself, STAR Method', icon: '🗣️' },
];

export const TEXTBOOK_CHAPTERS: ChapterItem[] = [
  // SECTION I: FSM & ENTERPRISE SAAS DOMAIN
  {
    id: 'ch-1-enterprise-saas',
    partId: 'part-1',
    partTitle: 'Section I: FSM & SaaS',
    chapterNumber: 1,
    title: 'Chapter 1: What is Enterprise SaaS & Multi-Tenancy?',
    shortTitle: '1. Enterprise SaaS',
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
    script30Sec: {
      answerText: 'Enterprise SaaS is software hosted in the cloud and accessed over the web. Multi-tenancy means a single software instance securely serves multiple enterprise customers simultaneously. The architecture shares server infrastructure while mathematically isolating each customer\'s private database records.',
      durationSec: 25
    },
    onePictureSummary: ['🏬 One Cloud App Building', '↓ 🔑 Private Tenant Locks', '↓ ☁️ Web Access', '↓ Secure Multi-Tenancy'],
    interviewTip: 'Shared cloud infrastructure + private tenant data isolation.'
  },
  {
    id: 'ch-2-fsm-domain',
    partId: 'part-1',
    partTitle: 'Section I: FSM & SaaS',
    chapterNumber: 2,
    title: 'Chapter 2: Financials & Supply Management (FSM) Domain',
    shortTitle: '2. FSM Domain',
    icon: '🏢',
    estimatedMinutes: 6,
    question: 'What is Financials & Supply Management (FSM) software and why do global businesses use it?',
    analogyStory: {
      title: 'The Global Toy Store Super-Brain',
      text: 'Imagine a toy company selling teddy bears in 50 countries. Every single day, they must buy soft cotton from suppliers, pay factory workers, ship boxes across oceans, pay taxes in different currencies, and invoice customers. If they wrote all this down on paper, they would make huge mistakes and lose millions of dollars! FSM software acts as a global super-brain that automatically tracks every dollar spent (Financials) and every toy box moving through warehouses (Supply Management) in real time.',
      takeaway: 'FSM software manages company money (Financials) and warehouse product movement (Supply Management).'
    },
    diagramType: 'fsm-store',
    simpleExplanation: 'Financials and Supply Management (FSM) software is an enterprise SaaS platform that automates core business operations. The Financials module tracks general accounting ledgers, customer billing invoices, supplier payments, and multi-currency global tax reporting. The Supply Management module manages raw material purchasing, warehouse inventory levels, order fulfillment, and global shipping logistics.',
    commonMistake: 'Getting lost in complicated accounting rules instead of explaining high-level SaaS features like billing, inventory, and supplier tracking.',
    script30Sec: {
      answerText: 'FSM stands for Financials and Supply Management. It is an enterprise cloud SaaS platform that powers global businesses. It automates financial transactions, ledger accounting, customer invoicing, raw material procurement, warehouse inventory tracking, and supply chain logistics.',
      durationSec: 26
    },
    onePictureSummary: ['💰 Financial Invoices', '↓ 📦 Supply Warehouse', '↓ 📊 Real-time Ledger', '↓ Enterprise FSM SaaS'],
    interviewTip: 'Financial money tracking + Warehouse inventory supply chain.'
  },
  {
    id: 'ch-3-erp-systems',
    partId: 'part-1',
    partTitle: 'Section I: FSM & SaaS',
    chapterNumber: 3,
    title: 'Chapter 3: What is an ERP (Enterprise Resource Planning) System?',
    shortTitle: '3. ERP Systems',
    icon: '🔄',
    estimatedMinutes: 6,
    question: 'What is an ERP system and how does FSM fit into an ERP software suite?',
    analogyStory: {
      title: 'The Human Body Systems',
      text: 'Think of a company like a human body. The HR department is the heart, the sales team is the voice, the finance department is the blood flowing, and the warehouse is the muscles. If the heart doesn\'t talk to the muscles, the body collapses! An ERP (Enterprise Resource Planning) system connects every department into one single database so the brain knows everything happening instantly.',
      takeaway: 'ERP connects Finance, Supply Chain, HR, and Sales into one unified central system.'
    },
    diagramType: 'software-app',
    simpleExplanation: 'ERP stands for Enterprise Resource Planning. It is a large suite of integrated software applications that manages a company\'s entire business operations. FSM (Financials and Supply Management) is the core engine inside an ERP system responsible for tracking money flow, procurement, and physical inventory across global business locations.',
    commonMistake: 'Thinking ERP is a single small mobile app. ERP is a massive enterprise platform.',
    script30Sec: {
      answerText: 'An ERP system is an integrated software suite that connects core business functions—like Finance, Supply Chain, Human Resources, and Sales—into one centralized database. FSM is a key module within ERP that specifically handles global financial operations and supply chain management.',
      durationSec: 26
    },
    onePictureSummary: ['🏢 Finance + HR + Supply', '↓ 🛢️ One Central Database', '↓ 🔄 Real-time Integration', '↓ Enterprise ERP'],
    interviewTip: 'One central database connecting Finance, Supply Chain, and HR.'
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
    script30Sec: {
      answerText: 'SDLC is the structured engineering process used to deliver high-quality software applications. It consists of six sequential phases: Requirements Gathering, System Design, Implementation, Testing, Deployment, and Maintenance.',
      durationSec: 25
    },
    onePictureSummary: ['📝 Requirements', '↓ 📐 Design', '↓ 💻 Coding', '↓ 🧪 Testing', '↓ 🚀 Deployment'],
    interviewTip: 'List all 6 phases clearly: Requirements -> Design -> Coding -> Testing -> Deployment -> Maintenance.'
  },
  {
    id: 'ch-5-scrum-vs-kanban',
    partId: 'part-2',
    partTitle: 'Section II: Software Engineering & Agile SDLC',
    chapterNumber: 5,
    title: 'Chapter 5: Agile Scrum vs Kanban Methodologies',
    shortTitle: '5. Scrum vs Kanban',
    icon: '🏃',
    estimatedMinutes: 7,
    question: 'What is the difference between Agile Scrum and Kanban methodologies?',
    analogyStory: {
      title: 'The Bakery Batch vs The Pizza Counter',
      text: 'Agile Scrum is like a bakery that bakes batches of cookies every 2 weeks. The baker sets a timer for 2 weeks (a Sprint), commits to baking 100 cookies, and shows them to customers at the end. Kanban is like a fast-food pizza counter with a continuous visual board. As soon as a customer orders a slice, a worker slides a card from "To Do" to "In Progress" to "Done" continuously without waiting for a 2-week batch!',
      takeaway: 'Scrum uses fixed 2-week time-boxed sprints; Kanban uses continuous flow visual task boards.'
    },
    diagramType: 'agile-loop',
    simpleExplanation: 'Both Scrum and Kanban are Agile development frameworks. Scrum organizes work into fixed time-boxed periods called Sprints (usually 2 weeks long) with planned backlog commitments. Kanban focuses on continuous delivery using a visual task board (To Do, In Progress, Review, Done) to manage work-in-progress limits without fixed sprint time-boxes.',
    commonMistake: 'Thinking Agile means working without any task boards or plans.',
    script30Sec: {
      answerText: 'In Agile Scrum, development is structured into fixed 2-week time-boxed sprints with planned deliverables and sprint goals. In Kanban, work flows continuously on a visual board, focusing on managing work-in-progress limits and real-time task completion without fixed sprint deadlines.',
      durationSec: 27
    },
    onePictureSummary: ['🏃 Scrum (2-Week Sprints)', '↓ 📋 Kanban (Continuous Board)', '↓ Visual Progress', '↓ Rapid Delivery'],
    interviewTip: 'Scrum = 2-week fixed sprints; Kanban = continuous task board flow.'
  },
  {
    id: 'ch-6-sprint-meetings',
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
    script30Sec: {
      answerText: 'Sprint Planning selects backlog user stories for the upcoming 2-week sprint. Daily Stand-up is a 15-minute meeting where we share yesterday\'s progress, today\'s goals, and any technical blockers. Sprint Retrospective allows the team to reflect on sprint performance and improve engineering workflows.',
      durationSec: 28
    },
    onePictureSummary: ['📋 Sprint Planning', '↓ ⏱️ Daily Stand-up (15m)', '↓ 🏃 2-Week Sprint', '↓ 💡 Retrospective Review'],
    interviewTip: 'Stand-up 3 questions: Yesterday\'s work, Today\'s plan, Blockers.'
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
    script30Sec: {
      answerText: 'Java is an object-oriented, platform-independent language. The Java compiler turns source code into intermediate Bytecode. The Java Virtual Machine (JVM) interprets Bytecode into native machine instructions for Windows, Mac, or Linux, enabling Write Once, Run Anywhere.',
      durationSec: 28
    },
    onePictureSummary: ['📝 Java Code (.java)', '↓ ⚙️ javac Compiler', '↓ 📦 Bytecode (.class)', '↓ ☕ JVM Execution'],
    interviewTip: 'Bytecode + JVM = Platform Independence.'
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
    script30Sec: {
      answerText: 'Core Java (J2SE) provides basic language libraries like Collections and I/O. J2EE (now Jakarta EE) is an enterprise specification extending Java to build large web applications. It includes specifications for Servlets, database transactions, security, and web services.',
      durationSec: 27
    },
    onePictureSummary: ['☕ Core Java (J2SE)', '↓ ➕ Enterprise Spec (J2EE)', '↓ Servlets + Transactions', '↓ Enterprise Web Application'],
    interviewTip: 'Core Java = base language; J2EE = enterprise web & transaction specification.'
  },
  {
    id: 'ch-9-maven-gradle',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 9,
    title: 'Chapter 9: Maven & Gradle (Java Build Automation Tools)',
    shortTitle: '9. Maven & Gradle',
    icon: '🛠️',
    estimatedMinutes: 6,
    question: 'What are Maven and Gradle used for in Java application development?',
    analogyStory: {
      title: 'The Automated Grocery Delivery Bot',
      text: 'When baking a cake, instead of walking to 10 different stores to buy flour, sugar, and chocolate chips yourself, an automated grocery bot reads your shopping list file (`pom.xml`) and fetches all ingredients from the central store automatically! Maven and Gradle read your dependency list, download required Java JAR libraries automatically, compile your code, and build the final executable WAR/JAR file.',
      takeaway: 'Maven & Gradle download external Java library JARs automatically and automate project builds.'
    },
    diagramType: 'software-app',
    simpleExplanation: 'Maven and Gradle are build automation and dependency management tools for Java applications. They use configuration files (`pom.xml` for Maven, `build.gradle` for Gradle) to automatically download external library JARs from central repositories, compile source code, execute unit tests, and package applications into deployable JAR or WAR files.',
    commonMistake: 'Manually downloading `.jar` files and pasting them into folders instead of declaring dependencies in `pom.xml`.',
    script30Sec: {
      answerText: 'Maven and Gradle are Java build automation tools. They manage project dependencies by automatically downloading required library JAR files from central repositories, executing unit test suites, and packaging code into deployable JAR or WAR artifacts.',
      durationSec: 26
    },
    onePictureSummary: ['📋 pom.xml List', '↓ 🌐 Auto Download JARs', '↓ ⚙️ Compile & Test', '↓ 📦 Executable JAR File'],
    interviewTip: 'Automatic dependency downloading + build packaging.'
  },
  {
    id: 'ch-10-classes-objects',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 10,
    title: 'Chapter 10: Classes, Objects & Memory Allocation',
    shortTitle: '10. Classes & Objects',
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
    script30Sec: {
      answerText: 'A Class is a blueprint that defines properties and behaviors. An Object is an actual instance created in heap memory using the new keyword. Local variable references are stored on the Stack, pointing to objects on the Heap.',
      durationSec: 26
    },
    onePictureSummary: ['📐 Class Blueprint', '↓ new Keyword', '↓ 🍪 Heap Object', '↓ Executable Instance'],
    interviewTip: 'Class = Blueprint; Object = Heap Memory Instance.'
  },
  {
    id: 'ch-11-encapsulation',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 11,
    title: 'Chapter 11: Encapsulation & Data Hiding',
    shortTitle: '11. Encapsulation',
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
    script30Sec: {
      answerText: 'Encapsulation is the OOP principle of bundling data and methods inside a single class while restricting direct access to fields. In Java, we declare class variables private and provide public getter and setter methods for safe data access.',
      durationSec: 26
    },
    onePictureSummary: ['📺 TV Remote', '↓ Public Buttons (Getters/Setters)', '↓ Private Wires', '↓ Encapsulation'],
    interviewTip: 'Private variables + public getters/setters = 100% full marks.'
  },
  {
    id: 'ch-12-inheritance',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 12,
    title: 'Chapter 12: Inheritance & Code Reusability',
    shortTitle: '12. Inheritance',
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
    script30Sec: {
      answerText: 'Inheritance is an OOP concept where a subclass inherits properties and methods from a superclass using the extends keyword. It promotes code reusability and establishes an IS-A relationship between classes.',
      durationSec: 25
    },
    onePictureSummary: ['👨‍👩‍👧 Parent Class (Superclass)', '↓ extends Keyword', '↓ 👧 Child Class (Subclass)', '↓ Code Reuse'],
    interviewTip: 'Mention extends keyword and IS-A relationship.'
  },
  {
    id: 'ch-13-polymorphism',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 13,
    title: 'Chapter 13: Polymorphism (Overloading vs Overriding)',
    shortTitle: '13. Polymorphism',
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
    script30Sec: {
      answerText: 'Polymorphism allows one method name to take multiple forms. Method Overloading occurs within the same class with different parameter signatures at compile time. Method Overriding occurs when a subclass redefines a parent class method at runtime.',
      durationSec: 28
    },
    onePictureSummary: ['🎭 Polymorphism', '↓ Overloading (Same Class)', '↓ Overriding (Subclass)', '↓ Flexible Behavior'],
    interviewTip: 'Compile-time (Overloading) vs Runtime (Overriding) distinction is key.'
  },
  {
    id: 'ch-14-abstraction',
    partId: 'part-3',
    partTitle: 'Section III: Java & J2EE',
    chapterNumber: 14,
    title: 'Chapter 14: Abstraction (Abstract Classes vs Interfaces)',
    shortTitle: '14. Abstraction',
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
    script30Sec: {
      answerText: 'Abstraction hides internal implementation details and shows only essential features. In Java, we use Abstract Classes for partial implementation and Interfaces for 100% contract specification.',
      durationSec: 26
    },
    onePictureSummary: ['🚗 Car Steering Wheel', '↓ Essential Controls', '↓ Hidden Engine Complexity', '↓ Abstraction'],
    interviewTip: 'Abstraction hides complexity; Encapsulation protects data.'
  },

  // SECTION IV: DATA STRUCTURES & ALGORITHMS (DSA)
  {
    id: 'ch-15-arrays',
    partId: 'part-4',
    partTitle: 'Section IV: DSA',
    chapterNumber: 15,
    title: 'Chapter 15: Arrays & Memory Contiguity',
    shortTitle: '15. Arrays',
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
    script30Sec: {
      answerText: 'An Array is a linear data structure storing fixed-size elements of the same data type in contiguous memory locations. It provides fast O(1) index access but has a fixed size determined at creation.',
      durationSec: 25
    },
    onePictureSummary: ['🏨 Hotel Room Row', '↓ Contiguous Memory', '↓ O(1) Index Access', '↓ Fixed Size'],
    interviewTip: 'Contiguous memory + O(1) index access.'
  },
  {
    id: 'ch-16-stack-queue',
    partId: 'part-4',
    partTitle: 'Section IV: DSA',
    chapterNumber: 16,
    title: 'Chapter 16: Stacks & Queues (LIFO vs FIFO)',
    shortTitle: '16. Stack & Queue',
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
    script30Sec: {
      answerText: 'A Stack follows Last-In, First-Out principle (LIFO) where elements are added and removed from the top using push and pop. A Queue follows First-In, First-Out principle (FIFO) where elements enter at the rear and exit from the front.',
      durationSec: 25
    },
    onePictureSummary: ['🍽️ Plate Stack (LIFO)', '↓ Push / Pop', '🚶 Ticket Line (FIFO)', '↓ Enqueue / Dequeue'],
    interviewTip: 'LIFO vs FIFO is the fundamental difference.'
  },
  {
    id: 'ch-17-hashmaps-collision',
    partId: 'part-4',
    partTitle: 'Section IV: DSA',
    chapterNumber: 17,
    title: 'Chapter 17: HashMaps & Hash Collision Handling (O(1) Time)',
    shortTitle: '17. HashMaps O(1)',
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
    script30Sec: {
      answerText: 'A HashMap stores Key-Value pairs. It uses key.hashCode() to locate bucket array indices directly in O(1) average time. If two keys collide in the same bucket, Java handles collisions by chaining entries in a LinkedList, converting to a Red-Black Tree if bucket size exceeds 8.',
      durationSec: 28
    },
    onePictureSummary: ['📬 Key.hashCode()', '↓ Direct Array Bucket Index', '↓ O(1) Constant Lookup', '↓ LinkedList Collision Chain'],
    interviewTip: 'Key-Value pairs + O(1) lookup + LinkedList/Tree collision chaining.'
  },

  // SECTION V: RELATIONAL & NOSQL DATABASES
  {
    id: 'ch-18-oracle-sqlserver',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 18,
    title: 'Chapter 18: Relational DBs (Oracle & Microsoft SQL Server)',
    shortTitle: '18. Oracle & SQL Server',
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
    script30Sec: {
      answerText: 'Relational databases like Oracle and SQL Server store structured enterprise data in tables with predefined schemas. They enforce relational integrity using Primary and Foreign Keys, and guarantee ACID properties for financial transactions.',
      durationSec: 26
    },
    onePictureSummary: ['📊 Structured SQL Tables', '↓ 🔑 Primary & Foreign Keys', '↓ 🛡️ ACID Transactions', '↓ Enterprise Oracle/SQL Server'],
    interviewTip: 'Structured tables + Primary/Foreign Keys + ACID transactions.'
  },
  {
    id: 'ch-19-sql-joins',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 19,
    title: 'Chapter 19: SQL Joins (INNER vs LEFT JOIN)',
    shortTitle: '19. SQL Joins',
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
    script30Sec: {
      answerText: 'An INNER JOIN combines records from two tables only where the join condition matches in both tables. A LEFT JOIN returns all records from the left table and matched records from the right table, filling non-matching right columns with NULL.',
      durationSec: 27
    },
    onePictureSummary: ['👟 Left Table', '↓ 👟 Right Table', '↓ INNER JOIN (Matches)', '↓ LEFT JOIN (All Left)'],
    interviewTip: 'Matching rows only (INNER) vs All left rows (LEFT).'
  },
  {
    id: 'ch-20-nosql-firestore',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 20,
    title: 'Chapter 20: NoSQL Databases & Document Storage (Firestore)',
    shortTitle: '20. NoSQL Databases',
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
    script30Sec: {
      answerText: 'SQL databases use rigid tables with predefined schemas and ACID transactions for relational data. NoSQL databases store flexible JSON documents, providing schema agility and easy horizontal scaling for modern cloud applications.',
      durationSec: 26
    },
    onePictureSummary: ['📊 SQL Rigid Tables', '↓ 🗂️ NoSQL JSON Documents', '↓ Schema Flexibility', '↓ Horizontal Scaling'],
    interviewTip: 'Fixed schema tables (SQL) vs Flexible JSON documents (NoSQL).'
  },

  // SECTION VI: BACKEND FRAMEWORKS & WEB SERVICES
  {
    id: 'ch-21-soap-vs-rest',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 21,
    title: 'Chapter 21: Web Services: SOAP vs REST APIs',
    shortTitle: '21. SOAP vs REST',
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
    script30Sec: {
      answerText: 'SOAP is a strict protocol relying on XML format and strict contracts. REST is a lightweight architectural style using standard HTTP methods and JSON payloads, making it faster and preferred for modern web APIs.',
      durationSec: 26
    },
    onePictureSummary: ['✉️ SOAP Wax Envelope (XML)', '↓ 📱 REST Text Message (JSON)', '↓ HTTP Transport', '↓ Modern Web API'],
    interviewTip: 'SOAP = XML protocol; REST = JSON HTTP architectural style.'
  },
  {
    id: 'ch-22-http-methods',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 22,
    title: 'Chapter 22: HTTP Methods & Status Codes',
    shortTitle: '22. HTTP Methods',
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
    script30Sec: {
      answerText: 'REST APIs use HTTP methods: GET to fetch data, POST to create resources, PUT to update resources, and DELETE to remove resources. Key status codes are 200 OK, 201 Created, 404 Not Found, and 500 Internal Error.',
      durationSec: 27
    },
    onePictureSummary: ['GET (Read)', '↓ POST (Create)', '↓ PUT (Update)', '↓ DELETE (Remove)'],
    interviewTip: 'GET/POST/PUT/DELETE + 200/404 status codes.'
  },
  {
    id: 'ch-23-spring-boot',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 23,
    title: 'Chapter 23: Spring Boot & 3-Tier Architecture',
    shortTitle: '23. Spring Boot',
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
    script30Sec: {
      answerText: 'Spring Boot is a Java framework used to build production-ready web services quickly. We use 3-tier architecture to separate concerns: RestController manages HTTP endpoints, Service layer handles business logic, and Repository layer interacts with the database.',
      durationSec: 27
    },
    onePictureSummary: ['🌐 RestController', '↓ 🧠 Service Logic', '↓ 🛢️ Repository DB', '↓ 🔌 Spring Boot'],
    interviewTip: 'Explain Controller -> Service -> Repository flow.'
  },
  {
    id: 'ch-24-spring-data-jpa',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 24,
    title: 'Chapter 24: Spring Data JPA & Hibernate (Object-Relational Mapping)',
    shortTitle: '24. Spring Data JPA',
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
    script30Sec: {
      answerText: 'Spring Data JPA is an ORM abstraction built on Hibernate. It automatically maps Java entity classes to database tables and generates SQL queries from method signatures, eliminating manual JDBC boilerplate code.',
      durationSec: 26
    },
    onePictureSummary: ['☕ Java User Object', '↓ 🔄 Spring Data JPA / Hibernate', '↓ 🛢️ SQL User Table', '↓ Automatic Mapping'],
    interviewTip: 'Object-Relational Mapping (ORM) maps Java Objects to SQL Tables.'
  },
  {
    id: 'ch-25-spring-security-jwt',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 25,
    title: 'Chapter 25: Spring Security & JWT Tokens (API Authentication)',
    shortTitle: '25. Spring Security',
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
    script30Sec: {
      answerText: 'Spring Security manages API authentication and authorization. We use JWT tokens for stateless authentication: upon login, the server issues a signed JWT token that the client sends in the HTTP Authorization header for subsequent API requests.',
      durationSec: 27
    },
    onePictureSummary: ['🔑 User Login', '↓ 🎟️ Signed JWT Token', '↓ 🛡️ Spring Security Filter', '↓ Authorized REST Access'],
    interviewTip: 'Stateless JWT tokens sent in HTTP Authorization header.'
  },
  {
    id: 'ch-26-postman-swagger',
    partId: 'part-6',
    partTitle: 'Section VI: Backend Services',
    chapterNumber: 26,
    title: 'Chapter 26: Postman & Swagger / OpenAPI (API Testing & Docs)',
    shortTitle: '26. Postman & Swagger',
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
    script30Sec: {
      answerText: 'Postman is an API client used to execute and validate HTTP requests during API development. Swagger OpenAPI automatically generates interactive web documentation from Spring Boot annotations for frontend team integration.',
      durationSec: 26
    },
    onePictureSummary: ['🧪 Postman API Testing', '↓ 📄 Swagger Web Docs', '↓ 🌐 Endpoint Verification', '↓ Seamless Integration'],
    interviewTip: 'Postman = endpoint testing; Swagger = automatic API documentation.'
  },

  // SECTION VII: AI TOOLS & GENAI IN THE SDLC WORKFLOW
  {
    id: 'ch-27-ai-codegen',
    partId: 'part-7',
    partTitle: 'Section VII: AI Tools in SDLC',
    chapterNumber: 27,
    title: 'Chapter 27: AI Code Generation (GitHub Copilot)',
    shortTitle: '27. AI Code Generation',
    icon: '🤖',
    estimatedMinutes: 7,
    question: 'How do code assistants like GitHub Copilot accelerate SDLC activities?',
    analogyStory: {
      title: 'The Smart Autocomplete',
      text: 'When typing a text message, your phone suggests the next 3 words. GitHub Copilot analyzes your code context to suggest whole functions and unit test cases, allowing developers to type 50% faster while maintaining full code control!',
      takeaway: 'Copilot suggests boilerplate functions and tests based on code context.'
    },
    diagramType: 'ai-copilot',
    simpleExplanation: 'GitHub Copilot uses machine learning models to provide real-time inline code completions, auto-generate repetitive boilerplate methods, draft unit test cases, and explain unfamiliar syntax within the IDE.',
    commonMistake: 'Accepting AI suggestions blindly without verifying logic and safety.',
    script30Sec: {
      answerText: 'AI code assistants like GitHub Copilot accelerate development by autocompleting boilerplate code, generating unit tests, and suggesting algorithm implementations based on function comments, allowing engineers to focus on higher-level architectural decisions.',
      durationSec: 27
    },
    onePictureSummary: ['📝 Function Comment', '↓ 🤖 Copilot AI Context', '↓ ⚡ Auto-generated Code', '↓ Developer Verification'],
    interviewTip: 'Faster boilerplate generation + human developer verification.'
  },
  {
    id: 'ch-28-prompt-eng',
    partId: 'part-7',
    partTitle: 'Section VII: AI Tools in SDLC',
    chapterNumber: 28,
    title: 'Chapter 28: Prompt Engineering for Debugging & Documentation',
    shortTitle: '28. Prompt Engineering',
    icon: '💡',
    estimatedMinutes: 7,
    question: 'How do you use Prompt Engineering to debug stack traces and generate documentation?',
    analogyStory: {
      title: 'Asking a Specialist Doctor',
      text: 'If you tell a doctor "I feel bad", they can\'t help! But if you state "I have a 101F fever for 2 days after eating seafood", they give exact medicine. Prompt Engineering gives LLMs clear context, error logs, and expected formats to get precise fixes.',
      takeaway: 'Give AI LLMs exact stack traces, code snippets, and desired output rules.'
    },
    diagramType: 'ai-copilot',
    simpleExplanation: 'Prompt Engineering is the practice of crafting clear instructions, error logs, and context parameters for AI models (like ChatGPT or GPT-4) to diagnose stack traces, refactor code, write API documentation, and generate test data.',
    commonMistake: 'Pasting sensitive production secrets or private database passwords into public AI prompts.',
    script30Sec: {
      answerText: 'I leverage prompt engineering by feeding precise error stack traces, relevant code snippets, and structured instructions to LLMs. This allows me to diagnose complex bugs in seconds, draft technical documentation, and generate test data safely.',
      durationSec: 26
    },
    onePictureSummary: ['🔍 Error Stack Trace', '↓ 💡 Precise AI Prompt', '↓ 🛠️ Root Cause Fix', '↓ Clear Documentation'],
    interviewTip: 'Precise context + error logs = accurate AI debugging.'
  },

  // SECTION VIII: DEVOPS, CONTAINERS & CLOUD INFRASTRUCTURE
  {
    id: 'ch-29-git-pull-req',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 29,
    title: 'Chapter 29: Git Version Control & Pull Requests',
    shortTitle: '29. Git Workflows',
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
    script30Sec: {
      answerText: 'My Git workflow starts by pulling the latest main branch, creating a feature branch with git checkout -b, committing incremental atomic changes, pushing remote, and opening a Pull Request for code review before merging.',
      durationSec: 27
    },
    onePictureSummary: ['🌿 Feature Branch', '↓ 📸 Commit Snapshot', '↓ 🔍 Pull Request Review', '↓ 🔀 Merge to Main'],
    interviewTip: 'Feature branching + Pull Request peer review.'
  },
  {
    id: 'ch-30-docker-k8s',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 30,
    title: 'Chapter 30: Docker Containers & Kubernetes',
    shortTitle: '30. Docker & Kubernetes',
    icon: '📦',
    estimatedMinutes: 8,
    question: 'What problem does Docker solve and what is Kubernetes used for?',
    analogyStory: {
      title: 'The Metal Shipping Container',
      text: 'Docker is a sealed metal shipping container packing your Java app, JRE runtime, and configs together so it runs identical on any laptop or AWS cloud! Kubernetes is the harbor crane manager orchestrating 100 containers across servers.',
      takeaway: 'Docker packages the app; Kubernetes manages and scales multi-container deployments.'
    },
    diagramType: 'docker-ship',
    simpleExplanation: 'Docker packages applications and dependencies into isolated, lightweight containers to solve "works on my machine" issues. Kubernetes is a container orchestration platform that automatically scales, heals, and manages multi-container deployments.',
    commonMistake: 'Confusing Docker (container packaging) with Kubernetes (multi-container orchestration).',
    script30Sec: {
      answerText: 'Docker packages applications and runtime dependencies into isolated containers to guarantee environment consistency. Kubernetes orchestrates containerized deployments by handling auto-scaling, load balancing, and self-healing across server clusters.',
      durationSec: 28
    },
    onePictureSummary: ['📦 Docker Container', '↓ 🏗️ Kubernetes Cluster', '↓ Auto-scaling & Healing', '↓ Cloud Deployment'],
    interviewTip: 'Docker = environment consistency; Kubernetes = container cluster orchestration.'
  },
  {
    id: 'ch-31-cloud-aws-gcp',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 31,
    title: 'Chapter 31: Cloud Platforms (AWS, Azure & GCP)',
    shortTitle: '31. Cloud Platforms',
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
    script30Sec: {
      answerText: 'Cloud platforms like AWS, Azure, and GCP offer on-demand infrastructure, managed databases, and scalable computing services. They enable elastic scaling, global availability, and pay-as-you-go cost optimization.',
      durationSec: 26
    },
    onePictureSummary: ['⚡ On-Demand Virtual Servers', '↓ 🌐 Global Availability', '↓ 📈 Elastic Scaling', '↓ Cloud AWS / Azure / GCP'],
    interviewTip: 'On-demand servers + elastic scaling + zero physical hardware maintenance.'
  },

  // SECTION IX: RESUME PROJECT STORIES & BEHAVIORAL HR
  {
    id: 'ch-32-pollaris-story',
    partId: 'part-9',
    partTitle: 'Section IX: Resume & HR',
    chapterNumber: 32,
    title: 'Chapter 32: Pollaris (Cloud-Native Voting App)',
    shortTitle: '32. Pollaris Project',
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
    script30Sec: {
      answerText: 'Pollaris is an enterprise polling platform built with Next.js 16 and Firebase Firestore. The main technical challenge was preventing race conditions when multiple users voted simultaneously. I solved this using Firestore ACID transactions to enforce one-vote-per-user constraint, ensuring 100% data integrity.',
      durationSec: 30
    },
    onePictureSummary: ['🗳️ Pollaris Voting App', '↓ Next.js + Firestore', '↓ ACID Transactions', '↓ 100% Vote Integrity'],
    interviewTip: 'Problem (concurrent vote race conditions) -> Solution (Firestore ACID transactions).'
  },
  {
    id: 'ch-33-self-intro',
    partId: 'part-9',
    partTitle: 'Section IX: Resume & HR',
    chapterNumber: 33,
    title: 'Chapter 33: "Tell Me About Yourself"',
    shortTitle: '33. Self Introduction',
    icon: '🗣️',
    estimatedMinutes: 5,
    question: 'Tell me about yourself and your background.',
    analogyStory: {
      title: 'The 45-Second Technical Elevator Pitch',
      text: 'You enter an elevator with the Hiring Manager. State 3 clear facts before floor 5: 1) ECE degree with passion for software systems, 2) Core hands-on skills (Java, SQL, REST APIs, Cloud, AI), 3) Enthusiasm for building enterprise SaaS products.',
      takeaway: 'Structure: Background ➔ Core Technical Stack ➔ Role Enthusiasm.'
    },
    diagramType: 'star-hr',
    simpleExplanation: 'Keep your self-introduction under 40 seconds. State your name, ECE degree, core technical stack (Java, SQL, REST APIs, Cloud, AI), hands-on project experience, and enthusiasm for the FSM role.',
    commonMistake: 'Talking about high school marks instead of core technical skills.',
    script30Sec: {
      answerText: 'Hello, thank you for this opportunity. I am Renuka. I completed my B.Tech in Electronics and Communication Engineering. I am very passionate about software development and enterprise SaaS solutions. I have hands-on experience in Java, SQL, REST APIs, Cloud, and AI tools. I have built full-stack projects and worked on AI internships. I am excited to join the FSM product engineering team to build scalable enterprise applications.',
      durationSec: 35
    },
    onePictureSummary: ['🎓 ECE Degree', '↓ Java, SQL, REST, AI', '↓ Project Stories', '↓ Ready for FSM Team'],
    interviewTip: 'Keep it technical, structured, and under 40 seconds.'
  }
];
