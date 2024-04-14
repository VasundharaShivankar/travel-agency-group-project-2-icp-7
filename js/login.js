
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
  
 let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior ="auto";

});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -= 900;
});

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior ="auto";

});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -= 900;
});
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


function loadMore1() {
  var contentDiv = document.getElementById("content1");
  var loadMoreBtn = document.getElementById("loadMoreBtn1");

  if (contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
    loadMoreBtn.textContent = "Show Less";
  } else {
    contentDiv.style.display = "none";
    loadMoreBtn.textContent = "Load More";
  }
}

function loadMore2() {
  var contentDiv = document.getElementById("content2");
  var loadMoreBtn = document.getElementById("loadMoreBtn2");

  if (contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
    loadMoreBtn.textContent = "Show Less";
  } else {
    contentDiv.style.display = "none";
    loadMoreBtn.textContent = "Load More";
  }
}

function loadMore3() {
  var contentDiv = document.getElementById("content3");
  var loadMoreBtn = document.getElementById("loadMoreBtn3");

  if (contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
    loadMoreBtn.textContent = "Show Less";
  } else {
    contentDiv.style.display = "none";
    loadMoreBtn.textContent = "Load More";
  }
}

function loadMore4() {
  var contentDiv = document.getElementById("content4");
  var loadMoreBtn = document.getElementById("loadMoreBtn4");

  if (contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
    loadMoreBtn.textContent = "Show Less";
  } else {
    contentDiv.style.display = "none";
    loadMoreBtn.textContent = "Load More";
  }
}

function loadMore5() {
  var contentDiv = document.getElementById("content5");
  var loadMoreBtn = document.getElementById("loadMoreBtn5");

  if (contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
    loadMoreBtn.textContent = "Show Less";
  } else {
    contentDiv.style.display = "none";
    loadMoreBtn.textContent = "Load More";
  }
}

image.addEventListener('mouseenter', function() {
  const image5 = document.getElementById('image5');
    image5.style.filter = 'brightness(120%)'; 
});
image.addEventListener('mouseleave', function() {
  const image5 = document.getElementById('image5');
    image5.style.filter = '';
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
function inc(){
    const quantityText = document.getElementById('quantity-text');
    let quantity = parseInt(quantityText.innerText);

    quantityText.innerText = ++quantity;
}
    
function dec(){
const quantityText = document.getElementById('quantity-text');
    let quantity = parseInt(quantityText.innerText);

   
    if(quantity>1)
    {
        quantityText.innerText = --quantity;

    }

else{
alert("you can' add less than one traveler");
}
}
function incre(){
    const quantityText = document.getElementById('quan-txt');
    let quantity = parseInt(quantityText.innerText);

    quantityText.innerText = ++quantity;
}
    
function decre(){
const quantityText = document.getElementById('quan-txt');
    let quantity = parseInt(quantityText.innerText);

   
    if(quantity>0)
    {
        quantityText.innerText = --quantity;

    }

else{
alert("you can' add less than zero child traveler");
}
}
function inc(){
    const quantityText = document.getElementById('quantity-text');
    let quantity = parseInt(quantityText.innerText);

    quantityText.innerText = ++quantity;
}
    
function dec(){
const quantityText = document.getElementById('quantity-text');
    let quantity = parseInt(quantityText.innerText);

   
    if(quantity>1)
    {
        quantityText.innerText = --quantity;

    }

else{
alert("you can' add less than one traveler");
}
}
function incre(){
    const quantityText = document.getElementById('quan-txt');
    let quantity = parseInt(quantityText.innerText);

    quantityText.innerText = ++quantity;
}
    
function decre(){
const quantityText = document.getElementById('quan-txt');
    let quantity = parseInt(quantityText.innerText);

   
    if(quantity>0)
    {
        quantityText.innerText = --quantity;

    }

else{
alert("you can' add less than zero child traveler");
}
}

function inc(){
    const quantityText = document.getElementById('quantity-text');
    let quantity = parseInt(quantityText.innerText);

    quantityText.innerText = ++quantity;
}
    
function dec(){
const quantityText = document.getElementById('quantity-text');
    let quantity = parseInt(quantityText.innerText);

   
    if(quantity>1)
    {
        quantityText.innerText = --quantity;

    }

else{
alert("you can' add less than one traveler");
}
}
function incre(){
    const quantityText = document.getElementById('quan-txt');
    let quantity = parseInt(quantityText.innerText);

    quantityText.innerText = ++quantity;
}
    
function decre(){
const quantityText = document.getElementById('quan-txt');
    let quantity = parseInt(quantityText.innerText);

   
    if(quantity>0)
    {
        quantityText.innerText = --quantity;

    }

else{
alert("you can' add less than zero child traveler");
}
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
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior ="auto";

});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -= 900;
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

function changeBg(num){

    const bg=document.getElementById("bg-img");
    bg.className='heading';
    if (num==1){
    bg.className='heading1';
   
    const b=document.getElementById("bg1");
    b.classList.add("border");
    const b1=document.getElementById("bg2");
    b1.classList.remove("border");
    const b2=document.getElementById("bg3");
    b2.classList.remove("border");
    const b3=document.getElementById("bg4");
    b3.classList.remove("border");
   
    }
    else if(num==2){
     bg.src='./../img/packages_img/background/bg2.jpg';
     bg.className='heading2';
   
     const back_img=document.getElementById("bg2");
     back_img.classList.add("border");
   
    const b=document.getElementById("bg1");
    b.classList.remove("border");
    
    const b2=document.getElementById("bg3");
    b2.classList.remove("border");
    const b3=document.getElementById("bg4");
    b3.classList.remove("border");
    }
    else if(num==3) {
     bg.src='./../img/packages_img/background/bg3.jpg';
     bg.className='heading3';
   
     const back_img=document.getElementById("bg3");
     back_img.classList.add("border");
    const b=document.getElementById("bg2");
    b.classList.remove("border");
   
    const b1=document.getElementById("bg1");
    b1.classList.remove("border");
    
    const b3=document.getElementById("bg4");
    b3.classList.remove("border");
   }
   else if (num==4){
     bg.src='./../img/packages_img/background/bg4.jpg';
     bg.className='heading4';
   
     const back_img=document.getElementById("bg4");
     back_img.classList.add("border");
    const b=document.getElementById("bg3");
    b.classList.remove("border");
    const b1=document.getElementById("bg2");
    b1.classList.remove("border");
    const b2=document.getElementById("bg1");
    b2.classList.remove("border");
   
   }
   }
   
   
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


