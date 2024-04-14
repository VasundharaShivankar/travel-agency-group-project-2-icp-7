        
        var countDownDate = new Date("Apr 30, 2024 00:00:00").getTime();

        
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now; 
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);

        
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