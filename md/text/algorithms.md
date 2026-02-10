---
title: Algorithms
...

An <dfn>algorithm</dfn> is a sequence of unambiguously-defined steps to accomplish some task.
The word comes from a transliteration of al-Khwarizmi (الخوارزميّ‎),
part of Muhammad ibn Musa al-Khwarizmi's name.
His 9th-century books on arithmetic and algebra brought these ideas from the Indian subcontinent to Europe.

A key part of al-Khwarizmi's books success in Europe
is the fact that algorithms for the same task
may be significantly more or less feasible depending on how the data used in the task is represented.

:::example
Using Roman numerals, to compute LXXVIII + LIX we

- Break each number into groups based on the largest-value symbol to each symbol's right:\
  L XX V III + L IX

- Combine both groups in descending cluster order, with subtraction groups before addition groups:\
  LLIXXXVIII

- If a subtraction symbol later appears as an addition structure, cancel them both out:\
  LLXXXVII

- Check for a variety of shorter forms: two V → X, four I → IV, and so on:\
  CXXXVII

To use Indian numerals, to compute 78 + 59

- Add each pair of digits, starting at the right; keep the 1's place and stave the 10's place for the next digit:\
  8+9 = 17 keep 7\
  1+7+5 = 13 keep 3\
  1 = 1 keep 1\
  total: 137

Both take roughly the same amount of work,
but the latter algorithm is much simpler because it uses repetition instead of many distinct steps.
:::

# Parts of algorithms

An algorithm includes unambiguously defined
structure of data,
input and output,
and operations to complete the task.

## Structure of data

<dfn>Data</dfn> is information represented in some well-defined way.
The way that data is organized to represent that information is a key part of how algorithms are defined.

The structure of data is important enough that computer science explores it in many different ways,
for example by distinguishing between primitive and composite data,
between data structures and abstract data types,
between file formats and in-memory formats and wire formats,
and so on.

:::example
Consider a map-based navigation algorithm.
How should it store the map?
Among many other options, it could be

- A grid with with 5×5 meter cells, each cell being marked either "road" or "not road."

- A list of road segments, each storing a starting and ending latitude and longitude, a speed limit, and whether it is one way, the other way, or two-way.

- A structure for each entire road, each storing the shape of the road and a list of all the other roads it intersects and the distance along the road of each such intersection.

- A list of intersections, each with a latitude and longitude and a list of adjacent intersections it has roads to reach.

... and so on for many other options.

We would expect that algorithms that assume we have a grid
will not work (without modification) if we give them a list of intersections instead.
:::

Some algorithms can be adapted to several different data structures
by using [abstraction](abstraction.html) (a type of abstraction called an "abstract data type")
to hide the data structure details.

:::example
We might abstract away the details of the map structure
by defining a set of generic operations on maps;
for example, we could define an operation
called "one step neighbor of"
which, given a location on the map,
gives back all the other locations that can be reached in one step.

On a grid, a location might be a grid cell and a step might be moving to an adjacent cell.
On a list of roads, a location might be a road and a distance along it
and a step might be driving to any other road that intersects with it.
The "one step neighbor of" algorithms for those two will differ,
but we could then define an algorithm that uses that
as an abstraction to work with both types of maps.
:::

## Input and output

Each algorithms can solve an entire family of computations,
depending on the input it is given.

Algorithms often compute some values we don't care about (like the set of carry digits in addition)
as well as some we do (like the sum in addition).
The values we do care about are called the algorithm's output.
If two different algorithms give the same output as one another for any given input,
we say they are algorithms that solve the same problem
even if they compute different non-output values along the way.

It is common to distinguish between two types of input data.
Some data, often called a <dfn>resource</dfn>, database, backing data, or asset,
is large, durable, and rarely updated,
such as the street map used by a navigation system.
Other data, often called <dfn>user input</dfn>,
is smaller, transient, and changes each time the algorithm is used,
such as the starting location and destination used by a navigation system.

:::example
A navigation algorithm likely includes as inputs:

- User input: current location, destination
- Data resource: map

It might also include other inputs like

- Current traffic
- User preferences
- Driving history
- Other user's locations, speeds, and destinations
- ...
:::

## Defined operations

The core part of an algorithm
is the defined sequence of steps it takes to compute a result.

In the simplest case, these operations are a fixed set of steps.
But most interesting algorithms use repetition and functions to repeat some steps,
often repeating them different number of times for different inputs.

There are often multiple algorithms available
for solving the same problem.
Often, we pick which one we want
based on which problems they are fastest on.

:::example
There are *many* algorithms for finding a path through a map,
so many that [Wikipedia breaks them into multiple lists and tables](https://en.wikipedia.org/wiki/Shortest_path_problem).

One example is the A* algorithm (pronounced "A star")
which works as follows:

- Keep a collection of travel paths that start at the current location
- Initially, put just a trivial travel path in the collection which starts and stops at the current location
- Repeat until a path reaches the destination:
    - Remove from the the collection the path that minimizes $(\text{length of path}) + (\text{distance from end of path to destination})$
    - Find all navigation steps you could take from the end of that path; for each one
        - Make a new path that adds that step to the end of the path and add it to the collection
:::

# Algorithms in your life

## Web Search

Google became the major company it is because it implemented a new web search algorithm.

The web search task is:

> User input
> :   What you type
> 
> Resource data
> :   All content of all web pages the search company has access to
> 
> Output
> :   Top ten most likely web pages you could want

The hardest part of this is picking which of the millions of pages that have words like those you typed
to put in those top ten, first page of results.

Previous search engines depended on some kind of relevance score (how often do those words appear on the page),
possibly augmented by some kind of reputability score, where their employees decided that encarta.msn.com was more reputable than myspace.com of the like.

Google implemented an algorithm called PageRank to replace reputability.
It uses some clever math to implement the following idea:

- Your page is more important if more other pages link to it.
- A link from an important page gives more importance that a link from an unimportant page.

Google combined this algorithm
with the same kinds of relevance used in previous search engines
to create a search engine that was able to expand far beyond the scope of previous search engines
while still having the most important results first;
coupled with clever marketing and ad sales,
this helped them become the massive company they are today.

## Recommender systems

Recommender systems, also called recommendation systems,
try to guess which which things you're most likely to watch/read/listen to next.

The recommendation task is:

> User input
> :   Your watch history
>
> Resource data
> :   Everyone else's watch history
>
> Output
> :   A few recommended things to watch

Recommender systems have many variations in their algorithms.
They generally include in their process trying to estimate which recommendations you'll accept,
but they also often prioritize things that bring them ad revenue
and things that people immediately follow with accepting another recommendation.


# Picking algorithms

Algorithms differ in many ways,
and there is no single set of criterion for picking one.
Several of common considerations are given here:

Simplicity
:   Simpler algorithms are cheaper to implement,
    easier to adjust or replace later,
    and are often more reliable and harder to break
    than more complicated algorithms.

Fast
:   Faster algorithms create less delay for users
    and can be run more often on a given piece of hardware.

Energy efficient
:   Energy efficient algorithms use less battery life
    and reduce energy usage.
    
    Often, faster algorithms are also more energy efficient
    because the longer a computer has to work on something
    the more energy it using doing it.
    But some operations and hardware components use more energy per second than others,
    so algorithms that avoid those operations can be more energy efficient than their speed suggests.

Small
:   Some algorithms use a lot of memory,
    enough that running several such algorithms at the same time
    or running them on small embedded devices is challenging.
    Algorithms that use less space are valuable in these contexts.
    
    There is also a complicated relationship between space used and time used,
    where reducing space can sometimes increase time and other times reduce time.

Accuracy
:   Some algorithms are precise: they find *the* right answer.
    
    Many algorithms are imprecise, for one of two reasons.
    Some problems don't have a well-defined right answer (for example, recommender systems).
    Other problems do have a right answer, but it is hard to compute
    so a <dfn>heuristic</dfn> algorithm is used
    which is easier to compute but only finds an approximate or mostly-right answer.

    <div class="example>

    Suppose you wish to visit every city in the USA
    and spend the minimum amount of time on the road doing so.
    There is an optimal route, one that uses less time than any other,
    but we can get "pretty good" by broadly going in a zigzag pattern
    or by always going to the closest unvisited city next
    or various other heuristics.

    </div>

Self-improvement
:   Most algorithms are defined once and operate consistently thereafter,
    but some adapt and (hopefully) improve over time.
    
    The most common way to have algorithms self-improve is to have them accumulate additional resource data,
    typically processing it into an effectively usable form as it arrives.
    A less common way is to have a meta-algorithm that changes details of the main algorithm,
    often by trying several variants to see which ones work best.
    The line between these two is not crisp,
    and some people might disagree about which algorithms use which technique.

Testability
:   It is usually infeasible and sometimes impossible to prove that an implementation of an algorithm
    is correct, with no errors or security vulnerabilities.
    Thus, it is common to try to estimate correctness using tests.
    
    A <dfn>test case</dfn> is a set of inputs
    and an expected output;
    algorithm implementations are tested by trying many test cases
    and verifying that they produce the correct output for each.
    
    Some algorithms readily lend themselves to creating a wide range of useful tests
    while others are much more challenging to test.

# Algorithms and scale

Computer science includes significant discussion of how different algorithms <dfn>scale</dfn>,
meaning how their runtime (and sometimes other resources) increase as the size of the problem they are asked to solve increases.
Ignoring vast amounts of detail, there are a few broad groups that are worth understanding.

A problem is called <dfn>intractable</dfn>
if the best known algorithm for solving it requires <dfn>exponential</dfn> time,
meaning that adding a small  amount of additional input
increases runtime be a multiplicative factor.

:::example
Breaking passwords by guess-and-check is an intractable algorithm.
Assuming that passwords are made out of only English lower-case letters, the number we need to guess is:

| Password length | Number to check |
|--:|--:|
| 1 letter | 26 |
| 2 letters | 676 |
| 3 letters | 17576 |
| 4 letters | 456976 |
| 5 letters | 11881376 |
| $n$ letters | $26^n$ |
:::

Some algorithms require time proportional to some power of the input size.
A simple example is an algorithm that considers all pairs of something:
all pairs of students and their tests,
all pairs of potential roommates,
etc;
there are roughly $n^2$ ways to pair up $n$ things, meaning checking them all will take that long.
Algorithms like these slow down noticeably above some size;
pairing 100 people might take a fraction of a second
while 1,000 might have a noticeable delay
and 10,000 might take a few hours.
More scalable than intractable algorithms, certainly,
but still noticeably constrained by scale.

Often, people expect algorithms to scale linearly with input.
Double the input size and we expect to double the time needed to complete the task.
One of the most common algorithms used as part of some other algorithm
is putting a list of values in sorted order;
this scales just a tiny bit worse than linearly
(a list of $n$ items can be sorted in $n \log n$ steps)
but it feels close enough to match people's intuition of scale.

When inputs get very large, we need algorithms that take less than linear time.
Because looking at each input takes time, this requires finding the result without even looking at most of the input at all.
A classic algorithm with sublinear time
is finding a value in a sorted list
like a print telephone book or dictionary:
we can find a value in a list of 1 million entries by checking only 30 of them
if we know that the list is in sorted order.

Several ways of scaling with larger input have names that are common enough to be worth memorizing:

| Name | Time for input size $n$ | Comments | Example |
|------|-------------------------|----------|---------|
| Constant | $O(1)$ | Ignores most input entirely. | Pick a random value from a list. |
| Logarithmic | $O(\log n)$ | Selectively views a few inputs. | Find a value in a sorted list. |
| Linear | $O(n)$ | Check each input once. | Count how many values in a list have a given property. |
| Quadratic | $O(n^2)$ | Feasible for small problems, slow for larger ones. | Count how many people in a room root for rival teams. |
| Exponential | $O(2^n)$ | Intractable, basically unusable. | Try every possible password. |

The $O(...)$ above is called <dfn>Big-O</dfn> and is a mathematically precise way of saying "roughly".
Big-O notation is also called asymptotic notation because its mathematical definition is related to the mathematical concept of asymptotes.

# Families of algorithms

Algorithms are often grouped based on the data structures they operate on.

## List algorithms

Lists are very common in many contexts.
Computing has a few common list data structures, meaning ways of representing lists using bits.
Two of the most common are:

- An <dfn>array</dfn> stores a list by putting its elements next to one another in computer memory.
    It's fast ($O(1)$) to jump around the list to a specific value
    but slow ($O(n)$) to add or remove an element from the middle of the list.

- A <dfn>linked list</dfn> stores a list by having each element keep track of what elements come before and after it.
    It's fast ($O(1)$) to add or remove an element from the middle of the list
    but slow ($O(n)$) to jump around the list to a specific value.

The most common list algorithms are

- Sort a list,
    moving the elements around so they are in ascending order.
    There are many sorting algorithms, including some that only work for specific types of list values,
    but the fastest general-purpose sorting algorithms are sligtly slower than linear ($O(n \log n)$).

- Searching a list,
    finding an element that matches some criteria.
    In a sorted list this is very fast ($O(\log n)$)
    but in an unsorted list it is slower ($O(n)$).

## Graph

In computing, the word <dfn>graph</dfn>
does not refer to a chart or other visual representation of data;
instead, it means a set of <dfn>nodes</dfn>
connected by a set of <dfn>edges</dfn>,
where each edge connects exactly two nodes
and any number of edges may connect to a given node.

<figure>
```pikchr
A: circle "A"
B: circle "B" at 1 heading 0 from last circle
C: circle "C" at 1 heading 72 from last circle
D: circle "D" at 1 heading 144 from last circle
E: circle "E" at 1 heading 216 from last circle
line from A to B chop "1    "
line from B to D chop "" "2   "
line from B to E chop "   3" ""
line from C to D chop "   4" ""
line from C to E chop "" "    5"
line from D to E chop "" "   6"
```
<figcaption>
An illustration of a graph,
using circles to represent nodes
and lines to represent edges.

The graph has five nodes: A, B, C, D, and E.

The graph has six edges:
edge 1 connects A-B,
edge 2 connects B-D,
edge 3 connects B-E,
edge 4 connects C-D,
edge 5 connects C-E, and
edge 6 connects D-E.
</figcaption>
</figure>

By adding information to the nodes and edges,
they can be used to represent a surprising variety of problems,
both spatial problems like navigating around a map and designing sewage systems
and non-spatial problems like setting up people on dates and winning turn-based games.

Graph problems are well studied,
and include both tractable and intractable problems.
If you hear a computer scientist say "this is a graph problem"
expect the next statement to be either "and we can solve it easily"
or "and it's basically impossible."

Some of the most common graph algorithms are

- Finding the shorted path between two nodes ($O(n)$, but with pre-processing much less)
- Cutting a graph in half by removing the minimal number of nodes ($O(n^2)$)
- Finding the shortest route that visits a set of nodes ($O(2^n)$)
- Finding the longest path between two notes ($O(2^n)$)

Note that often even very similar-sounding graph problems
(like finding the shortest path and finding the longest path)
have very different complexity (one being easy, the other being intractable).
This can seem frustrating, with seemingly minor teaks to a problem statement
resulting in huge changes to the algorithm feasibility.
