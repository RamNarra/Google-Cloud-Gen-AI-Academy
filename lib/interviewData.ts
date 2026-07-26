export interface DiagramNode {
  id: string;
  label: string;
  sub?: string;
  type?: 'actor' | 'class' | 'process' | 'database' | 'cloud' | 'component';
}

export interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
  style?: 'dashed' | 'solid';
}

export interface DiagramSpec {
  title: string;
  type: 'uml-class' | 'uml-sequence' | 'sdlc-flow' | 'memory-stack' | 'architecture' | 'dsa-viz';
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  description: string;
}

export interface FiveModes {
  kid: {
    title: string;
    text: string;
  };
  story: {
    title: string;
    text: string;
    takeaway: string;
  };
  diagramSpec: DiagramSpec;
  script: {
    question: string;
    answerText: string;
    durationSec: number;
    whatNotToSay: string;
  };
  followUp: {
    interviewerQuestion: string;
    answerText: string;
    trapWarning: string;
  };
}

export interface WhyChain {
  whatIsIt: string;
  whyUseIt: string;
  problemItSolves: string;
  whereDidYouUseIt: string;
  realWorldExample: string;
}

export interface InterviewModule {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  memoryAnchorText: string;
  category: 'Software Engineering' | 'Java & OOP' | 'DSA' | 'Database' | 'Backend' | 'DevOps & AI' | 'Behavioral' | 'Resume';
  summary: string;
  isTopEmergencyTopic?: boolean;
  fiveModes: FiveModes;
  whyChain: WhyChain;
  whyInterviewerAsks: string;
  panicMode3Points: string[];
  personalityQuestions: {
    friendlyHR: string;
    seriousEngineer: string;
    strictSeniorEngineer: string;
  };
  keyConcepts: {
    term: string;
    definition: string;
    example: string;
  }[];
}

export const INTERVIEW_MODULES: InterviewModule[] = [
  {
    id: 'sdlc-se',
    title: 'Module 1: Software Engineering & SDLC',
    shortTitle: '1. SDLC & Agile',
    icon: '🏃',
    memoryAnchorText: 'Agile = Running Laps & Quick Feedback',
    category: 'Software Engineering',
    summary: 'Master process models, Waterfall vs Agile Scrum, Requirements, Testing, Quality, Risk, and UML diagrams.',
    isTopEmergencyTopic: true,
    whyInterviewerAsks: 'They want to know if you can fit into a modern Agile Scrum team without needing constant supervision.',
    panicMode3Points: [
      'Waterfall is step-by-step and rigid (cannot go back).',
      'Agile divides work into 2-week sprints with fast customer feedback.',
      'Daily Standup takes 15 mins: What I did yesterday, what I will do today, any blockers.'
    ],
    personalityQuestions: {
      friendlyHR: 'Can you tell me how your team worked together on projects in college or internship?',
      seriousEngineer: 'What is the main difference between Waterfall and Agile methodology?',
      strictSeniorEngineer: 'Why would a SaaS engineering team switch from Waterfall to Agile Scrum?'
    },
    whyChain: {
      whatIsIt: 'SDLC is the step-by-step process software teams follow to build software.',
      whyUseIt: 'To deliver high-quality software on time without missing critical requirements or testing.',
      problemItSolves: 'Prevents building software that users do not want or software full of bugs.',
      whereDidYouUseIt: 'In my college projects and internship during sprint planning and daily standups.',
      realWorldExample: 'Building a feature in 2-week sprints with QA testing and client demos.'
    },
    fiveModes: {
      kid: {
        title: 'Building LEGO Blocks Room by Room',
        text: 'Instead of building a giant LEGO castle all at once and hoping your friend likes it, you build one room at a time, show your friend, get their thoughts, and then build the next room!'
      },
      story: {
        title: 'The House Blueprint vs Modular Building',
        text: 'In Waterfall, you draw the full blueprint, buy all bricks, build the whole house, and show the owner on the last day. If they hate the kitchen, you have to break the house! In Agile (Scrum), you build room by room. Every 2 weeks, you show the bedroom, get feedback, and adjust before building the kitchen.',
        takeaway: 'Agile reduces risk by getting early feedback every 2 weeks.'
      },
      diagramSpec: {
        title: 'Agile Sprint Loop vs Waterfall',
        type: 'sdlc-flow',
        nodes: [
          { id: '1', label: 'Product Backlog', sub: 'Feature list', type: 'process' },
          { id: '2', label: 'Sprint Planning', sub: 'Select 2-week tasks', type: 'process' },
          { id: '3', label: 'Development & QA', sub: 'Coding & testing', type: 'component' },
          { id: '4', label: 'Sprint Demo', sub: 'Working software demo', type: 'process' }
        ],
        edges: [
          { from: '1', to: '2', label: 'Prioritize' },
          { from: '2', to: '3', label: 'Start sprint' },
          { from: '3', to: '4', label: 'Deliver' },
          { from: '4', to: '1', label: 'Feedback loop', style: 'dashed' }
        ],
        description: 'Agile moves in continuous 2-week feedback loops.'
      },
      script: {
        question: 'What is the difference between Waterfall and Agile methodology?',
        answerText: 'In Waterfall model, work is done sequentially step by step—Requirements, Design, Coding, and Testing. We cannot go back easily. In Agile, work is divided into short iterations called sprints, usually 2 to 3 weeks long. We deliver working software quickly and take continuous feedback from the client.',
        durationSec: 25,
        whatNotToSay: 'Do NOT try to explain CMMI Level 5 metrics or complex formal equations unless asked directly.'
      },
      followUp: {
        interviewerQuestion: 'What happens if a requirement changes during an active sprint?',
        answerText: 'In Agile, mid-sprint changes are avoided if possible. If urgent, the Product Owner reprioritizes the backlog, and we swap out a task of equal effort for the next sprint.',
        trapWarning: 'Don\'t say "We immediately abandon our code and change it!" Show respect for sprint planning.'
      }
    },
    keyConcepts: [
      {
        term: 'Agile Scrum Sprints',
        definition: 'Short 2-4 week development cycles delivering incremental working features.',
        example: 'Daily 15-min standups: Yesterday, Today, Blockers.'
      }
    ]
  },
  {
    id: 'java-oop-encapsulation',
    title: 'Module 2: Encapsulation in Java',
    shortTitle: '2. Encapsulation',
    icon: '📺',
    memoryAnchorText: 'Encapsulation = TV Remote Control Buttons',
    category: 'Java & OOP',
    summary: 'Data hiding using private variables and public getters/setters in Java.',
    isTopEmergencyTopic: true,
    whyInterviewerAsks: 'They check if you write clean, secure code that protects object states from illegal external modifications.',
    panicMode3Points: [
      'Encapsulation means wrapping data and methods into a single unit.',
      'Declare variables as private.',
      'Provide public getter and setter methods to access variables safely.'
    ],
    personalityQuestions: {
      friendlyHR: 'How do you keep data safe in Java programs?',
      seriousEngineer: 'What is Encapsulation and how do you achieve it in Java?',
      strictSeniorEngineer: 'Why can\'t I just make all my Java fields public instead of writing getters and setters?'
    },
    whyChain: {
      whatIsIt: 'Encapsulation is hiding internal object data and providing public methods for access.',
      whyUseIt: 'To protect fields from invalid data (e.g. setting negative account balance).',
      problemItSolves: 'Prevents external code from corrupting an object\'s state directly.',
      whereDidYouUseIt: 'In all my Java model entities and DTOs using private fields.',
      realWorldExample: 'ATM machine only lets you withdraw cash through verified methods, not touching money directly.'
    },
    fiveModes: {
      kid: {
        title: 'The TV Remote Control',
        text: 'When you want to increase TV volume, you press the Volume Up button. You don\'t open the TV with a screwdriver to touch the wires inside! The buttons protect the wires.'
      },
      story: {
        title: 'The Bank Account Vault',
        text: 'Imagine a bank. If anyone could walk in and change their account balance on a whiteboard, people would write $1,000,000! Encapsulation makes the balance variable private, and provides a deposit() setter method that validates the money before updating.',
        takeaway: 'Private variables + public validation methods protect data integrity.'
      },
      diagramSpec: {
        title: 'Encapsulation Class Protection',
        type: 'uml-class',
        nodes: [
          { id: '1', label: 'BankAccount Class', sub: '- private balance: double\n+ getBalance(): double\n+ deposit(amount): void', type: 'class' },
          { id: '2', label: 'External Code / User', sub: 'Tries balance = -500 (REJECTED)\nCalls deposit(100) (ALLOWED)', type: 'actor' }
        ],
        edges: [
          { from: '2', to: '1', label: 'Access via Getters/Setters' }
        ],
        description: 'External code interacts only via public methods; private fields are hidden.'
      },
      script: {
        question: 'What is Encapsulation and how is it implemented in Java?',
        answerText: 'Encapsulation is the OOP principle of wrapping data variables and methods together into a single class and hiding internal state. In Java, we achieve encapsulation by declaring class variables as private and providing public getter and setter methods to access and modify them safely with validation.',
        durationSec: 26,
        whatNotToSay: 'Do not confuse Encapsulation (data hiding) with Abstraction (hiding implementation complexity).'
      },
      followUp: {
        interviewerQuestion: 'Is Java String class encapsulated?',
        answerText: 'Yes, String in Java is completely encapsulated and immutable. Its internal char array is private final, and no setters exist.',
        trapWarning: 'Never say String can be modified directly!'
      }
    },
    keyConcepts: [
      {
        term: 'Data Hiding',
        definition: 'Restricting direct access to class members using private access modifier.',
        example: 'private double salary;'
      }
    ]
  },
  {
    id: 'java-oop-polymorphism',
    title: 'Module 3: Polymorphism (Overloading vs Overriding)',
    shortTitle: '3. Polymorphism',
    icon: '🎭',
    memoryAnchorText: 'Polymorphism = Actor Playing Different Roles',
    category: 'Java & OOP',
    summary: 'One interface, multiple forms: Compile-time (Overloading) vs Runtime (Overriding).',
    isTopEmergencyTopic: true,
    whyInterviewerAsks: 'This is the #1 most asked Java interview question to test OOP mastery.',
    panicMode3Points: [
      'Polymorphism means one method name taking multiple forms.',
      'Overloading = Same class, same method name, DIFFERENT parameters (Compile-time).',
      'Overriding = Parent & Child class, same method name & parameters (Runtime).'
    ],
    personalityQuestions: {
      friendlyHR: 'Can you give a simple real-life example of polymorphism?',
      seriousEngineer: 'What is the difference between Method Overloading and Method Overriding?',
      strictSeniorEngineer: 'Can you override a static or private method in Java? Why or why not?'
    },
    whyChain: {
      whatIsIt: 'Polymorphism allows objects of different classes to respond to the same method call in their own way.',
      whyUseIt: 'To write generic, reusable code (e.g. List of Animals making sounds).',
      problemItSolves: 'Eliminates repetitive if-else blocks checking object types.',
      whereDidYouUseIt: 'Overriding toString(), equals(), or payment gateway processPayment() methods.',
      realWorldExample: 'Pressing the horn on a Car vs Truck—both are horn(), but sound different.'
    },
    fiveModes: {
      kid: {
        title: 'The Actor on Stage',
        text: 'Imagine an actor. In a superhero movie, he acts like Batman. At home, he acts like a dad. Same person, but different behavior depending on the situation!'
      },
      story: {
        title: 'The Payment Gateway',
        text: 'In an e-commerce site, you have a Payment parent class with a pay() method. CreditCardPayment overrides pay() to swipe card. UPIPayment overrides pay() to scan QR code. The checkout system just calls payment.pay() without worrying about how each card/UPI works!',
        takeaway: 'Parent reference can execute child-specific overridden methods dynamically.'
      },
      diagramSpec: {
        title: 'Polymorphism Class Hierarchy',
        type: 'uml-class',
        nodes: [
          { id: '1', label: 'Payment (Parent)', sub: '+ pay(amount)', type: 'class' },
          { id: '2', label: 'CreditCardPayment', sub: '+ pay(amount) [Overridden]', type: 'class' },
          { id: '3', label: 'UPIPayment', sub: '+ pay(amount) [Overridden]', type: 'class' }
        ],
        edges: [
          { from: '2', to: '1', label: 'extends' },
          { from: '3', to: '1', label: 'extends' }
        ],
        description: 'Both child classes override pay() method to provide unique payment execution.'
      },
      script: {
        question: 'What is Polymorphism and what is the difference between Method Overloading and Overriding?',
        answerText: 'Polymorphism means one name, multiple forms. Method Overloading happens in the same class when two methods have the same name but different parameters. It is compile-time polymorphism. Method Overriding happens when a child class redefines a method inherited from a parent class with the exact same signature. It is runtime polymorphism.',
        durationSec: 28,
        whatNotToSay: 'Never say Overloading happens between parent and child classes! Overloading is within the same class.'
      },
      followUp: {
        interviewerQuestion: 'Can we override a static method in Java?',
        answerText: 'No, static methods belong to the class, not instance objects, so they cannot be overridden. If redefined in child class, it is called Method Hiding.',
        trapWarning: 'Don\'t say yes! Static methods cannot be overridden.'
      }
    },
    keyConcepts: [
      {
        term: 'Compile-Time Polymorphism',
        definition: 'Resolved by compiler based on method signatures (Overloading).',
        example: 'add(int a, int b) vs add(double a, double b).'
      }
    ]
  },
  {
    id: 'dsa-stack-queue',
    title: 'Module 4: Stack & Queue Data Structures',
    shortTitle: '4. Stack & Queue',
    icon: '🧱',
    memoryAnchorText: 'Stack = Plate Stack | Queue = Ticket Line',
    category: 'DSA',
    summary: 'LIFO (Stack) vs FIFO (Queue), operations (push, pop, enqueue, dequeue), and real-world uses.',
    isTopEmergencyTopic: true,
    whyInterviewerAsks: 'They want to verify basic Data Structure intuition and memory retrieval order.',
    panicMode3Points: [
      'Stack = LIFO (Last In First Out), like a stack of plates. Operations: push, pop.',
      'Queue = FIFO (First In First Out), like a line for tickets. Operations: enqueue, dequeue.',
      'Stack is used for Undo button & recursion; Queue is used for task processing & printer queues.'
    ],
    personalityQuestions: {
      friendlyHR: 'How would you explain Stack and Queue to someone new to programming?',
      seriousEngineer: 'Compare Stack and Queue operations and their real-world applications.',
      strictSeniorEngineer: 'How do you implement a Queue using two Stacks?'
    },
    whyChain: {
      whatIsIt: 'Stack is LIFO data structure; Queue is FIFO data structure.',
      whyUseIt: 'To manage items in exact order (top priority vs first-come first-served).',
      problemItSolves: 'Prevents out-of-order execution during processing.',
      whereDidYouUseIt: 'Stack in browser back-button history; Queue in asynchronous task queues.',
      realWorldExample: 'Plates on a table (Stack) vs People waiting for a bus (Queue).'
    },
    fiveModes: {
      kid: {
        title: 'Cafeteria Plates & Bus Stop Line',
        text: 'A Stack is like plates stacked at lunch. The last plate put on top is the first plate taken! A Queue is like standing in line for ice cream. The first kid in line gets ice cream first!'
      },
      story: {
        title: 'Undo History vs Printing Documents',
        text: 'When typing in Microsoft Word, pressing Ctrl+Z pops the last action from the STACK (LIFO). When 10 employees send documents to a office printer, the printer prints document #1 first from the QUEUE (FIFO).',
        takeaway: 'Stack for reversing/undoing; Queue for fair sequential processing.'
      },
      diagramSpec: {
        title: 'Stack (LIFO) vs Queue (FIFO) Operations',
        type: 'dsa-viz',
        nodes: [
          { id: 's1', label: 'Stack Top [Pop/Push]', sub: 'LIFO: Last In First Out', type: 'component' },
          { id: 'q1', label: 'Queue Front [Dequeue]', sub: 'FIFO: First In First Out', type: 'process' },
          { id: 'q2', label: 'Queue Rear [Enqueue]', type: 'process' }
        ],
        edges: [
          { from: 'q2', to: 'q1', label: 'Flow' }
        ],
        description: 'Stack adds/removes from top; Queue adds at rear, removes at front.'
      },
      script: {
        question: 'What is the difference between a Stack and a Queue?',
        answerText: 'A Stack follows Last-In, First-Out principle, called LIFO. The element added last is removed first using push and pop operations, like a stack of plates. A Queue follows First-In, First-Out principle, called FIFO. The element added first is removed first using enqueue and dequeue operations, like a line of people waiting for a ticket.',
        durationSec: 25,
        whatNotToSay: 'Do not confuse push/pop with enqueue/dequeue terminology.'
      },
      followUp: {
        interviewerQuestion: 'What data structure is used by JVM for method invocation execution?',
        answerText: 'JVM uses the Call Stack. Each method call creates a stack frame pushed to the top, and pops it off when the method returns.',
        trapWarning: 'Say "Call Stack", not Queue!'
      }
    },
    keyConcepts: [
      {
        term: 'LIFO vs FIFO',
        definition: 'LIFO = Last In First Out. FIFO = First In First Out.',
        example: 'Ctrl+Z (LIFO) vs Print Queue (FIFO).'
      }
    ]
  }
];
