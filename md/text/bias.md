---
title: Algorithmic Bias
...


<dfn>Accuracy</dfn> refers to how often a question is answered correctly
or how far the average answer is from being correct.

<dfn>Bias</dfn> refers to systemic errors in how some question is answered;
it implies some level of inaccuracy, but also implies that incorrect answers exhibit patterns.

:::example
If the weather prediction always predicted the average temperature,
that would be highly inaccurate
but also unbiased: it's as often wrong by being too hot as it is wrong by being too cold.

If the weather prediction is always within 3°F of the true weather
and never under-estimates the temperature,
that is quite accurate
but also highly biased: when it's wrong, it's always wrong by saying it will be warmer than it in fact is.
:::

<dfn>Algorithmic Bias</dfn> refers to any algorithm
that exhibits bias.

In some cases, humans genuinely prefer algorithmic bias.
The best known example of this is weather prediction;
an unbiased report of a 10% chance of rain leads people to go out without rain gear
and then get rained on 1 out of 10 times;
telling them it was 20% instead (biasing towards the result that requires action)
leads to better decisions.

That said, desireable algorithmic bias is unusual.
In most cases, we'd prefer unbiased algorithms.

# Machine Learning and Bias

Machine learning is particularly prone to algorithmic bias
because it (a) is not programmed by someone who might notice and correct the bias
and (b) tends to penalize anything uncommon in the training data.

The point about penalizing, consider the following examples.

:::example
Recognizing faces.

Suppose a machine learning model is trained to recognize human faces.
Its training data comes from the Internet, meaning it has a lost of training data of people culture considers photogenic, mostly representing dominant racial and ethnic groups.

If I have facial features that do not match the bulk of the training data,
the model will be much weaker at recognizing me:
faces like mine have lower accuracy because there was less training.
But most images are not images of faces, so low acuracy will usually result in "not a face" judgments.

Once I find that AIs cannot see me, I am likely to find work-arounds:
using non-facial-recognition to log in to my devices (and thus reducing my presence in future training data),
adjusting my grooming to try to get AIs to see me (and thus conforming my future image to what it already knows),
and so on.
This is likely to make the original problem even bigger in the future than it is now.
:::

:::example
Hiring decisions.

Suppose a machine learning model is trained to assist hiring managers in deciding which applicants to interview.
Its training data is past applicants and hiring decisions,
meaning it has embedded in it any inaccuracies that might have been present with human hiring.
I likely interviewed and hired people who I had connections to in my personal network
or who reminded me of people I like, meaning my hiring decisions likely showed some bias
towards people like me in background, culture, naming pattern, and so on.

The AI, not knowing how to distinguish between my bias and useful data,
will pick up on those patterns and use them to show me more applicants like that.
If I was 10% more likely to hire someone from my ethnic group than others before,
the AI will show me at least 10% more of that group
and my bias will continue to be present, meaning I'll still be 10% more likely to hire from that 10% larger pool,
making my next reound of hiring closer to 20% biased.
If the AI learns from that it will show me even more of them,
of whom I'll still pick an extra 10% bringing the next round even higher,
and so on with ever increasing bias.
:::

:::example
Summarizing information.

Suppose 70% of people posting things online believe $X$ and 30% don't.

If I ask AI about $X$, it will tell me most people beleive $X$.
I might then make a post that says $X$ too, trusting the AI summary.

When the AI looks again, my page will be evidence of one more person believing $X$
and it will start saying even more people believe $X$,
and so on and so forth.

This kind of reduction of minority views is also present in all other forms of summarizing
(search engines, surveys, news reports, etc),
but the prevelance of people accepting the AI summary and looking no further
coupled with AIs having many definitive answers in their training data and less intricate and caveated replies
means AIs seem to be more extreme than some other techniques.
:::


