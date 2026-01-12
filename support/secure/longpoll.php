<?php
$fname = "../private/longpoll-test.txt";
$fh = fopen($fname, "r");
if (!$fh) die("");
$when = filemtime($fname);
fpassthru($fh);
while(true){
  clearstatcache();
  $newwhen = filemtime($fname);
  if ($newwhen != $when) {
    $when = $newwhen;
    fpassthru($fh);
  } else sleep(1); // blocks process, not good at scale
}
fclose($fh);
?>
