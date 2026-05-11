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
function percent2letter(p) {
  let g = (p-55)/10;
  let g2 = (p-56-2/3)/10;
  let r = Math.min(Math.round(g*3)/3, 4);
  if (r < 2/6) r = 0;
  return ["F","F","D−","D","D+","C−","C","C+","B−","B","B+","A−","A","A+"][Math.min(Math.round(g*3),13)];
}
percent2letter()

fetch('secure/progress.php'+location.search)
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
    
    p.innerHTML = '<hr/><p>Viewing data for <tt>'+data.user+'</tt></p><dl><dt>Lecture (10% weight)</dt><dd id="lecture"></dd><dt>Lab (24% weight)</dt><dd id="lab"></dd><dt>Homework (10% weight)</dt><dd id="homework"></dd><dt>Quizzes (36% weight)</dt><dd id="quiz"></dd><dt>Simulated Final (20% weight)</dt><dd id="final"></dd><dt>Overall</dt><dd id="overall"></dd></dl>';
    
    let tot = 0;
    let of = 0;
    
    for(let [n,w] of [['lecture',10],['lab',24],['homework',10],['quiz',0],['final',56]]) {
      if (data[n].of) {
        of += w;
        tot += w*data[n].score/data[n].of;
        document.getElementById(n).innerHTML = `<p>Score: ${100*data[n].score/data[n].of}%</p><ul>${Object.entries(data[n].details).map(([d,s])=>'<li>'+d+': '+s+'</li>').join('')}</ul>`;
        
      } else {
        document.getElementById(n).append('ERROR: some of your grades seem to be missing.');
      }
    }
    
    document.getElementById('overall').innerHTML = `<p>${of ? 100*tot/of : 'unknown'}% (${percent2letter(100*tot/of)})</p>`;
    
  })
</script>
```

----------

Quiz 1 [blank (PDF)](quiz1.pdf) and [key (PDF)](quiz1key.pdf). Mean: 75.8%; median: 80%. Note that Question 13 was was marked wrong by the grader on some paper quizzes, but was not included (right or wrong) in quiz point computation because of an ambiguity in its phrasing cause the staff did not agree on the correct answer.


Quiz 2 [blank (PDF)](quiz2.pdf) and [key (PDF)](quiz2key.pdf). Mean: 75.2%; median: 80%. This was graded out of 15 points, not 16, to allow for forgetting one term. Because some partial-credit answers were highly correlated (if you got one you often got another), one partial-credit answer was weighted as full-credit (if applicable to your quiz).

Quiz 3 [blank (PDF)](quiz3.pdf) and [key (PDF)](quiz3key.pdf). Mean: 81.3%; median: 83%. Questions 1, 8, and 13 (the first of two numbered 13) were identified in some students' comments as having ambiguities that, once pointed out, I agreed rendered the questions invalid, so they were dropped. To compensate for the stress caused by so many ambiguous questions, a free point was added to each quiz.
