<script>
// Get the image element
var img = document.getElementById('myImage');

// Add event listener for mouseover
img.addEventListener('mouseover', function() {
  // Add the class to the image
  this.classList.add('hover-effect');
});

// Add event listener for mouseout to remove the class
img.addEventListener('mouseout', function() {
  // Remove the class from the image
  this.classList.remove('hover-effect');
});
</script>
