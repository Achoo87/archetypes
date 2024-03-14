document.addEventListener("DOMContentLoaded", function() {
    var spanElement = document.getElementById("growSpan");
    var tooltip = document.getElementById("tooltip");
  
    // Triggering a reflow to ensure the transition works from the beginning
    spanElement.offsetWidth;
  
    // Adding a CSS class to start the growth animation
    spanElement.classList.add("grow");
  
    // Capture the initial font size
    var initialFontSize = parseFloat(window.getComputedStyle(spanElement).fontSize);
  
    // Adding event listener to handle click for shrinking
    spanElement.addEventListener("click", function() {
      if (!spanElement.classList.contains("shrink")) {
        // Remove the 'grow' class
        spanElement.classList.remove("grow");
        
        // Set the font size to the initial font size
        spanElement.style.fontSize = initialFontSize + 'px';
        
        // Add the 'shrink' class
        spanElement.classList.add("shrink");
      }
    });
  
    // Show tooltip on hover
    spanElement.addEventListener("mouseover", function() {
        tooltip.style.visibility = "visible";
        tooltip.style.display = "block";
    });
  
    // Hide tooltip when not hovered
    spanElement.addEventListener("mouseout", function() {
      tooltip.style.display = "none";
    });
  
    // Position tooltip relative to the span
    spanElement.addEventListener("mousemove", function(e) {
      tooltip.style.top = (e.clientY - 30) + "px";
      tooltip.style.left = (e.clientX + 20) + "px";
    });
  });

  function updateTime() {
    var now = new Date();
    var timezoneOffset = now.getTimezoneOffset() / 60; // Convert minutes to hours
    var timezone = "GMT" + (timezoneOffset >= 0 ? "+" : "-") + Math.abs(timezoneOffset);
    var hours = now.getUTCHours() + timezoneOffset; // Adjust hours according to timezone
    var minutes = now.getUTCMinutes();
    var seconds = now.getUTCSeconds();

    // Add leading zeros if needed
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + timezone;
    document.getElementById("clock").textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();

function resetPage() {
    location.reload(); // Reload the page
}

// Add event listener to the reset button
document.getElementById("resetButton").addEventListener("click", resetPage);