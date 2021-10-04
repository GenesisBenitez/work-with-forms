var form = document.getElementById("myForm");
var username = document.getElementById("username");
var password = document.getElementById("password");
var list = document.getElementById("list");

form.addEventListener("submit", function(e){
    e.preventDefault();
    list.innerHTML = "";
    var li = document.createElement("li");
    li.innerHTML = "Username: " + username.value + " " + "Password: " + password.value;
    list.appendChild(li);
})