function submitLogin() {
	var username = $("#usernameBox").val();
	var password = $("#passwordBox").val();

	$.post("dbOpener.php",
        {
          name: username,
          password: password
        },
        function(data,status){
            if (data == "Invalid"){
               $("#loginMsg").text("Invalid Username or Passord, try again.");
            }
            else {
               $('#loginScreen').fadeOut();
               $('#cover').fadeOut();
               $('.titleBar').fadeIn(500);
               $('.map').fadeIn(500);
               $('.btnLayout').fadeIn(500);
               
               $.post("userData.php", { name: username, location: "Santa Cruz" });
               }
        });

 }
