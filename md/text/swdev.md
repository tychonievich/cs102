---
title: Software development
...

We can broadly break the products humans make into two groups.
Manufactured items are made the same way every time; once we have the workflow set up, we simply follow that workflow.
Artistic items have an element of creativity in each item; the same motions are used to add the parts of each item, but with continual unique decisions along the way.

In this model, software is more like a creative than an manufactured item.
Creating another one just like the one we previously made requires no work at all;
when a software developer is working, they are working because there are creative decisions to make.

But that does not mean that the day-to-day experience of creating software feels artistic.
The medium is not a canvas and paint where any stroke contributes to the painting, for better or worse;
the medium is a computer were most things we could type would break the software and render it entirely inoperable.
There are still good and bad artistic decisions to be made,
but they are surrounded by intricate puzzles: dozens of decisions needed to just find another working program.

If you were a CS major, we'd spend about two years teaching you common puzzle solution steps
and two more showing you the creative works of masters in various fields of computing.
But we have only weeks, not years, of your time so that path is out of scope for this class.
Instead, this page outlines some of the processes we have developed for creating software,
sometimes called the <dfn>software development lifecycle</dfn>.

# Five(ish) Steps

Descriptions of software development generally list 5--10 steps that software goes through, with different ways they are connected.
The simplest of these is the five-step <dfn>waterfall model</dfn> where one step concludes before the next begins.
It's steps are:

1. <dfn>Requirements</dfn>, where the software developers try to figure out what the client wants and needs.
    
    Sometimes a separate *preliminary analysis* step is added before requirements where need for and scope of the software project is considered in a business context.

    Sometimes a separate *system analysis* step is added after requirements where the interplay of various requirements are considered.

2. <dfn>Design</dfn>, where the major components, data, and operations of the system are chosen.

3. <dfn>Implementation</dfn>, where the software itself is created.

4. <dfn>Testing</dfn>, where the software is used to find and repair bugs.

    Sometimes this is split into multiple types of testing, often based on who needs to be involved with each type: *unit testing* is done by the implementation team, *integration testing* is done between multiple teams, and *alpha* and *beta testing* are done on the full completed program with *alpha* being done internally and *beta* with external clients.

5. <dfn>Maintenance</dfn>, where the completed and delivered software is updated
    to fix bugs, close newly-discovered security vulnerabilities, adopt new platforms, and add additional features.
    
    Sometimes a separate *deployment* step is added before maintenance to determine how the software and its updates will reach the users.
    
    Sometimes separate *evaluation* and *disposal* steps are added after maintenance to reflect on the software, plan its replacement, and move all users off of it to whatever comes next.

The terms above are common, but not universal. I've seen people use "implement" to mean what I've described here as "deployment", "development" or to mean what I've described as as "implementation", and so on.


## Requirements

People are often surprised to learn how much work goes into figuring out what a client actually wants.
Requirements elicitation is the task of trying to turn client needs into a form that is clear enough to build software around.
Doing this faces several challenges, a few of which are outlined below.

Often, a we're not really sure what we want. We want a fun game, or a better way of tracking orders, or something to help organize our portfolio -- but that's more an aspiration than it is a concrete request. What makes games fun? What does "better" mean? How do we know if a portfolio is well-organized? These are questions that will need to be answered before we can hope to design software that meets those needed.

Additionally, we often have many subconscious requirements, informed by our experience and expertise and so intuitive and ingrained in us that we never think to bring them up until after we see something that violates them. It is common for requirements elicitation to include multiple rounds of the software team proposing outlines of possible software solutions and the clients cringing and trying to explain why those ideas are awful; such thumbnails and prototypes are one of the surest ways to identify and describe these subconscious requirements.

Ideal requirements are often at odds with one another. A common mantra is software is you can deliver at most two of good, cheap, and fast: if you want high-quality software you either have to pay a lot for it or wait a long time to get it. This is but one of many trade-offs: ease of use, security, and a rich feature set are similarly at odds, as are working on many platforms, feeling like a native app, and being maintainable. An painful but necessary part of requirements elicitation is deciding which ideals are actually required and which can be sacrificed to reach those that are required.


## Design

If writing code is like construction work, system design is like city planning and software design is like architecture.
Any program that will take more than a work week to build has enough distinct parts that it can be designed in many different ways, with pros and cons to each way.

To an outsider, design documents often look like a confusing mix of tedious details.
But those details can have long-ranging impacts on not just the rest of the software development process
but even the experience of those who use the software being created.

:::example
I began college when computers were heavy and energy-inefficient and bringing one to class was impractical.
Students took notes on paper, with diagrams and side-notes and circles and colors used to spread the content across the page.

I began teaching college when computers were light and energy-efficient and bringing one to class made sense.
Students took notes on the computer, using text editing programs to type up their notes.
If I told students they had to use paper, they wrote notes like a text document.
The software they were used to was designed around paragraphs, and their brains had adapted to expect paragraphs.

Ten years later many computers had styluses and programs designed around a paper-like metaphor.
Students using them went back to diagrams and side-notes and circles and colors spreading content across the page.

Today many classes are recorded with effective AI transcription, and many students don't take notes at all.
If I ask them to anyway, they are more likely to transcribe every word I say than to create actual notes, again replicating the software design model they most often interact with.
:::

The actual process of software design is something I've not found a way to describe in the time we have available.


## Implementation

Implementation goes from design to code.
It is the main puzzle-solving step, trying to find the right set of instructions to get the desired behavior.
Implementation often involves assembling a set of well-known pieces,
data structures and algorithms and implementation patterns that have wide applicability
and can be combined in various ways to solve many different problems.

Implementation typically involves starting from a program that does very little and adding one feature after another.
Because some of these additions turn out to be dead ends, it is common to store all of the steps along the way.
Because large software is built by large teams it is common for multiple features to be created by different people at the same time and then integrated into the code base.
Because there are many ways to make mistakes along the way, it is common to use a formal review, commenting, and approval process.
All of these ideas together are implemented using tools called "version control", of which the `git` tool and github site are the most famous.

Implementation is currently the primary area where AI is making inroads.
The detailed history of the many steps involved in implementation are available as training data through `git` repositories like github, allowing AIs to learn the patterns in how humans apply this process in depth.
That is not to say that AI cannot be used to facilitate other aspects of development,
but implementation is the area it does the most reliably and the area that is getting the most press.


## Testing

Testing is the process of coming up with a set of inputs to a program and the expected outputs for each,
with the hope that if there is something wrong with the program then one of those inputs will reveal that.
Testing has a reputation for being hard -- provably hard, being an approximation of an [undecidable task](halt.html) --
and many find it less fun that implementation, so it often gets less attention that it deserves.
Various development methodologies have been posed in part to ensure testing happens, such as test-driven development which swaps the order of testing and implementation.

AIs learn the patterns of the humans who created their training data,
and thus AIs are also slow to write tests.
Efforts to fix that are ongoing, and may well be resolved before the end of this semester.


## Maintenance

Once a program is finished, the real work of creating software begins.
Called "maintenance", this stage of software generally takes more time, money, and people than all those that lead up to it.
But calling it "maintenance" is somewhat misleading: software doesn't wear out of need to have old parts replaced.
instead, maintenance involves the following kinds of activities:

* Bug fixes.

    Clients almost never chose to invest the time and money needed to deliver bug-free programs, so virtually every program is shipped with bugs. As users find and report those bugs that forms a kind of testing, leading to ongoing work in fixing those bugs.

* New features.

    Once we deliver a program and people start to use it, they realize that what they really wanted was different than what they got, adding new requirements.
    Those new requirements inspire adjustments to the design, new implementation, and so on down the software creation path.
    If the end result is a modification of the existing program, we typically call it maintenance.
    If the end result is a new piece of software or a major redesign of large portions of the software we call it a separeate project instead.

* Vulnerability patches and upstream updates.

    New software vulnerabilities are discovered every day. If those are not patched, malicious actors can use them to take over people's computers using the unpatched software.
    
    Sometimes patching vulnerabilities means changing how the software operates.
    But more often the vulnerability entered the program through one of the many <dfn>libraries</dfn>, or collections of code written by someone else and used in our software.
    As those libraries are patched, we need to update our version of those libraries too;
    applying patches made to things we use is called an <dfn>upstream update</dfn>.
    If we are being used as a library by others, those programs that use ours are said to be <dfn>downstream</dfn>
    and need to be alerted of any patches we make.

:::important
Always update your software!

If you fail to update your software, vulnerabilities found in that software will allow cybercriminals to do whatever they wish with your computer. Common ways they'll use that include:

* Use your computer to attack other computers, making you an accomplice in their crimes.
* Encrypt your files and demand a ransom to decrypt them.
* Log what you do to learn your passwords and so on, saving that information so they can later steal from you once your net worth is higher.
* Use your computer to mine bitcoin or other cryptocurrencies.

Software with a lot of power (like your operating system) or with internet access (like a web browser or online game) are the most important to update.
:::


# Spiral model

The spiral model of software development focuses on what happens between rounds of the five steps,
or equivalently how the "new features" part of maintenance works.
It describes the ongoing improvement of software in a never-ending cycle of four phases:

1. The steps of the waterfall model, sometimes lumped together until the title "engineering" or "development."
2. Evaluate how well the software is doing at the objectives it was intended to meet.
3. Plan a set of new objectives to be met in the next version of the software.
4. Identify risks that might be present adding the new objectives and try to resolve them, often with a prototype to demonstrate them possible prior to working on the next update.

There are many variations in the spiral model:
some describe a round of the four spiral phases for each step of the waterfall model,
some spread the waterfall steps over several phases of the spiral,
and so on.

# Extreme programming, agile development, scrum, and so on

<dfn>Extreme programming</dfn> (<abbr>XP</abbr>) arose in the late 1990s
as a pushback on the long, careful development process suggested by the waterfall model.
XP has many components, but a key idea is that programs should go from usable system to usable system frequently.
Requirements and design are downplayed, with the assumption that identifying them in advance is too hard to be worthwhile.
Instead, development proceeds in a tight loop of implement, test, new feature identification.

<dfn>Agile development</dfn> was a similar movement that arose a few years later.
It also emphasizes small steps from one runnable system to another, though with a more project- than code-based focus.
The most popular agile methodology is called <dfn>scrum</dfn>.

As I speak with developers, many of them are using selected parts of scrum, often merged with parts of the waterfall and spiral models. The most common scrum-, agile- and XP-related terms I see used are:

- A <dfn>sprint</dfn> is the period of time between two runnable versions of the program.
    1--4 weeks are typical sprint lengths.

- A <dfn>standup</dfn> is a frequent (often daily), brief (in theory) meeting to keep everone abreast of one another's progress and challenges.

- A <dfn>story</dfn> is a description of what a user should be able to do with the software; a set of stories serves as the primary requirements document of a sprint.

- The <dfn>backlog</dfn> is the set of stories that have been defined but not yet implemented in the software.
    There is one large <dfn>project backlog</dfn> with all the unmet requirements
    as well as a smaller <dfn>sprint backlog</dfn>  defined at the start of each sprint and defining the set of features that will be added in the current sprint.

Because it seems to be common to mix and match multiple methodologies in practice, each team might use the above terms in a different way.


# Refactoring and technical debt

As software evolves with new features being added on top of a working system,
either through some type of spiral or agile development or in the maintenance phase of a waterfall model,
the code quality is reduced.

:::example
To see how adding new features reduces quality,

1. Suppose I asked you to draw a picture of a shark.
2. Once I saw the picture, I asked you to add a seal.
3. Once I saw that, I asked that the two be having a conversation.
4. Once I saw that, I asked that they be in a spaceship.
5. Once I saw that, I asked that the spaceship be in a battle with another ship.
6. Once I saw that, I asked that the crew of the other ship be gerbils.

The end result would likely have the shark taking up most of the page, with the gerbils added wherever they would fit.
It will look nothing like a picture where the entire requirements were known in advance
and the picture laid out (designed) with each picture element given an appropriate position and space on the page.
:::

This reduced quality has many names.
The oft-modified code is said to become <dfn>brittle</dfn>
or to be <dfn>spaghetti code</dfn>
or to have developed a <dfn>code smell</dfn>
or to have experienced <dfn>code rot</dfn>.
The actions that added new feature wherever they fit
are said to have added <dfn>technical debt</dfn> to the software.

It takes energy and time to pay down technical debt, reworking a program to be once again well-designed.
One key part of paying down technical debt is refactoring.
To <dfn>refactor</dfn> software is to change *how* it does what it does without changing *what* it does.
Refactoring adds no features and fixes no bugs, but it can make future feature additions and bug fixes much, much easier.
