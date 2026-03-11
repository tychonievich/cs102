---
title: Reasoning, agents, and related LLM-using tools
...

# Summary of LLM functionality

The [LLM page](llm.html) explains how LLMs work, but in enough detail it is easy to miss an the big picture.
An LLM is an algorithm that solves the following problem:

> Input
> :    Text in a human language.
>
> Output
> :    More text that matches what the "average person on the good parts of the Internet" would put after the input text.

Chat-based LLM interfaces typically use the LLM as follows:

1. Take input from the user.
2. Add extra words to it, like "Question: *what user typed* Answer:"
3. Send it to an LLM to get a response.
4. Add extra words to the response, like "Does *response* have any hate speech, guides on how to harm people, false claims, or negative statements about this LLM or its owning company?"
5. Send it to an LLM to get a response.
6. If the response is some form of "no, it looks fine" show it to the user.

# Additional "reasoning"

The basic LLM chat flow has two LLM uses per question,
one to complete the user input
and one to safeguard against unwanted responses.
Some even omit the safeguard step or use a cheaper bad-thing detection instead to get just one LLM interaction per response.

That flow can get much more involved. For example, we might do the following:

1. Send an LLM "what's a better way of wording this question: *user input*"
2. Send an LLM "what three web sources are likely to answer this question: *setp 1's output*"
3. Download each webpage listed in the second LLM output
4. Send an LLM "summarize the parts of *webpage content* that are relevant to *step 1's output*"
5. Send an LLM "I know *first summary* and *second summary* and *third summary*; given that, what's the answer to *user input*?"
6. Send an LLM "Does *step 5's output* have any [list of bad things]?"
7. If step 6's output is something like "yes, it has *X*", send an LLM "Please reword *step 5 output* to not include *X*"
8. Send the user step 7 output, or step 5 output if step 7 didn't run

This kind of multiple-part LLM use, aided by a few auxiliary programs like a web download tool or calculator, is often called "reasoning" despite having little in common with what humans mean when they speak of reasoning.

Reasoning models are much more expensive than simpler LLM use
because they have the LLMs generate many more tokens per input;
but they also tends to create much better quality results than the simpler 1- or 2-step LLM use.
Because of this improved quality, there is a recent (mid 2024) move towards using smaller models (fewer parameters, less able to match human text perfectly) that are cheaper to run, coupled with more advanced reasoning processes, as a way to get more desirable performance at a given level of power expenditure.

# AI Agents

The reasoning model above is a simple example of a pattern that has emerged for using LLMs
like any other function invocation during our algorithm design.
If there's some value in having human-like text completed, an LLM is the right tool for the job.

A more powerful approach that is increasingly common in called Agentic AI.
<dfn>Agentic AI</dfn> doesn't limit itself to creating an answer to a question:
it is enabled to create, modify, and edit files; send email, place phone calls, open any program on your computer, and so on.

The basic outline of Agentic AI (or an AI or LLM Agent) looks something like this:

> Input
> :   - A user-specified goal.
>     - A set of files and related information already present.
>
> Process
> :   Repeat the following until a step within it tells you to stop:
>     
>     1. Send "Does *contents of files* meet the goal *user-specified goal*?" to an LLM; if the answer is yes, stop with a "done" message.
>     2. Send "Given *contents of files*, what's the next step towards meeting the goal *user-specified goal*? Please reply with simple, direct steps like opening a specific program, revising a specific file in a specific way, etc." to an LLM.
>     3. Parse out the actions in the reply and for each
>         a. If the action is not in a form the algorithm understands, send "Please reword *action* with smaller, more concrete steps." to an LLM.
>         b. If the action is still not in a form the algorithm understands, stop with some kind of "I got confused; please help" message.
>         c. Otherwise, take those actions.

There are many extra steps and processes that can be added to this outline,
improving the AI's power by doing more hand-written algorithm work (the parts above that are not just "send *X* to an LLM")
and/or sending more messages to the LLM.

Because the first commercially-successful LLM (ChatGPT 3.5) was released in November 2022,
just 26 months before this page was written in March 2026,
there has not yet been much time for people to design and implement LLM-using algorithms.
The potential of LLMs being added as a tool in algorithm design and implementation is just barely beginning to be explored.
