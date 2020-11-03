# Coding Interview University - Day 4 - Reviewing with a Udacity Prep Course cont.

#### September 28, 2020

## [Intro to Data Structures/Algorithms with Python Lesson 2: List-Based Collections Part 3 (Stacks + Queues)] (https://www.udacity.com/course/data-structures-and-algorithms-in-python--ud513)

## I. Stacks

- The first thing to note about **Stack** is that they, like other abstract data structures, are a collection of objects.
- Unlike lists or arrays, random access to objects inside of a **Stack** is not supported.
- This data structure supports a specific principle in how items are added and removed from it - **Last In, First Out (LIFO)**.
- The best way to understand what a **Stack** is to draw an analogy to something you see in the real world - a stack of plates:
- New plates are added to the top of the stack. And because the plates are fragile and heavy, only the topmost plate can be moved (**last-in, first-out**). To reach the plates lower down in the stack the topmost plates must be removed one by one.
- Performance-wise, a proper stack implementation is expected to take **O(1) time for insert and delete operations**.

While stack functionality is already built in to Python - (via **pop()** and **append()**) we'll make our own `Stack` class to understand whats going on under the hood.

## Quiz

Add a couple methods to our LinkedList class, and use that to implement a Stack.
You have 4 functions below to fill in:
**insert_first, delete_first, push, and pop**.
Think about this while you're implementing:
why is it easier to add an "insert_first" function than just use "append"?"

```Python
class Element(object):
    def __init__(self, value):
        self.value = value
        self.next = None
class LinkedList(object):
    def __init__(self, head=None):
        self.head = head

    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element
    def insert_first(self, new_element):
        # "Insert new element as the head of the LinkedList"
        new_element.next = self.head
        self.head = new_element

    def delete_first(self):
        # "Delete the first (head) element in the LinkedList and return it"
        if self.head:
            delete = self.head
            self.head = self.head.next
            return delete
        else:
            return None
class Stack(object):
    def __init__(self,top=None):
        self.ll = LinkedList(top)

    def push(self, new_element):
        # "Push (add) a new element onto the top of the stack"
        self.ll.insert_first(new_element)


    def pop(self):
        # "Pop (remove) the first element off the top of the stack and return it"
        return self.ll.delete_first()


```
## insert_first
The first step in implementing our Stack constructor is to finish building out the rest of our Linked List.
To that end, we need to create a method that will insert a new_element in the head of a Linked List.
The first step is setting the __next__ property on our __new_element__ to the __current head__ of our Linked List - since the new element will be before this.
The final step is setting the __head__ of our Linked List to the __new_element__
```Python
def insert_first(self, new_element):
    new_element.next = self.head
    self.head = new_element
```
## delete_first
To implement our delete_first method, which aims to remove the head element of a Linked List, we first add a conditional statement that checks whether a head node exists.
If it doesn't, we will __return None__.
It it does, we will then assign a variable, __delete__, to the value of __self.head__.
From there, we assign the __new head__ to the next value of the head we are trying to delete.
We return the deleted value as per the instructions.
```Python
def delete_first(self):
    if self.head:
        delete = self.head
        self.head = delete.next
        return delete
    else:
        return None
```