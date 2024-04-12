function readMore(){
    document.write(`hjdhjc`)
}

function isValidEmail() {
    var emailInput = document.getElementById("emailInput").value.trim();
    var errorMessage = document.getElementById("errorMessage");

    // Regular expression for email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailPattern.test(emailInput)) {
        // Valid email format
        errorMessage.textContent = "";
        return true;
    } else {
        // Invalid email format
        errorMessage.textContent = "Please enter a valid email address in the format 'example@example.com'";
        alert("Invalid email format. Please correct it.");
        return false;
    }
}