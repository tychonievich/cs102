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

:::{style="color:red"}
Page still being written; come back later for more
:::


# Picking algorithms

:::{style="color:red"}
Page still being written; come back later for more
:::
