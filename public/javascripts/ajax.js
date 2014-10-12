$(document).ready(function() {
    $("#btnAddUser").click(function(){
        $.post("/signup", { "username" : $("#inputUsername")[0].value, "password" : $("#inputPassword")[0].value }, function(res) {
            if (typeof res.error_code != 'undefined' && res.error_code == -1) {
                $("#inputMessageBox")[0].value = "The user name should be 5~20 characters long. Please try again.";
            } else if (typeof res.error_code != 'undefined' && res.error_code == -2) {
                $("#inputMessageBox")[0].value = "The password should be 8~20 characters long. Please try again.";
            } else if (typeof res.error_code != 'undefined' && res.error_code == -3) {
                $("#inputMessageBox")[0].value = "This user name already exists. Please try again.";
            } else if (typeof res.user_name != 'undefined' && typeof res.login_count != 'undefined') {
                window.location.href = "/welcome";
            } else {
                $("#inputMessageBox")[0].value = "Unknown error. Please try again.";
            }
        }, "json");
    });
    $("#btnLogin").click(function(){
        $.post("/login", { "username" : $("#inputUsername")[0].value, "password" : $("#inputPassword")[0].value }, function(res) {
            if (typeof res.error_code != 'undefined' && res.error_code == -4) {
                $("#inputMessageBox")[0].value = "Invalid username and password combination. Please try again.";
            } else if (typeof res.user_name != 'undefined' && typeof res.login_count != 'undefined') {
                window.location.href = "/welcome";
            } else {
                $("#inputMessageBox")[0].value = "Unknown error. Please try again.";
            }
        }, "json");
    });
});
