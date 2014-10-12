$(document).ready(function() {
    $("#btnAddUser").click(function(){
        $.post("/signup", { "username" : $("#inputUsername")[0].value, "password" : $("#inputPassword")[0].value }).done(function(res) {
            alert(res);
        });
    });
});
