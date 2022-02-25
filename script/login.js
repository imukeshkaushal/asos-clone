var users = JSON.parse(localStorage.getItem("signUpDetails"));
console.log(users);

document.querySelector("#form").addEventListener("submit",formSubmit);

var form = document.querySelector("#form");
// console.log(form.email);
function formSubmit(event) {
    event.preventDefault();
    var email = form.email.value;
    var password = form.password.value;

    for (var i = 0; i < users.length; i++) {
        console.log(users[i].email, users[i].password);
        if (users[i].email == email && users[i].password == password) {
            window.location.href = "home.html";
        }
        // } else{
        //     alert("You are Enter Wrong Email or Password");
        //     break;
        // }
    }

}
