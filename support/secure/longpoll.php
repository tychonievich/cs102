<?php
$fname = "../private/longpoll-test.txt";
$fh = fopen($fname, "r");
if (!$fh) die("");
$when = filemtime($fname);
fpassthru($fh);
flush();
while(true){
  clearstatcache();
  $newwhen = filemtime($fname);
  if ($newwhen != $when) {
    $when = $newwhen;
    fpassthru($fh);
    flush();
  } else sleep(1); // blocks process, not good at scale
}
fclose($fh);
?>
