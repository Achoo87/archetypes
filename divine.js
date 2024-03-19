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




const container = document.getElementById("circles-container");
let animationId; // Variable to store animation ID
let isMouseOver = false; // Variable to track mouse state

// Function to generate a random color
function randomColor() {
  const colors = ["blue", "red", "yellow"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to create a circle
function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = randomColor();

  // Random position within container
  const left = Math.random() * (container.offsetWidth - 50); // Adjusted to avoid circle going off-screen
  const top = Math.random() * (container.offsetHeight - 50);
  circle.style.left = left + "px";
  circle.style.top = top + "px";

  // Random size
  const size = Math.random() * 40 + 10;
  circle.style.width = size + "px";
  circle.style.height = size + "px";

  container.appendChild(circle);
}

// Function to update circle positions
function updateCircles() {
  const circles = document.querySelectorAll('.circle');
  const speedMultiplier = isMouseOver ? 4 : 1; // Adjust speed when mouse is over the header
  circles.forEach(circle => {
    const dx = (Math.random() - 0.5) * speedMultiplier;
    const dy = (Math.random() - 0.5) * speedMultiplier;
    let left = parseFloat(circle.style.left) + dx;
    let top = parseFloat(circle.style.top) + dy;

    // Wrap-around effect
    if (left < 0) left = container.offsetWidth;
    if (left > container.offsetWidth) left = 0;
    if (top < 0) top = container.offsetHeight;
    if (top > container.offsetHeight) top = 0;

    circle.style.left = left + "px";
    circle.style.top = top + "px";
  });
}

// Function to start animation loop
function startAnimation() {
  animationId = requestAnimationFrame(animate);
}

// Function to stop animation loop
function stopAnimation() {
  cancelAnimationFrame(animationId);
}

// Animation loop
function animate() {
  updateCircles(); // Update circle positions
  animationId = requestAnimationFrame(animate); // Request next animation frame
}

// Add event listeners to header div
const headerDiv = document.querySelector('.headerdiv');
headerDiv.addEventListener('mouseenter', () => {
  isMouseOver = true;
  startAnimation();
});
headerDiv.addEventListener('mouseleave', () => {
  isMouseOver = false;
});

// Create initial circles
for (let i = 0; i < 10; i++) {
  createCircle();
}

// Start animation initially
startAnimation();










