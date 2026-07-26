export interface McqQuestion {
  id: number;
  category: string;
  question: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export const MEGA_MCQ_QUESTIONS: McqQuestion[] = [
  // 1-10: SECTION I (FSM & ENTERPRISE SAAS)
  {
    id: 1,
    category: "FSM & SaaS",
    question: "What is the primary architectural requirement of Multi-Tenancy in Enterprise SaaS applications?",
    options: [
      { key: 'A', text: "Deploying a separate physical server for every client" },
      { key: 'B', text: "Sharing server infrastructure while strictly isolating client data" },
      { key: 'C', text: "Allowing all clients to access a single shared database table without row locks" },
      { key: 'D', text: "Storing client passwords in plaintext for faster lookup" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Deploying separate physical servers for every client is Single-Tenancy, which increases hardware costs.",
      B: "Correct! Multi-tenancy shares application and server resources while enforcing mathematical tenant data isolation.",
      C: "Incorrect: Sharing a single table without tenant filters or row locks violates enterprise security.",
      D: "Incorrect: Passwords must always be hashed using BCrypt or Argon2, never stored in plaintext."
    }
  },
  {
    id: 2,
    category: "FSM & SaaS",
    question: "Which business module in an FSM system tracks general accounting ledgers, supplier payments, and customer billing?",
    options: [
      { key: 'A', text: "Supply Chain Procurement" },
      { key: 'B', text: "Financials Module" },
      { key: 'C', text: "Warehouse Picking Engine" },
      { key: 'D', text: "UI Layout Builder" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Supply Chain Procurement handles raw material ordering and supplier logistics.",
      B: "Correct! The Financials module manages general accounting ledgers, invoices, and supplier payments.",
      C: "Incorrect: Warehouse Picking Engine manages physical product movement inside warehouses.",
      D: "Incorrect: UI Layout Builder is a frontend design tool."
    }
  },
  {
    id: 3,
    category: "FSM & SaaS",
    question: "What does ERP stand for in enterprise software engineering?",
    options: [
      { key: 'A', text: "Electronic Rapid Processing" },
      { key: 'B', text: "Enterprise Resource Planning" },
      { key: 'C', text: "Extended Routing Protocol" },
      { key: 'D', text: "External Repository Provider" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Not an industry term for business software suites.",
      B: "Correct! ERP stands for Enterprise Resource Planning, connecting Finance, HR, and Supply Chain into one system.",
      C: "Incorrect: Routing protocol is a networking term.",
      D: "Incorrect: Repository provider refers to Git hosting."
    }
  },
  {
    id: 4,
    category: "FSM & SaaS",
    question: "Why do enterprise SaaS platforms favor cloud subscription models over traditional on-premise software installation?",
    options: [
      { key: 'A', text: "Cloud SaaS allows automatic seamless software updates without client IT manual installs" },
      { key: 'B', text: "On-premise software requires zero maintenance" },
      { key: 'C', text: "Cloud SaaS eliminates the need for internet connectivity" },
      { key: 'D', text: "Cloud SaaS does not support multi-currency financial accounting" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Centralized cloud SaaS enables instant feature rollouts and updates for all clients simultaneously.",
      B: "Incorrect: On-premise software requires heavy manual IT server maintenance.",
      C: "Incorrect: SaaS requires internet access to connect to cloud services.",
      D: "Incorrect: SaaS natively supports multi-currency global enterprise accounting."
    }
  },
  {
    id: 5,
    category: "FSM & SaaS",
    question: "In Supply Chain Management, what is the primary purpose of Inventory Demand Forecasting?",
    options: [
      { key: 'A', text: "To delete past sales records automatically" },
      { key: 'B', text: "To predict future stock needs and prevent warehouse stock-outs or overstocking" },
      { key: 'C', text: "To replace all human warehouse workers with robots immediately" },
      { key: 'D', text: "To encrypt SQL database primary keys" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Deleting historical sales data ruins auditing and analytics.",
      B: "Correct! Demand forecasting predicts future product sales to optimize inventory levels and prevent stock-outs.",
      C: "Incorrect: Forecasting is an analytics tool, not physical warehouse robotics.",
      D: "Incorrect: Database primary keys are unrelated to inventory demand modeling."
    }
  },
  {
    id: 6,
    category: "FSM & SaaS",
    question: "Which metric is most critical for measuring the availability of an Enterprise SaaS platform?",
    options: [
      { key: 'A', text: "Font size in CSS" },
      { key: 'B', text: "Uptime percentage (e.g. 99.99% High Availability)" },
      { key: 'C', text: "Number of Git commits per day" },
      { key: 'D', text: "Total lines of comments written in Java" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: CSS font size does not impact system uptime or reliability.",
      B: "Correct! Uptime SLA (Service Level Agreement) measures system availability for enterprise clients.",
      C: "Incorrect: Commit count does not measure live production availability.",
      D: "Incorrect: Line count of comments is not an operational reliability metric."
    }
  },
  {
    id: 7,
    category: "FSM & SaaS",
    question: "What is a major security risk in multi-tenant database design if tenant filters are missing in SQL queries?",
    options: [
      { key: 'A', text: "Cross-Tenant Data Leakage (Tenant A seeing Tenant B's financial data)" },
      { key: 'B', text: "Faster query execution" },
      { key: 'C', text: "Automatic database backup creation" },
      { key: 'D', text: "Increased CSS render speed" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Missing tenant_id WHERE clauses in SQL queries leads to dangerous cross-tenant data leakage.",
      B: "Incorrect: Omitting security filters is a vulnerability, not an optimization.",
      C: "Incorrect: Data leaks do not create backups.",
      D: "Incorrect: SQL queries are server-side and unrelated to CSS rendering."
    }
  },
  {
    id: 8,
    category: "FSM & SaaS",
    question: "How does an FSM Supply Management module interact with Purchase Orders (PO)?",
    options: [
      { key: 'A', text: "It converts approved requisitions into official Purchase Orders sent to suppliers" },
      { key: 'B', text: "It deletes supplier invoices upon receipt" },
      { key: 'C', text: "It converts Java code into HTML" },
      { key: 'D', text: "It formats JSON files into XML" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Procurement workflows generate Purchase Orders (PO) to formally request goods from suppliers.",
      B: "Incorrect: Invoices must be recorded for financial accounting, never deleted.",
      C: "Incorrect: Purchase orders are business domain documents, not code compilers.",
      D: "Incorrect: PO processing handles business transactions, not raw file translation."
    }
  },
  {
    id: 9,
    category: "FSM & SaaS",
    question: "What role does an Associate Software Engineer play on an FSM product engineering team?",
    options: [
      { key: 'A', text: "Designing, developing, testing, and maintaining scalable Java SaaS applications under senior lead guidance" },
      { key: 'B', text: "Writing marketing emails for social media" },
      { key: 'C', text: "Manually installing operating systems on client desktop PCs" },
      { key: 'D', text: "Deciding company stock prices" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! The JD explicitly states Associate SEs design, develop, test, and maintain Java SaaS apps in Agile sprints.",
      B: "Incorrect: Marketing emails are handled by sales and marketing teams.",
      C: "Incorrect: SaaS applications run on cloud servers, not manual desktop installs.",
      D: "Incorrect: Stock prices are determined by financial markets."
    }
  },
  {
    id: 10,
    category: "FSM & SaaS",
    question: "Which architectural pattern is best suited for decoupling independent FSM modules like Invoicing and Inventory?",
    options: [
      { key: 'A', text: "Monolithic Spaghetti Code" },
      { key: 'B', text: "Event-Driven Microservices with Message Queues (e.g. Kafka/RabbitMQ)" },
      { key: 'C', text: "Direct static method calls between classes" },
      { key: 'D', text: "Storing all data in browser LocalStorage" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Monolithic tight coupling makes independent scaling impossible.",
      B: "Correct! Event-driven messaging allows Invoicing to notify Inventory asynchronously without hard coupling.",
      C: "Incorrect: Direct static calls create tight in-memory coupling.",
      D: "Incorrect: Browser LocalStorage cannot handle enterprise data processing."
    }
  },

  // 11-20: SECTION II (SOFTWARE ENGINEERING & AGILE SDLC)
  {
    id: 11,
    category: "Agile SDLC",
    question: "In professional software development, where are user requirements and task progress officially tracked?",
    options: [
      { key: 'A', text: "In the developer's personal memory/brain" },
      { key: 'B', text: "As User Stories and Jira Tickets on Agile boards" },
      { key: 'C', text: "On sticky notes attached to physical office walls only" },
      { key: 'D', text: "In un-committed local text files" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: As Marella Madhu emphasized in the call, engineers NEVER keep tasks in memory; tasks are tracked in Jira!",
      B: "Correct! Requirements are logged as User Stories in Jira and tracked across 2-week Agile sprints.",
      C: "Incorrect: Physical sticky notes lack global team visibility and automated tracking.",
      D: "Incorrect: Uncommitted files provide zero transparency to team leads."
    }
  },
  {
    id: 12,
    category: "Agile SDLC",
    question: "What are the 3 mandatory questions answered during a 15-minute Daily Stand-up meeting?",
    options: [
      { key: 'A', text: "What did I eat? What will I cook? Who is winning the match?" },
      { key: 'B', text: "What did I complete yesterday? What will I work on today? Are there any blockers?" },
      { key: 'C', text: "What is my salary? When is the party? Who wrote this bug?" },
      { key: 'D', text: "How do I write Java code? Where is the database? When is retirement?" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Stand-up is a technical huddle, not lunch chat.",
      B: "Correct! The 3 stand-up pillars are: Yesterday's progress, Today's goals, and Technical blockers.",
      C: "Incorrect: Blame and HR topics are forbidden in daily stand-ups.",
      D: "Incorrect: Basic learning questions should be asked to mentors outside stand-up."
    }
  },
  {
    id: 13,
    category: "Agile SDLC",
    question: "What is the primary purpose of a Sprint Retrospective meeting at the end of an Agile sprint?",
    options: [
      { key: 'A', text: "To blame junior engineers for bug reports" },
      { key: 'B', text: "To reflect on what went well, what failed, and how to improve team engineering processes" },
      { key: 'C', text: "To write 5,000 lines of Java code live" },
      { key: 'D', text: "To delete all Jira tickets from the server" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Retrospectives are blameless process improvement meetings.",
      B: "Correct! Retrospectives allow teams to inspect sprint performance and continuously refine processes.",
      C: "Incorrect: Coding happens during the sprint, not in retrospective meetings.",
      D: "Incorrect: Jira tickets must be preserved for compliance and history."
    }
  },
  {
    id: 14,
    category: "Agile SDLC",
    question: "Which SDLC phase comes immediately after System Design and immediately before Software Testing?",
    options: [
      { key: 'A', text: "Production Maintenance" },
      { key: 'B', text: "Implementation / Coding" },
      { key: 'C', text: "Requirements Gathering" },
      { key: 'D', text: "Server Decommissioning" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Maintenance is the final 6th phase.",
      B: "Correct! Implementation (Coding) translates design specs into code before QA testing begins.",
      C: "Incorrect: Requirements gathering is the 1st phase.",
      D: "Incorrect: Decommissioning occurs at end of software life."
    }
  },
  {
    id: 15,
    category: "Agile SDLC",
    question: "What is the main difference between Scrum and Kanban Agile methodologies?",
    options: [
      { key: 'A', text: "Scrum uses time-boxed Sprints (e.g. 2 weeks); Kanban focuses on continuous flow with WIP limits" },
      { key: 'B', text: "Scrum does not allow team meetings" },
      { key: 'C', text: "Kanban is only for building mobile apps" },
      { key: 'D', text: "Scrum requires using C++ instead of Java" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Scrum operates in fixed 2-week iterations; Kanban optimizes continuous flow using Work-In-Progress (WIP) limits.",
      B: "Incorrect: Scrum heavily relies on ceremonies (Planning, Stand-up, Demo, Retro).",
      C: "Incorrect: Kanban is framework-agnostic and used across software engineering.",
      D: "Incorrect: Scrum is a project management process, completely independent of programming language."
    }
  },
  {
    id: 16,
    category: "Agile SDLC",
    question: "What is a 'Blocker' in Agile ticket management?",
    options: [
      { key: 'A', text: "A line of code that compiles too fast" },
      { key: 'B', text: "An impediment (e.g. missing API access, broken environment) preventing a ticket from progressing" },
      { key: 'C', text: "A user who unsubscribes from marketing emails" },
      { key: 'D', text: "A database table index" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Fast compilation is desirable, not a blocker.",
      B: "Correct! Blockers are technical or dependency hurdles that stop progress and must be flagged in stand-up.",
      C: "Incorrect: Unsubscribing is customer behavior.",
      D: "Incorrect: Database index speeds up query execution."
    }
  },
  {
    id: 17,
    category: "Agile SDLC",
    question: "How does an Associate Software Engineer collaborate with QA (Quality Assurance) engineers during a sprint?",
    options: [
      { key: 'A', text: "By ignoring bug reports" },
      { key: 'B', text: "By providing clear deployment steps, test data, and unit test evidences when moving tickets to QA" },
      { key: 'C', text: "By writing QA automation scripts in secret without telling anyone" },
      { key: 'D', text: "By deploying directly to production without notifying QA" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Ignoring QA reports leads to production failures.",
      B: "Correct! Clear PR notes, setup steps, and test evidences ensure smooth QA verification.",
      C: "Incorrect: Collaboration requires open communication.",
      D: "Incorrect: Bypassing QA violates enterprise release governance."
    }
  },
  {
    id: 18,
    category: "Agile SDLC",
    question: "What is a 'User Story' in Jira?",
    options: [
      { key: 'A', text: "A fictional novel written by Product Managers" },
      { key: 'B', text: "A short requirement expressed from the end-user perspective describing feature value" },
      { key: 'C', text: "A list of employee passwords" },
      { key: 'D', text: "A SQL query syntax file" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: User stories are practical engineering requirements, not fiction.",
      B: "Correct! Format: 'As a [user], I want [feature] so that [benefit]'.",
      C: "Incorrect: Passwords are confidential auth credentials.",
      D: "Incorrect: User stories describe functional intent, not raw SQL queries."
    }
  },
  {
    id: 19,
    category: "Agile SDLC",
    question: "What happens during Sprint Planning?",
    options: [
      { key: 'A', text: "The team selects priority user stories from the Product Backlog and commits to them for the upcoming sprint" },
      { key: 'B', text: "The team deletes the git repository" },
      { key: 'C', text: "Developers take a 2-week vacation" },
      { key: 'D', text: "The CEO writes all code live" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Sprint Planning defines the sprint goal and selects stories fitting team capacity.",
      B: "Incorrect: Deleting repositories destroys company intellectual property.",
      C: "Incorrect: Sprint planning marks the beginning of active development.",
      D: "Incorrect: Development is executed by software engineers."
    }
  },
  {
    id: 20,
    category: "Agile SDLC",
    question: "Why is 'Definition of Done' (DoD) important before closing a Jira ticket?",
    options: [
      { key: 'A', text: "It ensures code is written, unit tested, reviewed via PR, and QA verified before status becomes Done" },
      { key: 'B', text: "It allows developers to mark tickets Done as soon as they start typing code" },
      { key: 'C', text: "It removes the requirement for code reviews" },
      { key: 'D', text: "It automatically increases developer salary" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! DoD enforces quality checks (coding, testing, review, QA pass) before marking a story complete.",
      B: "Incorrect: Typing code is 'In Progress', not Done.",
      C: "Incorrect: DoD mandates code reviews.",
      D: "Incorrect: DoD is a software quality standard."
    }
  },

  // 21-35: SECTION III (JAVA / J2EE & OOP PRINCIPLES)
  {
    id: 21,
    category: "Core Java",
    question: "How does Java achieve 'Write Once, Run Anywhere' (Platform Independence)?",
    options: [
      { key: 'A', text: "By compiling Java source code into platform-neutral Bytecode (.class) executed by the JVM" },
      { key: 'B', text: "By translating Java code into C++ before execution" },
      { key: 'C', text: "By forcing all computers in the world to run Windows OS" },
      { key: 'D', text: "By executing code inside the web browser JavaScript engine only" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `javac` compiles code into Bytecode (.class), which any platform's JVM interprets into native instructions.",
      B: "Incorrect: Java compiles to Bytecode, not C++.",
      C: "Incorrect: JVM runs on Linux, Mac, Windows, and cloud servers.",
      D: "Incorrect: Standard Java backend runs on JVM, not browser JS engines."
    }
  },
  {
    id: 22,
    category: "Core Java",
    question: "What is the difference between JDK, JRE, and JVM?",
    options: [
      { key: 'A', text: "JDK = Development tools + JRE; JRE = Runtime environment + JVM; JVM = Executes Bytecode" },
      { key: 'B', text: "JDK is for JavaScript; JRE is for Python; JVM is for C#" },
      { key: 'C', text: "JVM compiles code; JDK runs database queries; JRE builds UI" },
      { key: 'D', text: "They are 3 different names for the same single file" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! JDK contains javac compiler + JRE. JRE contains Java libraries + JVM. JVM executes Bytecode.",
      B: "Incorrect: All 3 belong exclusively to the Java ecosystem.",
      C: "Incorrect: `javac` compiles code; JVM executes Bytecode.",
      D: "Incorrect: They represent distinct nested layers of the Java environment."
    }
  },
  {
    id: 23,
    category: "Core Java",
    question: "Where are Java Object instances stored in memory when created using the `new` keyword?",
    options: [
      { key: 'A', text: "Stack Memory" },
      { key: 'B', text: "Heap Memory" },
      { key: 'C', text: "CPU Cache Register L1 only" },
      { key: 'D', text: "Hard Disk SSD partition" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Stack memory stores primitive local variables and object reference pointers.",
      B: "Correct! Objects and their instance variables are allocated in Heap Memory.",
      C: "Incorrect: CPU registers are hardware execution registers managed by OS.",
      D: "Incorrect: Live Java objects exist in RAM Heap, not on disk partitions."
    }
  },
  {
    id: 24,
    category: "OOP Principles",
    question: "Which Object-Oriented Programming (OOP) principle is implemented by declaring fields `private` and providing `public` getters/setters?",
    options: [
      { key: 'A', text: "Inheritance" },
      { key: 'B', text: "Encapsulation" },
      { key: 'C', text: "Polymorphism" },
      { key: 'D', text: "Compilation" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Inheritance uses `extends` to reuse parent code.",
      B: "Correct! Encapsulation bundles data and restricts direct access to fields using private access modifiers and public methods.",
      C: "Incorrect: Polymorphism allows methods to take multiple forms.",
      D: "Incorrect: Compilation is translating source code to Bytecode."
    }
  },
  {
    id: 25,
    category: "OOP Principles",
    question: "What keyword is used in Java by a subclass to inherit from a superclass?",
    options: [
      { key: 'A', text: "implements" },
      { key: 'B', text: "extends" },
      { key: 'C', text: "inherits" },
      { key: 'D', text: "import" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: `implements` is used when a class fulfills an Interface contract.",
      B: "Correct! `extends` is used for class inheritance (e.g. `class Dog extends Animal`).",
      C: "Incorrect: `inherits` is not a valid Java keyword.",
      D: "Incorrect: `import` brings external packages into a source file."
    }
  },
  {
    id: 26,
    category: "OOP Principles",
    question: "What is Method Overloading in Java?",
    options: [
      { key: 'A', text: "Methods in the SAME class sharing the same name but having different parameter signatures (compile-time polymorphism)" },
      { key: 'B', text: "A subclass redefining a parent method with exact same parameters (runtime polymorphism)" },
      { key: 'C', text: "Running a method until memory overflows" },
      { key: 'D', text: "Deleting a method from a class" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Method Overloading occurs within the same class with different parameters at compile time.",
      B: "Incorrect: Redefining a parent method in a subclass is Method Overriding.",
      C: "Incorrect: Overloading is a language feature, not a memory crash.",
      D: "Incorrect: Overloading adds method signatures, it does not delete methods."
    }
  },
  {
    id: 27,
    category: "OOP Principles",
    question: "What is Method Overriding in Java?",
    options: [
      { key: 'A', text: "Methods in the same class with different parameter types" },
      { key: 'B', text: "A SUBCLASS providing a specific implementation of a method already defined in its superclass using @Override (runtime polymorphism)" },
      { key: 'C', text: "Calling a private variable from another package" },
      { key: 'D', text: "Writing a main method inside an interface" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Different parameter types in the same class is Overloading.",
      B: "Correct! Overriding redefines inherited parent methods in subclasses at runtime.",
      C: "Incorrect: Private variables cannot be accessed directly outside their class.",
      D: "Incorrect: Overriding relates to method inheritance between superclass and subclass."
    }
  },
  {
    id: 28,
    category: "OOP Principles",
    question: "What is the key difference between an Abstract Class and an Interface in Java 8+?",
    options: [
      { key: 'A', text: "An Abstract Class can hold state (instance fields) and partial implementations; an Interface defines pure contracts (though Java 8+ allows default/static methods)" },
      { key: 'B', text: "Interfaces can instantiate objects directly with `new Interface()`" },
      { key: 'C', text: "Abstract classes cannot contain any methods" },
      { key: 'D', text: "Java classes can extend 10 different Abstract Classes simultaneously" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Abstract classes can maintain instance variables and constructor state; Interfaces specify contracts and support multiple implementation.",
      B: "Incorrect: Interfaces cannot be instantiated directly with `new`.",
      C: "Incorrect: Abstract classes can contain both abstract and concrete methods.",
      D: "Incorrect: Java supports single class inheritance (`extends` 1 class only)."
    }
  },
  {
    id: 29,
    category: "Core Java",
    question: "What is the purpose of Maven's `pom.xml` file in a Java project?",
    options: [
      { key: 'A', text: "To store database passwords in plaintext" },
      { key: 'B', text: "To declare project dependencies, build plugins, and project metadata for automated library downloading" },
      { key: 'C', text: "To render CSS styles in the browser" },
      { key: 'D', text: "To execute SQL queries directly" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Passwords belong in secure environment configuration, not pom.xml.",
      B: "Correct! Project Object Model (`pom.xml`) manages external JAR dependencies and build plugins automatically.",
      C: "Incorrect: `pom.xml` is a Java build file, completely unrelated to browser CSS.",
      D: "Incorrect: Database queries are written in SQL / JPA repositories."
    }
  },
  {
    id: 30,
    category: "Core Java",
    question: "What is Garbage Collection (GC) in Java?",
    options: [
      { key: 'A', text: "An automated JVM process that reclaims Heap memory occupied by unreferenced objects" },
      { key: 'B', text: "Deleting temporary files from Windows recycle bin" },
      { key: 'C', text: "Uninstalling the JDK compiler" },
      { key: 'D', text: "Closing HTTP connection sockets manually" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Java's automatic Garbage Collector frees memory by destroying objects no longer referenced on the Heap.",
      B: "Incorrect: GC is an in-memory JVM process, not OS file deletion.",
      C: "Incorrect: GC manages runtime object memory, not development tools.",
      D: "Incorrect: Socket cleanup is network I/O management."
    }
  },
  {
    id: 31,
    category: "Core Java",
    question: "What is the difference between Checked and Unchecked Exceptions in Java?",
    options: [
      { key: 'A', text: "Checked exceptions (e.g. IOException) are checked at compile time; Unchecked exceptions (e.g. NullPointerException) extend RuntimeException and occur at runtime" },
      { key: 'B', text: "Checked exceptions crash the computer hardware; Unchecked exceptions do nothing" },
      { key: 'C', text: "Unchecked exceptions must be declared with `throws` in compiler" },
      { key: 'D', text: "They are identical in every way" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Checked exceptions must be caught or declared at compile time. Runtime exceptions (unchecked) occur during execution.",
      B: "Incorrect: Java exceptions are software objects, not hardware crashes.",
      C: "Incorrect: Unchecked exceptions do NOT require mandatory `throws` declarations.",
      D: "Incorrect: The compiler treats checked vs unchecked exceptions completely differently."
    }
  },
  {
    id: 32,
    category: "Core Java",
    question: "What does the `final` keyword mean when applied to a class in Java?",
    options: [
      { key: 'A', text: "The class cannot be extended (inherited) by any subclass" },
      { key: 'B', text: "The class cannot contain any methods" },
      { key: 'C', text: "The class is automatically deleted after 1 run" },
      { key: 'D', text: "The class can only be accessed by admin users" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Marking a class `final` prevents inheritance (e.g. `public final class String` cannot be extended).",
      B: "Incorrect: Final classes can contain fields and methods.",
      C: "Incorrect: Code remains compiled in Bytecode.",
      D: "Incorrect: `final` is an inheritance modifier, not user security."
    }
  },
  {
    id: 33,
    category: "Core Java",
    question: "What is the difference between `==` and `.equals()` when comparing Java Objects?",
    options: [
      { key: 'A', text: "`==` compares memory reference addresses; `.equals()` compares logical content value" },
      { key: 'B', text: "`==` compares content value; `.equals()` compares reference memory address" },
      { key: 'C', text: "Both compare memory reference addresses only" },
      { key: 'D', text: "Both compare logical content value only" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `==` checks if two object references point to the exact same memory location on the Heap; `.equals()` checks content value equality.",
      B: "Incorrect: Swapped definitions.",
      C: "Incorrect: `.equals()` can be overridden for logical value equality (like String value comparison).",
      D: "Incorrect: `==` always compares memory reference addresses for objects."
    }
  },
  {
    id: 34,
    category: "Core Java",
    question: "What is the purpose of the `static` keyword in Java?",
    options: [
      { key: 'A', text: "It indicates that a member belongs to the CLASS itself rather than to individual object instances" },
      { key: 'B', text: "It makes a variable change its value every second" },
      { key: 'C', text: "It forces a class to run only on Linux servers" },
      { key: 'D', text: "It encrypts variable values in memory" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Static members are shared across all instances and accessed via ClassName (e.g. `Math.max()`).",
      B: "Incorrect: `static` does not randomly mutate variables.",
      C: "Incorrect: Platform execution is independent of `static`.",
      D: "Incorrect: `static` controls memory scope, not encryption."
    }
  },
  {
    id: 35,
    category: "Core Java",
    question: "What is String Immutability in Java?",
    options: [
      { key: 'A', text: "Once a String object is created in memory, its text content cannot be altered; modifications create a new String object" },
      { key: 'B', text: "String variables can never be printed to console" },
      { key: 'C', text: "Strings can only contain numbers" },
      { key: 'D', text: "Strings take 0 bytes of memory" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Java Strings are immutable for security and String Pool caching efficiency. Modifying a String creates a new object.",
      B: "Incorrect: Strings are easily printed via `System.out.println()`.",
      C: "Incorrect: Strings store arbitrary character sequences.",
      D: "Incorrect: Strings occupy heap memory based on character count."
    }
  },

  // 36-45: SECTION IV (DATA STRUCTURES & ALGORITHMS - DSA)
  {
    id: 36,
    category: "DSA",
    question: "What is the average time complexity for searching a key in a Java HashMap?",
    options: [
      { key: 'A', text: "O(1) Constant Time" },
      { key: 'B', text: "O(N) Linear Time" },
      { key: 'C', text: "O(N^2) Quadratic Time" },
      { key: 'D', text: "O(N log N)" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! HashMap uses `key.hashCode()` to locate bucket array indices directly in O(1) average constant time.",
      B: "Incorrect: O(N) occurs only in worst-case catastrophic hash collisions across all elements.",
      C: "Incorrect: O(N^2) represents nested loops.",
      D: "Incorrect: O(N log N) is standard sorting complexity."
    }
  },
  {
    id: 37,
    category: "DSA",
    question: "How does Java's HashMap handle Hash Collisions when two distinct keys produce the exact same bucket index?",
    options: [
      { key: 'A', text: "It throws a FatalError and crashes the JVM" },
      { key: 'B', text: "It chains entries in a LinkedList (and converts to a Red-Black Tree in Java 8+ if bucket count exceeds 8)" },
      { key: 'C', text: "It deletes the old key silently" },
      { key: 'D', text: "It formats the hard drive" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Hash collisions are expected and handled gracefully.",
      B: "Correct! Collisions are chained in a LinkedList. In Java 8+, if a bucket exceeds 8 entries, it transforms into a Red-Black Tree for O(log N) worst-case lookup.",
      C: "Incorrect: HashMap preserves distinct keys via `.equals()` comparison.",
      D: "Incorrect: In-memory data structures do not format disk drives."
    }
  },
  {
    id: 38,
    category: "DSA",
    question: "What is the primary memory characteristic of a standard Array?",
    options: [
      { key: 'A', text: "Elements are stored in contiguous memory locations with fixed size and O(1) index access" },
      { key: 'B', text: "Elements are scattered randomly across different cloud servers" },
      { key: 'C', text: "Array size grows automatically without copying elements" },
      { key: 'D', text: "Arrays can only store Boolean true/false values" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Arrays occupy contiguous RAM blocks, providing fast O(1) direct index lookups.",
      B: "Incorrect: Array elements reside in contiguous local RAM.",
      C: "Incorrect: Standard arrays have fixed size; resizing requires creating a new array (like ArrayList does).",
      D: "Incorrect: Arrays store any primitive or object type."
    }
  },
  {
    id: 39,
    category: "DSA",
    question: "Which Data Structure operates on LIFO (Last In, First Out) principle?",
    options: [
      { key: 'A', text: "Queue" },
      { key: 'B', text: "Stack" },
      { key: 'C', text: "HashMap" },
      { key: 'D', text: "Binary Search Tree" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Queue operates on FIFO (First In, First Out).",
      B: "Correct! Stack uses Last In, First Out (LIFO) via `push()` and `pop()` operations (like a stack of buffet plates).",
      C: "Incorrect: HashMap is key-value lookup.",
      D: "Incorrect: Tree is a hierarchical non-linear structure."
    }
  },
  {
    id: 40,
    category: "DSA",
    question: "Which Data Structure operates on FIFO (First In, First Out) principle?",
    options: [
      { key: 'A', text: "Stack" },
      { key: 'B', text: "Queue" },
      { key: 'C', text: "Min-Heap" },
      { key: 'D', text: "Graph" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Stack is LIFO.",
      B: "Correct! Queue operates on First In, First Out (FIFO) via `enqueue()` and `dequeue()` (like standing in a ticket line).",
      C: "Incorrect: Heap prioritizes by min/max key value.",
      D: "Incorrect: Graph models nodes and edges."
    }
  },
  {
    id: 41,
    category: "DSA",
    question: "What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?",
    options: [
      { key: 'A', text: "O(1)" },
      { key: 'B', text: "O(log N)" },
      { key: 'C', text: "O(N^2)" },
      { key: 'D', text: "O(N!)" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: O(1) is HashMap bucket index lookup.",
      B: "Correct! Balanced BSTs halve the search space at each step, yielding O(log N) search complexity.",
      C: "Incorrect: O(N^2) is quadratic.",
      D: "Incorrect: O(N!) is factorial complexity."
    }
  },
  {
    id: 42,
    category: "DSA",
    question: "Why should custom classes override both `hashCode()` and `equals()` when used as HashMap keys?",
    options: [
      { key: 'A', text: "To satisfy Java compiler syntax rules only" },
      { key: 'B', text: "To guarantee that equal objects produce identical hash codes (`equals() == true => hashCode() equal`), preventing duplicate entries and broken lookups" },
      { key: 'C', text: "To automatically sort elements alphabetically" },
      { key: 'D', text: "To encrypt keys in memory" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: It is a critical runtime contract, not just a compiler rule.",
      B: "Correct! The HashMap contract mandates that equal objects must return identical hashCodes to locate the same bucket index.",
      C: "Incorrect: HashMap does not maintain sorted order (TreeMap does).",
      D: "Incorrect: `hashCode()` is for bucket indexing, not encryption."
    }
  },
  {
    id: 43,
    category: "DSA",
    question: "What is an advantage of a LinkedList over an Array?",
    options: [
      { key: 'A', text: "Instant O(1) random index access" },
      { key: 'B', text: "Dynamic resizing and efficient O(1) insertions/deletions at nodes without shifting memory elements" },
      { key: 'C', text: "Uses less memory per element than an array" },
      { key: 'D', text: "Guarantees CPU cache locality" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: LinkedList requires O(N) sequential traversal to reach an index.",
      B: "Correct! LinkedList nodes insert/delete in O(1) time by re-pointing node references without shifting array blocks.",
      C: "Incorrect: LinkedList node pointers add extra memory overhead.",
      D: "Incorrect: Pointer-chased nodes lack CPU cache contiguity."
    }
  },
  {
    id: 44,
    category: "DSA",
    question: "What is the worst-case space complexity of an Array storing N elements?",
    options: [
      { key: 'A', text: "O(1)" },
      { key: 'B', text: "O(N)" },
      { key: 'C', text: "O(N^2)" },
      { key: 'D', text: "O(2^N)" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Space grows linearly with element count N.",
      B: "Correct! Storing N elements requires linear O(N) memory space.",
      C: "Incorrect: O(N^2) is 2D matrix space.",
      D: "Incorrect: Exponential space."
    }
  },
  {
    id: 45,
    category: "DSA",
    question: "Which data structure is ideal for implementing a Undo/Redo feature in a text editor?",
    options: [
      { key: 'A', text: "Two Stacks (Undo Stack and Redo Stack)" },
      { key: 'B', text: "A single SQL table" },
      { key: 'C', text: "A HashMap with integer keys" },
      { key: 'D', text: "A fixed-size Array of booleans" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Two LIFO Stacks allow pushing actions onto Undo stack and popping to push onto Redo stack efficiently.",
      B: "Incorrect: SQL database calls add unnecessary latency for local text editor operations.",
      C: "Incorrect: HashMap does not track reverse chronological operation history natively.",
      D: "Incorrect: Fixed boolean array cannot store rich edit operations."
    }
  },

  // 46-55: SECTION V (RELATIONAL & NOSQL DATABASES)
  {
    id: 46,
    category: "Databases",
    question: "What is the result of an `INNER JOIN` between Table A and Table B?",
    options: [
      { key: 'A', text: "All rows from Table A regardless of matches" },
      { key: 'B', text: "Only records that have matching keys in BOTH Table A and Table B" },
      { key: 'C', text: "All rows from Table B regardless of matches" },
      { key: 'D', text: "Every possible combination of rows (Cartesian product)" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: Returning all Table A rows is a LEFT JOIN.",
      B: "Correct! INNER JOIN returns only records where the join key matches in both tables.",
      C: "Incorrect: Returning all Table B rows is a RIGHT JOIN.",
      D: "Incorrect: Cartesian product is a CROSS JOIN."
    }
  },
  {
    id: 47,
    category: "Databases",
    question: "What happens to unmatched right-table columns when performing a `LEFT JOIN`?",
    options: [
      { key: 'A', text: "They are filled with `NULL` values" },
      { key: 'B', text: "They throw a SQL Syntax Error" },
      { key: 'C', text: "The entire query is cancelled" },
      { key: 'D', text: "They default to integer 0" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! LEFT JOIN preserves all left-table rows; if no right-table match exists, right columns evaluate to NULL.",
      B: "Incorrect: NULL values are valid standard SQL results.",
      C: "Incorrect: Queries complete successfully.",
      D: "Incorrect: SQL uses NULL, not default 0."
    }
  },
  {
    id: 48,
    category: "Databases",
    question: "What are the 4 ACID properties guaranteed by Relational Databases like Oracle and SQL Server?",
    options: [
      { key: 'A', text: "Atomicity, Consistency, Isolation, Durability" },
      { key: 'B', text: "Array, Class, Instance, Data" },
      { key: 'C', text: "Authentication, Code, Integration, Deployment" },
      { key: 'D', text: "API, Communication, Interface, Document" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! ACID = Atomicity (all or nothing), Consistency (valid state), Isolation (independent execution), Durability (persisted writes).",
      B: "Incorrect: General programming words.",
      C: "Incorrect: DevOps terms.",
      D: "Incorrect: Web API terms."
    }
  },
  {
    id: 49,
    category: "Databases",
    question: "What is a Foreign Key in a relational database?",
    options: [
      { key: 'A', text: "A key imported from a foreign country's server" },
      { key: 'B', text: "A column in one table that references the Primary Key of another table, establishing a relational link" },
      { key: 'C', text: "A password for logging into Oracle Database" },
      { key: 'D', text: "An encrypted SSL certificate string" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: 'Foreign' refers to another table, not physical country location.",
      B: "Correct! Foreign Keys enforce referential integrity between child and parent tables.",
      C: "Incorrect: Database login credentials are user passwords.",
      D: "Incorrect: Foreign keys are relational schema constraints."
    }
  },
  {
    id: 50,
    category: "Databases",
    question: "How do NoSQL document databases (like Firebase Firestore) store data compared to SQL databases?",
    options: [
      { key: 'A', text: "NoSQL stores semi-structured data as flexible JSON documents in collections without rigid table schemas" },
      { key: 'B', text: "NoSQL stores data exclusively as fixed Excel spreadsheets" },
      { key: 'C', text: "NoSQL does not support any data reads" },
      { key: 'D', text: "NoSQL compiles code into Bytecode" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! NoSQL databases store JSON-like documents, enabling schema flexibility and easy horizontal scaling.",
      B: "Incorrect: Spreadsheets are flat tables.",
      C: "Incorrect: NoSQL supports high-speed document queries.",
      D: "Incorrect: Bytecode is Java compilation, not database storage."
    }
  },
  {
    id: 51,
    category: "Databases",
    question: "What is a Database Index and why is it used?",
    options: [
      { key: 'A', text: "A data structure (e.g. B-Tree) that speeds up SQL SELECT query lookups at the cost of slower writes and extra storage" },
      { key: 'B', text: "A tool that deletes duplicate table rows automatically" },
      { key: 'C', text: "A theme color palette for database admin consoles" },
      { key: 'D', text: "A script that converts SQL to Java" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Indexes act like a book index, allowing the DB engine to locate target rows rapidly without scanning entire tables.",
      B: "Incorrect: Unique constraints handle duplicates, not standard indexes.",
      C: "Incorrect: Index is a performance data structure, not console styling.",
      D: "Incorrect: Indexing is query execution optimization."
    }
  },
  {
    id: 52,
    category: "Databases",
    question: "What is the SQL `GROUP BY` clause used for?",
    options: [
      { key: 'A', text: "To aggregate rows that have identical values in specified columns (e.g. `SUM()`, `COUNT()`, `AVG()`)" },
      { key: 'B', text: "To sort table rows alphabetically" },
      { key: 'C', text: "To combine two database servers into one" },
      { key: 'D', text: "To drop a table from schema" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `GROUP BY` groups summary rows together for aggregate functions like `COUNT()` or `SUM()`.",
      B: "Incorrect: Sorting is handled by `ORDER BY`.",
      C: "Incorrect: Clustering handles server merging.",
      D: "Incorrect: Dropping tables is `DROP TABLE`."
    }
  },
  {
    id: 53,
    category: "Databases",
    question: "What is the difference between `WHERE` and `HAVING` clauses in SQL?",
    options: [
      { key: 'A', text: "`WHERE` filters individual rows BEFORE aggregation; `HAVING` filters aggregated group results AFTER `GROUP BY`" },
      { key: 'B', text: "`WHERE` is for NoSQL; `HAVING` is for SQL" },
      { key: 'C', text: "Both filter individual rows before aggregation identically" },
      { key: 'D', text: "`HAVING` cannot be used with `GROUP BY`" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `WHERE` filters rows before grouping; `HAVING` filters summary groups generated by `GROUP BY`.",
      B: "Incorrect: Both are standard SQL clauses.",
      C: "Incorrect: `HAVING` requires aggregate conditions.",
      D: "Incorrect: `HAVING` is specifically designed for `GROUP BY` filtering."
    }
  },
  {
    id: 54,
    category: "Databases",
    question: "What is Database Sharding?",
    options: [
      { key: 'A', text: "Horizontal partitioning of a massive database across multiple server nodes based on a Shard Key" },
      { key: 'B', text: "Deleting database tables when corrupted" },
      { key: 'C', text: "Compressing images stored in database BLOBs" },
      { key: 'D', text: "Creating secondary indexes" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Sharding distributes large datasets across multiple database servers to scale write throughput.",
      B: "Incorrect: Sharding partitions data, it does not delete tables.",
      C: "Incorrect: Image compression is media encoding.",
      D: "Incorrect: Secondary index is a lookup structure."
    }
  },
  {
    id: 55,
    category: "Databases",
    question: "What is an ORM (Object-Relational Mapper) like Hibernate?",
    options: [
      { key: 'A', text: "A framework that maps Java object entities to relational SQL database tables, eliminating manual JDBC boilerplate" },
      { key: 'B', text: "A hardware graphics card for rendering database dashboards" },
      { key: 'C', text: "A tool that converts SQL databases into NoSQL text files" },
      { key: 'D', text: "A web browser extension" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! ORM maps Java objects (`@Entity`) to SQL tables, generating queries automatically.",
      B: "Incorrect: ORM is a software framework, not hardware.",
      C: "Incorrect: Hibernate connects Java to SQL databases.",
      D: "Incorrect: ORM runs inside the Java backend."
    }
  },

  // 56-70: SECTION VI (BACKEND FRAMEWORKS & WEB SERVICES)
  {
    id: 56,
    category: "Spring Boot",
    question: "What is the role of `@RestController` in a Spring Boot application?",
    options: [
      { key: 'A', text: "To handle incoming HTTP requests (GET, POST, etc.) and return serialized JSON responses directly to clients" },
      { key: 'B', text: "To execute database SQL queries directly" },
      { key: 'C', text: "To compile Java source code into Bytecode" },
      { key: 'D', text: "To manage Docker container images" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `@RestController` combines `@Controller` and `@ResponseBody`, mapping HTTP endpoints to return JSON.",
      B: "Incorrect: Database queries belong in `@Repository` classes.",
      C: "Incorrect: `javac` compiles Java code.",
      D: "Incorrect: Docker manages container images."
    }
  },
  {
    id: 57,
    category: "Spring Boot",
    question: "What are the 3 layers in Spring Boot's standard 3-Tier Architecture?",
    options: [
      { key: 'A', text: "Controller Layer (`@RestController`), Service Layer (`@Service`), Repository Layer (`@Repository`)" },
      { key: 'B', text: "HTML Layer, CSS Layer, JavaScript Layer" },
      { key: 'C', text: "CPU Layer, RAM Layer, Hard Disk Layer" },
      { key: 'D', text: "Git Layer, Docker Layer, AWS Layer" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Controller handles HTTP request routing, Service executes business logic, and Repository manages database access.",
      B: "Incorrect: Web frontend technologies.",
      C: "Incorrect: Hardware architecture layers.",
      D: "Incorrect: Infrastructure & deployment tools."
    }
  },
  {
    id: 58,
    category: "Spring Boot",
    question: "Which HTTP method should be used to create a new resource in a REST API?",
    options: [
      { key: 'A', text: "GET" },
      { key: 'B', text: "POST" },
      { key: 'C', text: "DELETE" },
      { key: 'D', text: "HEAD" }
    ],
    correctOption: 'B',
    explanation: {
      A: "Incorrect: GET is strictly for reading data without side effects.",
      B: "Correct! POST creates new resources on the server.",
      C: "Incorrect: DELETE removes existing resources.",
      D: "Incorrect: HEAD fetches HTTP headers without payload body."
    }
  },
  {
    id: 59,
    category: "Spring Boot",
    question: "What does HTTP status code `201 Created` indicate?",
    options: [
      { key: 'A', text: "The request succeeded and a new resource was successfully created on the server" },
      { key: 'B', text: "The requested URL was not found" },
      { key: 'C', text: "An unhandled Java Exception crashed the server" },
      { key: 'D', text: "The user is unauthenticated" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `201 Created` is standard REST response for successful POST resource creation.",
      B: "Incorrect: URL missing is `404 Not Found`.",
      C: "Incorrect: Server crash is `500 Internal Server Error`.",
      D: "Incorrect: Unauthenticated user is `401 Unauthorized`."
    }
  },
  {
    id: 60,
    category: "Spring Boot",
    question: "How does Spring Data JPA allow developers to execute database queries without writing custom SQL?",
    options: [
      { key: 'A', text: "By deriving SQL queries automatically from method names declared in `JpaRepository` interfaces (e.g. `findByEmail()`)" },
      { key: 'B', text: "By guessing what the developer wants using voice recognition" },
      { key: 'C', text: "By executing JavaScript code inside SQL" },
      { key: 'D', text: "By creating Excel files" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Spring Data JPA inspects repository method signatures like `findByStatus()` and generates corresponding SQL queries at runtime.",
      B: "Incorrect: Queries are derived deterministically from method naming conventions.",
      C: "Incorrect: Spring Data JPA generates standard SQL.",
      D: "Incorrect: It interacts with relational database tables."
    }
  },
  {
    id: 61,
    category: "Spring Boot",
    question: "What is JSON Web Token (JWT) used for in modern REST API security?",
    options: [
      { key: 'A', text: "Stateless client authentication, where the server signs a token sent in the HTTP `Authorization` header on requests" },
      { key: 'B', text: "Compressing images before sending over network" },
      { key: 'C', text: "Storing HTML templates on server" },
      { key: 'D', text: "Formatting database primary keys" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! JWT tokens provide stateless authentication; clients attach `Bearer <token>` in Authorization headers.",
      B: "Incorrect: Image compression is media encoding.",
      C: "Incorrect: HTML templates are rendered by view engines.",
      D: "Incorrect: Primary keys are database identifiers."
    }
  },
  {
    id: 62,
    category: "Spring Boot",
    question: "What is the difference between SOAP and REST web services?",
    options: [
      { key: 'A', text: "SOAP is a strict XML-only protocol; REST is a lightweight architectural style using JSON over standard HTTP" },
      { key: 'B', text: "REST requires XML wax envelopes; SOAP uses JSON text messages" },
      { key: 'C', text: "SOAP runs in browser; REST runs in hardware" },
      { key: 'D', text: "They are two names for the same framework" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! SOAP is a strict XML protocol; REST is flexible and lightweight, favoring JSON over HTTP.",
      B: "Incorrect: Swapped definitions.",
      C: "Incorrect: Both operate over network protocols.",
      D: "Incorrect: Distinct communication paradigms."
    }
  },
  {
    id: 63,
    category: "Spring Boot",
    question: "What tool is commonly used to test REST API endpoints interactively by sending HTTP requests?",
    options: [
      { key: 'A', text: "Postman" },
      { key: 'B', text: "Microsoft Paint" },
      { key: 'C', text: "Photoshop" },
      { key: 'D', text: "Calculator" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Postman is an API client used to construct, execute, and validate HTTP requests.",
      B: "Incorrect: Paint is an image editor.",
      C: "Incorrect: Photoshop is graphics software.",
      D: "Incorrect: Calculator is arithmetic utility."
    }
  },
  {
    id: 64,
    category: "Spring Boot",
    question: "What is Swagger / OpenAPI used for in a Spring Boot microservice?",
    options: [
      { key: 'A', text: "Automatically inspecting `@RestController` endpoints to generate interactive API documentation" },
      { key: 'B', text: "Deleting database tables on server restart" },
      { key: 'C', text: "Compiling C++ files" },
      { key: 'D', text: "Managing cloud billing accounts" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Swagger OpenAPI scans controllers and generates interactive web documentation (`/swagger-ui.html`).",
      B: "Incorrect: Swagger does not alter database schemas or delete tables.",
      C: "Incorrect: Swagger is API documentation tooling.",
      D: "Incorrect: Cloud billing is managed in AWS/Azure consoles."
    }
  },
  {
    id: 65,
    category: "Spring Boot",
    question: "What annotation is used to inject a Spring Bean dependency into a class automatically?",
    options: [
      { key: 'A', text: "@Autowired" },
      { key: 'B', text: "@DeleteAll" },
      { key: 'C', text: "@SystemOut" },
      { key: 'D', text: "@OverrideOnly" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `@Autowired` enables Spring's Dependency Injection to wire matching beans into fields or constructors.",
      B: "Incorrect: Not a Spring annotation.",
      C: "Incorrect: `System.out` is standard Java print stream.",
      D: "Incorrect: `@Override` is standard Java annotation."
    }
  },
  {
    id: 66,
    category: "Spring Boot",
    question: "What is the purpose of Spring Boot's `application.properties` or `application.yml` file?",
    options: [
      { key: 'A', text: "To configure application settings (e.g. database URL, port, logging levels) centrally" },
      { key: 'B', text: "To write Java class methods" },
      { key: 'C', text: "To store HTML page templates" },
      { key: 'D', text: "To compile Docker images" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Configuration files manage server ports, database connection strings, and environment profiles.",
      B: "Incorrect: Java code is written in `.java` files.",
      C: "Incorrect: HTML templates reside in templates directory.",
      D: "Incorrect: Docker images are defined in `Dockerfile`."
    }
  },
  {
    id: 67,
    category: "Spring Boot",
    question: "What HTTP status code represents `404 Not Found`?",
    options: [
      { key: 'A', text: "The requested URL or resource endpoint does not exist on the server" },
      { key: 'B', text: "The server processed the request successfully" },
      { key: 'C', text: "The database password was wrong" },
      { key: 'D', text: "The user is unauthorized" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `404 Not Found` indicates the target endpoint or resource ID could not be located.",
      B: "Incorrect: Successful request is `200 OK`.",
      C: "Incorrect: Database config error is `500 Internal Error`.",
      D: "Incorrect: Unauthorized is `401 Unauthorized`."
    }
  },
  {
    id: 68,
    category: "Spring Boot",
    question: "Which annotation marks a class as a Spring service bean containing core business logic?",
    options: [
      { key: 'A', text: "@Service" },
      { key: 'B', text: "@Entity" },
      { key: 'C', text: "@Column" },
      { key: 'D', text: "@PathVariable" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `@Service` stereotypes a class in the business logic layer.",
      B: "Incorrect: `@Entity` marks a JPA persistent database model.",
      C: "Incorrect: `@Column` maps a field to a table column.",
      D: "Incorrect: `@PathVariable` extracts URI template variables in controllers."
    }
  },
  {
    id: 69,
    category: "Spring Boot",
    question: "What is an Idempotent HTTP method?",
    options: [
      { key: 'A', text: "An HTTP method (like GET or PUT) where making multiple identical requests has the same effect on the server as a single request" },
      { key: 'B', text: "A method that crashes the server every time" },
      { key: 'C', text: "A method that creates duplicate database records continuously" },
      { key: 'D', text: "A method that encrypts passwords" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! GET, PUT, and DELETE are idempotent because executing them N times leaves the server in the same state as 1 execution.",
      B: "Incorrect: Idempotency is a safety property, not a crash.",
      C: "Incorrect: Non-idempotent POST creates duplicate records if retried.",
      D: "Incorrect: Encryption is security hashing."
    }
  },
  {
    id: 70,
    category: "Spring Boot",
    question: "What does `@Transactional` do when placed on a Spring Service method?",
    options: [
      { key: 'A', text: "It wraps method execution in a database transaction, committing on success or rolling back completely if an exception occurs" },
      { key: 'B', text: "It converts Java objects to JSON" },
      { key: 'C', text: "It sends an email to the user" },
      { key: 'D', text: "It deletes the database table" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `@Transactional` guarantees ACID transaction boundaries, rolling back writes if an unhandled runtime exception occurs.",
      B: "Incorrect: Jackson library handles JSON serialization.",
      C: "Incorrect: Email sending requires JavaMailSender.",
      D: "Incorrect: `@Transactional` protects data integrity during updates."
    }
  },

  // 71-78: SECTION VII (AI TOOLS & UNIT TESTING EVIDENCES)
  {
    id: 71,
    category: "AI & Testing",
    question: "What is the correct way to explain your usage of AI coding tools (like GitHub Copilot) during an interview?",
    options: [
      { key: 'A', text: "\"I write and understand all code logic myself, but I leverage AI tools to assist with autocompleting boilerplate code, drafting unit tests, and analyzing stack traces.\"" },
      { key: 'B', text: "\"I never touch code; I let AI build the entire application while I sleep.\"" },
      { key: 'C', text: "\"I pretend AI does not exist and copy code secretly from internet forums.\"" },
      { key: 'D', text: "\"AI tools are forbidden in software development.\"" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! As emphasized in our call directives, clearly state personal code ownership while highlighting AI productivity assistance.",
      B: "Incorrect: Blind reliance without code understanding leads to interview rejection.",
      C: "Incorrect: Dishonesty destroys candidate trust.",
      D: "Incorrect: Modern enterprise companies encourage responsible AI productivity tools."
    }
  },
  {
    id: 72,
    category: "AI & Testing",
    question: "What framework is standard for writing Unit Tests in modern Java applications?",
    options: [
      { key: 'A', text: "JUnit 5 & Mockito" },
      { key: 'B', text: "React DOM" },
      { key: 'C', text: "Flutter SDK" },
      { key: 'D', text: "CSS Flexbox" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! JUnit 5 provides unit test assertions (`assertEquals()`); Mockito mocks external dependencies (`@Mock`).",
      B: "Incorrect: React DOM is a web frontend UI library.",
      C: "Incorrect: Flutter is a mobile app framework.",
      D: "Incorrect: CSS Flexbox is UI layout styling."
    }
  },
  {
    id: 73,
    category: "AI & Testing",
    question: "Why do senior lead engineers require developers to capture 'Unit Test Evidences' before merging Pull Requests?",
    options: [
      { key: 'A', text: "To prove that unit tests ran successfully, covered edge cases, and produced execution logs showing 0 test failures" },
      { key: 'B', text: "To waste developer time" },
      { key: 'C', text: "To format JavaScript files" },
      { key: 'D', text: "To delete past Git commits" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Test evidences (pass logs, coverage reports) provide empirical proof that code is safe and regression-free.",
      B: "Incorrect: Quality governance prevents expensive production outages.",
      C: "Incorrect: Test evidence is QA verification, not JS formatting.",
      D: "Incorrect: Git commits must be preserved."
    }
  },
  {
    id: 74,
    category: "AI & Testing",
    question: "What is 'Mocking' in Unit Testing using Mockito?",
    options: [
      { key: 'A', text: "Creating simulated dummy objects (`@Mock`) that return pre-defined responses to isolate the class under test" },
      { key: 'B', text: "Insulting other developers' code" },
      { key: 'C', text: "Deleting database tables during testing" },
      { key: 'D', text: "Running code without compiling" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Mocking replaces real external services (like real database calls) with controlled mock objects during unit tests.",
      B: "Incorrect: Mocking is a software testing pattern.",
      C: "Incorrect: Mocks prevent touching real databases.",
      D: "Incorrect: Java code must compile to run tests."
    }
  },
  {
    id: 75,
    category: "AI & Testing",
    question: "What is Prompt Engineering in developer workflows?",
    options: [
      { key: 'A', text: "Structuring clear context, constraints, and instructions when prompting AI assistants to generate accurate code or analyze stack traces" },
      { key: 'B', text: "Building physical bridges and roads" },
      { key: 'C', text: "Writing SQL queries without WHERE clauses" },
      { key: 'D', text: "Formatting CSS stylesheets" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Prompt engineering optimizes LLM prompts with precise context and constraints to get accurate code completions.",
      B: "Incorrect: Civil engineering.",
      C: "Incorrect: Unfiltered SQL queries cause data leaks.",
      D: "Incorrect: CSS styling."
    }
  },
  {
    id: 76,
    category: "AI & Testing",
    question: "What is the purpose of `@Test` annotation in JUnit 5?",
    options: [
      { key: 'A', text: "It marks a Java method as a runnable unit test method executed by the test runner" },
      { key: 'B', text: "It deploys code to AWS" },
      { key: 'C', text: "It creates a database table" },
      { key: 'D', text: "It hides private class variables" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `@Test` signals to JUnit runner that the method contains test assertions.",
      B: "Incorrect: Deployment requires CI/CD pipelines.",
      C: "Incorrect: Database creation requires DDL SQL.",
      D: "Incorrect: `private` keyword handles field access."
    }
  },
  {
    id: 77,
    category: "AI & Testing",
    question: "What is Regression Testing?",
    options: [
      { key: 'A', text: "Re-running automated unit/integration tests after code changes to ensure existing working features did not break" },
      { key: 'B', text: "Downgrading Java 17 to Java 8" },
      { key: 'C', text: "Deleting old user accounts" },
      { key: 'D', text: "Formatting text files" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Regression testing verifies that recent bug fixes or new features did not break pre-existing functionality.",
      B: "Incorrect: Version downgrade is technical debt.",
      C: "Incorrect: Account cleanup is admin data management.",
      D: "Incorrect: File formatting."
    }
  },
  {
    id: 78,
    category: "AI & Testing",
    question: "What does `assertEquals(expected, actual)` do in JUnit?",
    options: [
      { key: 'A', text: "It asserts that the expected value matches the actual returned value; if they differ, the test fails" },
      { key: 'B', text: "It sets both values to zero" },
      { key: 'C', text: "It ignores test errors" },
      { key: 'D', text: "It prints code to a printer" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `assertEquals()` checks value equality and throws an AssertionFailedError if values do not match.",
      B: "Incorrect: `assertEquals` is a read-only validation check.",
      C: "Incorrect: Differences cause explicit test failure.",
      D: "Incorrect: It executes in memory."
    }
  },

  // 79-87: SECTION VIII (DEVOPS, CONTAINERS & CLOUD INFRASTRUCTURE)
  {
    id: 79,
    category: "DevOps & Cloud",
    question: "What is the purpose of a Pull Request (PR) in Git collaborative workflows?",
    options: [
      { key: 'A', text: "To propose code changes from a feature branch to `main`, allowing team members to review code quality before merging" },
      { key: 'B', text: "To pull physical server plugs out of wall sockets" },
      { key: 'C', text: "To request a developer salary raise" },
      { key: 'D', text: "To delete the GitHub repository" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Pull Requests provide a code review gate where peers inspect changes and CI builds pass before merging.",
      B: "Incorrect: PR is a Git version control feature.",
      C: "Incorrect: PR is technical code review.",
      D: "Incorrect: Repositories are preserved."
    }
  },
  {
    id: 80,
    category: "DevOps & Cloud",
    question: "What is Docker Containerization?",
    options: [
      { key: 'A', text: "Packaging an application and its dependencies (JRE, libraries, config) into a lightweight, isolated container image that runs identically anywhere" },
      { key: 'B', text: "Shipping physical wooden crates across oceans" },
      { key: 'C', text: "Compressing ZIP files on desktop PCs" },
      { key: 'D', text: "Creating database indexes" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Docker packages code and runtime environment together, eliminating 'works on my machine' environmental bugs.",
      B: "Incorrect: Physical shipping container analogy.",
      C: "Incorrect: Docker uses container images, not standard desktop zip files.",
      D: "Incorrect: Database indexing."
    }
  },
  {
    id: 81,
    category: "DevOps & Cloud",
    question: "What is Kubernetes (K8s)?",
    options: [
      { key: 'A', text: "An open-source container orchestration platform that automates deployment, scaling, load balancing, and self-healing of Docker containers" },
      { key: 'B', text: "A programming language used to replace Java" },
      { key: 'C', text: "A database management system like Oracle" },
      { key: 'D', text: "A web browser extension" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Kubernetes orchestrates container clusters, managing auto-scaling, health checks, and rolling updates.",
      B: "Incorrect: Kubernetes is container orchestration software, not a programming language.",
      C: "Incorrect: K8s runs containerized applications, it is not a database engine.",
      D: "Incorrect: K8s operates cloud server infrastructure."
    }
  },
  {
    id: 82,
    category: "DevOps & Cloud",
    question: "What does CI/CD stand for in modern DevOps pipelines?",
    options: [
      { key: 'A', text: "Continuous Integration / Continuous Deployment (or Delivery)" },
      { key: 'B', text: "Code Inspection / Class Definition" },
      { key: 'C', text: "Computer Interface / Data Control" },
      { key: 'D', text: "Central Unit / Disk Drive" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! CI automates building and testing code on commit; CD automates deploying validated artifacts to production.",
      B: "Incorrect: Not DevOps pipeline terminology.",
      C: "Incorrect: Hardware terms.",
      D: "Incorrect: System hardware components."
    }
  },
  {
    id: 83,
    category: "DevOps & Cloud",
    question: "How does a Kubernetes Rolling Update achieve Zero-Downtime deployments?",
    options: [
      { key: 'A', text: "By incrementally replacing old Pod instances with new container Pods one by one while keeping live traffic flowing" },
      { key: 'B', text: "By shutting down all servers simultaneously for 4 hours" },
      { key: 'C', text: "By deleting the database before updating code" },
      { key: 'D', text: "By turning off internet access for clients" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Rolling updates replace Pods incrementally; load balancers route traffic only to healthy new Pods, guaranteeing zero downtime.",
      B: "Incorrect: Full shutdown causes downtime.",
      C: "Incorrect: Database destruction causes catastrophic outage.",
      D: "Incorrect: Internet access remains active."
    }
  },
  {
    id: 84,
    category: "DevOps & Cloud",
    question: "What is the command to create and switch to a new local Git feature branch?",
    options: [
      { key: 'A', text: "git checkout -b feature-branch-name" },
      { key: 'B', text: "git delete all" },
      { key: 'C', text: "git push --force main" },
      { key: 'D', text: "git format hard-drive" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `git checkout -b <branch>` creates a new branch and switches HEAD to it in a single step.",
      B: "Incorrect: Invalid Git command.",
      C: "Incorrect: `git push --force main` forcibly overwrites remote main branch history (dangerous!).",
      D: "Incorrect: Not a Git command."
    }
  },
  {
    id: 85,
    category: "DevOps & Cloud",
    question: "What cloud service model do AWS EC2 and Google Compute Engine represent?",
    options: [
      { key: 'A', text: "IaaS (Infrastructure as a Service)" },
      { key: 'B', text: "SaaS (Software as a Service)" },
      { key: 'C', text: "PaaS (Platform as a Service)" },
      { key: 'D', text: "FaaS (Function as a Service)" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! EC2 provides raw virtual servers, networking, and storage (Infrastructure as a Service).",
      B: "Incorrect: SaaS represents end-user cloud applications (like Gmail or FSM).",
      C: "Incorrect: PaaS provides managed application environments (like Heroku or Elastic Beanstalk).",
      D: "Incorrect: FaaS represents serverless functions (like AWS Lambda)."
    }
  },
  {
    id: 86,
    category: "DevOps & Cloud",
    question: "What is a Dockerfile?",
    options: [
      { key: 'A', text: "A text manifest containing step-by-step instructions to build a Docker container image" },
      { key: 'B', text: "An image file containing screenshots of code" },
      { key: 'C', text: "A database table schema script" },
      { key: 'D', text: "A Java compiler log file" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `Dockerfile` specifies base images (`FROM openjdk:17`), copies JAR artifacts (`COPY`), and sets entrypoints (`CMD`).",
      B: "Incorrect: `Dockerfile` is plain text instructions, not a visual image file.",
      C: "Incorrect: Database scripts use DDL `.sql` extensions.",
      D: "Incorrect: `javac` generates compilation logs."
    }
  },
  {
    id: 87,
    category: "DevOps & Cloud",
    question: "Why use Multi-Stage Docker builds for Java Spring Boot applications?",
    options: [
      { key: 'A', text: "To separate Maven build dependencies from the final lightweight runtime image, drastically reducing container size" },
      { key: 'B', text: "To slow down deployment times" },
      { key: 'C', text: "To run 10 databases inside one container" },
      { key: 'D', text: "To duplicate code across 5 files" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Multi-stage builds use Maven in Stage 1 to build the JAR, then copy ONLY the compiled JAR into a slim JRE image in Stage 2.",
      B: "Incorrect: Smaller image sizes speed up container deployment.",
      C: "Incorrect: Containers should follow single-responsibility process patterns.",
      D: "Incorrect: Code duplication is avoided."
    }
  },

  // 88-95: SECTION IX (SOLID PRINCIPLES & SYSTEM ARCHITECTURE)
  {
    id: 88,
    category: "System Design & SOLID",
    question: "What does the Single Responsibility Principle (SRP) state?",
    options: [
      { key: 'A', text: "A class should have one, and only one, reason to change" },
      { key: 'B', text: "A class must perform 50 different duties inside one file" },
      { key: 'C', text: "A class can only contain 1 line of code" },
      { key: 'D', text: "A class must be edited every day" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! SRP mandates that a class should handle only one single duty or responsibility.",
      B: "Incorrect: Performing 50 duties creates a 'God Class', violating SRP.",
      C: "Incorrect: Line count is irrelevant; functional responsibility is what matters.",
      D: "Incorrect: Frequent forced edits indicate poor design."
    }
  },
  {
    id: 89,
    category: "System Design & SOLID",
    question: "What does the Open/Closed Principle (OCP) state?",
    options: [
      { key: 'A', text: "Software entities should be open for extension, but closed for modification" },
      { key: 'B', text: "Source code files must be locked and hidden from developers" },
      { key: 'C', text: "Classes should be open for editing production code directly without testing" },
      { key: 'D', text: "Interfaces cannot be implemented" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! OCP allows adding new features by creating new classes (extending via interfaces) without modifying working production code.",
      B: "Incorrect: Code must remain accessible to developers.",
      C: "Incorrect: Direct modification risks regression bugs.",
      D: "Incorrect: Interfaces are the primary tool for implementing OCP."
    }
  },
  {
    id: 90,
    category: "System Design & SOLID",
    question: "What does the Liskov Substitution Principle (LSP) mandate for class inheritance?",
    options: [
      { key: 'A', text: "Subclasses must be completely substitutable for their superclass without breaking program correctness or throwing unexpected exceptions" },
      { key: 'B', text: "Subclasses must throw `UnsupportedOperationException` for all parent methods" },
      { key: 'C', text: "Child classes can never inherit parent fields" },
      { key: 'D', text: "Superclasses must extend subclasses" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! LSP ensures that substituting a subclass for a superclass maintains identical contract behavior without unexpected runtime errors.",
      B: "Incorrect: Throwing `UnsupportedOperationException` breaks parent behavioral contracts, violating LSP.",
      C: "Incorrect: Inheritance passes parent fields to subclasses.",
      D: "Incorrect: Subclasses extend superclasses, not vice-versa."
    }
  },
  {
    id: 91,
    category: "System Design & SOLID",
    question: "What does the Interface Segregation Principle (ISP) advocate?",
    options: [
      { key: 'A', text: "Prefer multiple small, role-specific interfaces over one large, bloated 'fat' interface" },
      { key: 'B', text: "Create giant interfaces with 50 methods, forcing implementing classes to write dummy empty methods" },
      { key: 'C', text: "Never use interfaces in Java" },
      { key: 'D', text: "Merge all backend classes into one interface" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! ISP prevents implementing classes from depending on interface methods they do not use.",
      B: "Incorrect: Forcing dummy empty methods is a classic violation of ISP.",
      C: "Incorrect: Interfaces enable polymorphism and loose coupling.",
      D: "Incorrect: Merging all classes violates encapsulation, SRP, and ISP."
    }
  },
  {
    id: 92,
    category: "System Design & SOLID",
    question: "What does the Dependency Inversion Principle (DIP) state?",
    options: [
      { key: 'A', text: "High-level modules should depend on abstract interfaces rather than concrete class implementations" },
      { key: 'B', text: "High-level modules should use `new ConcreteRepository()` directly inside methods" },
      { key: 'C', text: "Dependencies should be hardcoded in memory" },
      { key: 'D', text: "Low-level modules must drive high-level architecture" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! DIP decouples high-level business logic from low-level implementation details by depending on abstract interfaces (implemented via Spring `@Autowired`).",
      B: "Incorrect: Hardcoding `new` instantiations creates tight coupling, violating DIP.",
      C: "Incorrect: Hardcoding dependencies prevents unit test mocking.",
      D: "Incorrect: High-level business abstractions must dictate contracts."
    }
  },
  {
    id: 93,
    category: "System Design & SOLID",
    question: "What is the difference between High-Level Design (HLD) and Low-Level Design (LLD)?",
    options: [
      { key: 'A', text: "HLD defines macro system architecture (microservices, API Gateways, databases); LLD defines micro class diagrams, design patterns, and database schemas" },
      { key: 'B', text: "HLD is for mobile apps; LLD is for desktop PCs" },
      { key: 'C', text: "LLD comes before HLD in system design" },
      { key: 'D', text: "They are identical design documents" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! HLD provides the macro architectural blueprint; LLD translates HLD into detailed class methods and database table schemas.",
      B: "Incorrect: HLD and LLD apply across all software engineering domains.",
      C: "Incorrect: HLD architecture must be established BEFORE LLD detailed class design.",
      D: "Incorrect: HLD and LLD cover different architectural abstraction levels."
    }
  },
  {
    id: 94,
    category: "System Design & SOLID",
    question: "Why is an In-Memory Cache (like Redis) used in high-traffic enterprise SaaS architectures?",
    options: [
      { key: 'A', text: "To serve frequent read queries in sub-second latency from RAM, preventing database overload during traffic spikes" },
      { key: 'B', text: "To replace permanent database storage completely" },
      { key: 'C', text: "To format JSON text into HTML" },
      { key: 'D', text: "To delete past user invoices" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Redis caches read-heavy queries in fast RAM, shielding underlying SQL databases from performance bottlenecks.",
      B: "Incorrect: RAM is volatile; permanent data must persist in relational/NoSQL databases.",
      C: "Incorrect: Redis is an in-memory data store, not a view template engine.",
      D: "Incorrect: Caching preserves database records."
    }
  },
  {
    id: 95,
    category: "System Design & SOLID",
    question: "What is an API Gateway in Microservices Architecture?",
    options: [
      { key: 'A', text: "A single entry point that handles client request routing, authentication, rate limiting, and SSL termination for backend microservices" },
      { key: 'B', text: "A physical router box installed on developer desks" },
      { key: 'C', text: "A tool that converts Java to Python" },
      { key: 'D', text: "A SQL query builder" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! API Gateways (like Spring Cloud Gateway) act as reverse proxies, insulating internal microservices behind a unified secure entry point.",
      B: "Incorrect: API Gateway is software infrastructure.",
      C: "Incorrect: Gateways route network requests, they do not transpile languages.",
      D: "Incorrect: Query builders generate database SQL."
    }
  },

  // 96-100: SECTION X (RESUME PROJECTS - INFOR & POLLARIS)
  {
    id: 96,
    category: "Renuka Projects",
    question: "During her 4-month internship at Infor, which Amazon SageMaker Deep Learning model did Renuka work with for inventory forecasting?",
    options: [
      { key: 'A', text: "AWS DeepAR (Time-Series Recurrent Neural Networks)" },
      { key: 'B', text: "AWS Rekognition" },
      { key: 'C', text: "AWS Polly" },
      { key: 'D', text: "AWS Textract" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! AWS DeepAR is a supervised learning algorithm for time-series demand forecasting across thousands of SKUs.",
      B: "Incorrect: Rekognition handles image and video analysis.",
      C: "Incorrect: Polly handles text-to-speech synthesis.",
      D: "Incorrect: Textract extracts text from scanned PDF documents."
    }
  },
  {
    id: 97,
    category: "Renuka Projects",
    question: "What architecture did Renuka integrate with GPT-4 at Infor to allow users to query inventory reorder policies in natural language?",
    options: [
      { key: 'A', text: "Retrieval-Augmented Generation (RAG) using Vector Embeddings" },
      { key: 'B', text: "Direct hardcoded switch-case statements" },
      { key: 'C', text: "Raw SQL string concatenation" },
      { key: 'D', text: "Manual phone routing" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! RAG retrieves relevant vector embeddings from enterprise policy docs before passing context to GPT-4, preventing hallucinations.",
      B: "Incorrect: Natural language query routing requires vector semantic search.",
      C: "Incorrect: SQL concatenation causes SQL injection vulnerabilities.",
      D: "Incorrect: Phone routing is call center IVR."
    }
  },
  {
    id: 98,
    category: "Renuka Projects",
    question: "In the Pollaris Voting Platform, how were race conditions and duplicate voting prevented during concurrent high-traffic voting?",
    options: [
      { key: 'A', text: "Using Firebase Firestore ACID Transactions (`db.runTransaction()`) to lock documents atomically" },
      { key: 'B', text: "By allowing users to vote 100 times" },
      { key: 'C', text: "By turning off the database server" },
      { key: 'D', text: "By storing votes in browser cookies only" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! `db.runTransaction()` locks poll documents and voter ledgers atomically, enforcing the one-vote-per-user constraint without race conditions.",
      B: "Incorrect: Pollaris strictly enforces one vote-set per user per poll.",
      C: "Incorrect: Turning off database crashes the app.",
      D: "Incorrect: Browser cookies can be cleared or tampered with by clients."
    }
  },
  {
    id: 99,
    category: "Renuka Projects",
    question: "In Pollaris, how are Private Polls secured so uninvited users cannot view poll details even if they guess the share URL?",
    options: [
      { key: 'A', text: "Server-side security rules check if `request.auth.token.email` exists in the poll's `invitees` array or matches `creatorId`" },
      { key: 'B', text: "Private polls display passwords on screen" },
      { key: 'C', text: "Private polls appear in the public feed" },
      { key: 'D', text: "Anyone with the share URL gets instant full access" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Security rules enforce access control on every read/write. Uninvited users receive an 'Access Denied' response without revealing poll title or options.",
      B: "Incorrect: Passwords are never displayed.",
      C: "Incorrect: Private polls NEVER appear in the public feed.",
      D: "Incorrect: Share URL alone does NOT grant access to private polls."
    }
  },
  {
    id: 100,
    category: "Renuka Projects",
    question: "What is the Poll Lifecycle sequence in the Pollaris voting platform?",
    options: [
      { key: 'A', text: "Draft (creator editing) ➔ Open (published, voting enabled, options locked) ➔ Closed (read-only, auto-closed when endAt passes)" },
      { key: 'B', text: "Closed ➔ Open ➔ Draft" },
      { key: 'C', text: "Draft ➔ Closed ➔ Deleted" },
      { key: 'D', text: "Open ➔ Draft ➔ Published" }
    ],
    correctOption: 'A',
    explanation: {
      A: "Correct! Polls start in Draft, move to Open when published (locking options), and transition to Closed (read-only) manually or when `endAt` passes.",
      B: "Incorrect: Closed polls cannot be reopened.",
      C: "Incorrect: Published polls are preserved for historical audit logs, not deleted.",
      D: "Incorrect: Draft comes before Open, and Open cannot revert to Draft."
    }
  }
];
