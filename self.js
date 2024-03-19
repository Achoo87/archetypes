document.addEventListener("DOMContentLoaded", function() {
  // Function to update the clock
  function updateTime() {
    var now = new Date();
    var options = { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    var timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById("clock").textContent = timeString;
  }
  
  // Call updateTime function to update clock with local time and timezone
  updateTime();
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Function to reload the page
  function resetPage() {
    location.reload(); // Reload the page
  }

  // Add event listener to the reset button
  document.getElementById("resetButton").addEventListener("click", resetPage);
  
  // Array to store paragraphs
  var paragraphs = document.querySelectorAll('.contentParagraph');
  var index = 0;
  var typingSpeed = 50; // Default typing speed
  var minSpeed = 10; // Minimum typing speed
  var maxSpeed = 100; // Maximum typing speed
  var isPaused = false; // Boolean variable to track pause state
  
  // Function to type paragraphs
  function typeParagraph(index) {
    if (index < paragraphs.length) {
      var paragraph = paragraphs[index];
      var text = paragraph.textContent.trim();
      paragraph.textContent = ''; // Clear the paragraph content
      var currentIndex = 0;
  
      function type() {
        if (isPaused) {
          // If paused, wait for unpause
          setTimeout(type, 100); // Check again after 100 milliseconds
          return;
        }
  
        if (currentIndex < text.length) {
          paragraph.style.opacity = '1'; // Show the paragraph
          paragraph.textContent += text.charAt(currentIndex);
          currentIndex++;
          setTimeout(type, typingSpeed);
        } else {
          // Move to the next paragraph if available
          typeParagraph(index + 1);
        }
      }
  
      // Start typing
      type();
    }
  }
  
  // Start typing the first paragraph
  typeParagraph(index);
  
  // Listen for keydown events on arrow keys, spacebar, and delete key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      // Increase typing speed
      typingSpeed = Math.max(typingSpeed - 5, minSpeed);
    } else if (event.key === 'ArrowLeft') {
      // Decrease typing speed
      typingSpeed = Math.min(typingSpeed + 5, maxSpeed);
    } else if (event.key === ' ') {
      // Toggle pause state
      isPaused = !isPaused;
    } else if (event.key === 'Escape') {
      // Redirect to main.html
      window.location.href = 'portals.html';
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var mainCircle = document.querySelector('.circle');

  // Function to create circles
  function createCircles(event) {
    // Create new circles
    for (var i = 0; i < 100; i++) {
      var circle = document.createElement('div');
      circle.classList.add('dynamic-circle');
      circle.style.width = '10px';
      circle.style.height = '10px';
      circle.style.borderRadius = '50%'; // Ensure the circle is perfectly round
      circle.style.position = 'fixed';
      circle.style.backgroundColor = 'white';
      circle.style.zIndex = '999999'; // Ensure the new circles are above the main circle
      circle.style.transition = 'all 1s ease-in-out'; // Add transition for smooth effect
      circle.style.opacity = '0'; // Start with opacity 0
      document.body.appendChild(circle);

      // Randomize position across the viewport
      var randomX = Math.floor(Math.random() * window.innerWidth);
      var randomY = Math.floor(Math.random() * window.innerHeight);

      // Randomize size between 5px and 20px
      var randomSize = Math.floor(Math.random() * 15) + 5;

      // Randomize animation duration between 0.5s and 1.5s
      var randomDuration = (Math.random() * 1) + 0.5;

      // Apply styles
      circle.style.top = randomY + 'px';
      circle.style.left = randomX + 'px';
      circle.style.width = randomSize + 'px';
      circle.style.height = randomSize + 'px';
      circle.style.opacity = '1';
      circle.style.transitionDuration = randomDuration + 's';

      // Remove the circle after the animation ends
      setTimeout(function() {
        document.body.removeChild(circle);
      }, randomDuration * 1000);
    }
  }

  // Event listener for mouseover event on the main circle
  mainCircle.addEventListener('mouseover', createCircles);
});
