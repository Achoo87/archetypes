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
document.getElementById("resetButton").addEventListener("click", resetPage);

// document.addEventListener('DOMContentLoaded', function() {
//   // Get all visible elements
//   const allVisibleElements = document.querySelectorAll('*');

//   // Function to apply invert filter to each visible element
//   function applyInvertFilter() {
//     allVisibleElements.forEach(function(element) {
//       element.style.transition = 'instant';
//       element.style.filter = 'invert(100%)';
//     });
//     this.style.filter = 'invert(0%)'; // Invert the hovered span again
//   }

//   // Function to remove invert filter from all elements
//   function removeInvertFilter() {
//     allVisibleElements.forEach(function(element) {
//       element.style.transition = 'instant';
//       element.style.filter = '';
//     });
//   }

//   // Add event listener to the target word
//   const targetWord = document.querySelector('.highlight-word');
//   targetWord.addEventListener('mouseover', applyInvertFilter);
//   targetWord.addEventListener('mouseout', removeInvertFilter);
// });

document.addEventListener("DOMContentLoaded", function() {
  var paragraphs = document.querySelectorAll('#contentParagraph');
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

  // Hide all paragraphs initially
  paragraphs.forEach(function(paragraph) {
      paragraph.style.opacity = '0';
  });

  // Start typing the first paragraph
  typeParagraph(index);

  // Listen for keydown events on arrow keys, spacebar, and delete key
  document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
          // Increase typing speed
          typingSpeed = Math.max(typingSpeed - 5, minSpeed);
      } else if (event.key === 'ArrowRight') {
          // Decrease typing speed
          typingSpeed = Math.min(typingSpeed + 5, maxSpeed);
      } else if (event.key === ' ') {
          // Toggle pause state
          isPaused = !isPaused;
      } else if (event.key === 'Escape') {
          // Redirect to index.html
          window.location.href = 'portals.html';
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll(".circle");
    const bodyRect = document.body.getBoundingClientRect(); // Get dimensions of the body element

    circles.forEach(circle => {
        circle.addEventListener("mouseenter", function() {
            // Generate random values for translation and rotation
            const translateX = random(-bodyRect.width * 0.25, bodyRect.width * 0.25); // Move within 25% of body width
            const translateY = random(-bodyRect.height * 0.25, bodyRect.height * 0.25); // Move within 25% of body height
            const rotation = random(-20, 20);

            // Apply translation and rotation
            circle.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`;
        });
    });
});

function random(min, max) {
    return Math.random() * (max - min) + min;
}







  


