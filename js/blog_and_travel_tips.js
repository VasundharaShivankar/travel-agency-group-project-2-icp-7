let likes = 0;
function incrementLikes() {
    const likeBtn = document.getElementById('like-btn');
    const likeCount = document.getElementById('like-count');
  likes++;
  likeCount.textContent = likes;
}
function decrementLikes() {
    const dislikeBtn = document.getElementById('dislike-btn');
    const likeCount = document.getElementById('like-count');
  if (likes > 0) {
    likes--;
    likeCount.textContent = likes;
  }
}
likeBtn.addEventListener('click', incrementLikes);
dislikeBtn.addEventListener('click', decrementLikes);


image.addEventListener('mouseenter', function() {
  const image1 = document.getElementById('image1');
    image1.style.filter = 'brightness(120%)'; 
});
image.addEventListener('mouseleave', function() {
  const image1 = document.getElementById('image1');
    image1.style.filter = '';
});


image.addEventListener('mouseenter', function() {
  const image2 = document.getElementById('image2');
    image2.style.filter = 'brightness(120%)'; 
});
image.addEventListener('mouseleave', function() {
  const image2 = document.getElementById('image2');
    image2.style.filter = '';
});

image.addEventListener('mouseenter', function() {
  const image3 = document.getElementById('image3');
    image3.style.filter = 'brightness(120%)'; 
});
image.addEventListener('mouseleave', function() {
  const image3 = document.getElementById('image3');
    image3.style.filter = '';
});

image.addEventListener('mouseenter', function() {
  const image4 = document.getElementById('image4');
    image4.style.filter = 'brightness(120%)'; 
});
image.addEventListener('mouseleave', function() {
  const image4 = document.getElementById('image4');
    image4.style.filter = '';
});

image.addEventListener('mouseenter', function() {
  const image5 = document.getElementById('image5');
    image5.style.filter = 'brightness(120%)'; 
});
image.addEventListener('mouseleave', function() {
  const image5 = document.getElementById('image5');
    image5.style.filter = '';
});


function isValidEmail() { 
    if (emailPattern.test(emailInput)) {
        var emailInput = document.getElementById("emailInput").value.trim();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        errorMessage.textContent = "";
        return true;
    } else {
        var errorMessage = document.getElementById("errorMessage");
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        errorMessage.textContent = "Please enter a valid email address in the format 'example@example.com'";
        alert("Invalid email format. Please correct it.");
        return false;
    }
}

