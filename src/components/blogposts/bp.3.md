# Coding Interview University - Day 3 - Reviewing with a Udacity Prep Course cont.

#### September 21, 2020

## [Intro to Data Structures/Algorithms with Python Lesson 2: List-Based Collections Part 2 (Singly Linked List)] (https://www.udacity.com/course/data-structures-and-algorithms-in-python--ud513)

## I. Linked Lists

### Why use Linked Lists over Arrays?

- you need constant-time insertions/deletions from the list (such as in real-time computing where time predictability is absolutely critical)

- you don't know how many items will be in the list. With arrays, you may need to re-declare and copy memory if the array grows too big

- you don't need random access to any elements

- you want to be able to insert items in the middle of the list (such as a priority queue)

### Why use Arrays over Linked Lists?

- you need indexed/random access to elements

- you know the number of elements in the array ahead of time so that you can allocate the correct amount of memory for the array

- you need speed when iterating through all the elements in sequence. You can use pointer math on the array to access each element, whereas you need to lookup the node based on the pointer for each element in linked list, which may result in page faults which may result in performance hits.

- memory is a concern. Filled arrays take up less memory than linked lists. Each element in the array is just the data. Each linked list node requires the data as well as one (or more) pointers to the other elements in the linked list.

No built in data structure that resembles linked list - when we need it we can create it quite easily with from scratch, starting with a **class (object constructor)**.
Here is the code for an element which will be a **single unit in a singly linked list**:

```Python
class Element(object):
    def __init__(self, value):
        self.value = value
        self.next = next
```

\_\_ **init** ** is being used to initialize a new **Element** that is associated with a **value** (which can anything from a number, to a string, etc.) as well as a **pointer variable** that will let us know where the next element in the linked list should be. **self\_\_ is used to represent the instance of the class. With this keyword, you can access the attributes and methods of the class in python. It binds the attributes with the given arguments (e.g. we bind an instance of value (self.value) with the value argument passed in to initialize Element).

With the **Element class** set up - we can now create our **Linked List class**:

```Python
class LinkedList(object):
   def __init__ (self, head = None):
       self.head = head
```

The code written here is similar to what was written for the **Element class** - we're establishing that a Linked List is compromised of a **head** (the first element in the list). Creating a Linked List without a head will result in it defaulting to **None**.

We can then add a method to our Linked List to make it so we can **append items to the end of the Linked List**.

```Python
def append(self, new_element):
   current = self.head
   if self.head:
       while current.next:
           current = current.next:
       current.next = new_element
   else:
       self.head = new_element
```

Let's take this code line by line to understand it - we first initialize a variable, **current**, with the value of the head in the Linked List.
From there, we check if the Linked List already has a head, and if it does, to iterate and move through the **next reference** in every Element in the Linked List until we reach the end of the list.
This **while loop** will continue until there is no longer a **"next"** element (current.next) and the end of the list has been reached - at which point we assign **current.next** to the **new_element**!
If we DON'T have a head to begin with (e.g. None), we'll instead assign the new element as our head and nothing else.

## QUIZ - Linked Lists

```Python
# The LinkedList code from before is provided below.
# Add three functions to the LinkedList.
# "get_position" returns the element at a certain position.
# The "insert" function will add an element to a particular
# spot in the list.
# "delete" will delete the first element with that
# particular value.
# Then, use "Test Run" and "Submit" to run the test cases
# at the bottom.

# Element class is applied to our head node as well as any subsequent nodes
class Element (object):
    def __init__ (self, value):
        self.value = value
        self.next = None

class LinkedList(object):
    def __init__ (self, head=None):
        self.head = head
# append allows us to add a new element/node to the end of our Linked List
    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

        # Get an element from a particular position.
        # Assume the first position is "1".
        # Return "None" if position is not in the list.
    def get_position(self, position):
        current_position = 1
        current_node = self.head
        if position < 1:
            return None
        while current_node and current_position <= position:
            if current_position == position:
                return current_node
            current_node = current_node.next
            current_position += 1
        return None

        # Insert a new node at the given position.
        # Assume the first position is "1".
        # Inserting at position 3 means between
        # the 2nd and 3rd elements.
def insert(self, new_element, position):
    current_position = 1
    current_node = head
    if position > 1:
        while current_node and current_position < position
            if current_position == position - 1:
                new_element.next = current_node.next
                current_node.next = new_element
                break
            current_position += 1
            current_node = current_node.next
    elif position == 1:
        new_element.next = self.head
        self.head = new_element

#  Delete the first node with a given value.
    def delete(self, value):
        current_node = self.head
        if current_node == value:
            self.head == None
        if current_node != value and current_node:
            current_node = current_node.next
        else:
            current_node = None
```

## Breaking down the quiz

Here we have to add 3 additional methods to our Linked List:

- A **get_position** method that will allow us to return a node from our linked list based on the position we provide this method.
- An **insert** method that will allow us to add a new node at a given position (the head is position 1). If we are inserting at a position that is already occupied by a node, we will instead put the new node between this occupied node and the one before it.
- A **delete** method that will alow us to remove the first node we find in the Linked List that matches a given value.

## get_position()

In order to make this method function correctly, we are going to need to move through the Linked List node-by-node so that we know what node lies at the position we are given as input.

To that end, we will create a variable that tracks our position as we move through the list, **current_position**, and a variable that tracks what node we are currently at, **current_node**.

```Python
def get_position(self, position):
    current_position = 1 ## As stated in the instructions, the first position is "1"
    current_node = head ## The head is the first node in a Linked List
```

Since we return **"None"** in our method if the position is not in the list - we have to consider 2 different scenarios:

- The position is negative or zero, or < 1
- The position is greater than the length of the Linked List
  We can use a conditional statement to account for the first possibility now, we can worry about the other situation (greater than len() of Linked List) later as we move through the list.

```Python
def get_position(self, position):
    current_position = 1
    current_node = head
    if position < 1:
        return None

```

We can then use a **while loop** to start moving our current_position through the Linked List and checking it against our given position.
Our while loop is contingent upon a conditional that checks whether the current_node exists and if the current_position is less than or equal to the position we were given.
If the current_node does not exist (e.g. returns None) then the position given could be greater than the length of our Linked List.
If the current_position is less than the position given or equal to it, we know to continue our loop.

```Python
def get_position(self, position):
    current_position = 1
    current_node = head
    if position < 1:
        return None
    while current_node and current_position != position
        current_position += 1
        current_node = current_node.next
```

We can add another conditional to our while loop to break the loop when our current_position has reached the position given to us and return the node. We'll insert this statement just before the current_position and current_node move futher along in the Linked List.

```Python
def get_position(self, position):
    current_position = 1
    current_node = self.head
    if position < 1:
        return None
    while current_node and current_position <= position:
        if current_position == position:
            return current_node
        current_positon += 1
        current_node = current_node.next
```

Finally, we need to return something for this method if the position we are given ends up being greater than the length of our Linked List (e.g. the position isn't in the list at all).

```Python
def get_position(self, position):
    current_position = 1
    current_node = self.head
    if position < 1:
        return None
    while current_node and current_position <= position:
        if current_position == position:
            return current_node
        current_position += 1
        current_node = current_node.next
    return None
```

## insert()

In order to make this method work correctly, we need to add functionality that will allow us to add a node between the given position, and the position prior to it as per the instructions (Inserting at position 3 means betwewen the 2nd and 3rd elements).

Something we need to consider is what position we are inserting at - specifically, whether we are inserting at the head or not.

Inserting at the head means inserting at a position of 1, and the newly inserted node will take the spot as the new head of the Linked List. Let's add a conditional statement in our method that will account for this:

```Python
def insert(self, new_element, position):
    current_position = 1
    current_node = self.head
    if position > 1:
        return
    elif position == 1:
        new_element.next = self.head
        self.head = new_element

```

If the position we are inserting at is greater than 1, we will use a method similar to before, in that we will move through the Linked List until we land at the position we will actually be inserting at.

This time however, since we are inserting the new_element **between** the given position and the position before it, we can set the while loop to continue while current_position is less than the given position.

We add a conditional statement that checks when the current_position is equal to the given position - 1, since that means both our current_position + current_node will be pointing at the **"starting position/node"** of our insertion.
We can consider the given position the **"ending position/node"** of our insertion.
And the place we want to insert our new_element is **between these two**!
So you assign the **next** variable on our new_element to point to the ending node (which is technically the next node on our current_node), and you re-assign the **next** variable of our starting node to point at our new_element.

```Python
def insert(self, new_element, position):
    current_position = 1
    current_node = head
    if position > 1:
        while current_node and current_position < position
            if current_position == position - 1:
                new_element.next = current_node.next
                current_node.next = new_element
                break
            current_position += 1
            current_node = current_node.next
    elif position == 1:
        new_element.next = self.head
        self.head = new_element
```

## delete()

With our delete method, we don't need to worry about position as with all the other methods seen so far.
Instead, as per the instructions, we just need to delete the very first node we find with the value given as we move through the Linked List.
So let's do that!
We want to first account for the situation in which our head is equal to the given value.
Assuming the head isn't equal to the value we want to delete, we write another conditional in which we check if the current_node isn't equal to the value and the current_node exists (e.g. we haven't reached the end of the Linekd List). If these are true, we can move on to the next node.
We write one final else statement for the condition in which our **current_node DOES finally equal the given value**.

```Python
def delete(self, value):
    current_node = self.head
    if current_node == value:
        current_node.next = self.head
        current_node = None
    elif current_node != value and current_node:
        current_node = current_node.next
    else:
        current_node = None
```
