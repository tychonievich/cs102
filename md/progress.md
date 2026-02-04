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
    document.getElementById('update').textContent = when.toLocaleString();
    
    p.innerHTML = '<hr/><p>Viewing data for <tt>'+data.user+'</tt></p><dl><dt>Lecture (10% weight)</dt><dd id="lecture"></dd><dt>Lab (24% weight)</dt><dd id="lab"></dd><dt>Homework (10% weight)</dt><dd id="homework"></dd><dt>Quizzes (36% weight)</dt><dd id="quiz"></dd><dt>Final Exam (20% weight)</dt><dd id="final">Not completed yet; this will appear in the future.</dd><dt>Overall</dt><dd id="overall"></dd></dl>';
    
    let tot = 0;
    let of = 0;
    
    for(let [n,w] of [['lecture',10],['lab',24],['homework',10],['quiz',36]]) {
      if (data[n].of) {
        of += w;
        tot += w*data[n].score/data[n].of;
        document.getElementById(n).innerHTML = `<p>Score so far: ${100*data[n].score/data[n].of}%</p><ul>${Object.entries(data[n].details).map(([d,s])=>'<li>'+d+': '+s+'</li>').join('')}</ul>`;
        
      } else {
        document.getElementById(n).append('None completed yet; these will appear in the future.');
      }
    }
    
    document.getElementById('overall').innerHTML = `<p>${of ? 100*tot/of : 'unknown'}%</p>`;
    
  })
</script>
```
