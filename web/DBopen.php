<?php
	<?php
    $db = mysqli_connect('a2plcpnl0384.prod.iad2.secureserver.net', 'theemptybicycle@localhost', 'JerryLauis#1', 'otterSessionDB') or die("Unable to connect fam");
    echo "Connect fam we out";

	$username = "theemptybicycle";
	$password = "JerryLauis#1";
	$hostname = "a2plcpnl0384.prod.iad2.secureserver.net"; 

	//connection to the database
	$dbhandle = mysql_connect($hostname, $username, $password) 
	  or die("Unable to connect to MySQL");
	echo "Connected to MySQL<br>";
?>
