# Coding Interview University - Day 1 - Reviewing with a Udacity Prep Course

#### August 24, 2020

The difference between **developer** and **engineer** isn't just the title - an **engineer** has the **computer science knowledge** necessary to look at the bigger picture. Although my original plan was to find a job at a smaller-sized comapny, my future plans include one day stepping up to the big leagues in places like SF and Seattle. To even dream of one day getting there, I'm gonna have to spend countless hours practicing whiteboard problems and re-learning algorithms.

For a bit of background on me, I have just recently finished **[Lambda School's Fullstack Web Development bootcamp](https://lambdaschool.com/) **. I highly recommend it to anyone who is thinking of making a career change, but might not be able to afford a traditional bootcamp. If you have any questions about it feel free to reach out to me!

But while Lambda School included Computer Science and Algorithms as part of the curriculum, part of me walked away feeling like there wasn't nearly enough depth in those lessons to make me interview ready. The best way to put it is that Lambda School serves as an "introduction" to some big concepts - both in web development and computer science - but it's up to you to get the reps in.

So, to get the reps, I'm going to document my time spent preparing for the Computer Science portion of interviews using **[Coding Interview University] (https://github.com/jwasham/coding-interview-university)**. It's a free resource on Github created by a self-taught developer who now works at Amazon. Long story short, it's basically a list of topics you should know to prep for an interview, how to prep for an interview, and also includes a bunch of resources centered around interview prep/CS. Without further ado, let's dive in!

## [Intro to Data Structures/Algorithms with Python Lesson 1: Efficiency] (https://www.udacity.com/course/data-structures-and-algorithms-in-python--ud513)

This will serve as a quick review for using python to build data structures and algorithms, and right off the bat we are given a simple practice problem to review some syntax and basic concepts of Python:
### Practice Problem
```Python
You can use this class to represent how classy someone
or something is.
"Classy" is interchangable with "fancy".
If you add fancy-looking items, you will increase
your "classiness".
Create a function in "Classy" that takes a string as
input and adds it to the "items" list.
Another method should calculate the "classiness"
value based on the items.
The following items have classiness points associated
with them:
"tophat" = 2
"bowtie" = 4
"monocle" = 5
Everything else has 0 points.
Use the test cases below to guide you!

class Classy(object):
    def __init__(self):
        self.items = []

# Test cases
me = Classy()

# Should be 0
print me.getClassiness()

me.addItem("tophat")
# Should be 2
print me.getClassiness()

me.addItem("bowtie")
me.addItem("jacket")
me.addItem("monocle")
# Should be 11
print me.getClassiness()

me.addItem("bowtie")
# Should be 15
print me.getClassiness()
```
Here we are asked to create 2 methods in our class (named Classy). One method will append our list items and add it to the end, so simple enough. The other method will be used to iterate over items to keep track of a "classiness" variable, with different items recording a different "classiness" score, before ultimately returning the classiness value.

### Solution
```
class Classy(object):
    def __init__(self):
        self.items = []
    def addItem(self, str):
        self.items.append(str)
    def getClassiness(self):
        classiness = 0
        if len(self.items) > 0:
            for x in self.items:
                if x == 'tophat':
                    classiness += 2
                elif x == 'bowtie':
                    classiness += 4
                elif x == 'monocle':
                    classiness += 5
                else:
                    classiness += 0
        return classiness
```

### I. Efficiency
When we think of **efficiency** in terms of our code, we are concerned with 2 things primarily:

1.  Time Efficiency: How fast does it run? 
2.  Space Efficiency: How much space/memory does our code use?

### II. Big O Notation -  O(n)

Big O Notation is used to describe the runtime complexity of code - with n reppresenting the length of an input to our functions.
To get a better idea of how to calculate and understand Big O Notation, we'll look at some pseudo-code for a function that decodes a cipher:
```Python
function decode(input):
    create output string
    for each letter in input
        get new_letter from letter's location in cypher
        add new_letter to output
    return output
```
We begin with **O()**
To get a sense of the time efficiency, we start by counting the # of lines - 2.
1 for **creating an output string** and another for **returning an output string**, as both only need to happen one time every instance of the function being used.
To represent this, we add 2 to our efficiency and now have **O(   2)**.

Now we take a look at the **lines inside the for loop - each line (of which there are 2) is run for every letter in your input string**. That means our big O shoud be **O(2n + 2)**.
So if we were to use an input string of 10 characters, **n is 10** and our calculation would look like this:
```
2 * 10 + 2 = 22
```
**Multiply that number by the amount of time it takes to run your code and you have an estimate of your efficiency!**

### IIa. Big O continued
The previous example was a basic explanation of how Big O can be calculated, when it really takes into account much more than what was previously discussed.

We need to take the for loop into account for example, with the **loop having to run 1 time for every input in a string**. This changes our calculation thus far to **O(3n + 2)**

What complicates this even further is the language we choose to use to evaluate the string. If we used a **low-level language** like **C** would break the process down a lot more and as a result write more lines of code, but would have less background processes. Using **Python** to evaluate this would use about the number of lines of code, but because it is a **higher-level language**, more background processes would be occurring.

To show what that means - we will take a look at this line from the pseudo-code:

```
get new_letter from letter's location in cypher
```
Depending on the data structure we choose to use, the complexity of this could increase significantly.  For example, if we were to store our data in a list, we'd have to check each letter against our current letter increasing the number of lines being run per input in a string by up to 26 in the *worst case* - changing our efficiency calculation to **O(29n + 2)**.

### III. Worst Case + Approxiamtion
Because the actual efficiency can vary so wildly in our calculations (as shown in the previous example), we often just use an approximation to represent the efficiency.
Approximating the previous example (which could've been **O(3n + 2)** or **O(29n + 2)**) to just **O(n)** would be considered valid.

This works when thinking in terms of how 
*"some number of computations must be performed for EACH letter in the input"*.

We focus on the previously mentioned **Worst Case** because it gives us an upper-bound to the number of computations. We could have a maximum of up to 26 checks or end up with less, but 26 represents the worst case.

Other cases to consider are the **Best Case** - which in this situation would be 1 check so **O(3n + 2)** and **Average Case** - which would be 13 checks so **O(16n + 2)**. Always specify each case in an interview if it comes up!

### IV. Space Efficiency
Space Efficiency comes up much less in interviews, but is still a topic to know. If for some reason in your code, the input were to be copied 3 times, your space efficiency would look like this:
**O(3n)**

### Practice Problem
Below are some examples of functions in Python. Look at each and take note of the time efficiency.  Use approximations whenever possible.
```Python
Input manatees: a list of "manatees", where one manatee is represented by a dictionary
a single manatee has properties like "name", "age", et cetera
n = the number of elements in "manatees"
m = the number of properties per "manatee" (i.e. the number of keys in a manatee dictionary)

def example1(manatees):
    for manatee in manatees:
        print manatee['name']

def example2(manatees):
    print manatees[0]['name']
    print manatees[0]['age']

def example3(manatees):
    for manatee in manatees:
        for manatee_property in manatee:
            print manatee_property, ": ", manatee[manatee_property]

def example4(manatees):
    oldest_manatee = "No manatees here!"
    for manatee1 in manatees:
        for manatee2 in manatees:
            if manatee1['age'] < manatee2['age']:
                oldest_manatee = manatee2['name']
            else:
                oldest_manatee = manatee1['name']
    print oldest_manatee

1.  The efficiency should be O(n) - as the list of manatees grow the number of times thje loop must run increases linearly.
2.  The efficiency should be O(1) - looking up the first index's name and age should be a constant time operation.
3.  Since we are printing the properties of each manatee in the entire list of manatees, the efficiency should be O(n * m) where n is the number of manatees and m is the number of properties.
4.  This is a nested for loop that is iterating over every manatee, and then comparing it in another loop to every other manatee, making the efficiency O(n^2).
```
### Solution
Example 1
We iterate over every manatee in the manatees list with the for loop. Since we're given that manatees has n elements, our code will take approximately O(n) time to run.

Example 2
We look at two specific properties of a specific manatee. We aren't iterating over anything - just doing constant-time lookups on lists and dictionaries. Thus the code will complete in constant, or O(1), time.

Example 3
There are two for loops, and nested for loops are a good sign that you need to multiply two runtimes. Here, for every manatee, we check every property. If we had 4 manatees, each with 5 properties, then we would need 5+5+5+5 steps. This logic simplifies to the number of manatees times the number of properties, or O(nm).

Example 4
Again we have nested for loops. This time we're iterating over the manatees list twice - every time we see a manatee, we compare it to every other manatee's age. We end up with O(nn), or O(n^2) (which is read as "n squared").

Throughout the course, you can reference the Big-O Cheat Sheet to keep track of time complexities for many of the algorithms and data structures we study.