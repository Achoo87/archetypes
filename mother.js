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





