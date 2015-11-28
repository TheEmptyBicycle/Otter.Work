<?php

 if ($_COOKIE != null && $_COOKIE['username'] != null){
    echo ($_COOKIE['username']);
 }
 else {
    echo ("empty");
 }

?>