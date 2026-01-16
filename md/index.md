---
title: Spring 2026 INFO 102
subtitle: Little Bits to Big Ideas
header-includes:
  - '<script src="weekview.js"></script>'
  - '<style>div[is="week-view"] { width: 100%; }</style>'
summary: |
  <center>
  `https://courses.grainger.illinois.edu/cs102`
  </center>
  
  <center>
  [Polls](secure/clicker.php)  
  [Text](text/)  
  </center>
...


Welcome to INFO 102! We're excited to explore a wide variety of computing concepts with you.

See you in lecture! Attendance does count for this class.


# What this course covers

The official description of this course is:

> Broad introduction to the nature, capabilities, and limitations of computing. Topics range from the way data is represented and stored, to the way today's computers work, to the general ideas of algorithms and computational efficiency, to the future of computing. Covers "Great Ideas" across various areas of the field, including, for example, cryptography and internet security, problem solving, modeling and simulation, and artificial intelligence.

Breaking that down:

The way data is represented and stored
:   0s and 1s and how those combine to represent other things.

The way today's computers work
:   Silicon, computer architecture, what computer specs mean, GPUs, and so on.

Algorithms and computational efficiency
:   What algorithms are, how their efficiency is measured, how that impacts software design and purchasing decisions.

The future of computing
:   Trends in how computers and software, including disruptions like LLMs and quantum computers.

Great Ideas
:   - Cryptography, including cryptocurrency and post-quantum cryptography.
    - Databases, both SQL and NoSQL, and how data drives software design.
    - Modeling and simulation, using computers to predict real-world events.
    - Artificial Intelligence, both classical (e.g. chess-playing) and recent (e.g. generative).

The [first test page](text/goals.html) provides additional objectives of this course.


## Comparison to similar courses

CS 105
:   Both INFO/CS 102 and CS 105 are non-CS-major introductions to computing generally.
    CS 105 mixes that general overview with lightweight programming and programmable applications like spreadsheets,
    while INFO/CS 102 mixes it with emerging topics and conversations in computing.

CS 124
:   An introduction for students wishing to pursue a CS major or minor.
    CS 124 is primarily focused on programming, with much less overview of the computing field.

CS 101, STAT/CS/IS 107, ECE 120
:   These courses introduce specific parts of computing and programming motivated by the needs of practitioners in specific fields.
    They have much less general overview of computing than does INFO/CS 102, but more programming and more field-driven focus.


# Course components

Lecture (10%)
:   Attending lecture is required.
    
    A goal of this course is to prepare you to engage in conversations on computing topics.
    This is a broader goal than any single assessment can cover,
    so your presence in our in-class conversations is part of your grade.
    
Lab (24%)
:   Weekly labs will begin the second week of the course (<time datetime="2026-01-27">January 27^th^</time>).
    Each will have you go through several exercises related to recent lecture content
    and check off your work with a the course staff leading the lab.
    
    Some content would sink in until you experience it.
    The labs help provide that experience.

Homework (10%)
:   Weekly homeworks are intended to be practice, and also to keep you on track with the course material.
    You may re-take each homework as many times as you wish at no grade penalty,
    but must do so by the homework deadline.

Quizzes (36% = 3 x 12% each)
:   There are 3 scheduled in-class quizzes, each with a review day preceding them.
    These are administered on paper and test your mastery of topics covered in lecture and lab prior to the quiz.

    Quizzes are both a chance to review and refresh information learned previously
    and a chance to demonstrate what you have learned.

Final Exam (20%)
:   On <time datetime="2026-05-08T19:00:00">Friday, May 8 at 7pm</time>^[This day and time [was schedule by the registrar](https://registrar.illinois.edu/final-exam-scheduling-guidelines/).]
    we will have a cumulative in-person exam, broadly covering the content of all 3 quizzes.
    
    The final is partly a chance to review and refresh information learned previously.

    The final is partly a chance to show you have learned material you missed on the quizzes.
    Superior performance on the portion of the final the covers missed quiz material will increase prior quiz grades.
    
These components will be combined into a single percentage grade (0--100),
then converted to a grade point (0--4) by subtracting 56⅔ and dividing by 10,
then rounded up to a [grade point bucket that campus allows](https://studentcode.illinois.edu/article3/part1/3-103).

<details class="example"><summary>How a given percentage turns into a letter</summary>

```{=html}
<table><tbody>
<tr><th><label for="percentage">percentage</label></th><td><input type="number" min="0" max="100" id="percentage" oninput="percent2letter()" value="93"><td></tr>
<tr><th>grade point</th><td id="gp"><td></tr>
<tr><th>rounded</th><td id="round"><td></tr>
<tr><th>letter</th><td id="letter"><td></tr>
</tbody></table>
<script>
function percent2letter() {
  let p = document.getElementById('percentage').value;
  let g = (p-56+2/3)/10;
  let r = Math.min(Math.ceil(g*3)/3, 4);
  if (r < 2/6) r = 0;
  let letter = ["F","F","D−","D","D+","C−","C","C+","B−","B","B+","A−","A","A+"][Math.min(Math.round(g*3),13)];
  document.getElementById('gp').textContent = Math.round(g*10000)/10000;
  document.getElementById('round').textContent = r.toFixed(2);
  document.getElementById('letter').textContent = letter;
}
percent2letter()
</script>
```

</details>

# Schedule

## Weekly schedule

Labs will start the second week of classes (<time datetime="2026-01-27">Jan 27</time>).

Lecture will not be held on <time datetime="2026-02-18">February 18</time> and <time datetime="2026-02-20">20</time>
because the instructor and the likely substitute instructors will all be at [The Technical Symposium on Computer Science Education](https://sigcse2026.sigcse.org/). Labs will be held on those days as normal.

:::{is="week-view" st="9" et="19" style="width:var(--wide)"}

<div dow="1" st="9" d="50">Lecture<br/>[100 MSEB](https://facilityaccessmaps.fs.illinois.edu/archibus/schema/ab-products/essential/workplace/index.html?blId=0034&flId=01)</div>
<div dow="3" st="9" d="50">Lecture<br/>[100 MSEB](https://facilityaccessmaps.fs.illinois.edu/archibus/schema/ab-products/essential/workplace/index.html?blId=0034&flId=01)</div>
<div dow="5" st="9" d="50">Lecture<br/>[100 MSEB](https://facilityaccessmaps.fs.illinois.edu/archibus/schema/ab-products/essential/workplace/index.html?blId=0034&flId=01)</div>

<div dow="2" st="4" d="75">Lab 1<br/>TBA</div>
<div dow="2" st="5.5" d="75">Lab 4<br/>TBA</div>
<div dow="3" st="4" d="75">Lab 2<br/>[G27 LCLB](https://facilityaccessmaps.fs.illinois.edu/archibus/schema/ab-products/essential/workplace/index.html?blId=0172&flId=00)</div>
<div dow="3" st="5.5" d="75">Lab 5<br/>[G27 LCLB](https://facilityaccessmaps.fs.illinois.edu/archibus/schema/ab-products/essential/workplace/index.html?blId=0172&flId=00)</div>
<div dow="4" st="4" d="75">Lab 3<br/>TBA</div>

:::

## Calendar

You can subscribe to the course calendar in your calendar application of choice using [this ICS link](https://calendar.google.com/calendar/ical/c_a6e5c4a9324c11c3641d0815ab3b0f37f2f56221a186282a74814a45f40761dc%40group.calendar.google.com/public/basic.ics).

<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&showTitle=0&showCalendars=0&mode=WEEK&src=Y19hNmU1YzRhOTMyNGMxMWMzNjQxZDA4MTVhYjNiMGYzN2YyZjU2MjIxYTE4NjI4MmE3NDgxNGE0NWY0MDc2MWRjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23ef6c00" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

<script>
const iframeresize = event=>{
document.querySelectorAll('iframe').forEach(f => f.style.width="1em")
document.querySelectorAll('iframe').forEach(f => f.setAttribute('width', f.parentElement.scrollWidth))
document.querySelectorAll('iframe').forEach(f => f.style.width="var(--wide)")
}
window.addEventListener('load', iframeresize)
window.addEventListener('resize', iframeresize)
</script>

