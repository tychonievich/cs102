---
title: Large Language Models
...

This page explains the main ideas of <dfn>Large Language Models</dfn> (<abbr>LLM</abbr>)
as became popular in 2023.
It assumes you have read the introductory page on [Artificial Intelligence](ai.html).

LLMs are a type of machine learning,
meaning:

- A human picked a family of functions.
- A human picked a set of inputs, called a <dfn>training set</dfn>.
- A human picked an <dfn>objective function</dfn>, meaning a way of comparing possible outputs for a given input and picking which is best.
- A computer tried many functions from the family, looking for the one that maximizes the objective function for that training set.

They handle the complexity of human language by having very large numbers of parameters,
and avoid overfitting by choice of function family (called [neural networks])
and by using extremely large training sets (roughly "all text on the Internet").
They also include a small amount of classical AI, algorithms designed by humans based on their understanding of patterns in the task of processing text.

LLMs are generative AI, meaning the goal is to fill in the missing value in a provided pattern;
in particular, they try to find the next word to complete an incomplete piece of text.

# Neural networks

LLMs use a function family called <dfn>artificial neural networks</dfn> (often abbreviated as <abbr>neural nets</abbr> or <abbr>ANN</abbr>).
This function family is
comprised of immense linear operators^[Common neural nets use the most general linear operators, dense matrices. The various named classes of neural nets (recurrent, convolutional, and so on) use much more limited linear operators (for some layers) chosen based on human understanding of what matters in a given domain and/or to make training more efficient. I don't follow every new development in this space, but all of those I have looked into stay within the linear operator domain.]
punctuated by detail-discarding operations.

ANNs are "neural" only in the sense that once upon a time someone ignored almost everything we know about neurons and re-posed what was left as a linear operator followed by a detail discard.
That vague analogy is unrelated to the effectiveness of neural networks,
and trying to make systems that work more like neurons has thus far proven to be counter-productive.

Linear operators are a very simple class of functions that has been studied by mathematicians for centuries.
Some of the reasons we like linear operators as a function family for machine learning include:

- Linear operators are very easy to compute, even with millions of inputs.
- Linear operators are primarily parameterized by huge lists of real numbers, giving many options to consider during training.
- Linear operators are easily analyzed, meaning the next function we check during training can be chosen cleverly to make the objective function likely to increase; that analysis enables <dfn>hill climbing</dfn> where the each new function we try is "above" the one before in terms of quality.

Linear operators are not a good function family for machine learning for two reasons.
First, because they are easily analyzed they can only represent functions that are easily analyzed,
and we're interested in having computers do things that are complicated and hard to analyze.
Second, linear operators with many inputs have too much sensitivity to small differences
and liable to overfitting, causing them to fail to generalize from specific inputs to the general case.

To get around the limitations of linearity,
neural nets follow each linear operator with a detail-discarding operator.
The most common way to discard detail in a neural net is to round any number above some threshold to 1 and any number below it to 0.
That's a nonlinear thing to do, but it's simple enough
that we keep much of the computational efficiencies of linearity.
Because the detail discard is nonlinear it allows us to chain multiple operators together
and get something more than just a single operator.

Putting this together, common neural networks 

1. take an input, which is a list of many numbers;
2. apply a linear operator to get a different list of many numbers;
3. threshold it to get a list of many 0s and 1s;
4. apply a different linear operator to get a third list of many numbers;
5. threshold it to get a list of many 0s and 1s;
6. apply a third linear operator to get a fourth list of many numbers;
5. threshold it to get a list of many 0s and 1s;
6. ... and so on.

The number of linear operators in this sequence is called the *depth* of the neural network.
The deeper the network, the less linearity limits its behavior^[The idea that several linear things punctuated by nonlinearity can approximate nonlinear things may be familiar from connect-the-dots illustrations, piecewise-linear functions, polygonal computer models, and the trapezoid rule, all of which approximate curves by a sequence of line segments. Those examples all segment the domain into pieces and handle each segment linearly; neural nets instead segment the computation process into linear pieces, not the input domain.]
but the less we can rely on linearity for efficient training.

# Token streams

LLMs complete text.
Their input is a sequence of a few thousand words
and their output is one more word to stick on the end of that sequence.
If we want more than one word, we add the first output word to the original input
and try again, getting a second word;
and so on until the LLM outputs a special word that means "end of text."

The idea of a "word" used in the previous paragraph is not as nicely defined as we might hope.
Are "such" and "Such" the same word?
Is "," a word? If not, are "of," and "of" the same word?
These are questions that the human designing the LLM has to answer,
resulting in an algorithm for turning text into a *token stream*,
where *token* is the concrete realization of the idea of a "word".
The more effectively this algorithm can provide single-meaning tokens,
the more efficient the training will be.
This is one reason why text-based AIs like LLMs
are more effective than voice-based AIs:
we're *much* better at making meaningful tokens from text
than from sound.

# Training and objective

The training data for LLMs is text.
Any text, from any source, and as much of it as possible,
but processed in a particular way to make it easy to define an objective function.

To consider how this training works, 
let's consider a web page that is broken into the following 15 tokens:

> Error 403 Unauthorized «newline» You must be logged in to view this page . «end»

This results in 15 training inputs and an objective for each:

| Input | Objective |
|-------|-----------|
|       | Error |
| Error | 403 |
| Error 403 | Unauthorized |
| Error 403 Unauthorized | «newline» |
| Error 403 Unauthorized «newline» | You |
| Error 403 Unauthorized «newline» You | must |
| Error 403 Unauthorized «newline» You must | be |
| Error 403 Unauthorized «newline» You must be | logged |
| Error 403 Unauthorized «newline» You must be logged | in |
| Error 403 Unauthorized «newline» You must be logged in | to |
| Error 403 Unauthorized «newline» You must be logged in to | view |
| Error 403 Unauthorized «newline» You must be logged in to view | this |
| Error 403 Unauthorized «newline» You must be logged in to view this | page |
| Error 403 Unauthorized «newline» You must be logged in to view this page | . |
| Error 403 Unauthorized «newline» You must be logged in to view this page . | «end» |

For each of these training inputs, and all of those we can get from every other web page we find as well,
the training program checks what its current function does with the input
and then tries to tweak the numbers in its linear operators to get that behavior closer to the objective.

This is the only training the LLM gets.
The goal is to get it to replicate the most common kinds of things that appear in its training text.
There's no cognitive model, no understanding, no cleverness:
merely an effort to get a function that gets as close to replicating the input as the function family will allow.

LLMs often use a pretrain and fine-tune training model.
In the pretraining we feed it as much text as possible to get it good at replicating text;
in the fine-tuning we focus the training on just text we like to get it to prefer that kind of text.

:::example
If we expect the input to be questions and want the output to be answers
then the pre-training would use all the text we can find.
The fine-tuning would be just the Q&A forums again, pushing the function closer to those outputs.

The result will be a prompt like "How do I bake bread?" given to an LLM being much more likely to start producing a recipe for bread than it is to start producing other text that might follow that online, such as expanding the question with "Is it hard?" or responding with judgment like "Why would you even want to do that?"
:::

In addition to pretraining and fine-tuning, common LLMs also augment what the user types
with additional tokens to encourage the desired kind of output.
For example, it might prepend "«start of question»" and postpend "«end of question» «start of answer»" tokens to each thing you type, using whatever start and end tokens it found on the Q&A forums in the training set.

# Encoding token streams

## One-hot

Linear operators, and by extension neural nets, have lists of numbers as both inputs and outputs.
LLMs turn tokens into lists of numbers using a one-hot encoding,
which works as follows:

1. Place all possible tokens that could ever appear in a big list. Let's assume that's a list of 100,000 tokens.
2. Encode a word as a list of 99,999 zeros and exactly 1 one, with the one at the index of the token in the list of possible tokens.

:::example
If the list started (the, a, an, of, in, …)
then the word "of" would be one-hot encoded as (0, 0, 0, 1, 0, …).
:::

To turn a list of 100,000 numbers back into a word
we pick the largest number in the list^[Or, if we want more variation in output, randomly pick one of the largest numbers in the list.] and use the word from that place.

## Reduced dimension

The one-hot encoding has the nice property that it doesn't treat any word as special:
they each get their own place in the list, none any different than any others.
But we know that some words are more like each other than other words,
and we want to have that similarity in our model.

One way of measuring similarity is how often a pair of words appear in the same context.
For example, we can find many phrases on the Internet with the word "king" in them
that differ from other phrases on the Internet with the word "queen" in them only by that one word (for example "the $x$ sat on the throne").
It is much harder to find such phrases that interchange "king" and "of",
so by this measure "king" and "queen" are much more similar to one another than either is to "of".

To encode this notion of similarity,
we'll feed the one-hot encoding through a linear operator with many many fewer outputs than inputs;
and similarly feed the output through a linear operator with many many fewer inputs than outputs.
We call that first layer an <dfn>encoder</dfn>,
the last layer a <dfn>decoder</dfn>,
and the smaller list of numbers output by the encoder an <dfn>encoding</dfn> of a word.
We train the encoder and decoder based on two objectives,
both of which depend only on existing text online and not on any kind of human intervention:

- The decoder should undo the encoder. If the encoder turns $(0,0,0,1,0,0,0,0)$ into $(0.345, 0.01892)$ then the decoder should turn $(0.345, 0.01892)$ into some vector the same length as $(0,0,0,1,0,0,0,0)$ and with its maximum in the same place^[Turning $(0.345, 0.01892)$ into $(0,0,0,1,0,0,0,0)$ directly is not the goal because dimension reduction is not invertible. We just want to keep the maximal value in place to enable recovering the original word.].

- If the same context appears twice with different words in the middle, the encodings of those words should be as similar (in a mathematical distance sense) as possible.

These two goals and a large corpus of text are all that are needed to train an encoder and decoder pair.

A good encoding is interesting in and of itself.
It can serve as a spelling corrector^["thier" and "their" appear in almost exactly the same contexts and thus will have very similar encodings, but "their" is much more common and thus probably what you meant to type.],
a wording brainstorming tool^[Looking for a word that means something like "happy" but also "regretful"? The encoding for "nostalgic" is likely to be similar to both.],
and a search generalizer^[Your search not turning up good hits? Try replacing its words with others that have similar encodings.],
among other uses.

There is some magic in picking the encoding size.
If it is too large, words will stay far from one another
and the fact that "king" and "queen" are largely interchangeable will not be discovered.
If it is too small, words will be shoved too close together
and the differences between how "king" and "queen" are used will be lost.
The encoding size is one of many <dfn>metaparameters</dfn> of the system^[Other metaparameters include depth, the size of each linear operator, and which limitations on operators to apply to each.],
meaning something we have to pick that has significant impact on the results
but does not have an obvious rule to use to identify the best choice.

## Sequences

LLMs don't just take one token as input:
they take thousands of tokens.
There are multiple ways that could be done,
but a simple and sufficient one is to concatenate all the encoded tokens into one big list.

For example, if we encode each word into a list of 500 numbers,
and we want to accept 10,000 words as input,
then we'd have a 5,000,000-number list as the input.
The first 500 numbers would be the encoding of the first word,
followed by 500 numbers encoding the second,
and so on.

But what if a user types fewer words than we allow?
Neural nets don't allow variable-length inputs,
so the missing words have to be added,
often by adding a special «nothing» token.
Did you put 10 words
into an LLM that supports 10,000?
It will put 9,990 special «nothing» tokens before your ten words
to make its input list of numbers.

## Self-attention

A major advancement of LLMs came when humans
added something to the system that neural networks alone could not handle, no matter how well trained.
The aspect of language they added is called <dfn>self-attention</dfn>.
Self-attention is implemented by a <dfn>transformer</dfn>
which changes the encoding of each word in a sequence of words,
moving it closer to similar words in that same sequence.

Self-attention can express many kinds of linguistic patterns,
but is most easily illustrated by considering a single word that has multiple meanings.
For example, "earth"
has one meaning that is similar to "air", "fire", and "water";
and another that is similar to "mercury", "venus", and "mars".
A well-trained encoder will result in a list of numbers for "earth"
that is similar to all of these words (often by having different numbers in the list shared with each other similar word).
If a given input text contains both "earth" and "mars",
a transformer will move the encoding of "earth" in that input closer to the encoding of "mars";
but if the input contains both "earth" and "fire",
the transformer will move the encoding of "earth" in that input closer to the encoding of "fire".

:::example
Suppose we had the following (much to small to be real) encodings:

- Earth (0.5, 0.5, 0, 1)
- Fire (1, 0, 0, 0.5)
- Mars (0, 1, 0, 0.5)

If a sentence had both "earth" and "mars" in it,
we've move "earth" closer to "mars"; perhaps (0.6, 0.4, 0, 0.9).

If a sentence had both "earth" and "fire" in it,
we've move "earth" closer to "fire"; perhaps (0.4, 0.6, 0, 0.9).
:::

Transformers help AI systems handle ambiguous texts,
resolve context,
and otherwise handle the complexities of language
that trained neural nets alone don't seem able to handle.

Because transformers utilize encoders to operate,
they are partially trained (machine-learning);
but their power comes from the human-designed nonlinear structure
informed by the problem domain (classical AI).


# LLM within a toolchain

LLMs are limited to completing text,
but LLMs do not have to be stand-alone tools.
Some of the LLM-included toolchains I've seen include:

- Pairing an LLM with another machine learning system specialized for a different medium, like images or audio.
    These other systems often have their own specialized domain-specific component, like the transformers in LLMs,
    to help overcome the limitations of neural nets (or other function families) have by themselves.

- Parsing the LLM's output and searching for any assertions it makes in a standard search engine.

- Using the LLM several times, paired with other tools. For example, if I ask "$x$?" it might

    1. Prompt the LLM with "what sources should I check to answer the question $x$?"
    2. Use a standard retrieval tool access the sources listed
    3. Prompt the LLM with "I know «what that source said», but still have a question: $x$?"

- Attaching an LLM trained on help forums for specific tools with that tool, repeatedly prompting it with things like "I'm in this state and see this message; what should I do to get things to work?" and then doing whatever the LLM says.

This is not an exhaustive list, and will become less and less exhaustive as this post ages and more such LLM-included tools are designed in the future.
Any process where the average wisdom of the Internet masses could be useful could benefit from the integration of an LLM.


# Conclusion

## Summary of LLM operation

When I type a prompt into an LLM,

1. What I typed is split into tokens by human-written code.
2. Extra tokens for "end of question" and the like are added.
3. That sequence of tokens is sent into a tool that tries to answer "if you saw this sequence of tokens on some webpage, what token would be most likely to come next?"
4. The answer token is added to the sequence, and the question is asked again with that larger sequence.
5. The answer token is added to the sequence, and the question is asked again with that larger sequence.
6. ...
7. The answer token is added to the sequence, and the question is asked again with that larger sequence.
8. until the answer is the "end of answer" token.

The tool that is generating tokens
is a function from a general function family
consisting of two of the most easily-computed functions we know of:
linear operators and rounding to integers.

Large linear operators have billions of numbers inside them.
Some of these numbers may be set by human engineers' beliefs about the problem domain;
the rest are chosen by mathematically-informed guess-and-check
where the things to check against come from billions of web pages:
enough data that even guess-and-check can eventually converge on something useful.

Nothing in the LLM contains anything like understanding.
It finds similarities and patterns in uninterpreted token streams
and uses those to try to extend incomplete sequences.

## Consequences for LLM users

- Longer prompts have more power; short prompts waste most of your LLM's thousands of input tokens.

- LLMs don't think, they don't have intent or understanding; they don't even know that the tokens they are generating mean anything at all.

- LLMs are like search engines that, instead of giving a list of millions of hits, approximately combine them all into one synthesis median reply.
    - If you want something unusual, your prompt will need to point towards a specific kind of unusual.

- LLM designers try to steer their LLMs toward mimicking the helpful parts of the Internet, but identifying the helpful parts isn't easy and there's not enough helpful parts for LLM training to work well if given only those parts, so the parts you wish didn't exist are part of their training too.
    - Telling the LLM "that was rude/wrong" will get the kinds of responses that follow such a message on a discussion forum.

- Prompts that could appear in academic webpages will get replies like academics write, while prompts that could appear in flame wars with trolls will get those kinds of replies -- not because of intent or snark or anything like that: the LLM is just trying to finish the pattern you began.

- The farther you go from what is common and has been done and posted online millions of times before, the less helpful LLMs are.
