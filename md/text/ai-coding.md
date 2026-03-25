---
title: Elementary AI-assisted programming
...

AI is changing every aspect of software development.
This page explores a tiny sliver of that space.
In particular, it assumes

- You have no prior programming experience of any kind
- You do not have a paid AI tool
- You do not want to install software to facilitate programming

This page was written in March 2026.
Given the speed of AI development, it will likely become at least partially obsolete by the end of the year.


# Logistics

You'll need two tools for the programming described on this page:

1. Access to a general-purpose or programming-specific LLM.

    Of those freely available, I found <https://gemini.google.com> worked with fewer rounds of interaction with the LLM than the others,
    but many different LLMs will work.

2. A way of saving plain-text files with custom file extensions.
    Applications that do this are called <dfn>text editors</dfn>.

    You almost certainly have programs on your computer that can do this
    (most computers ship with either notepad or textedit installed)
    but sometimes getting them set up to do this without changing anything can be nuanced for a novice.
    
    We provide a [simple in-browser text editor](../editor.html) you can use.
    It was made that using the techniques on this page; there's a link at the top of the editor page that shows the steps we used.

You basic operation will go as follows

1. You'll ask an LLM to create a program

2. You'll copy the code it provides and paste it into your text editor

3. You'll save the text with a `.html` file extension

4. You'll open the .html file in your browser

5. You'll ask the LLM for changes and return to step 2


# Brief prompts

Don't include multiple unrelated ideas in a single prompt.
The LLM's reply to your prompt becomes part of its input when handling your next prompt,
and if you put too much in one prompt it might not give much reply to each part.

For example, if I start with the prompt

> I want to create an offline web app that I can run from a file:// URL

then the LLM will say a bunch of things about that non-functional requirement that will be part of its input for everything that follows.
If instead I write a paragraph describing all the things I want my app to do, including that same line in the paragraph somewhere, the LLM might only devote a few sentences to the requirement and fail to comply with it because it makes up so little of its input.

# Iterative development

Don't try to get the entire app done all in one go.
Instead, describe the simplest baseline, try that, then ask for one change after another.

Also, don't take the AI's suggestions of optimizations or final polish before you have all the features you want.
If it says "Would you like me to add *X*" or "I can change this to do *X*", what it's often *not* saying is "and make the code much more complicated and harder for me to change in the future?"

Focus on the key parts first.
What's the most important thing for the app to do?
Get it doing that well, then ask to add the next most important thing,
and so on.

# Getting working code

There are many ways to get code to run,
but the only way that I know you can all do
(by virtue of being able to read this webpage)
is a single-page offline web app.

## Running on your computer

Start your prompts with

> I want to create an offline web app that I can run from a file:// URL

The "from a `file://` URL" bit is important.
The dominant web standard (HTML5, which includes CSS and JavaScript)
has a variety of security features that mean some code that would work
if served from a fully-featured server with proper security certificates installed
will not work without that.
Most of the LLM's training data comes from fully-featured servers,
so it might sometimes make code that won't work from a file on your computer.
If it gives you code that doesn't run, you might prompt it with

> That code doesn't work for me. Could that be because I'm using a file:// URL?

It might also try to tell you to download and run some local server tool.
You can do that if you want, but it will add a lot of overhead to the development process;
we recommend instead saying

> no, I want it to run from a file:// URL


## Not downloading things


