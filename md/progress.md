---
title: Progress in course
...

This page shows your progress towards this course's measure of objectives.

Different aspects of this view are collected and stored using different tools,
requiring this page to be manually updated by the instructor.
This view was last updated <time id="update">never</time>.

:::{#progress}
(refresh this page to log in and view your progress)
:::

```{=html}
<script>
fetch('secure/progress.php')
  .then(res => res.json())
  .then(data => {
    const p = document.getElementById('progress');
    if (!data) {
      p.innerHTML = 'No grade data found for you. If you are a student and have completed work for the course, please contact the instructor to have this resolved.'
      return;
    }
    const when = new Date(data.updated*1000);
    document.getElementById('update').dateTime = when.toJSON();
    document.getElementById('update').append(when.toLocaleString());
    
    p.innerHTML = '<hr/><p>Viewing data for <tt>'+data.user+'</tt></p><dl><dt>Lecture (10% weight)</dt><dd id="lecture"></dd><dt>Lab (24% weight)</dt><dd id="lab"></dd><dt>Homework (10% weight)</dt><dd id="homework"></dd><dt>Quizzes (36% weight)</dt><dd id="quizzes"></dd><dt>Final Exam (20% weight)</dt><dd id="final"></dd><dt>Overall</dt><dd id="overall"></dd></dl>';
    
    let tot = 0;
    let of = 0;
    if (data.lecture.of) {
      of += 10;
      tot += 10*data.lecture.score/data.lecture.of;
      document.getElement('lecture').innerHTML = `<p>Score so far: ${100*data.lecture.score/data.lecture.of}%</p><p>Components of score:</p><ul>${Object.entries(data.lecture.details).map(([d,s])=>'<li>'+d+': '+s+'</li>').join('')}</ul>`;
      
    } else {
      document.getElement('lecture').append('None completed yet; these will appear in the future.');
    }
    
  })
</script>
```
