document
.getElementById("contactForm")
.addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  if (name === "") {
    nameError.textContent = "Please enter your name.";
    return;
  }
  if (email === "") {
    emailError.textContent = "Please enter your email.";
    return;
  }
  if (message === "") {
    messageError.textContent = "Please enter your message.";
    return;
  }

  // If all fields are filled, submit the form
  this.submit();
});


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
    
    
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        var nameError = document.getElementById("nameError");
        var emailError = document.getElementById("emailError");
        var messageError = document.getElementById("messageError");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        if (name === "") {
          nameError.textContent = "Please enter your name.";
          return;
        }
        if (email === "") {
          emailError.textContent = "Please enter your email.";
          return;
        }
        if (message === "") {
          messageError.textContent = "Please enter your message.";
          return;
        }

        this.submit();
      });
