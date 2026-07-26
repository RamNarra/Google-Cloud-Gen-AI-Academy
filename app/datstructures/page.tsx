"use client";

import { useState } from "react";

interface Program {
  id: string;
  title: string;
  category: "Singly Linked List" | "Doubly Linked List" | "Stack" | "Queue" | "Sorting" | "Trees";
  description: string;
  originalCode: string;
  condensedCode: string;
  output: string;
}

const programsData: Program[] = [
  {
    id: "C1Q4",
    title: "C1Q4 - Singly Linked List Insertion (Sorted Order)",
    category: "Singly Linked List",
    description: "Creates a singly linked list and inserts a new element into its correct sorted position.",
    originalCode: `#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *link;
};

typedef struct node *nodeptr;

nodeptr create(), getnode();
void display(nodeptr);
void insertsort(int val);

nodeptr list = NULL;

int main()
{
    int item;
    list = create();
    display(list);
    printf("Enter value to be inserted: ");
    scanf("%d", &item);
    insertsort(item);
    display(list);
    return 0;
}

void insertsort(int val)
{
    nodeptr p, q, r;
    q = getnode();
    q->data = val;

    if (list == NULL || list->data >= val)
    {
        q->link = list;
        list = q;
        printf("%d is inserted.\\n", val);
        return;
    }

    p = list;
    while (p->link && p->link->data < val)
        p = p->link;

    q->link = p->link;
    p->link = q;
    printf("%d is inserted.\\n", val);
}

void display(nodeptr p)
{
    printf("Contents of linked list are: ");
    while (p)
    {
        printf(" %d", p->data);
        p = p->link;
    }
    printf("\\n");
}

nodeptr create()
{
    nodeptr p, q, r;
    int val;

    printf("Enter zero to stop: ");
    scanf("%d", &val);
    r = p = getnode();
    while (val)
    {
        q = getnode();
        q->data = val;
        p->link = q;
        p = q;
        scanf("%d", &val);
    }
    p->link = NULL;
    p = r->link;
    free(r);
    return p;
}

nodeptr getnode()
{
    nodeptr p;
    p = (nodeptr)malloc(sizeof(struct node));
    return p;
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
typedef struct N{int d;struct N* l;}* node;
node list=0;
node getnode(){return malloc(sizeof(struct N));}
node create(){
    node p,q,r=p=getnode();int v;
    printf("Enter zero to stop: ");
    while(scanf("%d",&v)&&v){q=getnode();q->d=v;p->l=q;p=q;}
    p->l=0;q=r->l;free(r);return q;
}
void display(node p){
    printf("Contents of linked list are: ");
    for(;p;p=p->l)printf(" %d",p->d);
    printf("\\n");
}
void insertsort(int v){
    node p=list,q=getnode();q->d=v;
    if(!list||list->d>=v){q->l=list;list=q;printf("%d is inserted.\\n",v);return;}
    while(p->l&&p->l->d<v)p=p->l;
    q->l=p->l;p->l=q;printf("%d is inserted.\\n",v);
}
int main(){
    int item;list=create();display(list);
    printf("Enter value to be inserted: ");scanf("%d",&item);
    insertsort(item);display(list);
}`,
    output: `Enter zero to stop: 10 20 30 40 0
Contents of linked list are:  10 20 30 40
Enter value to be inserted: 25
25 is inserted.
Contents of linked list are:  10 20 25 30 40`
  },
  {
    id: "C1Q5",
    title: "C1Q5 - Deleting a Value in Singly Linked List",
    category: "Singly Linked List",
    description: "Deletes a specific value from a singly linked list and updates the links appropriately.",
    originalCode: `#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *link;
};

typedef struct node *nodeptr;

nodeptr create(), getnode(), del(nodeptr, int), list;
void display(nodeptr);

int main()
{
    int val;
    list = create();
    display(list);
    printf("Enter value to be deleted: ");
    scanf("%d", &val);
    list = del(list, val);
    display(list);
    return 0;
}

nodeptr getnode()
{
    return (nodeptr)malloc(sizeof(struct node));
}

nodeptr create()
{
    nodeptr p, r, q;
    int v;
    printf("Enter zero to stop: ");
    scanf("%d", &v);
    r = p = getnode();
    while (v)
    {
        q = getnode();
        q->data = v;
        p->link = q;
        p = q;
        scanf("%d", &v);
    }
    p->link = NULL;
    list = r->link;
    free(r);
    return list;
}

void display(nodeptr p)
{
    printf("Contents of linked list are: ");
    while (p)
    {
        printf(" %d", p->data);
        p = p->link;
    }
    printf("\\n");
}

nodeptr del(nodeptr h, int val)
{
    nodeptr p, q;
    if (!h)
    {
        printf("%d is not available.\\n", val);
        return h;
    }
    if (h->data == val)
    {
        q = h;
        h = h->link;
        printf("%d is deleted.\\n", val);
        free(q);
        return h;
    }
    p = h;
    while (p->link && p->link->data != val)
        p = p->link;
    if (!p->link)
    {
        printf("%d is not available.\\n", val);
        return h;
    }
    q = p->link;
    p->link = q->link;
    printf("%d is deleted.\\n", val);
    free(q);
    return h;
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
typedef struct N{int d;struct N* l;}* node;
node list;
node getnode(){return malloc(sizeof(struct N));}
node create(){
    node p,q,r=p=getnode();int v;
    printf("Enter zero to stop: ");
    while(scanf("%d",&v)&&v){q=getnode();q->d=v;p->l=q;p=q;}
    p->l=0;list=r->l;free(r);return list;
}
void display(node p){
    printf("Contents of linked list are: ");
    for(;p;p=p->l)printf(" %d",p->d);
    printf("\\n");
}
node del(node h,int val){
    node p=h,q;
    if(!h){printf("%d is not available.\\n",val);return h;}
    if(h->d==val){q=h;h=h->l;free(q);printf("%d is deleted.\\n",val);return h;}
    while(p->l&&p->l->d!=val)p=p->l;
    if(!p->l){printf("%d is not available.\\n",val);return h;}
    q=p->l;p->l=q->l;free(q);printf("%d is deleted.\\n",val);return h;
}
int main(){
    int val;list=create();display(list);
    printf("Enter value to be deleted: ");scanf("%d",&val);
    list=del(list,val);display(list);
}`,
    output: `Enter zero to stop: 20 10 40 45 23 0
Contents of linked list are:  20 10 40 45 23
Enter value to be deleted: 23
23 is deleted.
Contents of linked list are:  20 10 40 45`
  },
  {
    id: "C2Q1",
    title: "C2Q1 - Create & Traverse DLL (Single-Link Mock)",
    category: "Doubly Linked List",
    description: "Creates and displays a list structure. In this original task, a single-link node is used for traversal.",
    originalCode: `#include<stdio.h>
#include<stdlib.h>
struct node
{
    int data;
    struct node *link;
};
typedef struct node *nodeptr;
nodeptr create(),getnode();
void display(nodeptr);
nodeptr list=NULL;

void main()
{
    list=create();
    display(list);
}

void display(nodeptr p)
{
    printf("Contents of Doubly Linked List are:");
    while(p)
    {
        printf(" %d",p->data);
        p=p->link;
    }
    printf("\\n");
}

nodeptr create()
{
    int val;
    nodeptr p,q,r;
    p=getnode();
    r=p;
    printf("Enter zero to stop: ");
    scanf("%d",&val);
    while(val)
    {
        q=getnode();
        q->data=val;
        p->link=q;
        p=q;
        scanf("%d",&val);
    }
    p->link=NULL;
    p=r->link;
    free(r);
    return p;
}

nodeptr getnode()
{
    nodeptr p;
    p=(nodeptr)malloc(sizeof(struct node));
    return p;
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
typedef struct N{int d;struct N* l;}* node;
node list=NULL;
node getnode(){return malloc(sizeof(struct N));}
node create(){
    node p,q,r=p=getnode();int v;
    printf("Enter zero to stop: ");
    while(scanf("%d",&v)&&v){q=getnode();q->d=v;p->l=q;p=q;}
    p->l=0;q=r->l;free(r);return q;
}
void display(node p){
    printf("Contents of Doubly Linked List are:");
    for(;p;p=p->l)printf(" %d",p->d);
    printf("\\n");
}
void main(){
    list=create();display(list);
}`,
    output: `Enter zero to stop: 10 20 30 40 0
Contents of Doubly Linked List are:  10 20 30 40`
  },
  {
    id: "C2Q2",
    title: "C2Q2 - Insertion in Doubly Linked List",
    category: "Doubly Linked List",
    description: "Inserts a node at a user-specified 1-indexed position in a Doubly Linked List.",
    originalCode: `#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *prev;
    struct node *next;
};

struct node *head = NULL;

void createList();
void display();
int insertAtPosition(int pos, int value);

int main()
{
    int pos, value;

    createList();
    display();

    printf("Enter position and value to be inserted: ");
    scanf("%d %d", &pos, &value);

    if (insertAtPosition(pos, value))
        printf("%d inserted.\\n", value);

    display();
    return 0;
}

void createList()
{
    int value;
    struct node *temp, *newNode;

    printf("Enter zero to stop: ");
    while (1)
    {
        scanf("%d", &value);
        if (value == 0)
            break;

        newNode = (struct node *)malloc(sizeof(struct node));
        newNode->data = value;
        newNode->prev = NULL;
        newNode->next = NULL;

        if (head == NULL)
        {
            head = newNode;
        }
        else
        {
            temp = head;
            while (temp->next != NULL)
                temp = temp->next;
            temp->next = newNode;
            newNode->prev = temp;
        }
    }
}

void display()
{
    struct node *temp = head;

    printf("Contents of Doubly Linked List are: ");
    while (temp != NULL)
    {
        printf(" %d", temp->data);
        temp = temp->next;
    }
    printf("\\n");
}

int insertAtPosition(int pos, int value)
{
    struct node *temp = head, *newNode;
    int i;

    newNode = (struct node *)malloc(sizeof(struct node));
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = NULL;

    if (pos == 1)
    {
        newNode->next = head;
        if (head != NULL)
            head->prev = newNode;
        head = newNode;
        return 1;
    }

    for (i = 1; i < pos - 1 && temp != NULL; i++)
        temp = temp->next;

    if (temp == NULL)
    {
        printf("Insufficient nodes, %d not inserted.\\n", value);
        free(newNode);
        return 0;
    }

    newNode->next = temp->next;
    newNode->prev = temp;

    if (temp->next != NULL)
        temp->next->prev = newNode;

    temp->next = newNode;
    return 1;
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
typedef struct N{int d;struct N *p,*n;}* node;
node head=0;
void createList(){
    int v;node t,q;
    printf("Enter zero to stop: ");
    while(scanf("%d",&v)&&v){
        q=malloc(sizeof(*q));q->d=v;q->p=q->n=0;
        if(!head)head=q;else{for(t=head;t->n;t=t->n);t->n=q;q->p=t;}
    }
}
void display(){
    printf("Contents of Doubly Linked List are: ");
    for(node t=head;t;t=t->n)printf(" %d",t->d);
    printf("\\n");
}
int insertAtPosition(int pos,int v){
    node t=head,q=malloc(sizeof(*q));q->d=v;q->p=q->n=0;
    if(pos==1){q->n=head;if(head)head->p=q;head=q;return 1;}
    for(int i=1;i<pos-1&&t;i++)t=t->n;
    if(!t){printf("Insufficient nodes, %d not inserted.\\n",v);free(q);return 0;}
    q->n=t->n;q->p=t;if(t->n)t->n->p=q;t->n=q;return 1;
}
int main(){
    int pos,value;createList();display();
    printf("Enter position and value to be inserted: ");scanf("%d%d",&pos,&value);
    if(insertAtPosition(pos,value))printf("%d inserted.\\n",value);
    display();
}`,
    output: `Enter zero to stop: 20 30 40 50 60 0
Contents of Doubly Linked List are:  20 30 40 50 60
Enter position and value to be inserted: 1 25
25 inserted.
Contents of Doubly Linked List are:  25 20 30 40 50 60`
  },
  {
    id: "C2Q3",
    title: "C2Q3 - Deletion in Doubly Linked List",
    category: "Doubly Linked List",
    description: "Deletes a node from a user-specified 1-indexed position in a Doubly Linked List.",
    originalCode: `#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *prev;
    struct node *next;
};

struct node *head = NULL;

void createList();
void display();
void deleteAtPosition(int pos);

int main()
{
    int pos;

    createList();
    display();

    printf("Enter position to be deleted: ");
    scanf("%d", &pos);

    deleteAtPosition(pos);
    display();
    return 0;
}

void createList()
{
    int value;
    struct node *temp, *newNode;

    printf("Enter zero to stop: ");
    while (1)
    {
        scanf("%d", &value);
        if (value == 0)
            break;

        newNode = (struct node *)malloc(sizeof(struct node));
        newNode->data = value;
        newNode->prev = NULL;
        newNode->next = NULL;

        if (head == NULL)
            head = newNode;
        else
        {
            temp = head;
            while (temp->next != NULL)
                temp = temp->next;
            temp->next = newNode;
            newNode->prev = temp;
        }
    }
}

void display()
{
    struct node *temp = head;

    printf("Contents of Doubly Linked List are: ");
    while (temp != NULL)
    {
        printf(" %d", temp->data);
        temp = temp->next;
    }
    printf("\\n");
}

void deleteAtPosition(int pos)
{
    struct node *temp = head;
    int i;

    if (head == NULL)
    {
        printf("Insufficient nodes.\\n");
        return;
    }

    if (pos == 1)
    {
        head = temp->next;
        if (head != NULL)
            head->prev = NULL;
        printf("%d deleted.\\n", temp->data);
        free(temp);
        return;
    }

    for (i = 1; i < pos && temp != NULL; i++)
        temp = temp->next;

    if (temp == NULL)
    {
        printf("Insufficient nodes.\\n");
        return;
    }

    if (temp->next != NULL)
        temp->next->prev = temp->prev;
    if (temp->prev != NULL)
        temp->prev->next = temp->next;

    printf("%d deleted.\\n", temp->data);
    free(temp);
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
typedef struct N{int d;struct N *p,*n;}* node;
node head=0;
void createList(){
    int v;node t,q;
    printf("Enter zero to stop: ");
    while(scanf("%d",&v)&&v){
        q=malloc(sizeof(*q));q->d=v;q->p=q->n=0;
        if(!head)head=q;else{for(t=head;t->n;t=t->n);t->n=q;q->p=t;}
    }
}
void display(){
    printf("Contents of Doubly Linked List are: ");
    for(node t=head;t;t=t->n)printf(" %d",t->d);
    printf("\\n");
}
void deleteAtPosition(int pos){
    node t=head;if(!head){printf("Insufficient nodes.\\n");return;}
    if(pos==1){head=t->n;if(head)head->p=0;printf("%d deleted.\\n",t->d);free(t);return;}
    for(int i=1;i<pos&&t;i++)t=t->n;
    if(!t){printf("Insufficient nodes.\\n");return;}
    if(t->n)t->n->p=t->p;if(t->p)t->p->n=t->n;
    printf("%d deleted.\\n",t->d);free(t);
}
int main(){
    int pos;createList();display();
    printf("Enter position to be deleted: ");scanf("%d",&pos);
    deleteAtPosition(pos);display();
}`,
    output: `Enter zero to stop: 20 30 40 50 60 70 0
Contents of Doubly Linked List are:  20 30 40 50 60 70
Enter position to be deleted: 2
30 deleted.
Contents of Doubly Linked List are:  20 40 50 60 70`
  },
  {
    id: "C2Q4",
    title: "C2Q4 - Insertion in Sorted Doubly Linked List",
    category: "Doubly Linked List",
    description: "Inserts a value into a Doubly Linked List maintaining ascending sorted order.",
    originalCode: `#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *prev;
    struct node *next;
};

struct node *head = NULL;

void createList();
void display();
void insertSorted(int value);

int main()
{
    int value;

    createList();
    display();

    printf("Enter value to be inserted: ");
    scanf("%d", &value);

    insertSorted(value);
    printf("%d inserted.\\n", value);

    display();
    return 0;
}

void createList()
{
    int value;
    struct node *temp, *newNode;

    printf("Enter zero to stop: ");
    while (1)
    {
        scanf("%d", &value);
        if (value == 0)
            break;

        newNode = (struct node *)malloc(sizeof(struct node));
        newNode->data = value;
        newNode->prev = NULL;
        newNode->next = NULL;

        if (head == NULL)
        {
            head = newNode;
        }
        else
        {
            temp = head;
            while (temp->next != NULL)
                temp = temp->next;
            temp->next = newNode;
            newNode->prev = temp;
        }
    }
}

void display()
{
    struct node *temp = head;

    printf("Contents of Doubly Linked List are: ");
    while (temp != NULL)
    {
        printf("%d", temp->data);
        if (temp->next != NULL)
            printf(" ");
        temp = temp->next;
    }
    printf("\\n");
}

void insertSorted(int value)
{
    struct node *temp = head;
    struct node *newNode;

    newNode = (struct node *)malloc(sizeof(struct node));
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = NULL;

    if (head == NULL)
    {
        head = newNode;
        return;
    }

    if (value <= head->data)
    {
        newNode->next = head;
        head->prev = newNode;
        head = newNode;
        return;
    }

    while (temp->next != NULL && temp->next->data < value)
        temp = temp->next;

    newNode->next = temp->next;
    newNode->prev = temp;

    if (temp->next != NULL)
        temp->next->prev = newNode;

    temp->next = newNode;
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
typedef struct N{int d;struct N *p,*n;}* node;
node head=0;
void createList(){
    int v;node t,q;
    printf("Enter zero to stop: ");
    while(scanf("%d",&v)&&v){
        q=malloc(sizeof(*q));q->d=v;q->p=q->n=0;
        if(!head)head=q;else{for(t=head;t->n;t=t->n);t->n=q;q->p=t;}
    }
}
void display(){
    printf("Contents of Doubly Linked List are: ");
    for(node t=head;t;t=t->n)printf("%d%s",t->d,t->n?" ":"");
    printf("\\n");
}
void insertSorted(int v){
    node t=head,q=malloc(sizeof(*q));q->d=v;q->p=q->n=0;
    if(!head){head=q;return;}
    if(v<=head->d){q->n=head;head->p=q;head=q;return;}
    while(t->n&&t->n->d<v)t=t->n;
    q->n=t->n;q->p=t;if(t->n)t->n->p=q;t->n=q;
}
int main(){
    int value;createList();display();
    printf("Enter value to be inserted: ");scanf("%d",&value);
    insertSorted(value);printf("%d inserted.\\n",value);display();
}`,
    output: `Enter zero to stop: 10 20 40 50 60 0
Contents of Doubly Linked List are:  10 20 40 50 60
Enter value to be inserted: 30
30 inserted.
Contents of Doubly Linked List are:  10 20 30 40 50 60`
  },
  {
    id: "C2Q5",
    title: "C2Q5 - Delete Value in a Doubly Linked List",
    category: "Doubly Linked List",
    description: "Searches for a specific value in a Doubly Linked List and removes it.",
    originalCode: `#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *prev;
    struct node *next;
};

struct node *head = NULL;

void createList();
void display();
void deleteValue(int value);

int main()
{
    int value;

    createList();
    display();

    printf("Enter value to be deleted: ");
    scanf("%d", &value);

    deleteValue(value);
    display();
    return 0;
}

void createList()
{
    int value;
    struct node *temp, *newNode;

    printf("Enter zero to stop: ");
    while (1)
    {
        scanf("%d", &value);
        if (value == 0)
            break;

        newNode = (struct node *)malloc(sizeof(struct node));
        newNode->data = value;
        newNode->prev = NULL;
        newNode->next = NULL;

        if (head == NULL)
        {
            head = newNode;
        }
        else
        {
            temp = head;
            while (temp->next != NULL)
                temp = temp->next;
            temp->next = newNode;
            newNode->prev = temp;
        }
    }
}

void display()
{
    struct node *temp = head;

    printf("Contents of Doubly Linked List are: ");
    while (temp != NULL)
    {
        printf("%d", temp->data);
        if (temp->next != NULL)
            printf(" ");
        temp = temp->next;
    }
    printf("\\n");
}

void deleteValue(int value)
{
    struct node *temp = head;

    while (temp != NULL && temp->data != value)
        temp = temp->next;

    if (temp == NULL)
    {
        printf("%d not available.\\n", value);
        return;
    }

    if (temp == head)
    {
        head = temp->next;
        if (head != NULL)
            head->prev = NULL;
    }
    else
    {
        if (temp->next != NULL)
            temp->next->prev = temp->prev;
        if (temp->prev != NULL)
            temp->prev->next = temp->next;
    }

    printf("%d deleted.\\n", value);
    free(temp);
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
typedef struct N{int d;struct N *p,*n;}* node;
node head=0;
void createList(){
    int v;node t,q;
    printf("Enter zero to stop: ");
    while(scanf("%d",&v)&&v){
        q=malloc(sizeof(*q));q->d=v;q->p=q->n=0;
        if(!head)head=q;else{for(t=head;t->n;t=t->n);t->n=q;q->p=t;}
    }
}
void display(){
    printf("Contents of Doubly Linked List are: ");
    for(node t=head;t;t=t->n)printf("%d%s",t->d,t->n?" ":"");
    printf("\\n");
}
void deleteValue(int v){
    node t=head;while(t&&t->d!=v)t=t->n;
    if(!t){printf("%d not available.\\n",v);return;}
    if(t==head){head=t->n;if(head)head->p=0;}
    else{if(t->n)t->n->p=t->p;if(t->p)t->p->n=t->n;}
    printf("%d deleted.\\n",v);free(t);
}
int main(){
    int value;createList();display();
    printf("Enter value to be deleted: ");scanf("%d",&value);
    deleteValue(value);display();
}`,
    output: `Enter zero to stop: 5 20 25 30 40 0
Contents of Doubly Linked List are:  5 20 25 30 40
Enter value to be deleted: 25
25 deleted.
Contents of Doubly Linked List are:  5 20 30 40`
  },
  {
    id: "C4Q1",
    title: "C4Q1 - Stack Using Linked Lists",
    category: "Stack",
    description: "Implements a stack (LIFO) dynamically using a singly linked list architecture.",
    originalCode: `#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *link;
};

struct node *top = NULL, *ptr, *newnode;

void push(int x);
void pop();
void isEmpty();
void display();
void peek();

int main()
{
    int op, x;
    while(1)
    {
        printf("1.Push 2.Pop 3.Display 4.Is Empty 5.Peek 6.Exit\\n");
        printf("Enter your option: ");
        scanf("%d", &op);
        switch(op)
        {
            case 1:
                printf("Enter element: ");
                scanf("%d", &x);
                push(x);
                break;
            case 2:
                pop();
                break;
            case 3:
                display();
                break;
            case 4:
                isEmpty();
                break;
            case 5:
                peek();
                break;
            case 6:
                exit(0);
        }
    }
    return 0;
}

void push(int x)
{
    newnode = (struct node *)malloc(sizeof(struct node));
    newnode->data = x;
    if(top == NULL)
        newnode->link = NULL;
    else
        newnode->link = top;
    top = newnode;
    printf("Successfully pushed.\\n");
}

void pop()
{
    if(top == NULL)
        printf("Stack is underflow.\\n");
    else
    {
        ptr = top;
        printf("Popped value = %d\\n", ptr->data);
        top = top->link;
        free(ptr);
    }
}

void display()
{
    if(top == NULL)
        printf("Stack is empty.\\n");
    else
    {
        printf("Elements of stack are: ");
        for(ptr = top; ptr != NULL; ptr = ptr->link)
            printf("%d ", ptr->data);
        printf("\\n");
    }
}

void isEmpty()
{
    if(top == NULL)
        printf("Stack is empty.\\n");
    else
        printf("Stack is not empty.\\n");
}

void peek()
{
    if(top == NULL)
        printf("Stack is underflow.\\n");
    else
        printf("Peak value = %d\\n", top->data);
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
typedef struct N{int d;struct N* l;}* node;
node top=0;
void push(int x){
    node q=malloc(sizeof(*q));q->d=x;
    q->l=top?top:0;top=q;printf("Successfully pushed.\\n");
}
void pop(){
    if(!top)printf("Stack is underflow.\\n");
    else{node t=top;printf("Popped value = %d\\n",t->d);top=top->l;free(t);}
}
void isEmpty(){printf("Stack is %sempty.\\n",top?"not ":"");}
void peek(){if(!top)printf("Stack is underflow.\\n");else printf("Peak value = %d\\n",top->d);}
void display(){
    if(!top)printf("Stack is empty.\\n");
    else{printf("Elements of stack are: ");for(node t=top;t;t=t->l)printf("%d ",t->d);printf("\\n");}
}
int main(){
    int op,x;
    while(1){
        printf("1.Push 2.Pop 3.Display 4.Is Empty 5.Peek 6.Exit\\nEnter option: ");
        if(scanf("%d",&op)<=0||op==6)break;
        if(op==1){printf("Enter element: ");scanf("%d",&x);push(x);}
        if(op==2)pop();if(op==3)display();if(op==4)isEmpty();if(op==5)peek();
    }
}`,
    output: `1.Push 2.Pop 3.Display 4.Is Empty 5.Peek 6.Exit
Enter your option: 1
Enter element: 10
Successfully pushed.

1.Push 2.Pop 3.Display 4.Is Empty 5.Peek 6.Exit
Enter your option: 2
Popped value = 10`
  },
  {
    id: "C4Q2",
    title: "C4Q2 - Stack Using Arrays",
    category: "Stack",
    description: "Implements a stack (LIFO) of static size using a standard array structure.",
    originalCode: `#include <stdio.h>
#include <stdlib.h>

#define MAX 10

int stk[MAX];
int top = -1;

void push(int item)
{
    if(top == MAX - 1)
        printf("Stack is overflow.\\n");
    else
    {
        top = top + 1;
        stk[top] = item;
        printf("Successfully pushed.\\n");
    }
}

int pop()
{
    if(top == -1)
    {
        printf("Stack is underflow.\\n");
        return -1;
    }
    else
    {
        int item = stk[top];
        top = top - 1;
        printf("Popped value = %d\\n", item);
        return item;
    }
}

void display()
{
    int i;
    if(top == -1)
        printf("Stack is empty.\\n");
    else
    {
        printf("Elements of the stack are: ");
        for(i = top; i >= 0; i--)
            printf("%d ", stk[i]);
        printf("\\n");
    }
}

int main()
{
    int item, op;
    while(1)
    {
        printf("1.Push 2.Pop 3.Display 4.Is Empty 5.Peek 6.Exit\\n");
        printf("Enter your option: ");
        scanf("%d", &op);

        switch(op)
        {
            case 1:
                printf("Enter element: ");
                scanf("%d", &item);
                push(item);
                break;

            case 2:
                pop();
                break;

            case 3:
                display();
                break;

            case 4:
                if(top == -1)
                    printf("Stack is empty.\\n");
                else
                    printf("Stack is not empty.\\n");
                break;

            case 5:
                if(top == -1)
                    printf("Stack is underflow.\\n");
                else
                    printf("Peek value = %d\\n", stk[top]);
                break;

            case 6:
                exit(0);
        }
    }
    return 0;
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
int stk[10],top=-1;
void push(int x){
    if(top==9)printf("Stack is overflow.\\n");
    else{stk[++top]=x;printf("Successfully pushed.\\n");}
}
int pop(){
    if(top==-1){printf("Stack is underflow.\\n");return -1;}
    printf("Popped value = %d\\n",stk[top]);return stk[top--];
}
void display(){
    if(top==-1)printf("Stack is empty.\\n");
    else{printf("Elements of the stack are: ");for(int i=top;i>=0;i--)printf("%d ",stk[i]);printf("\\n");}
}
int main(){
    int op,x;
    while(1){
        printf("1.Push 2.Pop 3.Display 4.Is Empty 5.Peek 6.Exit\\nEnter option: ");
        if(scanf("%d",&op)<=0||op==6)break;
        if(op==1){printf("Enter element: ");scanf("%d",&x);push(x);}
        if(op==2)pop();if(op==3)display();
        if(op==4)printf("Stack is %sempty.\\n",top==-1?"":"not ");
        if(op==5)if(top==-1)printf("Stack is underflow.\\n");else printf("Peek value = %d\\n",stk[top]);
    }
}`,
    output: `1.Push 2.Pop 3.Display 4.Is Empty 5.Peek 6.Exit
Enter your option: 1
Enter element: 10
Successfully pushed.
1.Push 2.Pop 3.Display 4.Is Empty 5.Peek 6.Exit
Enter your option: 3
Elements of the stack are: 10
1.Push 2.Pop 3.Display 4.Is Empty 5.Peek 6.Exit
Enter your option: 6`
  },
  {
    id: "C5Q1",
    title: "C5Q1 - Queue Using Linked Lists",
    category: "Queue",
    description: "Implements a FIFO Queue dynamically using a linked list with front and rear pointers.",
    originalCode: `#include<stdio.h>
#include<stdlib.h>
struct node
{
    int data;
    struct node *link;
};
typedef struct node *nodeptr;
nodeptr front=NULL,rear=NULL;
int count=0;

nodeptr getnode()
{
    return(nodeptr)malloc(sizeof(struct node));
}

void insert(int item)
{
    nodeptr p=getnode();
    p->data=item;
    p->link=NULL;
    if(rear==NULL)
        front=rear=p;
    else
    {
        rear->link=p;
        rear=p;
    }
    printf("Successfully inserted.\\n");
    count++;
}

int delete()
{
    if(front==NULL)
    {
        rear=NULL;
        printf("Queue is underflow.\\n");
        return -1;
    }
    else
    {
        nodeptr temp=front;
        int item=temp->data;
        front=front->link;
        if(front==NULL)
            rear=NULL;
        free(temp);
        count--;
        printf("Deleted value = %d\\n",item);
        return item;
    }
}

void display()
{
    if(front==NULL)
        printf("Queue is empty.\\n");
    else
    {
        nodeptr temp=front;
        printf("Elements in the queue: ");
        while(temp)
        {
            printf("%d ",temp->data);
            temp=temp->link;
        }
        printf("\\n");
    }
}

int main()
{
    int item,op;
    while(1)
    {
        printf("\\n1.Enqueue 2.Dequeue 3.Display 4.Is Empty 5.Size 6.Exit\\n");
        printf("Enter your option: ");
        scanf("%d",&op);
        switch(op)
        {
            case 1:
                printf("Enter element: ");
                scanf("%d",&item);
                insert(item);
                break;
            case 2:
                delete();
                break;
            case 3:
                display();
                break;
            case 4:
                if(front==NULL)
                    printf("Queue is empty.\\n");
                else
                    printf("Queue is not empty.\\n");
                break;
            case 5:
                printf("Queue size: %d\\n",count);
                break;
            case 6:
                exit(0);
        }
    }
    return 0;
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
typedef struct N{int d;struct N* l;}* node;
node front=0,rear=0;int count=0;
node getnode(){return malloc(sizeof(struct N));}
void insert(int x){
    node q=getnode();q->d=x;q->l=0;
    if(!rear)front=rear=q;else{rear->l=q;rear=q;}
    printf("Successfully inserted.\\n");count++;
}
int delete(){
    if(!front){rear=0;printf("Queue is underflow.\\n");return -1;}
    node t=front;int x=t->d;front=front->l;if(!front)rear=0;free(t);count--;
    printf("Deleted value = %d\\n",x);return x;
}
void display(){
    if(!front)printf("Queue is empty.\\n");
    else{printf("Elements in the queue: ");for(node t=front;t;t=t->l)printf("%d ",t->d);printf("\\n");}
}
int main(){
    int op,item;
    while(1){
        printf("\\n1.Enqueue 2.Dequeue 3.Display 4.Is Empty 5.Size 6.Exit\\nEnter option: ");
        if(scanf("%d",&op)<=0||op==6)break;
        if(op==1){printf("Enter element: ");scanf("%d",&item);insert(item);}
        if(op==2)delete();if(op==3)display();
        if(op==4)printf("Queue is %sempty.\\n",front?"not ":"");
        if(op==5)printf("Queue size: %d\\n",count);
    }
}`,
    output: `1.Enqueue 2.Dequeue 3.Display 4.Is Empty 5.Size 6.Exit
Enter your option: 1
Enter element: 2
Successfully inserted.
1.Enqueue 2.Dequeue 3.Display 4.Is Empty 5.Size 6.Exit
Enter your option: 6`
  },
  {
    id: "C5Q2",
    title: "C5Q2 - Queue Using Arrays",
    category: "Queue",
    description: "Implements a FIFO Queue of static size using an array with front/rear tracking.",
    originalCode: `#include<stdio.h>
#include<stdlib.h>

#define MAX 10

int q[MAX];
int count=0;
int front=-1;
int rear=-1;

void insert(int item)
{
    if(rear==MAX-1)
        printf("Queue is full.\\n");
    else
    {
        if(front==-1)
            front=0;
        rear=rear+1;
        q[rear]=item;
        printf("Successfully inserted.\\n");
        count++;
    }
}

int delete()
{
    int item;
    if(front==rear || front==-1)
    {
        printf("Queue is underflow.\\n");
        return -1;
    }
    else
    {
        item=q[front];
        if(front==rear)
            front=rear=-1;
        else
            front=front+1;
        count--;
        printf("Deleted element = %d\\n",item);
        return item;
    }
}

void display()
{
    int i;
    if(front>rear || front==-1)
        printf("Queue is empty.\\n");
    else
    {
        printf("Elements in the Queue: ");
        for(i=front;i<=rear;i++)
            printf("%d ",q[i]);
        printf("\\n");
    }
}

int main()
{
    int item,op;
    while(1)
    {
        printf("\\n1.Enqueue 2.Dequeue 3.Display 4.Is Empty 5.Size 6.Exit\\n");
        printf("Enter your option: ");
        scanf("%d",&op);
        switch(op)
        {
            case 1:
                printf("Enter element: ");
                scanf("%d",&item);
                insert(item);
                break;
            case 2:
                delete();
                break;
            case 3:
                display();
                break;
            case 4:
                if(front>rear || front==-1)
                    printf("Queue is empty.\\n");
                else
                    printf("Queue is not empty.\\n");
                break;
            case 5:
                printf("Queue size: %d\\n",count);
                break;
            case 6:
                exit(0);
        }
    }
    return 0;
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
int q[10],front=-1,rear=-1,count=0;
void insert(int x){
    if(rear==9)printf("Queue is full.\\n");
    else{if(front==-1)front=0;q[++rear]=x;printf("Successfully inserted.\\n");count++;}
}
int delete(){
    if(front==rear||front==-1){printf("Queue is underflow.\\n");return -1;}
    int x=q[front];if(front==rear)front=rear=-1;else front++;
    count--;printf("Deleted element = %d\\n",x);return x;
}
void display(){
    if(front>rear||front==-1)printf("Queue is empty.\\n");
    else{printf("Elements in the Queue: ");for(int i=front;i<=rear;i++)printf("%d ",q[i]);printf("\\n");}
}
int main(){
    int op,item;
    while(1){
        printf("\\n1.Enqueue 2.Dequeue 3.Display 4.Is Empty 5.Size 6.Exit\\nEnter option: ");
        if(scanf("%d",&op)<=0||op==6)break;
        if(op==1){printf("Enter element: ");scanf("%d",&item);insert(item);}
        if(op==2)delete();if(op==3)display();
        if(op==4)printf("Queue is %sempty.\\n",front>rear||front==-1?"":"not ");
        if(op==5)printf("Queue size: %d\\n",count);
    }
}`,
    output: `1.Enqueue 2.Dequeue 3.Display 4.Is Empty 5.Size 6.Exit
Enter your option: 1
Enter element: 10
Successfully inserted.
1.Enqueue 2.Dequeue 3.Display 4.Is Empty 5.Size 6.Exit
Enter your option: 1
Enter element: 20
Successfully inserted.
1.Enqueue 2.Dequeue 3.Display 4.Is Empty 5.Size 6.Exit
Enter your option: 3
Elements in the queue: 10 20 
1.Enqueue 2.Dequeue 3.Display 4.Is Empty 5.Size 6.Exit
Enter your option: 6`
  },
  {
    id: "C6Q2",
    title: "C6Q2 - Heap Sort",
    category: "Sorting",
    description: "Write a C program to sort the given elements using the Heap sort technique.",
    originalCode: `#include <stdio.h>

void display(int a[], int n) {
    int i;
    printf("Elements of array are: ");
    for(i = 0; i < n; i++)
        printf("%d ", a[i]);
    printf("\\n");
}

void heapify(int a[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    int temp;

    if(left < n && a[left] > a[largest])
        largest = left;

    if(right < n && a[right] > a[largest])
        largest = right;

    if(largest != i) {
        temp = a[i];
        a[i] = a[largest];
        a[largest] = temp;

        heapify(a, n, largest);
    }
}

int main() {
    int a[100], n, i, temp;

    printf("Enter n value: ");
    scanf("%d", &n);

    printf("Enter %d values: ", n);
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    display(a, n);

    /* Build Max Heap */
    for(i = n / 2 - 1; i >= 0; i--)
        heapify(a, n, i);

    display(a, n);

    /* Heap Sort */
    for(i = n - 1; i > 0; i--) {
        temp = a[0];
        a[0] = a[i];
        a[i] = temp;

        heapify(a, i, 0);

        display(a, n);
    }

    /* Final Sorted Array */
    display(a, n);

    return 0;
}`,
    condensedCode: `#include<stdio.h>
void display(int a[],int n){
    printf("Elements of array are: ");
    for(int i=0;i<n;i++)printf("%d ",a[i]);
    printf("\\n");
}
void heapify(int a[],int n,int i){
    int max=i,l=2*i+1,r=2*i+2,t;
    if(l<n&&a[l]>a[max])max=l;
    if(r<n&&a[r]>a[max])max=r;
    if(max!=i){t=a[i];a[i]=a[max];a[max]=t;heapify(a,n,max);}
}
int main(){
    int a[100],n,i,t;
    printf("Enter n value: ");scanf("%d",&n);
    printf("Enter %d values: ",n);
    for(i=0;i<n;i++)scanf("%d",&a[i]);
    display(a,n);
    for(i=n/2-1;i>=0;i--)heapify(a,n,i);
    display(a,n);
    for(i=n-1;i>0;i--){t=a[0];a[0]=a[i];a[i]=t;heapify(a,i,0);display(a,n);}
    display(a,n);
}`,
    output: `Enter n value: 5
Enter 5 values: 40 10 30 15 50
Elements of array are: 40 10 30 15 50 
Elements of array are: 50 40 30 15 10 
Elements of array are: 40 15 30 10 50 
Elements of array are: 30 15 10 40 50 
Elements of array are: 15 10 30 40 50 
Elements of array are: 10 15 30 40 50 
Elements of array are: 10 15 30 40 50 `
  },
  {
    id: "C8Q1",
    title: "C8Q1 - Binary Search Tree Operations",
    category: "Trees",
    description: "Write a C program to perform operations on a Binary Search Tree (BST) like Insert, Inorder, Preorder, and Postorder traversals.",
    originalCode: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left;
    struct Node *right;
};

struct Node* insert(struct Node *root, int value) {
    if (root == NULL) {
        struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
        newNode->data = value;
        newNode->left = NULL;
        newNode->right = NULL;
        return newNode;
    }

    if (value < root->data)
        root->left = insert(root->left, value);
    else
        root->right = insert(root->right, value);

    return root;
}

void inorder(struct Node *root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

void preorder(struct Node *root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

void postorder(struct Node *root) {
    if (root != NULL) {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}

int main() {
    struct Node *root = NULL;
    int option, value;

    while (1) {
        printf("1.Insert 2.Inorder Traversal 3.Preorder Traversal 4.Postorder Traversal 5.Exit\\n");
        printf("Enter your option : ");
        scanf("%d", &option);

        switch (option) {
            case 1:
                printf("Enter an element to be inserted : ");
                scanf("%d", &value);

                root = insert(root, value);

                printf("Successfully inserted.\\n");
                break;

            case 2:
                printf("Elements of the BST (in-order traversal): ");
                inorder(root);
                printf("\\n");
                break;

            case 3:
                printf("Elements of the BST (pre-order traversal): ");
                preorder(root);
                printf("\\n");
                break;

            case 4:
                printf("Elements of the BST (post-order traversal): ");
                postorder(root);
                printf("\\n");
                break;

            case 5:
                return 0;

            default:
                printf("Invalid option.\\n");
        }
    }

    return 0;
}`,
    condensedCode: `#include<stdio.h>
#include<stdlib.h>
typedef struct N{int d;struct N *l,*r;}* node;
node insert(node n,int v){
    if(!n){node q=malloc(sizeof(*q));q->d=v;q->l=q->r=0;return q;}
    if(v<n->d)n->l=insert(n->l,v);else n->r=insert(n->r,v);
    return n;
}
void inorder(node n){if(n){inorder(n->l);printf("%d ",n->d);inorder(n->r);}}
void preorder(node n){if(n){printf("%d ",n->d);preorder(n->l);preorder(n->r);}}
void postorder(node n){if(n){postorder(n->l);postorder(n->r);printf("%d ",n->d);}}
int main(){
    node root=0;int op,v;
    while(1){
        printf("1.Insert 2.Inorder 3.Preorder 4.Postorder 5.Exit\\nEnter option: ");
        if(scanf("%d",&op)<=0||op==5)break;
        if(op==1){printf("Enter value: ");scanf("%d",&v);root=insert(root,v);printf("Successfully inserted.\\n");}
        if(op==2){printf("BST (in-order): ");inorder(root);printf("\\n");}
        if(op==3){printf("BST (pre-order): ");preorder(root);printf("\\n");}
        if(op==4){printf("BST (post-order): ");postorder(root);printf("\\n");}
    }
}`,
    output: `1.Insert 2.Inorder Traversal 3.Preorder Traversal 4.Postorder Traversal 5.Exit
Enter your option : 1
Enter an element to be inserted : 50
Successfully inserted.
1.Insert 2.Inorder Traversal 3.Preorder Traversal 4.Postorder Traversal 5.Exit
Enter your option : 1
Enter an element to be inserted : 30
Successfully inserted.
1.Insert 2.Inorder Traversal 3.Preorder Traversal 4.Postorder Traversal 5.Exit
Enter your option : 1
Enter an element to be inserted : 70
Successfully inserted.
1.Insert 2.Inorder Traversal 3.Preorder Traversal 4.Postorder Traversal 5.Exit
Enter your option : 2
Elements of the BST (in-order traversal): 30 50 70 
1.Insert 2.Inorder Traversal 3.Preorder Traversal 4.Postorder Traversal 5.Exit
Enter your option : 5`
  }
];

export default function DatstructuresPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [codeModes, setCodeModes] = useState<Record<string, "condensed" | "original">>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["All", "Singly Linked List", "Doubly Linked List", "Stack", "Queue", "Sorting", "Trees"];

  const filteredPrograms = programsData.filter((prog) => {
    const matchesCategory = activeCategory === "All" || prog.category === activeCategory;
    const matchesSearch =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleCodeMode = (progId: string) => {
    setCodeModes((prev) => ({
      ...prev,
      [progId]: prev[progId] === "original" ? "condensed" : "original",
    }));
  };

  const copyToClipboard = async (text: string, progId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(progId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 md:py-16 text-[#e2f0d9]">
      {/* Title Header with big, legible letters */}
      <div className="mb-10 text-center md:mb-16">
        <h1 className="font-syne text-5xl font-extrabold uppercase tracking-tight text-white md:text-7xl leading-none">
          Data <span className="text-[#43e8b0]">Structures</span>
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-[#8ea3cb] sm:text-sm">
          Lab Records &bull; {programsData.length} Programs Condensed for Quick Written Work
        </p>
        
        {/* Total programs counter */}
        <div className="inline-flex mt-6 items-center gap-2 rounded-full border border-[#43e8b0]/30 bg-[#43e8b0]/10 px-4 py-2 text-sm text-[#7cf3c6]">
          <span className="h-2 w-2 rounded-full bg-[#43e8b0] animate-pulse"></span>
          <span className="font-mono font-bold">{programsData.length}</span> programs available
        </div>
      </div>

      {/* Control Filters Area */}
      <div className="mb-8 flex flex-col gap-4 rounded-xl border border-[#2a3652] bg-[#0c1220]/80 p-4 shadow-xl backdrop-blur-md">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search programs by title or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-[#2a3652] bg-[#070b14] py-3 pl-10 pr-4 font-mono text-sm text-white placeholder-[#51638a] focus:border-[#43e8b0] focus:outline-none focus:ring-1 focus:ring-[#43e8b0] transition-all"
          />
          <span className="absolute left-3 top-3.5 text-[#51638a]">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 font-mono text-xs font-semibold tracking-wider transition-all duration-200 border ${
                  isActive
                    ? "bg-[#43e8b0] text-[#090c14] border-[#43e8b0]"
                    : "bg-[#111726]/60 text-[#8ea3cb] border-[#2a3652] hover:bg-[#1a233a] hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Program List */}
      <div className="space-y-6">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((prog) => {
            const isExpanded = expandedId === prog.id;
            const mode = codeModes[prog.id] || "condensed";
            const codeToDisplay = mode === "condensed" ? prog.condensedCode : prog.originalCode;
            const lineCount = codeToDisplay.split("\n").length;

            return (
              <div
                key={prog.id}
                className="group overflow-hidden rounded-2xl border border-[#2a3652] bg-[#101523]/95 shadow-xl transition-all duration-300 hover:border-[#43e8b0]/50"
              >
                {/* Header of Card */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : prog.id)}
                  className="flex cursor-pointer items-center justify-between gap-4 p-5 hover:bg-[#151c30]/50 transition-colors"
                >
                  <div className="space-y-1 text-left">
                    <div className="flex items-center gap-3">
                      <span className="rounded bg-[#43e8b0]/15 px-2 py-0.5 font-mono text-xs font-bold text-[#43e8b0]">
                        {prog.id}
                      </span>
                      <span className="font-mono text-xs text-[#8ea3cb] uppercase tracking-wider">
                        {prog.category}
                      </span>
                    </div>
                    <h2 className="font-syne text-lg md:text-xl font-bold text-white tracking-wide group-hover:text-[#43e8b0] transition-colors">
                      {prog.title}
                    </h2>
                    <p className="text-xs md:text-sm text-[#8ea3cb] line-clamp-1">
                      {prog.description}
                    </p>
                  </div>

                  <button className="rounded-full bg-[#1c263f] p-2 text-[#43e8b0] hover:bg-[#253254] transition-colors shrink-0">
                    {isExpanded ? (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-[#2a3652] bg-[#090c14]/50 p-5 space-y-6">
                    {/* Mode selector and Action area */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      {/* Condensed vs Original Code Toggle */}
                      <div className="flex items-center gap-2 rounded-lg bg-[#141b2f] p-1 border border-[#2a3652]">
                        <button
                          onClick={() => toggleCodeMode(prog.id)}
                          className={`rounded px-3 py-1 font-mono text-xs transition-all ${
                            mode === "condensed"
                              ? "bg-[#43e8b0] text-[#090c14] font-bold"
                              : "text-[#8ea3cb] hover:text-white"
                          }`}
                        >
                          Condensed Code ({prog.condensedCode.split("\n").length} lines)
                        </button>
                        <button
                          onClick={() => toggleCodeMode(prog.id)}
                          className={`rounded px-3 py-1 font-mono text-xs transition-all ${
                            mode === "original"
                              ? "bg-[#43e8b0] text-[#090c14] font-bold"
                              : "text-[#8ea3cb] hover:text-white"
                          }`}
                        >
                          Original ({prog.originalCode.split("\n").length} lines)
                        </button>
                      </div>

                      {/* Copy and line count actions */}
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#51638a]">
                          {lineCount} lines of C code
                        </span>
                        <button
                          onClick={() => copyToClipboard(codeToDisplay, prog.id)}
                          className="flex items-center gap-1.5 rounded-lg border border-[#2a3652] bg-[#141b2f] px-3 py-1.5 font-mono text-xs text-white hover:border-[#43e8b0]/50 hover:bg-[#1a233a] transition-all"
                        >
                          {copiedId === prog.id ? (
                            <>
                              <svg className="h-4 w-4 text-[#43e8b0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-[#43e8b0]">Copied!</span>
                            </>
                          ) : (
                            <>
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                              </svg>
                              <span>Copy Code</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Code block layout with fixed styling to prevent line collapsing */}
                    <div className="overflow-hidden rounded-xl border border-[#2a3652] bg-[#0c101c]">
                      <div className="flex items-center justify-between border-b border-[#2a3652] bg-[#141b2f] px-4 py-2 font-mono text-xs text-[#8ea3cb]">
                        <span>C Source Code ({mode})</span>
                        <span className="text-[10px] uppercase text-[#43e8b0]/70 font-semibold tracking-wider">
                          Ready for records
                        </span>
                      </div>
                      <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 md:text-sm text-[#d1e0ff] max-h-[500px] scrollbar-thin text-left">
                        <code className="block min-w-full">
                          {codeToDisplay.split("\n").map((line, idx) => (
                            <div key={idx} className="flex items-start">
                              <span className="w-8 shrink-0 text-right select-none text-[#334363] pr-3 border-r border-[#2a3652]/30 mr-3">
                                {idx + 1}
                              </span>
                              <span className="whitespace-pre">{line}</span>
                            </div>
                          ))}
                        </code>
                      </pre>
                    </div>

                    {/* Output Panel with terminal aesthetic */}
                    <div className="space-y-2 text-left">
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#8ea3cb]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z" />
                        </svg>
                        <span>Interactive Output Log</span>
                      </div>
                      <div className="rounded-xl border border-[#2a3652] bg-[#05070a] p-4 shadow-inner">
                        <pre className="overflow-x-auto font-mono text-xs md:text-sm text-[#7cf3c6] leading-relaxed scrollbar-thin text-left">
                          <code>{prog.output}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="rounded-2xl border border-dashed border-[#2a3652] bg-[#101523]/20 py-12 text-center">
            <svg className="mx-auto h-12 w-12 text-[#51638a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-4 font-mono text-sm text-[#8ea3cb]">No programs found matching the filter.</p>
          </div>
        )}
      </div>

      {/* Footer Info Box */}
      <div className="mt-12 rounded-2xl border border-[#2a3652] bg-gradient-to-br from-[#101523] to-[#0c1220] p-6 text-center">
        <h3 className="font-syne text-lg font-bold text-white mb-2">Record Writing Tip</h3>
        <p className="text-sm text-[#8ea3cb] max-w-xl mx-auto leading-relaxed">
          The condensed versions use <code className="bg-[#141b2f] text-[#43e8b0] px-1 py-0.5 rounded">typedef struct</code> names, inline loops, ternary checks, and merged scanf checks to cut code size in half while maintaining compilation validity in standard GCC compilers. Perfect for manual record books!
        </p>
      </div>
    </div>
  );
}
