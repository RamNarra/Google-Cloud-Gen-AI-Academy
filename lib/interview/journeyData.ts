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
  { id: 'part-1', partNumber: 1, title: 'Part 1: Software Engineering Fundamentals', description: 'Software, SDLC, Waterfall, Agile, Scrum, and Testing', icon: '📘' },
  { id: 'part-2', partNumber: 2, title: 'Part 2: Java & Object-Oriented Programming', description: 'Java, JVM, Classes, Encapsulation, Inheritance, Polymorphism, Abstraction', icon: '☕' },
  { id: 'part-3', partNumber: 3, title: 'Part 3: Data Structures & Algorithms', description: 'Arrays, Linked Lists, Stacks, Queues, HashMaps, Time Complexity', icon: '🧱' },
  { id: 'part-4', partNumber: 4, title: 'Part 4: Databases & SQL', description: 'Relational DBs, Primary & Foreign Keys, SQL Joins', icon: '🔗' },
  { id: 'part-5', partNumber: 5, title: 'Part 5: Backend & Web Services', description: 'HTTP, REST APIs, JSON, Spring Boot 3-Tier Architecture', icon: '🍽️' },
  { id: 'part-6', partNumber: 6, title: 'Part 6: Developer Tools & Infrastructure', description: 'Git, Docker, Cloud Platforms (AWS/GCP), AI Tools in SDLC', icon: '📦' },
  { id: 'part-7', partNumber: 7, title: 'Part 7: FSM Domain & Enterprise SaaS', description: 'Financials & Supply Management domain concept', icon: '🏢' },
  { id: 'part-8', partNumber: 8, title: 'Part 8: Your Resume Project Stories', description: 'Pollaris, Infor AI Internship, IoT Smart Locker, YOLOv8', icon: '📖' },
  { id: 'part-9', partNumber: 9, title: 'Part 9: HR Questions & Self Introduction', description: 'Tell me about yourself, Strengths, Weaknesses, STAR method', icon: '🗣️' },
];

export const TEXTBOOK_CHAPTERS: ChapterItem[] = [
  // PART 1: SOFTWARE ENGINEERING FUNDAMENTALS
  {
    id: 'ch-1-software',
    partId: 'part-1',
    partTitle: 'Part 1: Software Engineering',
    chapterNumber: 1,
    title: 'Chapter 1: What is Software?',
    shortTitle: '1. What is Software?',
    icon: '📱',
    estimatedMinutes: 5,
    question: 'What is software and how does it differ from hardware?',
    analogyStory: {
      title: 'The Piano vs the Music Sheet',
      text: 'Think of your smartphone or laptop as a physical piano (Hardware). Software is the sheet music! Without sheet music, the piano is silent. Software gives digital instructions telling hardware what to do.',
      takeaway: 'Hardware is physical machine; Software is electronic instructions.'
    },
    diagramType: 'software-app',
    simpleExplanation: 'Software is a collection of code, programs, and instructions that tell physical computer hardware how to perform specific tasks, like running Instagram, Uber, or web browsers.',
    commonMistake: 'Thinking software includes physical chips or battery parts.',
    script30Sec: {
      answerText: 'Software consists of electronic code and programs that instruct hardware what tasks to execute. Hardware is the physical computer, while software is the operational logic, such as operating systems, web applications, and mobile apps.',
      durationSec: 25
    },
    onePictureSummary: ['📱 Hardware Phone', '↓ 🎼 Software Music Sheet', '↓ Digital Instructions', '↓ Working App'],
    interviewTip: 'Keep it simple: hardware is physical, software is electronic instructions.'
  },
  {
    id: 'ch-2-se-intro',
    partId: 'part-1',
    partTitle: 'Part 1: Software Engineering',
    chapterNumber: 2,
    title: 'Chapter 2: What is Software Engineering?',
    shortTitle: '2. Software Engineering',
    icon: '🏗️',
    estimatedMinutes: 6,
    question: 'What is Software Engineering and why is it important?',
    analogyStory: {
      title: 'Building a Doghouse vs a Skyscraper',
      text: 'Anyone can hammer 4 wooden boards to build a small doghouse without a blueprint. But to build a 50-story skyscraper, civil engineers need blueprints, safety standards, and team coordination. Software Engineering applies structured engineering principles to build large enterprise applications.',
      takeaway: 'Software engineering adds structure, quality, and scalability to software.'
    },
    diagramType: 'software-app',
    simpleExplanation: 'Software Engineering is a disciplined, systematic approach to designing, developing, testing, and maintaining software to ensure high quality, reliability, and security.',
    commonMistake: 'Confusing casual coding with disciplined software engineering.',
    script30Sec: {
      answerText: 'Software Engineering is the systematic application of engineering principles to software development. It ensures that complex software products are reliable, scalable, well-documented, maintainable, and delivered on time.',
      durationSec: 25
    },
    onePictureSummary: ['🔨 Doghouse Coding', '↓ 🏗️ Skyscraper Engineering', '↓ Quality & Safety', '↓ Reliable SaaS'],
    interviewTip: 'Emphasize systematically building scalable, maintainable systems.'
  },
  {
    id: 'ch-3-sdlc',
    partId: 'part-1',
    partTitle: 'Part 1: Software Engineering',
    chapterNumber: 3,
    title: 'Chapter 3: The Software Development Life Cycle (SDLC)',
    shortTitle: '3. What is SDLC?',
    icon: '🔄',
    estimatedMinutes: 8,
    question: 'What is SDLC and what are its main phases?',
    analogyStory: {
      title: 'The Recipe to Bake a Cake',
      text: 'Before baking a cake, you ask what flavor the customer wants (Requirements), write the recipe (Design), bake in oven (Coding), taste test (Testing), and serve on table (Deployment)! SDLC is this exact step-by-step process for software.',
      takeaway: 'SDLC guarantees software goes through planning, coding, testing, and release.'
    },
    diagramType: 'sdlc-loop',
    simpleExplanation: 'SDLC stands for Software Development Life Cycle. It defines 6 key stages: Requirements Analysis, Architectural Design, Implementation (Coding), Testing, Deployment, and Maintenance.',
    commonMistake: 'Thinking coding is the first step of SDLC. Planning and requirements come first!',
    script30Sec: {
      answerText: 'SDLC is the structured framework used by engineering teams to build software. It includes six main phases: Requirements Gathering, Architectural Design, Implementation, Testing, Deployment, and ongoing Maintenance.',
      durationSec: 26
    },
    onePictureSummary: ['📝 Requirements', '↓ 📐 Design', '↓ 💻 Coding', '↓ 🧪 Testing', '↓ 🚀 Deployment'],
    interviewTip: 'List all 6 phases clearly: Requirements -> Design -> Coding -> Testing -> Deployment -> Maintenance.'
  },
  {
    id: 'ch-4-agile-scrum',
    partId: 'part-1',
    partTitle: 'Part 1: Software Engineering',
    chapterNumber: 4,
    title: 'Chapter 4: Waterfall vs Agile & Scrum Sprints',
    shortTitle: '4. Waterfall vs Agile',
    icon: '🏃',
    estimatedMinutes: 8,
    question: 'What is the difference between Waterfall and Agile Scrum methodology?',
    analogyStory: {
      title: 'The Pizza Shop Order',
      text: 'Waterfall is ordering a 10-course dinner where you wait 4 hours until all dishes arrive together. Agile is getting slices hot out of the oven every 10 minutes so you can change toppings mid-way if you want!',
      takeaway: 'Agile delivers working software in short 2-week iterations called sprints.'
    },
    diagramType: 'agile-loop',
    simpleExplanation: 'Waterfall executes SDLC linearly in one long phase. Agile Scrum breaks work into 2-week iterations called sprints, incorporating daily standup meetings and continuous customer feedback.',
    commonMistake: 'Thinking Agile means no planning or documentation at all.',
    script30Sec: {
      answerText: 'In Waterfall, development occurs sequentially in one long phase. In Agile Scrum, development is divided into 2-week sprints. We deliver working software frequently, gather continuous feedback, and hold daily 15-minute standup meetings to review progress.',
      durationSec: 27
    },
    onePictureSummary: ['🌊 Waterfall (One Long Phase)', '↓ 🏃 Agile (2-Week Sprints)', '↓ Daily Standup', '↓ Continuous Feedback'],
    interviewTip: 'Sprint duration (2 weeks) and Daily Standups (15 mins) are key details.'
  },

  // PART 2: JAVA & OBJECT-ORIENTED PROGRAMMING
  {
    id: 'ch-5-java-jvm',
    partId: 'part-2',
    partTitle: 'Part 2: Java & OOP',
    chapterNumber: 5,
    title: 'Chapter 5: What is Java & the JVM?',
    shortTitle: '5. Java & JVM',
    icon: '☕',
    estimatedMinutes: 8,
    question: 'What is Java and how does the JVM achieve "Write Once, Run Anywhere"?',
    analogyStory: {
      title: 'The Universal Translator',
      text: 'If a book is written in English, someone in Japan needs a translator to read it. Java compiles code into universal "Bytecode" (.class file). The Java Virtual Machine (JVM) acts as an on-the-spot translator for Windows, Mac, or Linux!',
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
    id: 'ch-6-classes-objects',
    partId: 'part-2',
    partTitle: 'Part 2: Java & OOP',
    chapterNumber: 6,
    title: 'Chapter 6: Classes & Objects',
    shortTitle: '6. Classes & Objects',
    icon: '🍪',
    estimatedMinutes: 8,
    question: 'What is a Class and what is an Object in Java?',
    analogyStory: {
      title: 'The Metal Cookie Cutter',
      text: 'A CLASS is a metal cookie cutter shape. An OBJECT is the real chocolate cookie stamped out in memory! You can stamp out 100 cookies (objects) from one cutter (class).',
      takeaway: 'Class is the blueprint; Object is the real instance created in memory.'
    },
    diagramType: 'cookie-class',
    simpleExplanation: 'A Class is a blueprint defining fields (data) and methods (behavior). An Object is an actual instance of a class instantiated in heap memory using the `new` keyword.',
    commonMistake: 'Thinking a class takes up heap memory before `new` is called.',
    script30Sec: {
      answerText: 'A Class is a blueprint or template that defines attributes and behaviors. An Object is a specific instance of a class instantiated in heap memory using the new keyword to execute application logic.',
      durationSec: 25
    },
    onePictureSummary: ['📐 Class Blueprint', '↓ new Keyword', '↓ 🍪 Heap Object', '↓ Executable Instance'],
    interviewTip: 'Blueprint vs Instance is the gold standard answer.'
  },
  {
    id: 'ch-7-encapsulation',
    partId: 'part-2',
    partTitle: 'Part 2: Java & OOP',
    chapterNumber: 7,
    title: 'Chapter 7: Encapsulation (Data Protection)',
    shortTitle: '7. Encapsulation',
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
    id: 'ch-8-inheritance',
    partId: 'part-2',
    partTitle: 'Part 2: Java & OOP',
    chapterNumber: 8,
    title: 'Chapter 8: Inheritance (Code Reuse)',
    shortTitle: '8. Inheritance',
    icon: '🧬',
    estimatedMinutes: 8,
    question: 'What is Inheritance and how is it implemented in Java?',
    analogyStory: {
      title: 'Parent & Child Attributes',
      text: 'A child inherits eye color and last name from their parents, but also learns to play guitar! In Java, a Child Class inherits fields and methods from a Parent Class using the `extends` keyword.',
      takeaway: 'Inheritance allows child classes to reuse parent code and add new features.'
    },
    diagramType: 'family-inherit',
    simpleExplanation: 'Inheritance allows a subclass to inherit attributes and methods from a superclass using the `extends` keyword, promoting code reusability and hierarchical design.',
    commonMistake: 'Thinking Java supports multiple inheritance with classes (Java supports single class inheritance, multiple interface implementation).',
    script30Sec: {
      answerText: 'Inheritance is an OOP concept where a subclass inherits properties and methods from a superclass using the extends keyword. It promotes code reusability and establishes an IS-A relationship between classes.',
      durationSec: 25
    },
    onePictureSummary: ['👨‍👩‍👧 Parent Class (Superclass)', '↓ extends Keyword', '↓ 👧 Child Class (Subclass)', '↓ Code Reuse'],
    interviewTip: 'Mention extends keyword and IS-A relationship.'
  },
  {
    id: 'ch-9-polymorphism',
    partId: 'part-2',
    partTitle: 'Part 2: Java & OOP',
    chapterNumber: 9,
    title: 'Chapter 9: Polymorphism (Overloading vs Overriding)',
    shortTitle: '9. Polymorphism',
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
    id: 'ch-10-abstraction',
    partId: 'part-2',
    partTitle: 'Part 2: Java & OOP',
    chapterNumber: 10,
    title: 'Chapter 10: Abstraction (Abstract Classes & Interfaces)',
    shortTitle: '10. Abstraction',
    icon: '🚗',
    estimatedMinutes: 9,
    question: 'What is Abstraction and how does an Abstract Class differ from an Interface?',
    analogyStory: {
      title: 'The Car Steering Wheel',
      text: 'When driving a car, you turn the steering wheel. You don\'t need to know how the power steering fluid moves inside the engine block! Abstraction shows essential features while hiding implementation details.',
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

  // PART 3: DATA STRUCTURES & ALGORITHMS
  {
    id: 'ch-11-arrays',
    partId: 'part-3',
    partTitle: 'Part 3: DSA',
    chapterNumber: 11,
    title: 'Chapter 11: Arrays & Fixed Storage',
    shortTitle: '11. Arrays',
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
    id: 'ch-12-stack-queue',
    partId: 'part-3',
    partTitle: 'Part 3: DSA',
    chapterNumber: 12,
    title: 'Chapter 12: Stacks & Queues',
    shortTitle: '12. Stack & Queue',
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
    id: 'ch-13-hashmaps',
    partId: 'part-3',
    partTitle: 'Part 3: DSA',
    chapterNumber: 13,
    title: 'Chapter 13: HashMaps (O(1) Fast Lookups)',
    shortTitle: '13. HashMaps O(1)',
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

  // PART 4: DATABASES & SQL
  {
    id: 'ch-14-sql-keys',
    partId: 'part-4',
    partTitle: 'Part 4: Databases & SQL',
    chapterNumber: 14,
    title: 'Chapter 14: Relational Databases & Keys',
    shortTitle: '14. SQL Keys',
    icon: '🔑',
    estimatedMinutes: 8,
    question: 'What is a Primary Key and Foreign Key in relational databases?',
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
    id: 'ch-15-sql-joins',
    partId: 'part-4',
    partTitle: 'Part 4: Databases & SQL',
    chapterNumber: 15,
    title: 'Chapter 15: SQL Joins (INNER vs LEFT JOIN)',
    shortTitle: '15. SQL Joins',
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

  // PART 5: BACKEND & WEB SERVICES
  {
    id: 'ch-16-rest-apis',
    partId: 'part-5',
    partTitle: 'Part 5: Backend & REST APIs',
    chapterNumber: 16,
    title: 'Chapter 16: REST APIs & HTTP Methods',
    shortTitle: '16. REST APIs',
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
    id: 'ch-17-spring-boot',
    partId: 'part-5',
    partTitle: 'Part 5: Backend & REST APIs',
    chapterNumber: 17,
    title: 'Chapter 17: Spring Boot & 3-Tier Architecture',
    shortTitle: '17. Spring Boot',
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

  // PART 6: DEVELOPER TOOLS & INFRASTRUCTURE
  {
    id: 'ch-18-git-docker',
    partId: 'part-6',
    partTitle: 'Part 6: Developer Tools',
    chapterNumber: 18,
    title: 'Chapter 18: Git Version Control & Docker Containers',
    shortTitle: '18. Git & Docker',
    icon: '📦',
    estimatedMinutes: 9,
    question: 'What is your Git workflow and what problem does Docker solve?',
    analogyStory: {
      title: 'The Time Machine & Metal Shipping Container',
      text: 'Git is a notebook taking permanent snapshots in time (`git commit`). Docker is a sealed metal shipping container packing your Java code, JRE runtime, and config together so it runs identical on any laptop or cloud server!',
      takeaway: 'Git tracks code changes; Docker packages app + runtime to run identically anywhere.'
    },
    diagramType: 'git-docs',
    simpleExplanation: 'Git tracks source code changes across feature branches. Docker packages applications and dependencies into isolated containers, eliminating "it works on my machine" deployment bugs.',
    commonMistake: 'Saying you push directly to production main branch without Pull Request review.',
    script30Sec: {
      answerText: 'In Git, I pull latest code, create feature branches with git checkout -b, commit changes, and open Pull Requests for review. Docker solves the "works on my machine" problem by packaging code, runtime, and dependencies into portable containers.',
      durationSec: 28
    },
    onePictureSummary: ['🌿 Git Feature Branch', '↓ 📸 Commit Snapshot', '↓ 📦 Docker Container', '↓ ☁️ Runs Anywhere'],
    interviewTip: 'Clean branching workflow + container portability.'
  },
  {
    id: 'ch-19-ai-sdlc',
    partId: 'part-6',
    partTitle: 'Part 6: Developer Tools',
    chapterNumber: 19,
    title: 'Chapter 19: AI Tools in SDLC (Copilot & ChatGPT)',
    shortTitle: '19. AI in SDLC',
    icon: '🤖',
    estimatedMinutes: 7,
    question: 'How do you leverage AI tools to enhance productivity in software development?',
    analogyStory: {
      title: 'The Airplane Co-Pilot',
      text: 'An AI assistant like GitHub Copilot or ChatGPT is a co-pilot sitting next to you. It suggests checklists and code snippets, but YOU are the captain holding the steering wheel and verifying the flight path!',
      takeaway: 'AI accelerates unit tests, boilerplate code, and debugging, but developers verify all outputs.'
    },
    diagramType: 'ai-copilot',
    simpleExplanation: 'We use AI tools like GitHub Copilot and ChatGPT in daily development to generate unit tests, write boilerplate code, explain complex error logs, and draft technical documentation.',
    commonMistake: 'Saying AI writes 100% of your code without human review.',
    script30Sec: {
      answerText: 'I use AI tools like GitHub Copilot and ChatGPT in daily workflows to accelerate development. I leverage them for generating unit tests, writing boilerplate code, debugging stack traces, and drafting documentation. I always review and test all AI-generated code.',
      durationSec: 27
    },
    onePictureSummary: ['🤖 AI Assistant', '↓ Test & Code Generator', '↓ Developer Review', '↓ High Quality Code'],
    interviewTip: 'Emphasize AI speedup + human verification and testing.'
  },

  // PART 7: FSM DOMAIN & ENTERPRISE SAAS
  {
    id: 'ch-20-fsm-domain',
    partId: 'part-7',
    partTitle: 'Part 7: FSM Domain',
    chapterNumber: 20,
    title: 'Chapter 20: Financials & Supply Management (FSM)',
    shortTitle: '20. What is FSM?',
    icon: '🏢',
    estimatedMinutes: 6,
    question: 'What is FSM product engineering and what does the software do?',
    analogyStory: {
      title: 'The Global Store Super-Brain',
      text: 'Imagine a global company selling laptops in 50 countries. Every day, they buy raw screens, pay factory workers, ship boxes, and invoice customers. FSM is the super-brain software that manages all financial money and warehouse supplies in real time on the cloud.',
      takeaway: 'FSM software handles enterprise money (Financials) and warehouse goods (Supply Management).'
    },
    diagramType: 'fsm-store',
    simpleExplanation: 'FSM stands for Financials and Supply Management. It is an enterprise cloud SaaS product that helps global companies track their money, invoices, inventory, and supplier shipments.',
    commonMistake: 'Getting bogged down in complex accounting rules instead of high level SaaS features.',
    script30Sec: {
      answerText: 'FSM stands for Financials and Supply Management. It is an enterprise-grade SaaS platform that powers global businesses by managing financial transactions, invoicing, inventory tracking, and supply chain logistics in real time.',
      durationSec: 25
    },
    onePictureSummary: ['🏢 Global Business', '↓ Financial Invoices', '↓ Supply Inventory', '↓ Cloud FSM SaaS'],
    interviewTip: 'Enterprise money + warehouse inventory tracking.'
  },

  // PART 8: RESUME PROJECT STORIES
  {
    id: 'ch-21-pollaris-project',
    partId: 'part-8',
    partTitle: 'Part 8: Resume Stories',
    chapterNumber: 21,
    title: 'Chapter 21: Pollaris (Cloud-Native Voting App)',
    shortTitle: '21. Pollaris Story',
    icon: '🗳️',
    estimatedMinutes: 8,
    question: 'Can you explain your project Pollaris and the technical challenges you solved?',
    analogyStory: {
      title: 'The Single-Slot Ticket Box',
      text: 'When 100 people try to drop a vote into a box at the exact same millisecond, two votes might collide. Pollaris used Firestore ACID transactions to lock the vote box safely, guaranteeing 100% one-vote-per-user integrity without duplicate votes!',
      takeaway: 'Used Firestore ACID Transactions to eliminate vote concurrency race conditions.'
    },
    diagramType: 'resume-story',
    simpleExplanation: 'Pollaris is an online polling web application built using Next.js 16 and Firebase Firestore. We used Firestore ACID transactions to eliminate race conditions during concurrent voting.',
    commonMistake: 'Reciting scary HR resume buzzwords without explaining the core problem solved.',
    script30Sec: {
      answerText: 'Pollaris is an enterprise polling platform built with Next.js 16 and Firebase Firestore. The main technical challenge was preventing race conditions when multiple users voted simultaneously. I solved this using Firestore ACID transactions to enforce one-vote-per-user constraint, ensuring 100% data integrity.',
      durationSec: 30
    },
    onePictureSummary: ['🗳️ Pollaris Voting App', '↓ Next.js + Firestore', '↓ ACID Transactions', '↓ 100% Vote Integrity'],
    interviewTip: 'Problem (concurrent vote race conditions) -> Solution (Firestore ACID transactions).'
  },

  // PART 9: HR QUESTIONS & SELF INTRODUCTION
  {
    id: 'ch-22-self-intro',
    partId: 'part-9',
    partTitle: 'Part 9: HR & Self Intro',
    chapterNumber: 22,
    title: 'Chapter 22: "Tell Me About Yourself"',
    shortTitle: '22. Self Introduction',
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
