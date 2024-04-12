function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function getUserEmail() {
    var email = document.getElementById("emailInput").value;
    if (isValidEmail(email)) {
        document.getElementById("userEmail").innerText = "User's email: " + email;
        return true;
    } else {
        alert("Invalid email address! Please enter a valid email address.");
        return false;
    }
}
