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
  [First Homework](https://forms.gle/CrKUXPbkiW5DCbZs7)   
  [Homework](https://us.prairielearn.com/pl/course_instance/206500)  
  [Labs](labs/)  
  [Lectures](lectures/)  
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
    
    The first homework is a [google form](https://forms.gle/CrKUXPbkiW5DCbZs7). You must log in with your illinois.edu account; if you've not done that with Google before, see [this guide from the university CIO](https://answers.uillinois.edu/illinois/47599).
    
    Other homeworks are hosted on [PrairieLearn](https://us.prairielearn.com/pl/course_instance/206500).
    The instructor will manually add your PrairieLearn access on the first day of class,
    or approximately 2 business days after you enroll if you enroll later than that.

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

## Cumulative Grade

The course components will be combined into a single percentage grade (0--100)
using the percentages given in the list of [course components].
That percentage  will be converted to a grade point (0--4) by subtracting 56⅔ and dividing by 10,
then rounded up to a [grade point bucket that campus allows](https://studentcode.illinois.edu/article3/part1/3-103).
As special cases, both F+ (0.33) and A+ (4.33) are omitted by campus and will be turned into F (0.00) and A+ (4.00) respectively.

This process, or slight variants of it, are common to many courses
and result in 90s getting As, 80s getting Bs, and so on, with pluses and minuses.

<details class="example"><summary>How a given percentage turns into a letter</summary>

```{=html}
<table><tbody>
<tr><th><label for="percentage">percentage</label></th><td><input type="number" min="0" max="100" id="percentage" oninput="percent2letter()" value="93"><td></tr>
<tr><th>grade point</th><td id="gp"><td></tr>
<tr><th>rounded up</th><td id="round"><td></tr>
<tr><th>letter</th><td id="letter"><td></tr>
</tbody></table>
<script>
function percent2letter() {
  let p = document.getElementById('percentage').value;
  let g = (p-55)/10;
  let g2 = (p-56-2/3)/10;
  let r = Math.min(Math.round(g*3)/3, 4);
  if (r < 2/6) r = 0;
  let letter = ["F","F","D−","D","D+","C−","C","C+","B−","B","B+","A−","A","A+"][Math.min(Math.round(g*3),13)];
  document.getElementById('gp').textContent = g2;
  document.getElementById('round').textContent = r.toFixed(2);
  document.getElementById('letter').textContent = letter;
}
percent2letter()
</script>
```

</details>

## Absences

If you need to be absent from a lecture or lab,
please enter that into [this form](https://forms.gle/ByxWmPJTo2eP96FM9).
These requests are generally approved automatically, with exceptions noted to you in an email from the instructor containing the phrase "102 absence request" in the subject line.

If you need to change a homework deadline,
first complete the homework as normal: it will show each question's score, but have a 0% overall if you miss the deadline.
Then enter an absence request for the homework into [this form](https://forms.gle/ByxWmPJTo2eP96FM9),
which the staff will use to prompt a manual update of your grade.

Quiz absences are approved only on a case-by-case basis;
if you need one, please email the instructor
with "102 quiz absence" in the subject line
and include suggested dates and times when a makeup quiz might be possible.

Exam absences require both dean-level approvals and instructor scheduling.
If you need to reschedule the exam, let the instructor know as soon as possible.


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
<div dow="3" st="4" d="75">Lab 2<br/>TBA</div>
<div dow="3" st="5.5" d="75">Lab 5<br/>TBA</div>
<div dow="4" st="4" d="75">Lab 3<br/>TBA</div>

:::

## Calendar

You can subscribe to the course calendar in your calendar application of choice using [this ICS link](https://calendar.google.com/calendar/ical/c_a6e5c4a9324c11c3641d0815ab3b0f37f2f56221a186282a74814a45f40761dc%40group.calendar.google.com/public/basic.ics).

<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&showTitle=0&showCalendars=0&mode=AGENDA&src=Y19hNmU1YzRhOTMyNGMxMWMzNjQxZDA4MTVhYjNiMGYzN2YyZjU2MjIxYTE4NjI4MmE3NDgxNGE0NWY0MDc2MWRjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23ef6c00" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

<script>
const iframeresize = event=>{
document.querySelectorAll('iframe').forEach(f => f.style.width="1em")
document.querySelectorAll('iframe').forEach(f => f.setAttribute('width', f.parentElement.scrollWidth))
document.querySelectorAll('iframe').forEach(f => f.style.width="var(--wide)")
}
window.addEventListener('load', iframeresize)
window.addEventListener('resize', iframeresize)
</script>

# Staff

The course instructor is [Luther Tychonievich](https://siebelschool.illinois.edu/about/people/all-faculty/luthert)^[Tychonievich is pronounced like "Tie CON of Itch"].

The course teaching assistants are Kamtikar Shivani (leading labs 3, 4, and 5) and Kashinath Ashish (leading labs 1 and 2).

Most interactions with staff should be in-person or directed to the course's online forum, the tool for which will be selected on the first day of class.

Sensitive information, including information about disabilities and disruptive life events, should be directed to the course instructor via email, or in a meeting with the professor scheduled by sending some times that work for you to the instructor by email. Any email should include "102" in the subject to minimize the chance that it is lost among the many other emails the instructor receives.


# Policies and Resources

## Collaboration with humans and AI

Our goal is to foster and measure your internalized understanding of course content.
As such, collaboration, both with humans and with AIs, is encouraged when it is helping you learn
but discouraged when it is bypassing your need to learn.

You should follow the instructions of lab staff on how to scope collaboration in labs.

You may not collaborate on quizzes or exams.


## Mental Health

Significant stress, mood changes, excessive worry, substance/alcohol misuse or interferences in eating or sleep can have an impact on academic performance, social development, and emotional wellbeing. The University of Illinois offers a variety of confidential services including individual and group counseling, crisis intervention, psychiatric services, and specialized screenings which are covered through the Student Health Fee. If you or someone you know experiences any of the above mental health concerns, it is strongly encouraged to contact or visit any of the University’s resources provided below.  Getting help is a smart and courageous thing to do for yourself and for those who care about you.

- Counseling Center (217) 333-3704, 610 East John Street Champaign, IL 61820
- McKinley Health Center (217) 333-2700, 1109 South Lincoln Avenue, Urbana, Illinois 61801
- National Suicide Prevention Lifeline (800) 273-8255
- Rosecrance Crisis Line (217) 359-4141 (available 24/7, 365 days a year)

*This statement is approved by the University of Illinois Counseling Center*


## Disability-Related Accommodations (DRES)

To obtain disability-related academic adjustments and/or auxiliary aids, students with disabilities must contact the course instructors and the Disability Resources and Educational Services (DRES) as soon as possible. To contact DRES, you may visit 1207 S. Oak St., Champaign, call 217-333-4603, e-mail disability@illinois.edu or go to <https://www.disability.illinois.edu>.  If you are concerned you have a disability-related condition that is impacting your academic progress, there are academic screening appointments available that can help diagnosis a previously undiagnosed disability. You may access these by visiting the DRES website and selecting “Request an Academic Screening” at the bottom of the page.


## Community of Care

As members of the Illinois community, we each have a responsibility to express care and concern for one another. If you come across a classmate whose behavior concerns you, whether in regards to their well-being or yours, we encourage you to refer this behavior to the Student Assistance Center (217-333-0050 or <http://odos.illinois.edu/community-of-care/referral/>). Based on your report, the staff in the Student Assistance Center reaches out to students to make sure they have the support they need to be healthy and safe.

Further, we understand the impact that struggles with mental health can have on your experience at Illinois. Significant stress, strained relationships, anxiety, excessive worry, alcohol/drug problems, a loss of motivation, or problems with eating and/or sleeping can all interfere with optimal academic performance. We encourage all students to reach out to talk with someone, and we want to make sure you are aware that you can access mental health support at McKinley Health Center (<https://mckinley.illinois.edu/>).  Or the Counseling Center (<https://counselingcenter.illinois.edu/>). For urgent matters during business hours, no appointment is needed to contact the Counseling Center. For mental health emergencies, you can call 911.


## Reporting negative experiences

It is the goal of all course staff to create and maintain a welcoming, safe learning environment for all students.
One way you can help with that is to let us know of anything that feels unwelcoming or unsafe.
You are welcome to encouraged to share these with any member of the course staff, as we are most likely to be able to correct the situation.

You are also welcome to inform the Bias Assessment and Response Team (BART) (<https://bart.illinois.edu/>). Based on your report, BART members will follow up and reach out to students to make sure they have the support they need to be healthy and safe. If the reported behavior also violates university policy, staff in the Office for Student Conflict Resolution may respond as well and will take appropriate action.


## Family Educational Rights and Privacy Act (FERPA)

Any student who has suppressed their directory information pursuant to Family Educational Rights and Privacy Act (FERPA) should self-identify to the instructors to ensure protection of the privacy of their attendance in this course. See <https://registrar.illinois.edu/academic-records/ferpa/> for more information on FERPA.


