<?php

$name = $_REQUEST['name'];
$location = $_REQUEST['location'];

setcookie("username", $name);
setcookie("location", $location);

?>