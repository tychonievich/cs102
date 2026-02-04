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
    }
  })
</script>
```
