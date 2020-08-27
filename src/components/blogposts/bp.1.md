# Coding Interview University - Day 1 - Reviewing with a Udacity Prep Course

#### August 24, 2020

The difference between **developer** and **engineer** isn't just the title - an **engineer** has the **computer science knowledge** necessary to look at the bigger picture. Although my original plan was to find a job at a smaller-sized comapny, my future plans include one day stepping up to the big leagues in places like SF and Seattle. To even dream of one day getting there, I'm gonna have to spend countless hours practicing whiteboard problems and re-learning algorithms.

For a bit of background on me, I have just recently finished **[Lambda School's Fullstack Web Development bootcamp](https://lambdaschool.com/) **. I highly recommend it to anyone who is thinking of making a career change, but might not be able to afford a traditional bootcamp. If you have any questions about it feel free to reach out to me!

But while Lambda School included Computer Science and Algorithms as part of the curriculum, part of me walked away feeling like there wasn't nearly enough depth in those lessons to make me interview ready. The best way to put it is that Lambda School serves as an "introduction" to some big concepts - both in web development and computer science - but it's up to you to get the reps in.

So, to get the reps, I'm going to document my time spent preparing for the Computer Science portion of interviews using **[Coding Interview University] (https://github.com/jwasham/coding-interview-university)**. It's a free resource on Github created by a self-taught developer who now works at Amazon. Long story short, it's basically a list of topics you should know to prep for an interview, how to prep for an interview, and also includes a bunch of resources centered around interview prep/CS. Without further ado, let's dive in!

## [Intro to Data Structures/Algorithms with Python] (https://www.udacity.com/course/data-structures-and-algorithms-in-python--ud513)

This will serve as a quick review for using python to build data structures and algorithms, and right off the bat we are given a simple practice problem to review some syntax and basic concepts of Python:

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
Here we are asked to create 2 methods in our class (named Classy). One method will append our list items and add it to the end, so simple enough. The other method will be used to iterate over items to keep track of a "classiness" variable, with different items recording a different "classiness" score, before ultimately returning the classiness value.
### I. Efficiency
When we think of **efficiency** in terms of our code, we are concerned with 2 things primarily:

1.  Time Efficiency: How fast does it run? 
2.  Space Efficiency: How much space/memory does our code use?

### II. Big O Notation -  O(n)

Big O Notation is used to describe the runtime complexity of code - with n reppresenting the length of an input to our functions.
To get a better idea of how to calculate and understand Big O Notation, we'll look at some pseudo-code for a function that decodes a cipher:
```python
function decode(input):
    create output string
    for each letter in put
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
