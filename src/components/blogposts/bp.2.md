# Coding Interview University - Day 2 - Reviewing with a Udacity Prep Course cont.

#### September 14, 2020


## [Intro to Data Structures/Algorithms with Python Lesson 2: List-Based Collections Part 1 (Lists, List Methods, Arrays, Tuples, and List Comprehensions )] (https://www.udacity.com/course/data-structures-and-algorithms-in-python--ud513)


## I. Lists
### Ia. Python Lists
A list has all the properties of a collection, while maintaining order.
Python has a great built-in list type named "list". List literals are written within square brackets [ ]. Lists work similarly to strings -- use the 
**len()** function and square brackets [ ] to access data, with the first element at index 0.

```Python
  colors = ['red', 'blue', 'green']
  print colors[0]    ## red
  print colors[2]    ## green
  print len(colors)  ## 3
```

**The time complexity of len() is O(1).**

To understand this, we have to understand the internal working of len() function. We can call len() function on any object which has defined magic method__len__(). To understand what I meant, go through the example below.
```Python
# Make a simple method with __len__ defined
class CustomContainer():
    
    # Constructor, set size of variable size to 10
    def __init__(self):  
        self.size = 10
    
    # __len__ method    
    def __len__():
        return self.size

# Initialize the object    
obj = CustomContainer()

# len() will internally call __len__() if it is defined in the blueprint of the object on which it is called.

print(len(obj)) #Output - 10

# In the above example of a container-like object that we declare as a class - CustomContainer has a __len__ method defined in it. 
# The __len__ method returns self.size, which is a variable defined when  CustomContainer is first initialized.
# So when len() is called on that container, it internally is calling ___len___() and that returns the variable size.
```

**That’s why len() is O(1), simply returning a variable value is a constant time operation.**


Assignment with an = on lists does not make a copy. Instead, assignment makes the two variables point to the one list in memory.

```Python
  b = colors   ## Does not copy the list
```
The "empty list" is just an empty pair of brackets [ ]. The '+' works to append two lists, so [1, 2] + [3, 4] yields [1, 2, 3, 4] (this is just like + with strings).

### Ib. Iterating over a list with for/in
Python's *for* and *in* constructs are extremely useful, and the first use of them we'll see is with lists. The *for* construct -- for var in list -- is an easy way to look at each element in a list (or other collection). Do not add or remove from the list during iteration.

```Python
  squares = [1, 4, 9, 16]
  sum = 0
  for num in squares:
    sum += num
  print sum  ## 30
```
If you know what sort of thing is in the list, use a variable name in the loop that captures that information such as "num", or "name", or "url". Since Python code does not have other syntax to remind you of types, your variable names are a key way for you to keep straight what is going on.

The *in* construct on its own is an easy way to test if an element appears in a list (or other collection) -- value in collection -- tests if the value is in the collection, returning True/False.

```Python
 list = ['larry', 'curly', 'moe']
  if 'curly' in list:
    print 'yay'
```
You can also use for/in to work on a string. The string acts like a list of its chars, so for ch in s: print ch prints all the chars in a string.

```Python
string = 'string'
for char in string:
    print(char) # 's', 't', 'r', 'i', 'n', 'g'
```
### Ic. Range
The **range(n)** function yields the numbers 0, 1, ... n-1, and range(a, b) returns a, a+1, ... b-1 -- up to but not including the last number. The combination of the for-loop and the range() function allow you to build a traditional numeric for loop:
```Python
  ## print the numbers from 0 through 99
  for i in range(100):
    print i
```
There is a variant **xrange()** which avoids the cost of building the whole list for performance sensitive cases (in Python 3000, range() will have the good performance behavior and you can forget about xrange()).

### Id.While Loops
Python also has the standard while-loop, and the **break** and **continue** statements work as in **C++** and **Java**, altering the course of the innermost loop. The above for/in loops solves the common case of iterating over every element in a list, but the while loop gives you total control over the index numbers. Here's a while loop which accesses every 3rd element in a list:
```Python
  ## Access every 3rd element in a list
  i = 0
  while i < len(a):
    print a[i]
    i = i + 3
```

## II. List Methods
Common list methods:

**list.append(elem)** -- adds a single element to the end of the list. Common error: does not return a new list, just modifies the original.

**list.insert(index, elem)** -- inserts the element at the given index, shifting elements to the right.

**list.extend(list2)** adds the elements in list2 to the end of the list. Using **+** or **+=** on a list is similar to using **extend()**.

**list.index(elem)** -- searches for the given element from the start of the list and returns its index. Throws a **ValueError** if the element does not appear (use "in" to check without a ValueError).

**list.remove(elem)** -- searches for the first instance of the given element and removes it (throws ValueError if not present)

**list.sort()** -- sorts the list in place (**does not return it**). (The sorted() function shown later is preferred.)

**list.reverse()** -- reverses the list in place (**does not return it**)

**list.pop(index)** -- removes and returns the element at the given index. Returns the rightmost element if index is omitted (roughly the opposite of append()).

Note that these are **methods** on a list object, while len() is a function that takes the list (or string or whatever) as an argument.

**[You can find the time compelxity of list methods here] (https://wiki.python.org/moin/TimeComplexity)**


```Python
  list = ['larry', 'curly', 'moe']
  list.append('shemp')         ## append elem at end
  list.insert(0, 'xxx')        ## insert elem at index 0
  list.extend(['yyy', 'zzz'])  ## add list of elems at end
  print list  ## ['xxx', 'larry', 'curly', 'moe', 'shemp', 'yyy', 'zzz']
  print list.index('curly')    ## 2

  list.remove('curly')         ## search and remove that element
  list.pop(1)                  ## removes and returns 'larry'
  print list  ## ['xxx', 'moe', 'shemp', 'yyy', 'zzz']
```
Common error: note that the above methods do not *return* the modified list, they just modify the original list.
```Python
  list = [1, 2, 3]
  print list.append(4)   ## NO, does not work, append() returns None
  ## Correct pattern:
  list.append(4)
  print list  ## [1, 2, 3, 4]
```

## IIa. List Build Up
One common pattern is to start a list a the empty list [], then use append() or extend() to add elements to it:
```Python
  list = []          ## Start as the empty list
  list.append('a')   ## Use append() to add elements
  list.append('b')
```
## IIb. List Slices
Slices work on lists just as with strings, and can also be used to change sub-parts of the list.
```Python
  list = ['a', 'b', 'c', 'd']
  print list[1:-1]   ## ['b', 'c']
  list[0:2] = 'z'    ## replace ['a', 'b'] with ['z']
  print list         ## ['z', 'c', 'd']
```

## IIc. List Sorting
The easiest way to sort is with the __sorted(list)__ function, which takes a list and __returns a new list with those elements in sorted order__. The original list is not changed.
```Python
  a = [5, 1, 4, 3]
  print sorted(a)  ## [1, 3, 4, 5]
  print a  ## [5, 1, 4, 3]
```
It's most common to pass a list into the sorted() function, but in fact __it can take as input any sort of iterable collection__. The older list.sort() method is an alternative detailed below.
The sorted() function can be customized through *optional* arguments. The sorted() optional argument __reverse=True__, e.g. sorted(list, reverse=True), makes it sort backwards.
```Python
  strs = ['aa', 'BB', 'zz', 'CC']
  print sorted(strs)  ## ['BB', 'CC', 'aa', 'zz'] (case sensitive)
  print sorted(strs, reverse=True)   ## ['zz', 'aa', 'CC', 'BB']
```
## IId. List Sorting - Custom Sorting with key=
For more complex custom sorting, sorted() takes an optional __"key="__ specifying a _"key" function that transforms each element before comparison_. The key function __takes in 1 value__ and __returns 1 value__, and the returned "proxy" value is used for the comparisons within the sort.
```Python
  strs = ['ccc', 'aaaa', 'd', 'bb']
  print sorted(strs, key=len)  ## ['d', 'bb', 'ccc', 'aaaa']
```
You can also pass in your own function as the key function, like this:

```Python
  ## Say we have a list of strings we want to sort by the last letter of the string.
  strs = ['xc', 'zb', 'yd' ,'wa']

  ## Write a little function that takes a string, and returns its last letter.
  ## This will be the key function (takes in 1 value, returns 1 value).
  def MyFn(s):
    return s[-1]

  ## Now pass key=MyFn to sorted() to sort by the last letter:
  print sorted(strs, key=MyFn)  ## ['wa', 'zb', 'xc', 'yd']
```
To use __key= custom sorting__, remember that you _provide a function that takes one value and returns the proxy value to guide the sorting_. 
There is also an __optional argument "cmp=cmpFn" to sorted()__ _that specifies a _traditional two-argument comparison function that takes two values from the list and returns negative/0/positive to indicate their ordering_. 
The built in comparison function for strings, ints, ... is cmp(a, b), so often you want to call cmp() in your custom comparator. 
The newer one argument key= sorting is generally preferable.

## IId. sort() method - an alternative to sorted()
As an alternative to sorted(), the sort() method on a list sorts that list into ascending order, e.g. list.sort(). The sort() method changes the underlying list and returns None, so use it like this:
```Python
  alist.sort()            ## correct
  alist = blist.sort()    ## NO incorrect, sort() returns None
```
- sort() __does not return a sorted list back to you__. 
- sort() _MUST be called on a list_; and __it won't work on any other enumerable collection__.
- sort() method does not need to create a new list, so it __can be a little faster in the case that the elements to sort are already in a list__.

### III. Arrays
An Array is a list with a few added rules:
1. Items in an array are ordered in some way
2. In some languages you can only have items with the same **type** while others don't have this rule
3. Arrays are 0-index based, with the first item having an index number of 0 and so on.

### IV. Tuples
A __tuple__ is a _fixed size grouping of elements_, such as an (x, y) co-ordinate.
Tuples are like lists, except they are:
- __immutable__
- __do not change size (tuples are not strictly immutable since one of the contained elements could be mutable).

Tuples play a sort of "struct" role in Python -- a convenient way to pass around a little logical, fixed size bundle of values. A function that needs to return multiple values can just return a tuple of the values. 
For example, if I wanted to have a list of 3-d coordinates, the natural python representation would be a list of tuples, where each tuple is size 3 holding one (x, y, z) group.

To create a tuple, just list the values within parenthesis separated by commas. The "empty" tuple is just an empty pair of parenthesis. 
Accessing the elements in a tuple is just like a list -- len(), [ ], for, in, etc. all work the same.

```Python
tuple = (1, 2, 'hi')

print len(tuple) ## 3

print tuple[2] = ## hi

tuple[2] = 'bye' ## ERROR - tuples are IMMUTABLE so will not work

tuple = (1, 2, 'bye') ## this will work
```

Creating a tuple of size - 1 requires the lone element in the tuple be followed by a __comma__:

```Python
tuple = ('hi',) ## size - 1 tuple syntax
```

The comma is __necessary to distinguish between a tuple or an expression enclosed in parantheses__.
You can omit the parantheses and Python will recognize from the commas that you want to create a tuple.

Assigning a tuple filled with variables to an equally-sized tuple with corresponding values will work to assign variable values (a trick that also works for lists):

```Python
(x, y, z) = (42, 13, 'hike')
print z ## hike

(err_string, err_code) = Foo() ## Invoking Foo() will return a tuple of length 2
```
### V. List Comprehensions
 A __list comprehension__ is a _compact way to write an expression that expands to a whole list_. 
 Suppose we have a list nums [1, 2, 3, 4], here is the list comprehension to compute a list of their squares [1, 4, 9, 16]:
 ```Python
nums = [1, 2, 3, 4]
squares = [ n * n for n in nums] ## [1, 4, 9, 16]
 ```

 The syntax is __[ expr for var in list ]__ -- the for var in list looks like a regular for-loop, but without the colon (:)

```Python
strs = ['hello', 'and', 'goodbye']

exclaim = [string.upper() + '!!!' for string in strs] ### ['HELLO!!!', 'AND!!!', 'GOODBYE!!!']
```

You can also add an __if statement__ to the right of the for loop if you'd like to filter the results further:
The if test is evaluated for each element in the for loop - and will then go on to only include elements where the test is true.

```Python
strs = ['hello', 'and', 'goodbye']

exclaim = [string.upper() + '!!!' for string in strs if 'a' in string] ### [ 'AND!!!']
```

