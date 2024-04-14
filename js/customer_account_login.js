
function isValidEmail() {
    var email = document.getElementById("emailInput").value;
    if (email=="") {
      alert("Please enter your email.");
      return false;
    }
    if (!isValidEmailAddress(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  function validateForm() {
    let password = document.getElementById("password").value;
 let passwordError = document.getElementById("passwordError");

     // Check if password is exactly 8 digits
     let passwordPattern = /^\d{8}$/;
     if (!passwordPattern.test(password)) {
         alert("Password must be 8 digits long.");
         return false;
     } else {
         passwordError.textContent = "";
         return true;
     }
 }
 function validateForm() {
    let password = document.getElementById("password").value;

     // Check if password is exactly 8 digits
     let passwordPattern = /^\d{8}$/;
     if (!passwordPattern.test(password)) {
         alert("Password must be 8 digits long.");
         return false;
     } else {
         passwordError.textContent = "";
         return true;
     }

}

function validateForm() {
  let password = document.getElementById("password").value;

   // Check if password is exactly 8 digits
   let passwordPattern = /^\d{8}$/;
   if (!passwordPattern.test(password)) {
       alert("Password must be 8 digits long.");
       return false;
   } else {
       passwordError.textContent = "";
       return true;
   }

}
