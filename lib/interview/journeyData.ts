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
  { id: 'part-1', partNumber: 1, title: 'Section I: FSM & Enterprise SaaS Domain', description: 'Renuka\'s Infor Experience, FSM Associate Role, SaaS, Multi-Tenancy, ERP Systems', icon: '🏢' },
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
  {
    id: 'ch-4-erp-systems',
    partId: 'part-1',
    partTitle: 'Section I: FSM & SaaS',
    chapterNumber: 4,
    title: 'Chapter 4: What is an ERP (Enterprise Resource Planning) System?',
    shortTitle: '4. ERP Systems',
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
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define ERP acronym (Enterprise Resource Planning).',
        '2. Explain centralized database benefit (Connecting Finance, Supply Chain, HR, Sales).',
        '3. Position FSM (Core financial and inventory engine within ERP).'
      ],
      exampleScript: 'An ERP system is an integrated software suite that connects core business functions—like Finance, Supply Chain, Human Resources, and Sales—into one centralized database. FSM is a key module within ERP that specifically handles global financial operations and supply chain management.',
      durationSec: 26,
      tip: 'One central database connecting Finance, Supply Chain, and HR.'
    },
    onePictureSummary: ['🏢 Finance + HR + Supply', '↓ 🛢️ One Central Database', '↓ 🔄 Real-time Integration', '↓ Enterprise ERP']
  },

  // SECTION IX: SYSTEM DESIGN & ARCHITECTURAL PRINCIPLES (JD CORE DESIGN)
  {
    id: 'ch-41-solid-principles',
    partId: 'part-9',
    partTitle: 'Section IX: System Design',
    chapterNumber: 41,
    title: 'Chapter 41: Object-Oriented System Design & SOLID Principles',
    shortTitle: '41. SOLID Principles',
    icon: '📐',
    estimatedMinutes: 9,
    question: 'What are the SOLID principles in Object-Oriented System Design and why do we use them?',
    analogyStory: {
      title: 'The Modular Lego Block Castle',
      text: 'Imagine building a toy castle out of glued wood versus building it out of click-together Lego blocks. If you want to replace a broken Lego window, you unclick one block without breaking the whole castle! SOLID principles are 5 architectural rules that keep code modular like Lego blocks, so changing one class never breaks the rest of the application.',
      takeaway: 'SOLID principles make software modular, maintainable, and easy to extend.'
    },
    diagramType: 'car-abstract',
    simpleExplanation: 'SOLID stands for 5 OOP design principles: 1) Single Responsibility (a class should have only one reason to change), 2) Open/Closed (open for extension, closed for modification), 3) Liskov Substitution (subclasses should be substitutable for superclasses), 4) Interface Segregation (prefer small specific interfaces over large fat interfaces), and 5) Dependency Inversion (depend on abstract interfaces, not concrete implementations).',
    commonMistake: 'Writing 2,000 lines of code inside a single class. Split code into focused Single-Responsibility classes!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define SOLID acronym as 5 OOP design principles for maintainable software.',
        '2. Explain Single Responsibility (One reason to change per class) and Open/Closed (Extend without modifying existing code).',
        '3. Highlight Dependency Inversion (Depending on abstract interfaces rather than concrete classes).'
      ],
      exampleScript: 'SOLID principles are five core OOP design guidelines that ensure software is maintainable and scalable. Single Responsibility ensures a class has only one reason to change, Open/Closed allows extending functionality without modifying existing code, and Dependency Inversion ensures classes depend on abstract interfaces rather than concrete implementations.',
      durationSec: 29,
      tip: 'Name S-O-L-I-D letters clearly: Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion.'
    },
    onePictureSummary: ['📐 SOLID Principles', '↓ 1 Class = 1 Duty', '↓ Abstract Interfaces', '↓ Modular Architecture']
  },
  {
    id: 'ch-42-lld-vs-hld',
    partId: 'part-9',
    partTitle: 'Section IX: System Design',
    chapterNumber: 42,
    title: 'Chapter 42: Low-Level Design (LLD) vs High-Level Design (HLD)',
    shortTitle: '42. LLD vs HLD',
    icon: '🏗️',
    estimatedMinutes: 8,
    question: 'What is the difference between High-Level Design (HLD) and Low-Level Design (LLD)?',
    analogyStory: {
      title: 'The City Map vs The Electrical Wiring Diagram',
      text: 'High-Level Design (HLD) is looking at a city map from a helicopter: you see where the highways, hospitals, and airports are located. Low-Level Design (LLD) is opening the electrical panel inside Room 204 of the hospital to inspect individual wires, switches, and fuses! HLD designs system architecture; LLD designs class diagrams and database tables.',
      takeaway: 'HLD defines system architecture & services; LLD defines class methods & database schemas.'
    },
    diagramType: 'software-app',
    simpleExplanation: 'High-Level Design (HLD) focuses on overall system architecture, macro components, database selection, microservice boundaries, API Gateways, and load balancers. Low-Level Design (LLD) focuses on micro details: class diagrams, OOP design patterns, data structure selection, method signatures, and database table schemas.',
    commonMistake: 'Designing database table columns during an HLD architecture interview round.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define HLD (Macro architecture: Microservices, API Gateway, Databases, Load Balancers).',
        '2. Define LLD (Micro design: Class diagrams, method signatures, design patterns, table schemas).',
        '3. State workflow (HLD comes first during system design, followed by LLD before coding).'
      ],
      exampleScript: 'High-Level Design (HLD) defines the overall system architecture, microservice boundaries, API Gateways, and database choices. Low-Level Design (LLD) translates HLD into detailed class diagrams, design patterns, method signatures, and database table schemas before implementation.',
      durationSec: 27,
      tip: 'HLD = macro architecture & services; LLD = micro classes & DB schemas.'
    },
    onePictureSummary: ['🏙️ HLD (Macro System Architecture)', '↓ 🔌 LLD (Micro Class Diagrams)', '↓ Clear Boundaries', '↓ Zero Defect Code']
  },
  {
    id: 'ch-43-microservices-system-design',
    partId: 'part-9',
    partTitle: 'Section IX: System Design',
    chapterNumber: 43,
    title: 'Chapter 43: Microservices System Design & API Gateways',
    shortTitle: '43. Microservices Design',
    icon: '🌐',
    estimatedMinutes: 8,
    question: 'How do you design a Microservices Architecture using API Gateways and Service Discovery?',
    analogyStory: {
      title: 'The Airport Security Gate & Independent Airline Counters',
      text: 'Instead of one massive airline counter handling check-in, luggage, security, and coffee sales in a giant crowded line (a Monolith), an airport has a single main entrance Security Gate (API Gateway) that routes passengers directly to specialized independent counters (Payment Service, Order Service, Inventory Service). If the coffee counter breaks, flights keep taking off smoothly!',
      takeaway: 'API Gateway routes incoming client traffic to small, independently deployable microservices.'
    },
    diagramType: 'docker-ship',
    simpleExplanation: 'Microservices Architecture breaks large applications into small, autonomous, independently deployable services that communicate via lightweight REST APIs. An API Gateway acts as the single entry point handling authentication, rate limiting, and request routing, while Service Discovery maintains dynamic server IP registries.',
    commonMistake: 'Sharing a single database between 10 microservices. Each microservice must own its private database!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Define Microservices (Small autonomous services communicating via REST APIs).',
        '2. Explain API Gateway (Single entry point for auth, routing, and rate limiting).',
        '3. Mention Database-per-Service principle (Each service owns its private database).'
      ],
      exampleScript: 'In Microservices Architecture, we decompose applications into small, autonomous services that communicate over REST. An API Gateway acts as the single entry point for authentication and request routing, while each microservice owns its private database to ensure fault isolation.',
      durationSec: 28,
      tip: 'API Gateway entry point + Database-per-Service isolation.'
    },
    onePictureSummary: ['🌐 API Gateway Entry', '↓ 📦 Order Microservice', '↓ 💰 Billing Microservice', '↓ 📦 Inventory Microservice']
  },
  {
    id: 'ch-44-scalable-saas-caching',
    partId: 'part-9',
    partTitle: 'Section IX: System Design',
    chapterNumber: 44,
    title: 'Chapter 44: Designing Scalable Enterprise SaaS (Caching & DB Scaling)',
    shortTitle: '44. Scalable SaaS & Caching',
    icon: '⚡',
    estimatedMinutes: 8,
    question: 'How do you design high-availability enterprise SaaS applications to handle millions of requests?',
    analogyStory: {
      title: 'The Frequently Read Notice Board',
      text: 'Instead of walking to the Principal\'s office 1,000 times a day to ask when winter vacation starts, the school posts the notice on a big notice board near the front door (In-Memory Redis Cache). 999 students read the notice board in 1 second without disturbing the Principal\'s office (the main Database)!',
      takeaway: 'Redis caching and DB read-replicas prevent database overload during high traffic.'
    },
    diagramType: 'cloud-power',
    simpleExplanation: 'To scale enterprise SaaS applications for high availability, engineers use 3 key strategies: 1) In-Memory Caching (Redis) to serve frequent read queries in milliseconds, 2) Database Scaling (Read Replicas & Connection Pooling) to handle read-heavy traffic, and 3) Horizontal Server Scaling behind Load Balancers.',
    commonMistake: 'Querying the main SQL database repeatedly for static data that never changes.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. State primary goal (High availability and sub-second API latency).',
        '2. Explain Caching strategy (Using Redis in-memory cache for frequent read queries).',
        '3. Explain Database & Server scaling (Load balancers and database read replicas).'
      ],
      exampleScript: 'To build scalable enterprise SaaS applications, I use Redis in-memory caching for frequently accessed data to reduce database load. We also implement database read replicas, connection pooling, and horizontal server scaling behind load balancers for high availability.',
      durationSec: 27,
      tip: 'Redis in-memory caching + Load balancers + DB read replicas.'
    },
    onePictureSummary: ['🌐 Client Request', '↓ ⚡ Redis Cache (Fast Read)', '↓ ⚖️ Load Balancer', '↓ 🛢️ DB Read Replicas']
  },
  {
    id: 'ch-45-architectural-discussions',
    partId: 'part-9',
    partTitle: 'Section IX: System Design',
    chapterNumber: 45,
    title: 'Chapter 45: Participating in Architectural Discussions (JD Core)',
    shortTitle: '45. Architectural Discussions',
    icon: '🗣️',
    estimatedMinutes: 7,
    question: 'How does an Associate Engineer contribute to technical decision-making and architectural discussions?',
    analogyStory: {
      title: 'The Co-Pilot Navigation Check',
      text: 'When a captain plans a flight route, the co-pilot inspects weather maps, checks fuel calculations, and raises potential storm risks before takeoff! In technical design discussions, an Associate Engineer reviews Architecture Decision Records (ADRs), asks questions about edge-case data flows, and evaluates trade-offs under senior architect guidance.',
      takeaway: 'Associate Engineers contribute by analyzing design trade-offs, edge cases, and ADR documentation.'
    },
    diagramType: 'star-hr',
    simpleExplanation: 'The JD explicitly states: "Participate in architectural discussions and contribute to technical decision-making under the guidance of senior engineers and architects." Associate Engineers participate by writing Architecture Decision Records (ADRs), analyzing technical trade-offs (e.g. SQL vs NoSQL, REST vs gRPC), and highlighting edge-case performance risks.',
    commonMistake: 'Staying silent in design reviews because you think only senior architects can speak.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Acknowledge role (Actively participating in design reviews and ADR documentation).',
        '2. Explain technical contribution (Evaluating trade-offs like caching, DB selection, and API schemas).',
        '3. State learning mindset (Collaborating under senior architects to ensure scalable design).'
      ],
      exampleScript: 'I actively participate in architectural discussions by reviewing design documents and evaluating technical trade-offs—such as database selection and API payload schemas. Under the guidance of senior architects, I help analyze edge cases and contribute to Architecture Decision Records to ensure robust system design.',
      durationSec: 28,
      tip: 'Highlight technical trade-off analysis + Architecture Decision Records (ADRs).'
    },
    onePictureSummary: ['📄 Architecture Design Docs', '↓ 🧠 Trade-off Analysis', '↓ 🏛️ Senior Architect Guidance', '↓ Scalable Decision']
  },

  // SECTION X: RESUME STORIES & BEHAVIORAL HR
  {
    id: 'ch-37-infor-experience',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 37,
    title: 'Chapter 37: Renuka\'s Infor Experience (Enterprise AI Internship)',
    shortTitle: '37. Infor Internship',
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
    id: 'ch-38-pollaris-story',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 38,
    title: 'Chapter 38: Pollaris Voting App (Firestore ACID Transactions)',
    shortTitle: '38. Pollaris Project',
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
    id: 'ch-39-renuka-self-intro',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 39,
    title: 'Chapter 39: Renuka\'s Master Self-Introduction',
    shortTitle: '39. Self Introduction',
    icon: '🗣️',
    estimatedMinutes: 5,
    question: 'Tell me about yourself and your background.',
    analogyStory: {
      title: 'The 45-Second Technical Elevator Pitch',
      text: 'You enter an elevator with the Hiring Manager. State 4 clear facts before floor 5: 1) ECE degree from JNTU, 2) Core hands-on skills (Java, SQL, REST APIs, Spring Boot), 3) Infor 4-month internship & Pollaris project, 4) Enthusiasm for joining the FSM team.',
      takeaway: 'Structure: Background (JNTU ECE) ➔ Tech Stack ➔ Infor/Pollaris Projects ➔ FSM Role Enthusiasm.'
    },
    diagramType: 'star-hr',
    simpleExplanation: 'Keep your self-introduction under 45 seconds. State your name, B.Tech ECE degree from JNTU, core technical stack (Java, SQL, REST APIs, Cloud, AI), 4-month Infor internship experience, and enthusiasm for the Associate Software Engineer FSM role.',
    commonMistake: 'Talking about high school marks instead of core technical skills and projects.',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Greeting & Education (Hello, I am Renuka. B.Tech ECE graduate from JNTU).',
        '2. Technical Stack (Passionate about Java, SQL, REST APIs, and AI tools).',
        '3. Practical Experience (4-month Infor internship working on enterprise AI & Pollaris project).',
        '4. Role Enthusiasm (Excited to join the FSM team to build scalable SaaS applications).'
      ],
      exampleScript: 'Hello, thank you for this opportunity. I am Renuka. I completed my B.Tech in Electronics and Communication Engineering from JNTU. I am passionate about software development and enterprise SaaS solutions. My core technical skills include Java, SQL, REST APIs, and Spring Boot. I completed a 4-month internship at Infor working on enterprise AI tools, and built cloud projects like Pollaris. I am eager to join the FSM product engineering team to build scalable enterprise solutions.',
      durationSec: 38,
      tip: 'Keep it crisp, technical, structured, and under 40 seconds.'
    },
    onePictureSummary: ['🎓 JNTU ECE Degree', '↓ Java, SQL, REST APIs', '↓ Infor 4-Month Internship', '↓ Ready for FSM Team']
  },
  {
    id: 'ch-40-star-method',
    partId: 'part-10',
    partTitle: 'Section X: Resume & HR',
    chapterNumber: 40,
    title: 'Chapter 40: Behavioral STAR Method (Conflict & Failure)',
    shortTitle: '40. STAR Method',
    icon: '⭐',
    estimatedMinutes: 6,
    question: 'How do you answer behavioral questions about technical challenges, conflict, or past mistakes?',
    analogyStory: {
      title: 'The STAR Navigator Compass',
      text: 'When an interviewer asks "Tell me about a time you made a mistake", navigate using STAR: Situation (set the stage), Task (your goal), Action (what specific action YOU took), Result (quantifiable success outcome).',
      takeaway: 'STAR = Situation ➔ Task ➔ Action ➔ Result.'
    },
    diagramType: 'star-hr',
    simpleExplanation: 'The STAR method structures behavioral interview answers: 1) Situation (describe context), 2) Task (explain responsibility), 3) Action (detail actions you took), 4) Result (share positive measurable outcome).',
    commonMistake: 'Rambling about team blame. Always focus on YOUR positive actions and lessons learned!',
    whatToTellInterviewer: {
      heading: 'WHAT TO TELL THE INTERVIEWER (Sentence Framing Structure):',
      structurePoints: [
        '1. Situation (Set background context briefly).',
        '2. Task & Action (Detail specific engineering actions YOU took to solve it).',
        '3. Result (Conclude with positive measurable outcome and key lesson).'
      ],
      exampleScript: 'I structure behavioral answers using the STAR method. In a recent project deadline challenge, I identified bottleneck database queries, refactored indexing rules, and collaborated with senior leads, which reduced API response time by 40% and delivered the release on schedule.',
      durationSec: 28,
      tip: 'Situation -> Task -> Action -> Result format.'
    },
    onePictureSummary: ['S: Situation', '↓ T: Task', '↓ A: Action', '↓ R: Measurable Result']
  }
];
