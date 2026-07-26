export interface LessonItem {
  id: string;
  stepNumber: number;
  title: string;
  shortTitle: string;
  icon: string;
  estimatedMinutes: number;
  interviewerQuestion: string;
  analogyStory: {
    title: string;
    text: string;
    takeaway: string;
  };
  diagramType: 'rest-waiter' | 'stack-plates' | 'queue-line' | 'sql-join' | 'tv-remote' | 'car-poly' | 'spring-layers' | 'git-docker' | 'agile-loop';
  simpleExplanation: string;
  commonMistake: string;
  script30Sec: {
    answerText: string;
    durationSec: number;
  };
  onePictureSummary: string[]; // e.g. ["📺 TV Remote", "↓ Buttons", "↓ Hidden Wires", "↓ Encapsulation"]
  interviewTip: string;
}

export const JOURNEY_LESSONS: LessonItem[] = [
  {
    id: 'behavioral-self-intro',
    stepNumber: 1,
    title: 'Step 1: "Tell Me About Yourself"',
    shortTitle: '1. Self Introduction',
    icon: '🗣️',
    estimatedMinutes: 5,
    interviewerQuestion: 'Tell me about yourself and your background.',
    analogyStory: {
      title: 'The 45-Second Elevator Pitch',
      text: 'You enter an elevator with the Hiring Manager. State 3 clear facts before floor 5: 1) ECE degree with passion for software systems, 2) Core hands-on skills (Java, SQL, REST APIs, Cloud, AI), 3) Enthusiasm for building enterprise SaaS products.',
      takeaway: 'Structure: Background ➔ Core Technical Skills ➔ Role Enthusiasm.'
    },
    diagramType: 'agile-loop',
    simpleExplanation: 'Keep your self-introduction under 40 seconds. State your name, ECE degree, core technical stack (Java, SQL, REST APIs, Cloud, AI), hands-on project experience, and enthusiasm for the FSM role.',
    commonMistake: 'Rambling about high school percentages or intermediate marks instead of core technical skills.',
    script30Sec: {
      answerText: 'Hello, thank you for this opportunity. I am Renuka. I completed my B.Tech in Electronics and Communication Engineering. I am very passionate about software development and enterprise SaaS solutions. I have hands-on experience in Java, SQL, REST APIs, Cloud, and AI tools. I have built full-stack projects and worked on AI internships. I am excited to join the FSM product engineering team to build scalable enterprise applications.',
      durationSec: 35
    },
    onePictureSummary: ['🎓 ECE Degree', '↓ Java, SQL, REST, AI', '↓ Project Stories', '↓ Ready for FSM Team'],
    interviewTip: 'You don\'t need to speak for 3 minutes! A clean 35-second technical summary makes a great first impression.'
  },
  {
    id: 'sdlc-agile',
    stepNumber: 2,
    title: 'Step 2: Software Engineering & Agile Sprints',
    shortTitle: '2. Agile & SDLC',
    icon: '🏃',
    estimatedMinutes: 8,
    interviewerQuestion: 'What is the difference between Waterfall and Agile Scrum methodology?',
    analogyStory: {
      title: 'Building a House Room by Room',
      text: 'Instead of building an entire house and showing the owner on the last day, Agile Scrum builds one room at a time. Every 2 weeks (a sprint), you show the owner the bedroom, get feedback, and then build the kitchen!',
      takeaway: 'Agile delivers working features every 2 weeks to get continuous customer feedback.'
    },
    diagramType: 'agile-loop',
    simpleExplanation: 'Agile divides software development into short 2-week cycles called sprints. The team holds a daily 15-minute standup meeting to answer 3 questions: What did I do yesterday? What will I do today? Are there any blockers?',
    commonMistake: 'Thinking Agile means working without any plan or documentation.',
    script30Sec: {
      answerText: 'In Waterfall, work happens sequentially in one long phase. In Agile Scrum, work is divided into short 2-week sprints. We deliver working software frequently, gather continuous feedback, and hold daily 15-minute standup meetings to track progress.',
      durationSec: 26
    },
    onePictureSummary: ['🏃 2-Week Sprint', '↓ Daily Standup', '↓ Working Demo', '↓ Customer Feedback'],
    interviewTip: 'Focus on 2-week sprints and daily 15-minute standups—that is all they check for early career engineers.'
  },
  {
    id: 'java-oop-intro',
    stepNumber: 3,
    title: 'Step 3: Java & Object-Oriented Fundamentals',
    shortTitle: '3. Java & OOP',
    icon: '☕',
    estimatedMinutes: 8,
    interviewerQuestion: 'What is Java and why do we use Object-Oriented Programming?',
    analogyStory: {
      title: 'The Metal Cookie Cutter',
      text: 'A CLASS is like a metal cookie cutter shape. An OBJECT is the real chocolate cookie stamped out from that cutter! You can stamp out 100 cookies (objects) from one cutter (class).',
      takeaway: 'Class is the blueprint; Object is the real instance created in memory.'
    },
    diagramType: 'car-poly',
    simpleExplanation: 'Java is an object-oriented language. We create Classes as blueprints containing data fields and methods, and instantiate Objects to run our application logic.',
    commonMistake: 'Confusing Class (blueprint in code) with Object (instance created in heap memory).',
    script30Sec: {
      answerText: 'Java is an object-oriented, platform-independent language used for building enterprise applications. We use OOP because it organizes code into reusable classes and objects, making software modular, maintainable, and easier to scale.',
      durationSec: 25
    },
    onePictureSummary: ['📐 Class Blueprint', '↓ new Keyword', '↓ Heap Object', '↓ OOP Modularity'],
    interviewTip: 'Focus on code reusability and modularity.'
  },
  {
    id: 'encapsulation',
    stepNumber: 4,
    title: 'Step 4: Encapsulation (Data Protection)',
    shortTitle: '4. Encapsulation',
    icon: '📺',
    estimatedMinutes: 8,
    interviewerQuestion: 'What is Encapsulation and how do you achieve it in Java?',
    analogyStory: {
      title: 'The TV Remote Control',
      text: 'When you increase TV volume, you press the Volume Up button. You don\'t open the TV with a screwdriver to touch the wires inside! The remote control buttons protect the internal wiring.',
      takeaway: 'Encapsulation protects class data by making fields private and providing safe getter/setter buttons.'
    },
    diagramType: 'tv-remote',
    simpleExplanation: 'Encapsulation wraps data variables and methods together inside a class. We make variables `private` so outside code cannot corrupt them directly, and provide `public` getter and setter methods to access them safely.',
    commonMistake: 'Thinking Encapsulation means hiding whole classes instead of hiding internal variables.',
    script30Sec: {
      answerText: 'Encapsulation is the OOP principle of binding data and methods together inside a single class and hiding internal fields. In Java, we achieve encapsulation by declaring class variables as private and providing public getter and setter methods for safe access.',
      durationSec: 25
    },
    onePictureSummary: ['📺 TV Remote', '↓ Public Buttons', '↓ Private Wires', '↓ Encapsulation'],
    interviewTip: 'Stating "private variables + public getters/setters" is 100% sufficient!'
  },
  {
    id: 'polymorphism',
    stepNumber: 5,
    title: 'Step 5: Polymorphism (Overloading vs Overriding)',
    shortTitle: '5. Polymorphism',
    icon: '🎭',
    estimatedMinutes: 9,
    interviewerQuestion: 'What is the difference between Method Overloading and Method Overriding?',
    analogyStory: {
      title: 'The Actor on Stage',
      text: 'An actor plays Batman in a movie and plays a father at home. Same person, but different behavior depending on the situation! In Java, a method name can behave differently based on parameters or child classes.',
      takeaway: 'Polymorphism means one method name exhibiting multiple behaviors.'
    },
    diagramType: 'car-poly',
    simpleExplanation: 'Overloading happens in the SAME class (same method name, different parameters). Overriding happens in a CHILD class (redefining a method inherited from a parent class with the exact same signature).',
    commonMistake: 'Thinking Overloading happens between parent and child classes! Overloading is within the SAME class.',
    script30Sec: {
      answerText: 'Method Overloading occurs in the same class when methods share the same name but have different parameters. It is compile-time polymorphism. Method Overriding occurs when a child class redefines a parent class method. It is runtime polymorphism.',
      durationSec: 28
    },
    onePictureSummary: ['🎭 One Method Name', '↓ Overloading (Same Class)', '↓ Overriding (Child Class)', '↓ Polymorphism'],
    interviewTip: 'Clearly separating same class (Overloading) vs child class (Overriding) will win full marks.'
  },
  {
    id: 'stack-queue',
    stepNumber: 6,
    title: 'Step 6: Stacks & Queues',
    shortTitle: '6. Stack & Queue',
    icon: '🧱',
    estimatedMinutes: 8,
    interviewerQuestion: 'What is the difference between a Stack and a Queue?',
    analogyStory: {
      title: 'Plate Stack & Movie Ticket Line',
      text: 'A STACK is like plates stacked at a lunch buffet. The last plate put on top is the first plate taken (LIFO). A QUEUE is like standing in line for movie tickets. The first person in line gets the ticket first (FIFO).',
      takeaway: 'Stack = LIFO (Plates, Ctrl+Z Undo). Queue = FIFO (Movie line, Print jobs).'
    },
    diagramType: 'stack-plates',
    simpleExplanation: 'Stack uses LIFO (Last In First Out) with `push` and `pop` operations. Queue uses FIFO (First In First Out) with `enqueue` and `dequeue` operations.',
    commonMistake: 'Confusing push/pop terms with enqueue/dequeue operations.',
    script30Sec: {
      answerText: 'A Stack follows Last-In, First-Out principle (LIFO). The last element added is removed first using push and pop, like a stack of plates. A Queue follows First-In, First-Out principle (FIFO). The first element added is removed first using enqueue and dequeue, like a line of people.',
      durationSec: 25
    },
    onePictureSummary: ['🍽️ Plate Stack (LIFO)', '↓ Push / Pop', '🚶 Ticket Line (FIFO)', '↓ Enqueue / Dequeue'],
    interviewTip: 'LIFO vs FIFO and push/pop vs enqueue/dequeue is all you need.'
  },
  {
    id: 'hashmaps',
    stepNumber: 7,
    title: 'Step 7: HashMaps (O(1) Fast Lookups)',
    shortTitle: '7. HashMaps O(1)',
    icon: '📬',
    estimatedMinutes: 8,
    interviewerQuestion: 'How does a HashMap work internally and what is its time complexity?',
    analogyStory: {
      title: 'Apartment Mailboxes',
      text: 'In an apartment building with 100 mailboxes, each mailbox has a key number like "Box 4B". Instead of opening 100 doors to find your mail, you go straight to Box 4B instantly!',
      takeaway: 'HashMap retrieves values by unique key in fast O(1) constant time.'
    },
    diagramType: 'rest-waiter',
    simpleExplanation: 'HashMap stores data in Key-Value pairs. It calculates a hash code for the key to find the exact array bucket index directly in O(1) average time.',
    commonMistake: 'Saying HashMap search takes O(N) linear time like an unsorted array loop.',
    script30Sec: {
      answerText: 'A HashMap stores data in Key-Value pairs. When we call put or get, Java calculates the key\'s hashCode to locate the storage bucket index directly. Its average time complexity for search, insert, and delete is O(1) constant time.',
      durationSec: 26
    },
    onePictureSummary: ['📬 Mailbox Key', '↓ hashCode() Index', '↓ Direct Bucket', '↓ O(1) Fast Time'],
    interviewTip: 'O(1) lookup time and Key-Value mapping is all they expect.'
  },
  {
    id: 'sql-databases',
    stepNumber: 8,
    title: 'Step 8: SQL Databases & Joins',
    shortTitle: '8. SQL & Joins',
    icon: '🔗',
    estimatedMinutes: 9,
    interviewerQuestion: 'What is the difference between Primary Key, Foreign Key, and INNER JOIN?',
    analogyStory: {
      title: 'Student ID Badges & Classrooms',
      text: 'Every student wears a unique ID badge (Primary Key). On the badge, it says "Room 5" (Foreign Key). When a teacher joins the badge to Room 5, they connect the student to the classroom!',
      takeaway: 'Primary Key uniquely identifies a row. Foreign Key links to another table.'
    },
    diagramType: 'sql-join',
    simpleExplanation: 'Primary Key uniquely identifies a row in a table. Foreign Key references a Primary Key in another table. `INNER JOIN` returns matching rows in both tables; `LEFT JOIN` returns all rows from the left table.',
    commonMistake: 'Thinking Foreign Key must be unique in every row.',
    script30Sec: {
      answerText: 'A Primary Key uniquely identifies a record in a table. A Foreign Key points to a Primary Key in another table to create a relationship. INNER JOIN combines rows from two tables only where the foreign key matches in both tables.',
      durationSec: 27
    },
    onePictureSummary: ['🔑 Primary Key (Unique)', '↓ Foreign Key (Link)', '↓ INNER JOIN', '↓ Matching Rows'],
    interviewTip: 'PK vs FK and INNER JOIN gives you 100% success on database questions.'
  },
  {
    id: 'rest-apis',
    stepNumber: 9,
    title: 'Step 9: REST APIs & Microservices',
    shortTitle: '9. REST APIs',
    icon: '🍽️',
    estimatedMinutes: 9,
    interviewerQuestion: 'What is a REST API and what are common HTTP methods and status codes?',
    analogyStory: {
      title: 'The Restaurant Waiter',
      text: 'You sit at a restaurant. You read the menu (API doc). You give your order to the waiter (REST API). The waiter takes your order to the kitchen (Database server), gets cooked food, and brings it to your table in a clean tray (JSON payload)!',
      takeaway: 'REST API acts as a middleman waiter delivering JSON data over HTTP.'
    },
    diagramType: 'rest-waiter',
    simpleExplanation: 'REST API allows frontend and backend applications to exchange data using JSON over HTTP. Common methods: GET (Fetch), POST (Create), PUT (Update), DELETE (Remove). Status codes: 200 OK, 201 Created, 404 Not Found, 500 Internal Error.',
    commonMistake: 'Saying REST is a programming language written in Java.',
    script30Sec: {
      answerText: 'A REST API enables frontend and backend applications to communicate over HTTP using JSON. Main HTTP methods are GET to fetch data, POST to create data, PUT to update data, and DELETE to remove data. Common status codes are 200 OK, 201 Created, 404 Not Found, and 500 Internal Error.',
      durationSec: 28
    },
    onePictureSummary: ['📱 Client Customer', '↓ 🤵 REST Waiter (HTTP)', '↓ 🍳 Kitchen Database', '↓ 🍱 JSON Food'],
    interviewTip: 'GET/POST/PUT/DELETE and HTTP status codes are the core of REST API interviews.'
  },
  {
    id: 'spring-boot',
    stepNumber: 10,
    title: 'Step 10: Spring Boot & 3-Tier Architecture',
    shortTitle: '10. Spring Boot',
    icon: '🔌',
    estimatedMinutes: 9,
    interviewerQuestion: 'What is Spring Boot and why do we use 3-tier architecture?',
    analogyStory: {
      title: 'The 3-Worker Kitchen Assembly Line',
      text: 'In Spring Boot: `@RestController` is the reception waiter taking customer orders. `@Service` is the chef executing business recipes. `@Repository` is the pantry worker getting ingredients from the database storage cabinet.',
      takeaway: 'Controller handles HTTP requests -> Service handles business logic -> Repository handles DB access.'
    },
    diagramType: 'spring-layers',
    simpleExplanation: 'Spring Boot simplifies Java web application development with auto-configuration and embedded servers. Dependency Injection (`@Autowired`) means the Spring IoC container automatically creates and manages objects.',
    commonMistake: 'Thinking Spring Boot requires writing manual XML configuration files.',
    script30Sec: {
      answerText: 'Spring Boot is a Java framework used to build production-grade web services quickly with auto-configuration. We use 3-tier architecture to separate concerns cleanly: RestController handles HTTP endpoints, Service layer processes business logic, and Repository layer manages database access.',
      durationSec: 28
    },
    onePictureSummary: ['🌐 RestController', '↓ 🧠 Service Logic', '↓ 🛢️ Repository DB', '↓ 🔌 Spring Boot'],
    interviewTip: 'Explaining Controller ➔ Service ➔ Repository shows clear Spring Boot understanding.'
  },
  {
    id: 'git-docker',
    stepNumber: 11,
    title: 'Step 11: Git Version Control & Docker Containers',
    shortTitle: '11. Git & Docker',
    icon: '📦',
    estimatedMinutes: 8,
    interviewerQuestion: 'What is your Git workflow and what problem does Docker solve?',
    analogyStory: {
      title: 'The Time Machine & Metal Shipping Container',
      text: 'Git is like a notebook where `git commit` takes permanent snapshots in time. Docker is like a sealed metal shipping container packing your Java code, JRE runtime, and config together so it runs identical on any laptop or AWS cloud!',
      takeaway: 'Git tracks code changes; Docker packages app + runtime to run identically anywhere.'
    },
    diagramType: 'git-docker',
    simpleExplanation: 'In Git, developers work in feature branches (`git checkout -b`), commit changes (`git commit -m`), and open Pull Requests (PRs). Docker packages code and dependencies into containers, eliminating "it works on my machine" issues.',
    commonMistake: 'Saying you commit code directly to production main branch without Pull Request review.',
    script30Sec: {
      answerText: 'In Git, I pull latest code, create a feature branch with `git checkout -b`, commit changes, push, and open a Pull Request for review. Docker solves the "works on my machine" problem by packaging code, runtime, and dependencies into a single container that runs identically anywhere.',
      durationSec: 28
    },
    onePictureSummary: ['🌿 Git Feature Branch', '↓ 📸 Commit Snapshot', '↓ 📦 Docker Cargo Container', '↓ ☁️ Runs Anywhere'],
    interviewTip: 'Clean branching workflow + container portability is all they ask for.'
  },
  {
    id: 'ai-sdlc',
    stepNumber: 12,
    title: 'Step 12: AI Tools in SDLC (Copilot & ChatGPT)',
    shortTitle: '12. AI in SDLC',
    icon: '🤖',
    estimatedMinutes: 7,
    interviewerQuestion: 'How do you leverage AI tools to enhance productivity in software development?',
    analogyStory: {
      title: 'The Airplane Co-Pilot',
      text: 'An AI assistant like GitHub Copilot or ChatGPT is like a co-pilot sitting next to you. It suggests altitude numbers and checklists, but YOU are the captain holding the steering wheel and verifying the path!',
      takeaway: 'AI tools accelerate boilerplate coding, unit tests, and debugging, but developers verify all outputs.'
    },
    diagramType: 'agile-loop',
    simpleExplanation: 'We use AI tools like GitHub Copilot and ChatGPT in daily development to generate boilerplate code, write unit test cases, explain complex debugging error stack traces, and draft technical documentation.',
    commonMistake: 'Saying AI writes 100% of your code and you copy paste without checking.',
    script30Sec: {
      answerText: 'I use AI tools like GitHub Copilot and ChatGPT in my daily workflow to accelerate development. I leverage them for writing unit tests, generating boilerplate code, explaining error logs during debugging, and drafting documentation. I always review and test all AI-generated code.',
      durationSec: 27
    },
    onePictureSummary: ['🤖 AI Assistant', '↓ Test & Code Generator', '↓ Developer Review', '↓ High Quality Code'],
    interviewTip: 'Emphasize that AI speeds up work while YOU verify and test the results.'
  },
  {
    id: 'fsm-overview',
    stepNumber: 13,
    title: 'Step 13: Financials & Supply Management (FSM) SaaS',
    shortTitle: '13. What is FSM?',
    icon: '🏢',
    estimatedMinutes: 6,
    interviewerQuestion: 'What is FSM product engineering and what does the software do?',
    analogyStory: {
      title: 'The Global Store Super-Brain',
      text: 'Imagine a global company selling laptops in 50 countries. Every day, they buy raw screens, pay factory workers, ship boxes, and invoice customers. FSM is the super-brain software that manages all financial money and warehouse supplies in real time on the cloud.',
      takeaway: 'FSM software handles enterprise money (Financials) and warehouse goods (Supply Management).'
    },
    diagramType: 'agile-loop',
    simpleExplanation: 'FSM stands for Financials and Supply Management. It is an enterprise cloud SaaS product that helps global companies track their money, invoices, inventory, and supplier shipments.',
    commonMistake: 'Getting bogged down in complex accounting rules instead of high level SaaS features.',
    script30Sec: {
      answerText: 'FSM stands for Financials and Supply Management. It is an enterprise-grade SaaS platform that powers global businesses by managing financial transactions, invoicing, inventory tracking, and supply chain logistics in real time.',
      durationSec: 25
    },
    onePictureSummary: ['🏢 Global Business', '↓ Financial Invoices', '↓ Supply Inventory', '↓ Cloud FSM SaaS'],
    interviewTip: 'This answer shows you understand the product domain without getting stuck in complex accounting terms.'
  },
  {
    id: 'resume-projects',
    stepNumber: 14,
    title: 'Step 14: Your Project Stories (Resume De-Inflated)',
    shortTitle: '14. Project Stories',
    icon: '📖',
    estimatedMinutes: 10,
    interviewerQuestion: 'Can you explain your project Pollaris?',
    analogyStory: {
      title: 'The Simple 3-Sentence Project Story',
      text: 'Instead of reciting scary resume buzzwords like "engineered deterministic compilation isolation", explain the human story: "We built an online voting web app using Next.js and Firebase where users log in and cast votes securely without duplicate votes."',
      takeaway: 'Convert scary resume jargon into 3 simple sentences: Problem ➔ Tech Solution ➔ Outcome.'
    },
    diagramType: 'git-docker',
    simpleExplanation: 'For Pollaris (Voting App): Built with Next.js & Firestore using ACID transactions to prevent duplicate votes. For Infor AI Internship: Tested AWS DeepAR forecasting and built a GPT-4 safety chatbot. For IoT Smart Locker: Arduino microcontrollers sending OTP pin codes over SMS.',
    commonMistake: 'Repeating scary HR buzzwords that you cannot explain in detail.',
    script30Sec: {
      answerText: 'Pollaris is an online polling web application built using Next.js 16 and Firebase Firestore. The main challenge was preventing race conditions when multiple users vote simultaneously. I used Firestore ACID transactions to enforce one-vote-per-user constraint. We also containerized the application using Docker and GitHub Actions for CI/CD.',
      durationSec: 30
    },
    onePictureSummary: ['🗳️ Pollaris Voting App', '↓ Next.js + Firestore', '↓ ACID Transactions', '↓ 100% Vote Integrity'],
    interviewTip: 'Explaining Pollaris in 3 simple sentences defends your resume completely.'
  }
];
