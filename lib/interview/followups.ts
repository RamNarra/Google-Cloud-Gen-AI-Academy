export interface FollowUpTreeNode {
  id: string;
  conceptId: string;
  level: 1 | 2 | 3;
  interviewerQuestion: string;
  expectedAnswer: string;
  trapWarning: string;
  nextFollowUpId?: string;
}

export const FOLLOWUP_TREES: Record<string, FollowUpTreeNode[]> = {
  'java-oop-encapsulation': [
    {
      id: 'encap-lvl-1',
      conceptId: 'java-oop-encapsulation',
      level: 1,
      interviewerQuestion: 'What is Encapsulation in simple words?',
      expectedAnswer: 'Encapsulation is hiding class variables behind private access modifiers and providing public getters and setters to access them safely.',
      trapWarning: 'Don\'t say Encapsulation means hiding whole classes!',
      nextFollowUpId: 'encap-lvl-2'
    },
    {
      id: 'encap-lvl-2',
      conceptId: 'java-oop-encapsulation',
      level: 2,
      interviewerQuestion: 'Why can\'t I just make all variables public instead of writing getters and setters?',
      expectedAnswer: 'Public variables allow external code to assign invalid data directly, like setting account balance to negative. Setters allow us to add validation logic before changing the value.',
      trapWarning: 'Emphasize data validation and business rule enforcement.',
      nextFollowUpId: 'encap-lvl-3'
    },
    {
      id: 'encap-lvl-3',
      conceptId: 'java-oop-encapsulation',
      level: 3,
      interviewerQuestion: 'Is Java String class encapsulated and immutable?',
      expectedAnswer: 'Yes, String is encapsulated and immutable. Its internal char array is private final, and String provides no setter methods to alter its content after creation.',
      trapWarning: 'Show you know String immutability in Java.'
    }
  ],
  'java-oop-polymorphism': [
    {
      id: 'poly-lvl-1',
      conceptId: 'java-oop-polymorphism',
      level: 1,
      interviewerQuestion: 'What is Polymorphism?',
      expectedAnswer: 'Polymorphism means one method name taking multiple forms. It includes Method Overloading and Method Overriding.',
      trapWarning: 'Keep it crisp—don\'t get bogged down in C++ virtual tables.',
      nextFollowUpId: 'poly-lvl-2'
    },
    {
      id: 'poly-lvl-2',
      conceptId: 'java-oop-polymorphism',
      level: 2,
      interviewerQuestion: 'Can we override a static method in Java?',
      expectedAnswer: 'No, static methods belong to the class rather than instance objects, so they cannot be overridden. If a child redefines it, it is called Method Hiding.',
      trapWarning: 'Never say static methods can be overridden!',
      nextFollowUpId: 'poly-lvl-3'
    },
    {
      id: 'poly-lvl-3',
      conceptId: 'java-oop-polymorphism',
      level: 3,
      interviewerQuestion: 'How does runtime polymorphism work when calling parent reference = new Child()?',
      expectedAnswer: 'Java JVM determines which overridden method to execute at runtime based on the actual object type created in heap memory.',
      trapWarning: 'Mention JVM runtime resolution based on heap object.'
    }
  ],
  'sql-joins-keys': [
    {
      id: 'sql-lvl-1',
      conceptId: 'sql-joins-keys',
      level: 1,
      interviewerQuestion: 'What is the difference between INNER JOIN and LEFT JOIN?',
      expectedAnswer: 'INNER JOIN returns only matching rows in both tables. LEFT JOIN returns all rows from the left table plus matching right table rows, filling NULL if no match exists.',
      trapWarning: 'Don\'t confuse left table vs right table order!',
      nextFollowUpId: 'sql-lvl-2'
    },
    {
      id: 'sql-lvl-2',
      conceptId: 'sql-joins-keys',
      level: 2,
      interviewerQuestion: 'What is Atomicity in ACID database transactions?',
      expectedAnswer: 'Atomicity ensures that all statements inside a transaction complete successfully together, or all are rolled back. It is an all-or-nothing execution.',
      trapWarning: 'Give bank money transfer example (Deduct A and Credit B).'
    }
  ]
};
