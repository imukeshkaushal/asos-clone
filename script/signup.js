document.querySelector("#form").addEventListener("submit",myFormSubmit);
var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];
function myFormSubmit(){
    event.preventDefault();
    var signupObj = {
        email:document.querySelector("#email").value,
        firstname:document.querySelector("#firstname").value,
        lastname:document.querySelector("#lastname").value,
        password : document.querySelector("#password").value,
        dob : document.querySelector("#dob").value,
    };
    signupArr.push(signupObj);
    console.log(signupArr);
    localStorage.setItem("signUpDetails",JSON.stringify(signupArr));
    document.querySelector("input[type='submit']").addEventListener("click",function(){
        alert("You are successfully Registered. Now We are Moving You to Login Page. Click on OK to Login or Reditect");
        window.location.href="login.html";
    })
    

   
}