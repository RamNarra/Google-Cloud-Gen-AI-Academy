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
  { id: 'part-1', partNumber: 1, title: 'Section I: FSM SaaS & Enterprise Architecture', description: 'Enterprise SaaS, Financials & Supply Management, Microservices, Security', icon: '🏢' },
  { id: 'part-2', partNumber: 2, title: 'Section II: Software Engineering & Agile SDLC', description: 'SDLC Phases, Agile Scrum/Kanban, Cross-Functional Collaboration', icon: '🏃' },
  { id: 'part-3', partNumber: 3, title: 'Section III: Java/J2EE & Object-Oriented Principles', description: 'Java, JVM, Classes, Encapsulation, Inheritance, Polymorphism, Abstraction', icon: '☕' },
  { id: 'part-4', partNumber: 4, title: 'Section IV: Data Structures & Algorithms (DSA)', description: 'Arrays, Stacks, Queues, HashMaps, O(1) Complexity', icon: '🧱' },
  { id: 'part-5', partNumber: 5, title: 'Section V: Relational & NoSQL Databases', description: 'Oracle, SQL Server, Keys, SQL Joins, Firestore NoSQL', icon: '🔗' },
  { id: 'part-6', partNumber: 6, title: 'Section VI: Backend & Web Services', description: 'HTTP Methods, RESTful APIs, Spring Boot 3-Tier Architecture', icon: '🍽️' },
  { id: 'part-7', partNumber: 7, title: 'Section VII: AI Tools in SDLC Workflows', description: 'Code Generation, Prompt Engineering, Automated Testing, Debugging', icon: '🤖' },
  { id: 'part-8', partNumber: 8, title: 'Section VIII: DevOps, Git & Cloud Infrastructure', description: 'Git Workflows, Docker, Kubernetes, CI/CD Pipelines, AWS/GCP', icon: '📦' },
  { id: 'part-9', partNumber: 9, title: 'Section IX: Resume Project Stories (De-Inflated)', description: 'Pollaris Voting App, Infor AI Internship, IoT Smart Locker', icon: '📖' },
  { id: 'part-10', partNumber: 10, title: 'Section X: HR, Behavioral & Self Introduction', description: 'Tell Me About Yourself, Cross-Functional Collaboration, STAR Method', icon: '🗣️' },
];

export const TEXTBOOK_CHAPTERS: ChapterItem[] = [
  // SECTION I: FSM SAAS & ENTERPRISE ARCHITECTURE
  {
    id: 'ch-1-fsm-domain',
    partId: 'part-1',
    partTitle: 'Section I: FSM SaaS',
    chapterNumber: 1,
    title: 'Chapter 1: What is Enterprise SaaS & FSM Domain?',
    shortTitle: '1. What is FSM SaaS?',
    icon: '🏢',
    estimatedMinutes: 6,
    question: 'What is Financials & Supply Management (FSM) software and why do global businesses use it?',
    analogyStory: {
      title: 'The Global Store Super-Brain',
      text: 'Imagine a global company selling laptops in 50 countries. Every day, they buy screens, pay factory workers, ship boxes, and invoice customers. FSM is the super-brain software that manages all financial money and warehouse supplies in real time on the cloud.',
      takeaway: 'FSM software handles enterprise money (Financials) and warehouse goods (Supply Management).'
    },
    diagramType: 'fsm-store',
    simpleExplanation: 'FSM stands for Financials and Supply Management. It is an enterprise cloud SaaS product that helps global companies track their money, invoices, inventory, and supplier shipments.',
    commonMistake: 'Getting bogged down in complex accounting rules instead of high-level SaaS features.',
    script30Sec: {
      answerText: 'FSM stands for Financials and Supply Management. It is an enterprise-grade SaaS platform that powers global businesses by managing financial transactions, invoicing, inventory tracking, and supply chain logistics in real time.',
      durationSec: 25
    },
    onePictureSummary: ['🏢 Global Business', '↓ Financial Invoices', '↓ Supply Inventory', '↓ Cloud FSM SaaS'],
    interviewTip: 'Enterprise money + warehouse inventory tracking.'
  },
  {
    id: 'ch-2-microservices',
    partId: 'part-1',
    partTitle: 'Section I: FSM SaaS',
    chapterNumber: 2,
    title: 'Chapter 2: Microservices vs Monolith Architecture',
    shortTitle: '2. Microservices Architecture',
    icon: '🧩',
    estimatedMinutes: 7,
    question: 'What is the difference between Monolithic and Microservices architecture?',
    analogyStory: {
      title: 'The Swiss Army Knife vs Separate Power Tools',
      text: 'A Monolith is a giant Swiss Army Knife where all blades share one handle. If the main spring breaks, all tools stop working! Microservices are separate power tools: if the drill breaks, the saw keeps cutting safely.',
      takeaway: 'Microservices break large apps into small, independent services communicating over APIs.'
    },
    diagramType: 'software-app',
    simpleExplanation: 'Monolithic applications package all features into a single codebase. Microservices architecture breaks an application into small, independent services that communicate over HTTP REST APIs, enabling independent deployment and scaling.',
    commonMistake: 'Thinking microservices are easier to manage for tiny apps. Microservices add network complexity.',
    script30Sec: {
      answerText: 'In a Monolithic architecture, all application features share a single codebase and database. In Microservices architecture, the application is divided into small, autonomous services that communicate via REST APIs, allowing independent scaling, deployment, and fault isolation.',
      durationSec: 27
    },
    onePictureSummary: ['📦 Giant Monolith', '↓ 🧩 Independent Services', '↓ REST API Interconnect', '↓ High Availability'],
    interviewTip: 'Independent deployment + fault isolation.'
  },
  {
    id: 'ch-3-security-perf',
    partId: 'part-1',
    partTitle: 'Section I: FSM SaaS',
    chapterNumber: 3,
    title: 'Chapter 3: Performance, Reliability & Security Championing',
    shortTitle: '3. Security & Reliability',
    icon: '🛡️',
    estimatedMinutes: 6,
    question: 'How do you champion performance, reliability, and security across the product lifecycle?',
    analogyStory: {
      title: 'The Bank Vault Doors',
      text: 'A bank doesn\'t install locks after money is stolen! It designs thick vault doors from day one. In enterprise SaaS, security (encryption & access tokens) and reliability (handling traffic spikes) are built into code from the start.',
      takeaway: 'Security and performance must be designed upfront, not added as an afterthought.'
    },
    diagramType: 'software-app',
    simpleExplanation: 'Championing performance, reliability, and security means writing clean code with low memory footprint, implementing proper exception handling, using encrypted data transmission (HTTPS/SSL), and following strict authorization access controls.',
    commonMistake: 'Thinking security is only the responsibility of the DevOps team.',
    script30Sec: {
      answerText: 'Championing reliability and security means writing defensive code with proper error handling, optimizing memory and query performance, enforcing authentication and input validation, and preventing data leaks across development and production.',
      durationSec: 26
    },
    onePictureSummary: ['🛡️ Data Encryption', '↓ Error Handling', '↓ Low Latency', '↓ Reliable Enterprise SaaS'],
    interviewTip: 'Input validation + defensive coding + SSL encryption.'
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
    question: 'What is SDLC and what are its main phases?',
    analogyStory: {
      title: 'Baking a Wedding Cake',
      text: 'Before baking a cake, you ask what flavor the customer wants (Requirements), write the recipe (Design), bake in oven (Coding), taste test (Testing), and serve on table (Deployment)! SDLC is this exact step-by-step process for software.',
      takeaway: 'SDLC guarantees software goes through planning, coding, testing, and release.'
    },
    diagramType: 'sdlc-loop',
    simpleExplanation: 'SDLC stands for Software Development Life Cycle. It defines 6 key stages: Requirements Analysis, Architectural Design, Implementation (Coding), Testing, Deployment, and Maintenance.',
    commonMistake: 'Thinking coding is the first step of SDLC. Requirements come first!',
    script30Sec: {
      answerText: 'SDLC is the structured framework used by engineering teams to build software. It includes six main phases: Requirements Gathering, Architectural Design, Implementation, Testing, Deployment, and ongoing Maintenance.',
      durationSec: 26
    },
    onePictureSummary: ['📝 Requirements', '↓ 📐 Design', '↓ 💻 Coding', '↓ 🧪 Testing', '↓ 🚀 Deployment'],
    interviewTip: 'List all 6 phases clearly: Requirements -> Design -> Coding -> Testing -> Deployment -> Maintenance.'
  },
  {
    id: 'ch-5-agile-scrum',
    partId: 'part-2',
    partTitle: 'Section II: Software Engineering & Agile SDLC',
    chapterNumber: 5,
    title: 'Chapter 5: Agile Scrum & Kanban (Sprints & Stand-ups)',
    shortTitle: '5. Agile & Scrum',
    icon: '🏃',
    estimatedMinutes: 8,
    question: 'What is Agile Scrum and what happens in daily standups and retrospectives?',
    analogyStory: {
      title: 'The Pizza Shop Slices',
      text: 'Waterfall is waiting 4 hours for a 10-course meal. Agile is receiving hot pizza slices every 10 minutes so you can change toppings mid-way! Daily 15-minute standup meetings review: 1) What I did, 2) What I will do, 3) Blockers.',
      takeaway: 'Agile delivers working software in short 2-week iterations called sprints.'
    },
    diagramType: 'agile-loop',
    simpleExplanation: 'Agile Scrum divides development into 2-week sprints. The team holds daily 15-minute standup meetings to answer 3 questions: What did I do yesterday? What will I do today? Are there any blockers? At sprint end, retrospectives review team improvements.',
    commonMistake: 'Thinking Agile means working without any plan or documentation.',
    script30Sec: {
      answerText: 'In Agile Scrum, development is divided into short 2-week sprints. We deliver working software frequently, gather continuous feedback, and hold daily 15-minute standup meetings to track progress and remove blockers.',
      durationSec: 27
    },
    onePictureSummary: ['🏃 2-Week Sprint', '↓ Daily Standup (15m)', '↓ Working Demo', '↓ Continuous Feedback'],
    interviewTip: 'Sprint duration (2 weeks) and Daily Standups (15 mins) are key details.'
  },
  {
    id: 'ch-6-cross-func-team',
    partId: 'part-2',
    partTitle: 'Section II: Software Engineering & Agile SDLC',
    chapterNumber: 6,
    title: 'Chapter 6: Cross-Functional Team Collaboration (PM, QA, UX)',
    shortTitle: '6. Cross-Functional Teams',
    icon: '🤝',
    estimatedMinutes: 6,
    question: 'How do software engineers collaborate with Product Managers, QA, and UX designers?',
    analogyStory: {
      title: 'The Movie Crew Assembly',
      text: 'A director (Product Manager) writes the script story. An art designer (UX) sketches the costumes. The actors (Developers) perform on camera. The film editors (QA) review every scene for flaws. Everyone works together to release a blockbuster!',
      takeaway: 'Engineers build what PM requests, UX designs, and QA validates.'
    },
    diagramType: 'agile-loop',
    simpleExplanation: 'Engineers collaborate with Product Managers to understand feature requirements, UX Designers to implement user-friendly Figma UI mockups, and QA Engineers to ensure test coverage and bug resolution prior to production release.',
    commonMistake: 'Viewing QA as enemies! QA engineers are partners protecting customer quality.',
    script30Sec: {
      answerText: 'I collaborate closely with Product Managers to clarify feature specs, UX designers to implement responsive UI designs accurately, and QA engineers to write testable code and resolve defects quickly before release.',
      durationSec: 26
    },
    onePictureSummary: ['📋 PM Requirements', '↓ 🎨 UX Designs', '↓ 💻 Developer Code', '↓ 🧪 QA Verification'],
    interviewTip: 'Emphasize teamwork and open communication.'
  },

  // SECTION III: JAVA / J2EE & OOP FOUNDATIONS
  {
    id: 'ch-7-java-jvm',
    partId: 'part-3',
    partTitle: 'Section III: Java & OOP',
    chapterNumber: 7,
    title: 'Chapter 7: What is Java & the JVM?',
    shortTitle: '7. Java & JVM',
    icon: '☕',
    estimatedMinutes: 8,
    question: 'What is Java and how does the JVM achieve "Write Once, Run Anywhere"?',
    analogyStory: {
      title: 'The Universal Translator',
      text: 'If a book is written in English, someone in Japan needs a translator. Java compiles code into universal "Bytecode" (.class file). The Java Virtual Machine (JVM) acts as an on-the-spot translator for Windows, Mac, or Linux!',
      takeaway: 'JVM executes Java bytecode on any operating system.'
    },
    diagramType: 'jvm-coffee',
    simpleExplanation: 'Java is an object-oriented language. Java code compiles into Bytecode, which the Java Virtual Machine (JVM) interprets into machine code for any underlying operating system.',
    commonMistake: 'Confusing JVM (runs bytecode) with JDK (development toolkit with compiler).',
    script30Sec: {
      answerText: 'Java is an object-oriented, platform-independent programming language. When we compile Java code, the compiler produces Bytecode. The Java Virtual Machine (JVM) translates Bytecode into native machine instructions on any operating system, enabling Write Once, Run Anywhere.',
      durationSec: 28
    },
    onePictureSummary: ['📝 Java Source (.java)', '↓ ⚙️ javac Compiler', '↓ 📦 Bytecode (.class)', '↓ ☕ JVM Runtime'],
    interviewTip: 'Bytecode + JVM = Platform Independence.'
  },
  {
    id: 'ch-8-classes-objects',
    partId: 'part-3',
    partTitle: 'Section III: Java & OOP',
    chapterNumber: 8,
    title: 'Chapter 8: Classes, Objects & Memory Allocation',
    shortTitle: '8. Classes & Objects',
    icon: '🍪',
    estimatedMinutes: 8,
    question: 'What is a Class and an Object in Java, and where are they stored in memory?',
    analogyStory: {
      title: 'The Metal Cookie Cutter',
      text: 'A CLASS is a metal cookie cutter shape. An OBJECT is the real chocolate cookie stamped out in memory! You can stamp out 100 cookies (objects) from one cutter (class).',
      takeaway: 'Class is the blueprint; Object is the real instance created in memory.'
    },
    diagramType: 'cookie-class',
    simpleExplanation: 'A Class is a blueprint defining fields (data) and methods (behavior). An Object is an actual instance of a class instantiated in Heap Memory using the `new` keyword.',
    commonMistake: 'Thinking a class takes up heap memory before `new` is called.',
    script30Sec: {
      answerText: 'A Class is a blueprint that defines properties and behaviors. An Object is an actual instance created in heap memory using the new keyword. Local variable references are stored on the Stack, pointing to objects on the Heap.',
      durationSec: 26
    },
    onePictureSummary: ['📐 Class Blueprint', '↓ new Keyword', '↓ 🍪 Heap Object', '↓ Executable Instance'],
    interviewTip: 'Blueprint vs Instance is the gold standard answer.'
  },
  {
    id: 'ch-9-encapsulation',
    partId: 'part-3',
    partTitle: 'Section III: Java & OOP',
    chapterNumber: 9,
    title: 'Chapter 9: Encapsulation & Data Hiding',
    shortTitle: '9. Encapsulation',
    icon: '📺',
    estimatedMinutes: 8,
    question: 'What is Encapsulation and how do you achieve it in Java?',
    analogyStory: {
      title: 'The TV Remote Control',
      text: 'When you change TV volume, you press the Volume Up button. You don\'t open the TV with a screwdriver to touch internal wires! The remote control buttons protect the internal wiring.',
      takeaway: 'Encapsulation protects class data by making fields private and providing safe getter/setter buttons.'
    },
    diagramType: 'tv-remote',
    simpleExplanation: 'Encapsulation wraps variables and methods inside a single class while restricting direct access. In Java, we declare class variables as `private` and provide `public` getter and setter methods.',
    commonMistake: 'Thinking encapsulation means hiding whole classes instead of hiding internal variables.',
    script30Sec: {
      answerText: 'Encapsulation is the OOP principle of bundling data and methods inside a single class and hiding internal fields. In Java, we achieve encapsulation by declaring class variables private and providing public getter and setter methods for safe access.',
      durationSec: 26
    },
    onePictureSummary: ['📺 TV Remote', '↓ Public Buttons (Getters/Setters)', '↓ Private Wires', '↓ Encapsulation'],
    interviewTip: 'Private variables + public getters/setters = 100% full marks.'
  },
  {
    id: 'ch-10-inheritance',
    partId: 'part-3',
    partTitle: 'Section III: Java & OOP',
    chapterNumber: 10,
    title: 'Chapter 10: Inheritance & Code Reusability',
    shortTitle: '10. Inheritance',
    icon: '🧬',
    estimatedMinutes: 8,
    question: 'What is Inheritance and how is it implemented in Java?',
    analogyStory: {
      title: 'Parent & Child Attributes',
      text: 'A child inherits eye color and last name from their parents, but also learns to play guitar! In Java, a Child Class inherits fields and methods from a Parent Class using the `extends` keyword.',
      takeaway: 'Inheritance allows child classes to reuse parent code and add new features.'
    },
    diagramType: 'family-inherit',
    simpleExplanation: 'Inheritance allows a subclass to inherit attributes and methods from a superclass using the `extends` keyword, promoting code reusability and establishing an IS-A relationship.',
    commonMistake: 'Thinking Java supports multiple inheritance with classes (Java supports single class inheritance, multiple interface implementation).',
    script30Sec: {
      answerText: 'Inheritance is an OOP concept where a subclass inherits properties and methods from a superclass using the extends keyword. It promotes code reusability and establishes an IS-A relationship between classes.',
      durationSec: 25
    },
    onePictureSummary: ['👨‍👩‍👧 Parent Class (Superclass)', '↓ extends Keyword', '↓ 👧 Child Class (Subclass)', '↓ Code Reuse'],
    interviewTip: 'Mention extends keyword and IS-A relationship.'
  },
  {
    id: 'ch-11-polymorphism',
    partId: 'part-3',
    partTitle: 'Section III: Java & OOP',
    chapterNumber: 11,
    title: 'Chapter 11: Polymorphism (Overloading vs Overriding)',
    shortTitle: '11. Polymorphism',
    icon: '🎭',
    estimatedMinutes: 9,
    question: 'What is Polymorphism and what is the difference between Overloading and Overriding?',
    analogyStory: {
      title: 'The Actor on Stage',
      text: 'An actor plays Batman in a movie and plays a father at home. Same person, different behavior depending on context! In Java, a single method name can exhibit multiple behaviors.',
      takeaway: 'Overloading = Same class (compile-time). Overriding = Child class (runtime).'
    },
    diagramType: 'actor-poly',
    simpleExplanation: 'Polymorphism means "many forms". Method Overloading occurs in the same class (same method name, different parameters). Method Overriding occurs in a child class (redefining parent method).',
    commonMistake: 'Thinking Overloading happens in child classes. Overloading is in the SAME class.',
    script30Sec: {
      answerText: 'Polymorphism allows one interface or method name to take multiple forms. Method Overloading occurs within the same class with different parameter signatures at compile time. Method Overriding occurs when a subclass redefines a parent class method at runtime.',
      durationSec: 28
    },
    onePictureSummary: ['🎭 Polymorphism', '↓ Overloading (Same Class)', '↓ Overriding (Subclass)', '↓ Flexible Behavior'],
    interviewTip: 'Compile-time (Overloading) vs Runtime (Overriding) distinction is key.'
  },
  {
    id: 'ch-12-abstraction',
    partId: 'part-3',
    partTitle: 'Section III: Java & OOP',
    chapterNumber: 12,
    title: 'Chapter 12: Abstraction (Abstract Classes vs Interfaces)',
    shortTitle: '12. Abstraction',
    icon: '🚗',
    estimatedMinutes: 9,
    question: 'What is Abstraction and how does an Abstract Class differ from an Interface?',
    analogyStory: {
      title: 'The Car Steering Wheel',
      text: 'When driving a car, you turn the steering wheel. You don\'t need to know how power steering fluid moves inside the engine block! Abstraction shows essential features while hiding implementation details.',
      takeaway: 'Interface = 100% abstract contract. Abstract Class = Partial contract with shared code.'
    },
    diagramType: 'car-abstract',
    simpleExplanation: 'Abstraction hides internal implementation details and shows only essential functionality to the user using Abstract Classes and Interfaces.',
    commonMistake: 'Confusing Abstraction (hiding implementation complexity) with Encapsulation (hiding data variables).',
    script30Sec: {
      answerText: 'Abstraction is the OOP principle of hiding internal implementation details and showing only essential features. In Java, we achieve abstraction using Abstract Classes for partial implementation and Interfaces for 100% contract specification.',
      durationSec: 26
    },
    onePictureSummary: ['🚗 Car Steering Wheel', '↓ Essential Controls', '↓ Hidden Engine Complexity', '↓ Abstraction'],
    interviewTip: 'Abstraction hides complexity; Encapsulation protects data.'
  },

  // SECTION IV: DATA STRUCTURES & ALGORITHMS (DSA)
  {
    id: 'ch-13-arrays',
    partId: 'part-4',
    partTitle: 'Section IV: DSA',
    chapterNumber: 13,
    title: 'Chapter 13: Arrays & Memory Contiguity',
    shortTitle: '13. Arrays',
    icon: '📦',
    estimatedMinutes: 7,
    question: 'What is an Array and what are its advantages and limitations?',
    analogyStory: {
      title: 'The Row of Hotel Rooms',
      text: 'An Array is a row of 10 numbered hotel rooms side by side. If you know room index 4, you can walk straight to room 4 instantly in O(1) time! But you cannot expand the hotel row dynamically once built.',
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
    id: 'ch-14-stack-queue',
    partId: 'part-4',
    partTitle: 'Section IV: DSA',
    chapterNumber: 14,
    title: 'Chapter 14: Stacks & Queues (LIFO vs FIFO)',
    shortTitle: '14. Stack & Queue',
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
    id: 'ch-15-hashmaps',
    partId: 'part-4',
    partTitle: 'Section IV: DSA',
    chapterNumber: 15,
    title: 'Chapter 15: HashMaps & O(1) Time Complexity',
    shortTitle: '15. HashMaps O(1)',
    icon: '📬',
    estimatedMinutes: 8,
    question: 'How does a HashMap work internally and what is its time complexity?',
    analogyStory: {
      title: 'Apartment Mailboxes',
      text: 'In an apartment building with 100 mailboxes, each mailbox has a key number like "Box 4B". Instead of opening 100 doors to find your mail, you go straight to Box 4B instantly!',
      takeaway: 'HashMap retrieves values by unique key in O(1) constant time.'
    },
    diagramType: 'hashmap-mail',
    simpleExplanation: 'A HashMap stores data in Key-Value pairs. Java uses the key\'s `hashCode()` to calculate the storage bucket index directly, achieving average O(1) lookup time.',
    commonMistake: 'Saying HashMap search takes O(N) linear time like a loop.',
    script30Sec: {
      answerText: 'A HashMap stores data in Key-Value pairs. It uses the key\'s hashCode to locate array bucket indices directly. Its average time complexity for insertion, lookup, and deletion is O(1) constant time.',
      durationSec: 26
    },
    onePictureSummary: ['📬 Mailbox Key', '↓ hashCode() Index', '↓ Direct Bucket', '↓ O(1) Fast Time'],
    interviewTip: 'Key-Value pairs + O(1) time complexity.'
  },

  // SECTION V: RELATIONAL & NOSQL DATABASES
  {
    id: 'ch-16-relational-keys',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 16,
    title: 'Chapter 16: Relational DBs (Oracle/SQL Server) & Keys',
    shortTitle: '16. Relational DB Keys',
    icon: '🔑',
    estimatedMinutes: 8,
    question: 'What is a Primary Key and Foreign Key in relational databases like Oracle or SQL Server?',
    analogyStory: {
      title: 'Student ID Badges & Classrooms',
      text: 'Every student wears a unique ID badge (Primary Key). On the badge, it says "Room 5" (Foreign Key). Foreign Key links the student table to the classroom table!',
      takeaway: 'Primary Key uniquely identifies a row. Foreign Key links to another table.'
    },
    diagramType: 'sql-library',
    simpleExplanation: 'A Primary Key uniquely identifies each row in a database table. A Foreign Key is a field in one table pointing to the Primary Key in another table to establish relationships.',
    commonMistake: 'Thinking Foreign Key values must be unique in every row.',
    script30Sec: {
      answerText: 'A Primary Key uniquely identifies a record within a table and cannot contain null values. A Foreign Key is a reference field that points to the Primary Key of another table, creating relational links between tables.',
      durationSec: 25
    },
    onePictureSummary: ['🔑 Primary Key (Unique)', '↓ Foreign Key (Reference)', '↓ Relational Tables', '↓ Data Integrity'],
    interviewTip: 'PK = unique row ID; FK = reference to another table.'
  },
  {
    id: 'ch-17-sql-joins',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 17,
    title: 'Chapter 17: SQL Joins (INNER vs LEFT JOIN)',
    shortTitle: '17. SQL Joins',
    icon: '🔗',
    estimatedMinutes: 9,
    question: 'What is the difference between INNER JOIN and LEFT JOIN in SQL?',
    analogyStory: {
      title: 'Matching Pair of Shoes',
      text: 'INNER JOIN is combining left and right shoes only when a matching pair exists! LEFT JOIN keeps ALL left shoes, even if some don\'t have a matching right shoe.',
      takeaway: 'INNER JOIN = Matching rows only. LEFT JOIN = All left rows + matching right rows.'
    },
    diagramType: 'sql-library',
    simpleExplanation: 'SQL JOIN combines rows from two tables using a common key. `INNER JOIN` returns matching records in both tables; `LEFT JOIN` returns all records from the left table plus matched records from the right table.',
    commonMistake: 'Confusing LEFT JOIN with FULL OUTER JOIN.',
    script30Sec: {
      answerText: 'An INNER JOIN combines records from two tables only where the join condition matches in both tables. A LEFT JOIN returns all records from the left table and the matched records from the right table, filling non-matching right columns with NULL.',
      durationSec: 27
    },
    onePictureSummary: ['👟 Left Table', '↓ 👟 Right Table', '↓ INNER JOIN (Matches)', '↓ LEFT JOIN (All Left)'],
    interviewTip: 'Matching rows only (INNER) vs All left rows (LEFT).'
  },
  {
    id: 'ch-18-nosql-firestore',
    partId: 'part-5',
    partTitle: 'Section V: Databases',
    chapterNumber: 18,
    title: 'Chapter 18: NoSQL Databases & Document Storage',
    shortTitle: '18. NoSQL Databases',
    icon: '🗂️',
    estimatedMinutes: 7,
    question: 'How do NoSQL databases differ from SQL relational databases?',
    analogyStory: {
      title: 'The Rigid Grid vs Flexible Folders',
      text: 'A SQL database is like a strict Excel table where every row must fit fixed columns. A NoSQL database (like Firestore or MongoDB) is like a drawer of JSON document folders where each folder can hold different fields without schema locks.',
      takeaway: 'SQL = Fixed relational tables. NoSQL = Flexible JSON document collections.'
    },
    diagramType: 'sql-library',
    simpleExplanation: 'NoSQL databases store unstructured or semi-structured data as JSON documents or Key-Value pairs without fixed table schemas, allowing horizontal scaling and flexible schema iterations.',
    commonMistake: 'Thinking NoSQL is always better than SQL. SQL is preferred for complex transactional relational data.',
    script30Sec: {
      answerText: 'SQL databases use rigid tables with predefined schemas and ACID transactions for relational data. NoSQL databases store flexible JSON documents, providing schema agility and easy horizontal scaling for modern cloud applications.',
      durationSec: 26
    },
    onePictureSummary: ['📊 SQL Rigid Tables', '↓ 🗂️ NoSQL JSON Documents', '↓ Schema Flexibility', '↓ Horizontal Scaling'],
    interviewTip: 'Fixed schema tables (SQL) vs Flexible JSON documents (NoSQL).'
  },

  // SECTION VI: BACKEND & WEB SERVICES
  {
    id: 'ch-19-rest-apis',
    partId: 'part-6',
    partTitle: 'Section VI: Backend & Web Services',
    chapterNumber: 19,
    title: 'Chapter 19: REST APIs & HTTP Methods',
    shortTitle: '19. REST APIs',
    icon: '🍽️',
    estimatedMinutes: 9,
    question: 'What is a REST API and what are common HTTP methods and status codes?',
    analogyStory: {
      title: 'The Restaurant Waiter',
      text: 'You sit at a restaurant. You read the menu (API doc). You give your order to the waiter (REST API). The waiter takes order to kitchen (Database), gets cooked food, and brings it to your table in a clean tray (JSON payload)!',
      takeaway: 'REST API acts as a middleman waiter delivering JSON data over HTTP.'
    },
    diagramType: 'rest-waiter',
    simpleExplanation: 'REST API allows web applications to communicate over HTTP using JSON. Common methods: GET (Fetch), POST (Create), PUT (Update), DELETE (Remove). Common status codes: 200 OK, 201 Created, 404 Not Found, 500 Server Error.',
    commonMistake: 'Saying REST is a programming language written in Java.',
    script30Sec: {
      answerText: 'A REST API enables communication between applications over HTTP using JSON format. We use GET to retrieve data, POST to create resources, PUT to update resources, and DELETE to remove resources. Standard status codes include 200 OK, 201 Created, 404 Not Found, and 500 Internal Error.',
      durationSec: 28
    },
    onePictureSummary: ['📱 Client Customer', '↓ 🤵 REST Waiter (HTTP)', '↓ 🍳 Kitchen Database', '↓ 🍱 JSON Food'],
    interviewTip: 'GET/POST/PUT/DELETE + 200/404 status codes.'
  },
  {
    id: 'ch-20-spring-boot',
    partId: 'part-6',
    partTitle: 'Section VI: Backend & Web Services',
    chapterNumber: 20,
    title: 'Chapter 20: Spring Boot & 3-Tier Architecture',
    shortTitle: '20. Spring Boot',
    icon: '🔌',
    estimatedMinutes: 9,
    question: 'What is Spring Boot and why do we use 3-tier architecture?',
    analogyStory: {
      title: 'The 3-Worker Kitchen Assembly Line',
      text: 'In Spring Boot: `@RestController` is reception taking customer orders. `@Service` is chef executing business recipes. `@Repository` is pantry worker fetching ingredients from database cabinet.',
      takeaway: 'Controller handles HTTP -> Service handles logic -> Repository handles DB access.'
    },
    diagramType: 'spring-factory',
    simpleExplanation: 'Spring Boot is a Java framework that simplifies building microservices with auto-configuration. 3-tier architecture separates concerns cleanly into Controller, Service, and Repository layers.',
    commonMistake: 'Thinking Spring Boot requires manual XML configuration files.',
    script30Sec: {
      answerText: 'Spring Boot is a Java framework used to build production-ready web services quickly. We use 3-tier architecture to separate concerns: RestController manages HTTP endpoints, Service layer handles business logic, and Repository layer interacts with the database.',
      durationSec: 27
    },
    onePictureSummary: ['🌐 RestController', '↓ 🧠 Service Logic', '↓ 🛢️ Repository DB', '↓ 🔌 Spring Boot'],
    interviewTip: 'Explain Controller -> Service -> Repository flow.'
  },

  // SECTION VII: AI TOOLS IN SDLC WORKFLOWS
  {
    id: 'ch-21-ai-codegen',
    partId: 'part-7',
    partTitle: 'Section VII: AI Tools in SDLC',
    chapterNumber: 21,
    title: 'Chapter 21: AI Code Generation (GitHub Copilot)',
    shortTitle: '21. AI Code Generation',
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
    id: 'ch-22-prompt-eng',
    partId: 'part-7',
    partTitle: 'Section VII: AI Tools in SDLC',
    chapterNumber: 22,
    title: 'Chapter 22: Prompt Engineering for Debugging & Documentation',
    shortTitle: '22. Prompt Engineering',
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
  {
    id: 'ch-23-ai-autotest',
    partId: 'part-7',
    partTitle: 'Section VII: AI Tools in SDLC',
    chapterNumber: 23,
    title: 'Chapter 23: AI-Driven Automated Testing & Documentation',
    shortTitle: '23. AI Automated Testing',
    icon: '🧪',
    estimatedMinutes: 7,
    question: 'How do emerging AI tools automate unit testing and documentation in enterprise applications?',
    analogyStory: {
      title: 'The Automated Quality Inspector',
      text: 'Instead of manually clicking every button on a new smartphone, a robotic arm tests 1,000 screen taps per minute! AI test generators parse Java methods to create edge-case JUnit test scripts automatically.',
      takeaway: 'AI tools auto-generate JUnit test cases covering edge cases.'
    },
    diagramType: 'ai-copilot',
    simpleExplanation: 'AI testing frameworks analyze Java source code and automatically generate comprehensive JUnit test suites, mocking external dependencies and discovering edge-case inputs to maximize code coverage.',
    commonMistake: 'Relying only on AI tests without manual integration testing.',
    script30Sec: {
      answerText: 'AI tools enhance quality assurance by analyzing method contracts to auto-generate JUnit unit tests, mock external REST calls, discover boundary condition bugs, and maintain up-to-date API documentation automatically.',
      durationSec: 26
    },
    onePictureSummary: ['⚙️ Java Source Code', '↓ 🤖 AI Test Suite Generator', '↓ 🧪 Automated JUnit Tests', '↓ High Code Coverage'],
    interviewTip: 'Edge-case discovery + automated JUnit generation.'
  },

  // SECTION VIII: DEVOPS, GIT & CLOUD INFRASTRUCTURE
  {
    id: 'ch-24-git-pull-req',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 24,
    title: 'Chapter 24: Git Version Control & Pull Requests',
    shortTitle: '24. Git Workflows',
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
    id: 'ch-25-docker-k8s',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 25,
    title: 'Chapter 25: Docker Containers & Kubernetes',
    shortTitle: '25. Docker & Kubernetes',
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
    id: 'ch-26-cicd-devops',
    partId: 'part-8',
    partTitle: 'Section VIII: DevOps & Cloud',
    chapterNumber: 26,
    title: 'Chapter 26: CI/CD Pipelines & Automated Release',
    shortTitle: '26. CI/CD Pipelines',
    icon: '⚙️',
    estimatedMinutes: 8,
    question: 'What is CI/CD and how does GitHub Actions automate deployments?',
    analogyStory: {
      title: 'The Automated Car Car-wash',
      text: 'Instead of washing a car by hand, you drive into an automated tunnel: soap spray (Build), scrub (Test), dry (Package), and drive out clean (Deploy)! CI/CD pipelines run automated builds and tests every time code is pushed.',
      takeaway: 'CI builds and tests code automatically; CD deploys tested code to production.'
    },
    diagramType: 'git-docs',
    simpleExplanation: 'CI/CD stands for Continuous Integration and Continuous Deployment. Pipelines (using tools like GitHub Actions or Jenkins) automatically compile code, run unit tests, build Docker images, and deploy artifacts to cloud servers on every push.',
    commonMistake: 'Deploying manually over SSH instead of using automated CI/CD pipelines.',
    script30Sec: {
      answerText: 'Continuous Integration automatically builds and tests code whenever developers push changes to Git. Continuous Deployment packages verified code into Docker images and deploys them automatically to production with zero manual intervention.',
      durationSec: 27
    },
    onePictureSummary: ['⚡ Git Push', '↓ 🔨 Auto Build', '↓ 🧪 Auto Test', '↓ 🚀 Auto Cloud Deploy'],
    interviewTip: 'Auto build + auto test on push = Continuous Integration.'
  },

  // SECTION IX: RESUME PROJECT STORIES
  {
    id: 'ch-27-pollaris-story',
    partId: 'part-9',
    partTitle: 'Section IX: Resume Stories',
    chapterNumber: 27,
    title: 'Chapter 27: Pollaris (Cloud-Native Voting App)',
    shortTitle: '27. Pollaris Project',
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
    id: 'ch-28-infor-ai-story',
    partId: 'part-9',
    partTitle: 'Section IX: Resume Stories',
    chapterNumber: 28,
    title: 'Chapter 28: Infor AI Internship (AWS DeepAR & GPT-4)',
    shortTitle: '28. Infor AI Internship',
    icon: '🤖',
    estimatedMinutes: 8,
    question: 'What did you build during your AI Internship at Infor?',
    analogyStory: {
      title: 'The Warehouse Weather Forecast',
      text: 'Just like meteorologists forecast rain, we used AWS DeepAR machine learning to forecast warehouse supply demand. We also built a GPT-4 AI safety chatbot that answered warehouse hazardous storage rules instantly!',
      takeaway: 'Predictive forecasting with AWS DeepAR + Safety Compliance Chatbot using GPT-4.'
    },
    diagramType: 'resume-story',
    simpleExplanation: 'At Infor, I built predictive supply chain models using AWS DeepAR to forecast vendor contract demand, and architected an enterprise AI chatbot leveraging OpenAI GPT-4 APIs to automate hazardous material storage compliance for warehouse operations.',
    commonMistake: 'Exaggerating AI training details. Focus on how you used DeepAR and GPT-4 APIs.',
    script30Sec: {
      answerText: 'During my AI internship at Infor, I deployed predictive supply chain models using AWS DeepAR to forecast vendor demand. I also built a secure enterprise AI chatbot using OpenAI GPT-4 APIs to automate warehouse hazardous material storage compliance guidelines.',
      durationSec: 30
    },
    onePictureSummary: ['📈 AWS DeepAR Forecast', '↓ 🤖 GPT-4 Compliance Bot', '↓ 🏬 Warehouse Operations', '↓ B2B AI Integration'],
    interviewTip: 'DeepAR sales forecasting + GPT-4 compliance chatbot.'
  },

  // SECTION X: HR, BEHAVIORAL & SELF INTRODUCTION
  {
    id: 'ch-29-self-intro',
    partId: 'part-10',
    partTitle: 'Section X: HR & Behavioral',
    chapterNumber: 29,
    title: 'Chapter 29: "Tell Me About Yourself"',
    shortTitle: '29. Self Introduction',
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
  },
  {
    id: 'ch-30-star-method',
    partId: 'part-10',
    partTitle: 'Section X: HR & Behavioral',
    chapterNumber: 30,
    title: 'Chapter 30: Behavioral STAR Method (Conflict & Failure)',
    shortTitle: '30. STAR Method HR',
    icon: '⭐',
    estimatedMinutes: 6,
    question: 'Tell me about a time you faced a tough technical challenge or deadline.',
    analogyStory: {
      title: 'The STAR Navigator',
      text: 'STAR stands for: S (Situation), T (Task), A (Action), R (Result). When asked a behavioral question, structure your story: What was the scenario? What was your task? What action did YOU take? What was the positive result?',
      takeaway: 'S = Situation, T = Task, A = Action, R = Result.'
    },
    diagramType: 'star-hr',
    simpleExplanation: 'Use the STAR method for behavioral questions. Explain the Situation, your specific Task, the technical Actions you implemented, and the measurable business Result.',
    commonMistake: 'Rambling without a clear ending or blaming teammates for failure.',
    script30Sec: {
      answerText: 'In my Pollaris project, we faced a major race condition bug during load testing. My task was to guarantee vote data integrity. I implemented Firestore ACID transactions and established Docker containerized testing pipelines, resolving race conditions with 100% vote integrity.',
      durationSec: 28
    },
    onePictureSummary: ['📍 Situation & Task', '↓ 🛠️ Technical Action', '↓ 📈 Positive Result', '↓ STAR Method Success'],
    interviewTip: 'Structure: Situation -> Task -> Action -> Result.'
  }
];
