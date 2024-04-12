// Get the like button, dislike button, and like count element
const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');
const likeCount = document.getElementById('like-count');

let likes = 0;

// Function to increment likes
function incrementLikes() {
  likes++;
  likeCount.textContent = likes;
}

// Function to decrement likes
function decrementLikes() {
  if (likes > 0) {
    likes--;
    likeCount.textContent = likes;
  }
}

// Event listeners for like button clicks
likeBtn.addEventListener('click', incrementLikes);
dislikeBtn.addEventListener('click', decrementLikes);


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