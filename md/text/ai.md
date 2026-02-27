---
title: Artificial Intelligence
...

The term "artificial intelligence" (<abbr>AI</abbr>) was coined in 1956, 5 years before the term "computer science" was coined.
These terms long represented two philosophies towards what computers could do.
Computer science represented what we know computers can do,
artificial intelligence represented our aspirations that computers might one day seem intelligent.

To this day, there is no formal boundary between the two terms,
but artificial intelligence started to develop an identity as a field within the discipline of computer science in the 1970s.
It has been a somewhat fluid field, with problems and algorithms entering and exiting its domain more often than happens with many other fields.
That said, the following classes of problems and algorithms are often called "artificial intelligence":

- Problems related to **dimension reduction**:
    given a large amount of input
    create a small output
    that usefully summarizes the input.

- Problems related to **planning**:
    find a sequence of decisions that will lead to a goal
    even when one each decision changes the space of future decisions that can be made.

- Problems that include **human language** input or output.

- **Data-driven** algorithms,
    which are generally two paired algorithms:
    one finds patterns in large amounts of data
    and the other uses the patterns found to drive whatever task it engages in.

- Algorithms that **fool some humans** 
    into thinking that the algorithm is actually an interaction with a human.

It is worth noting that not every problem or algorithm in the above catagories is commonly called "AI;"
some algorithms are seen as too simple to be called AI
and others have been absorbed by other fields of computing instead.

# Artificial General Intelligence

<dfn>Artificial general intelligence</dfn> (<abbr>AGI</abbr>)
is the ill-defined idea
that an algorithm might be able to handle the same variety of tasks as a human,
or more broadly be "as intelligent" as a human.
Given the lack of clear definitions of human intelligence,
the infinite variety of tasks that could be contemplated,
and the wide range of human ability,
it is common for people to disagree about whether a given system has 
achieved AGI
and about what would be needed to move a non-AGI system towards AGI.

The notion of AGI brings up a host of difficult moral and ethical questions.
If an algorithm were to reach sufficent AGI that it had all of the characteristics we associate with humans,
would it have rights? Would powering it down be murder and programming it be slavery?
Thus far we have not created any algorithm that has forced us to resolve these questions;
whether we ever will is a matter on which AI rearchers disagree.

As a general observation (with exceptions), I have found that

- AI researchers have a much narrower definition of AGI that most other people, but believe that that narrow definition is possible.

- Other computer scientists tend to believe that AGI is either impossible or a long way away, and that claims of AGI are mostly marketing, not technical achievement.

- The general public tends to believe new technologies are AGI for a short time, then realize it is not, before thinking the next new technology is again.

# Classical AI

<dfn>Classical AI</dfn> uses algorithms designed by humans who understand, decopose, and solve the AI problem.
While they may use some data, the bulk of their behavior is programmed, not extracted from data.

:::example
An AI-controlled character in an open-world game
might follow a set of programmed rules
like "if far away, move toward the human-controlled character"
or "when fighting, randomly pick one of these attacks".

This is an example of a purely human-created AI algorithm.
:::

:::example
A chess-playing AI might have programmed rules for looking ahead several moves,
with the desireability of a board position at the end of that forecasting
based on data derived from playing many games.

This is an example of a mostly human-created AI algorithm
with some data used to inform details of its behavior.
:::

As of 2026, classical AI is widely used when the problem to be solved is well-defined
and the computational resources available to solve the problem are limited.

While classical AI is powerful and widespread,
it is not readily summarized with broad patterns.
Each algorithm is based on a specific context and how humans model that context's patterns,
leading to each looking and operating differently.

# Machine Learning

<dfn>Machine learning</dfn> refers to programs
that define a large family of functions
and picks one of those functions
to best match a large pool of data.

The data used to pick a function from the family of functions
is called <dfn>training data</dfn>.

## Types of machine-learning problems

Problems that machine learning solves can be broadly catagorized into the following groups:

- <dfn>Regression</dfn> tries to find a function
    which comes close to matching the training data.
    
    Regression is <dfn>continuous</dfn>, with real-number results.
    
    Regression is <dfn>supervised</dfn>, meaning the training data includes the desired results.

- <dfn>Clustering</dfn> tries to find a function
    which identifies data that is "similar" to other data,
    resulting in each datum being assigned a single cluster it belongs to.

    Clustering is <dfn>categorical</dfn>, with a few discrete result options rather than real-number results.
    
    Clustering is <dfn>unsupervised</dfn>; no piece of training data indicates what cluster it should belong to.

- <dfn>Classification</dfn> tries to find a function
    which matches each piece of training data
    with a specific label provided in the training data.

    Classification is categorical; like clustering, it matches each input to a discrete label.
    
    Clustering is supervised; unlike clustering, the training data does indicates what cluster each dataum should belong to.

- <dfn>Generative AI</dfn> tries to find a function
    which will add in a missing element in a sequence, grid, or pattern.
    
    Generative AI can be either continuous (for example, picking pixel colors) or categorical (for example, picking words).
    
    Generative AI is supervised; the training data contains the completion of the patterns.

:::example
Suppose we have data about student study habits and grades in INFO 102.

------

Regression might come up with a function mapping study habits to grade, something like 
$$\text{grade} = 50 + \drac{\text{hours of study}}{3}$$
Regression won't be fully accurate, but hopefully it will match much of the variation in grades.

------

Clustering might come up with something like

> There are 3 ways students study. You use the 2nd way.

By itself, clustering provides no additional information about the clusters,
but we can often augment it with some descriptive differences between the clusters
such as "studies a little every week" or "studies for many hours the day before a quiz".

------

Classification might come up with something like

> Your study habits suggests you'll earn an A.

Classification is similar to clustering, in that it puts each datum in one of several groups;
but unlike clustering those groups have to be provided in the training data.
I could train a classifier to say "you study like a math major" because majors are available to me in the course roster,
but I couldn't train it to say "you study like a future leader" because what students will do after graduation is not available to me.

-------

Generative AI might come up with something like

> You probably won't study at all next Wednesday.

It takes the patterns present in the data thus far and predicts what is likely to come next.
:::


## Function families

Within machine learning research,
it is common to refer to machine learning algorithms by the function families they use.

There are many function families with many names, and the names don't follow any single schema or structure:

- Some (like "𝑘-nearest neighbors") are named after part of their learning process.
- Some (like "support vector machines") are named after part of how the functions are implemented.
- Some (like "artificial neural networks") are named after the inspiration the designer had in mind while designing it.
- Some (like "transformers") are named after one component that differs from another popular function family.
- ... and so on.

Function families are chosen broadly based on three criteria:

1. Efficient algorithms to perform the training.
    
    We could always pick a random function from the family,
    see how well it matches our objective, then pick another;
    but such a random search is very inefficient.
    We prefer function families where we can make educated guesses instead.
    
    One common way to make educated guesses is called <dfn>hill climbing</dfn>.
    Instead of just saying *that* a function doesn't match the training data,
    hill climbing uses *how* it fails to match the training data
    to inform which function to try next.

2. Flexibility to express the kinds of patterns the data contains.
    
    If we use the function family "lines" ($y = mx + b$) to try to match data that is curved,
    we're guaranteed to fail because the function family is too limited.
    
    One form of flexibility is the number of <dfn>parameters</dfn>, typcially in the form of numbers that can be chosen to separate one function in the family from another.
    A line has two parameters ($m$ and $b$ in $y = mx + b$), a parabola has three (the $a$, $b$, and $c$ in $y = a x^2 + b x + c$), and so on.
    
    Another form of flexibility is if adding more parameters adds the kind of differences between functions that the data needs.
    This is harder to define than parameter count
    but does mean that some function families are better (for some applications) than others.

3. Resistance to over-fitting.

    <dfn>Over-fitting</dfn> occurs when the function selected from the function family
    matches the details of the training data
    instead of the patterns the training data is meant to exemplify.
    Over-fitting is common when the function famly has large numbers of parameters,
    and is more common in some function families than others.


## Ways machine learning happens

It is typically much more computational difficult
to find a function from the function family that matches the training data
than it is to evaluate that function once it is selected.
This difference in difficulty leads to three broad categories of training.

- <dfn>Offline learning</dfn> runs in three phases:
    
    1. Training data is collected.
    2. A function from the function family is selected based on the training data.
    3. That function is used in algorithms to solve problems.
    
    By having the training (step 2) happen separately from the use of the algorithm (step 3),
    we can afford to spend much more time and energy on the training,
    resutling in higher-quality results.

- <dfn>Online learning</dfn> runs in a loop:
    
    1. Repeatedly:
        a. Add an observation to the training data.
        b. Tweak the function based on that new observation.
        c. Use the current function to take some action.
    
    By adding training data as we go, online learning can adapt to new situations
    and learn from the results of its own actions.
    However, the need to do the training (step 1.b) with the same (time and energy) resources that are being used to collect training data (1.a) and use the algorithm (1.c) limits the resources that can be used,
    peventing use of some of the more expensive (and powerful) function families.

- <dfn>Pretrained</dfn> learning followed by a <dfn>fine-tuning</dfn> step
    is a variant of offline learning that uses two training sets and two rounds of training:
    
    1. A lot of training data is collected.
    2. A function from the function family is selected based on the training data.
    3. A smaller but more desirable training set is collected.
    4. A function from the function family near the previously-selected one is selected based on the new, smaller set of training data.
    5. That function is used in algorithms to solve problems.

    Pretraining and fine-tuning is commonly used in generative AI,
    where the first training data tries to learn patterns in what humans think makes sense
    (such as English text or sharable images)
    and the second training data trues to learn patterns in what the user likes
    (such as helpful Q&A conversations or pictures in a particular style).
    
    It is sometimes appropriate to fine-tune more than once:
    learn English, then polite English, then Q&A structure, for example.

