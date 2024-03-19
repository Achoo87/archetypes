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


function resetPage() {
    location.reload(); // Reload the page
}

// Add event listener to the reset button
document.getElementById("resetButton").addEventListener("click", resetPage)

document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll('.contentParagraph');
    var index = 0;
    var typingSpeed = 50; // Default typing speed
    var minSpeed = 10; // Minimum typing speed
    var maxSpeed = 100; // Maximum typing speed
    var isPaused = false; // Boolean variable to track pause state

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
    let circles = document.querySelectorAll('.background .circle');
    let currentIndex = 0;
    let positions = [650, 650, 650]; // Initial left positions of each circle
  
    // Initialize positions of circles
    for (let i = 0; i < circles.length; i++) {
      circles[i].style.left = positions[i] + 'px';
      circles[i].style.top = '500px'; // Set top position
    }
  
    // Function to animate circles
    function animate() {
      let currentCircle = circles[currentIndex];
      let nextIndex = (currentIndex + 1) % circles.length;
      let nextCircle = circles[nextIndex];
  
      // Animate the current circle sliding off to the left
      currentCircle.style.transition = 'left 1s ease';
      currentCircle.style.left = '-100px';
  
      // Move the next circle to the original position
      nextCircle.style.left = '650px';
  
      // Update positions array
      positions[currentIndex] = -100; // Update current circle's position
      positions[nextIndex] = 650; // Update next circle's position
  
      // Set z-index of red circle after sliding animation completes
      if (currentCircle.classList.contains('red')) {
        setTimeout(function() {
          currentCircle.style.zIndex = 1;
        }, 1000);
      }
  
      // Remove transition after sliding animation completes
      setTimeout(function() {
        currentCircle.style.transition = 'none';
      }, 1000);
  
      currentIndex = nextIndex;
  
      // Continue animation
      setTimeout(animate, 2000);
    }
  
    // Start initial animation
    animate();
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  