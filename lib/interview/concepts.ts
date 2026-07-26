export interface ConceptNode {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  category: 'Software Engineering' | 'Java & OOP' | 'DSA' | 'Database' | 'Backend' | 'DevOps & AI' | 'Behavioral' | 'Resume';
  dangerLevel: '🔴 High Risk' | '🟡 Medium Risk' | '🟢 Low Risk';
  realInterviewProbability: 1 | 2 | 3 | 4 | 5; // Stars out of 5
  expectedStudyTimeMin: number;
  prerequisites: string[]; // IDs of prerequisite concepts
  relatedConceptIds: string[];
  kidAnalogy: string;
  storyTitle: string;
  storyText: string;
  memoryAnchor: string;
  band5Script: {
    question: string;
    answerText: string;
    durationSec: number;
  };
  goodVsBadReaction: {
    goodSay: string;
    goodInterviewerReaction: string;
    badSay: string;
    badInterviewerReaction: string;
  };
  hints: {
    tiny: string;
    medium: string;
    almostAnswer: string;
  };
}

export const CONCEPT_NODES: ConceptNode[] = [
  {
    id: 'java-basics',
    title: 'Java Fundamentals & JVM Execution',
    shortTitle: 'Java & JVM',
    icon: '☕',
    category: 'Java & OOP',
    dangerLevel: '🟡 Medium Risk',
    realInterviewProbability: 4,
    expectedStudyTimeMin: 10,
    prerequisites: [],
    relatedConceptIds: ['java-oop-encapsulation', 'java-oop-polymorphism'],
    kidAnalogy: 'JDK is the toy factory, JRE is the playroom, JVM is the robot playing the game.',
    storyTitle: 'The Translator & Execution Engine',
    storyText: 'Java code is compiled into bytecode (.class) by javac. JVM translates bytecode to machine code for any OS.',
    memoryAnchor: 'JDK (Build) -> JRE (Run) -> JVM (Execute)',
    band5Script: {
      question: 'What is the difference between JDK, JRE, and JVM in Java?',
      answerText: 'JDK is the Java Development Kit used by developers to compile and build Java applications. JRE is the Java Runtime Environment that provides libraries to run compiled Java programs. JVM is the Java Virtual Machine that executes bytecode line by line on specific operating systems.',
      durationSec: 25
    },
    goodVsBadReaction: {
      goodSay: 'JVM executes bytecode line by line, allowing Java to be write once, run anywhere.',
      goodInterviewerReaction: '✅ Clear understanding of cross-platform Java execution.',
      badSay: 'JVM is a database for Java files.',
      badInterviewerReaction: '❌ Red flag! Confusing virtual machine execution with databases.'
    },
    hints: {
      tiny: 'Think about compile vs run vs machine execution.',
      medium: 'JDK contains compiler, JRE contains runtime libraries, JVM runs bytecode.',
      almostAnswer: 'JDK = Development Kit, JRE = Runtime Environment, JVM = Virtual Machine.'
    }
  },
  {
    id: 'java-oop-encapsulation',
    title: 'Encapsulation & Data Hiding',
    shortTitle: 'Encapsulation',
    icon: '📺',
    category: 'Java & OOP',
    dangerLevel: '🔴 High Risk',
    realInterviewProbability: 5,
    expectedStudyTimeMin: 15,
    prerequisites: ['java-basics'],
    relatedConceptIds: ['java-oop-polymorphism', 'spring-boot-di'],
    kidAnalogy: 'TV remote control buttons protect the internal electrical wires inside.',
    storyTitle: 'The Bank Vault Protection',
    storyText: 'Private variables hide class fields; public getter and setter methods validate modifications.',
    memoryAnchor: 'Encapsulation = TV Remote Buttons',
    band5Script: {
      question: 'What is Encapsulation and how is it implemented in Java?',
      answerText: 'Encapsulation is the OOP principle of binding data variables and methods together inside a single class and restricting direct external access. In Java, we declare class fields as private and provide public getter and setter methods to access them safely.',
      durationSec: 26
    },
    goodVsBadReaction: {
      goodSay: 'Encapsulation uses private variables and public getters/setters to protect object state.',
      goodInterviewerReaction: '✅ Shows knowledge of data hiding and clean class design.',
      badSay: 'Encapsulation means making all variables public so anyone can edit them.',
      badInterviewerReaction: '❌ Complete opposite of encapsulation! Direct data corruption.'
    },
    hints: {
      tiny: 'Think private vs public.',
      medium: 'Private fields, public methods.',
      almostAnswer: 'Private variables + public getters/setters = Encapsulation.'
    }
  },
  {
    id: 'java-oop-polymorphism',
    title: 'Polymorphism (Overloading vs Overriding)',
    shortTitle: 'Polymorphism',
    icon: '🎭',
    category: 'Java & OOP',
    dangerLevel: '🔴 High Risk',
    realInterviewProbability: 5,
    expectedStudyTimeMin: 20,
    prerequisites: ['java-oop-encapsulation'],
    relatedConceptIds: ['spring-boot-di', 'rest-api-backend'],
    kidAnalogy: 'An actor playing Batman on stage and a father at home.',
    storyTitle: 'The Payment Gateway Interface',
    storyText: 'Overloading is compile-time (same class, different params). Overriding is runtime (child redefines parent method).',
    memoryAnchor: 'Polymorphism = Actor Playing Roles',
    band5Script: {
      question: 'What is the difference between Method Overloading and Method Overriding?',
      answerText: 'Method Overloading occurs within the same class when methods share the same name but have different parameters. It is compile-time polymorphism. Method Overriding occurs when a child class redefines a parent class method with the exact same signature. It is runtime polymorphism.',
      durationSec: 28
    },
    goodVsBadReaction: {
      goodSay: 'Overloading is same class different params; Overriding is child class redefining parent method.',
      goodInterviewerReaction: '✅ Perfect clarity on compile-time vs runtime polymorphism.',
      badSay: 'Overloading and Overriding are the exact same thing.',
      badInterviewerReaction: '❌ Red flag! Fails fundamental OOP distinction.'
    },
    hints: {
      tiny: 'Same class vs Parent-Child class.',
      medium: 'Overloading = same class different params. Overriding = child class changing method.',
      almostAnswer: 'Overloading = Compile-time; Overriding = Runtime.'
    }
  },
  {
    id: 'dsa-stack-queue',
    title: 'Stack & Queue Data Structures',
    shortTitle: 'Stack & Queue',
    icon: '🧱',
    category: 'DSA',
    dangerLevel: '🟡 Medium Risk',
    realInterviewProbability: 4,
    expectedStudyTimeMin: 12,
    prerequisites: [],
    relatedConceptIds: ['dsa-hashmap'],
    kidAnalogy: 'Stack = Plate stack (LIFO). Queue = Ticket line (FIFO).',
    storyTitle: 'Undo History vs Printer Queue',
    storyText: 'Stack pops from top (LIFO). Queue dequeues from front (FIFO).',
    memoryAnchor: 'Stack (LIFO) vs Queue (FIFO)',
    band5Script: {
      question: 'What is the difference between a Stack and a Queue?',
      answerText: 'A Stack follows Last-In, First-Out principle (LIFO). The item added last is removed first using push and pop, like a stack of plates. A Queue follows First-In, First-Out principle (FIFO). The item added first is removed first using enqueue and dequeue, like a line for tickets.',
      durationSec: 25
    },
    goodVsBadReaction: {
      goodSay: 'Stack is LIFO for undo history; Queue is FIFO for sequential processing.',
      goodInterviewerReaction: '✅ Concise operational knowledge.',
      badSay: 'Stack dequeues from the front.',
      badInterviewerReaction: '❌ Confused operations between Stack and Queue.'
    },
    hints: {
      tiny: 'LIFO vs FIFO.',
      medium: 'Stack = LIFO (Plates). Queue = FIFO (Line).',
      almostAnswer: 'Stack uses push/pop (LIFO). Queue uses enqueue/dequeue (FIFO).'
    }
  },
  {
    id: 'sql-joins-keys',
    title: 'SQL Keys, Joins & Transactions',
    shortTitle: 'SQL & Joins',
    icon: '🔗',
    category: 'Database',
    dangerLevel: '🔴 High Risk',
    realInterviewProbability: 5,
    expectedStudyTimeMin: 20,
    prerequisites: [],
    relatedConceptIds: ['rest-api-backend', 'spring-boot-di'],
    kidAnalogy: 'ID badge (Primary Key) linked to Classroom room number (Foreign Key).',
    storyTitle: 'Customer & Orders Report',
    storyText: 'Primary Key uniquely identifies a row. Foreign Key links to another table. INNER JOIN matches both tables.',
    memoryAnchor: 'SQL Joins = Connecting Puzzle Pieces',
    band5Script: {
      question: 'What is the difference between Primary Key, Foreign Key, and INNER vs LEFT JOIN?',
      answerText: 'A Primary Key uniquely identifies each row in a table. A Foreign Key points to a Primary Key in another table to create a relationship. INNER JOIN returns matching rows in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table.',
      durationSec: 30
    },
    goodVsBadReaction: {
      goodSay: 'Primary Key is unique ID per row; Foreign Key connects tables; INNER JOIN requires matching keys.',
      goodInterviewerReaction: '✅ Solid database query foundation.',
      badSay: 'Foreign Key must be unique in every row.',
      badInterviewerReaction: '❌ Incorrect! Multiple rows can share the same Foreign Key value.'
    },
    hints: {
      tiny: 'Unique ID vs Relationship ID.',
      medium: 'PK is unique row identifier. FK links to PK in another table.',
      almostAnswer: 'PK = Unique row ID. FK = Link to another table. INNER JOIN = Match both.'
    }
  },
  {
    id: 'rest-api-backend',
    title: 'REST APIs & Microservices',
    shortTitle: 'REST APIs',
    icon: '🍽️',
    category: 'Backend',
    dangerLevel: '🔴 High Risk',
    realInterviewProbability: 5,
    expectedStudyTimeMin: 20,
    prerequisites: ['java-oop-polymorphism'],
    relatedConceptIds: ['spring-boot-di', 'git-docker-devops'],
    kidAnalogy: 'Restaurant waiter taking order from customer menu to kitchen.',
    storyTitle: 'Online Shopping API Call',
    storyText: 'GET fetches data, POST creates data, PUT updates data, DELETE removes data. Communication happens via JSON over HTTP.',
    memoryAnchor: 'REST API = Restaurant Waiter',
    band5Script: {
      question: 'What is a REST API and what are common HTTP methods and status codes?',
      answerText: 'A REST API allows frontend and backend systems to communicate over HTTP using JSON payloads. Common HTTP methods are GET to fetch data, POST to create data, PUT to update data, and DELETE to remove data. Status codes include 200 OK, 201 Created, 404 Not Found, and 500 Internal Error.',
      durationSec: 28
    },
    goodVsBadReaction: {
      goodSay: 'REST APIs use HTTP methods like GET and POST to transfer JSON data asynchronously.',
      goodInterviewerReaction: '✅ Clean modern backend API understanding.',
      badSay: 'REST is a programming language written in Java.',
      badInterviewerReaction: '❌ Immediate red flag! REST is an architectural style, not a language.'
    },
    hints: {
      tiny: 'HTTP methods + JSON.',
      medium: 'GET/POST/PUT/DELETE exchanging JSON over HTTP.',
      almostAnswer: 'REST = Representational State Transfer using HTTP & JSON.'
    }
  },
  {
    id: 'spring-boot-di',
    title: 'Spring Boot & Dependency Injection',
    shortTitle: 'Spring Boot',
    icon: '🔌',
    category: 'Backend',
    dangerLevel: '🔴 High Risk',
    realInterviewProbability: 5,
    expectedStudyTimeMin: 25,
    prerequisites: ['java-oop-encapsulation', 'java-oop-polymorphism', 'rest-api-backend'],
    relatedConceptIds: ['git-docker-devops'],
    kidAnalogy: 'Plugging toy car into universal wall charger.',
    storyTitle: '3-Tier Factory Assembly Line',
    storyText: 'Controller handles HTTP requests -> Service handles business logic -> Repository handles DB access.',
    memoryAnchor: 'Spring Boot = 3-Tier Layer Assembly',
    band5Script: {
      question: 'What is Spring Boot and what is Dependency Injection?',
      answerText: 'Spring Boot is an open-source Java framework that simplifies building microservices with auto-configuration and embedded servers. Dependency Injection is a pattern where the Spring IoC container automatically creates and injects object dependencies into classes, reducing tight coupling.',
      durationSec: 27
    },
    goodVsBadReaction: {
      goodSay: 'Spring Boot IoC container manages bean lifecycles and injects dependencies automatically.',
      goodInterviewerReaction: '✅ Demonstrates framework fluency.',
      badSay: 'Spring Boot requires writing 100 XML configuration files for every class.',
      badInterviewerReaction: '❌ Outdated knowledge! Spring Boot eliminates XML configs.'
    },
    hints: {
      tiny: 'Auto-config + IoC container.',
      medium: 'Controller -> Service -> Repository. IoC container injects objects.',
      almostAnswer: 'Spring Boot auto-configures app; IoC container injects dependencies (@Autowired).'
    }
  },
  {
    id: 'git-docker-devops',
    title: 'Git Version Control & Docker Containers',
    shortTitle: 'Git & Docker',
    icon: '📦',
    category: 'DevOps & AI',
    dangerLevel: '🟡 Medium Risk',
    realInterviewProbability: 4,
    expectedStudyTimeMin: 15,
    prerequisites: [],
    relatedConceptIds: ['rest-api-backend', 'spring-boot-di'],
    kidAnalogy: 'Sealed lunchbox with sandwich and spoon inside.',
    storyTitle: 'Time Machine & Shipping Container',
    storyText: 'Git tracks code history with branches; Docker packages app + runtime so it runs identical anywhere.',
    memoryAnchor: 'Docker = Metal Shipping Cargo Container',
    band5Script: {
      question: 'What is your Git workflow and why do we use Docker?',
      answerText: 'In Git, I pull main code, create a feature branch with git checkout -b, commit changes, push, and open a Pull Request for review. We use Docker to package application code, runtime, and dependencies into a single container so it runs identically across all environments.',
      durationSec: 28
    },
    goodVsBadReaction: {
      goodSay: 'Docker eliminates "it works on my machine" by packaging dependencies into a portable container image.',
      goodInterviewerReaction: '✅ Great DevOps awareness.',
      badSay: 'I commit all code directly to production main branch without PR review.',
      badInterviewerReaction: '❌ Unsafe git practices in team environment.'
    },
    hints: {
      tiny: 'Branching + Container packaging.',
      medium: 'Git feature branches + Docker packaging code + dependencies.',
      almostAnswer: 'Git = Version Control (PRs). Docker = Lightweight container runtime.'
    }
  }
];
