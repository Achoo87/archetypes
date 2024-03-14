var tooltip = document.querySelector('#cancelRedirect::after');

    // Set timeout to redirect after 30 seconds
    var redirectTimeout = setTimeout(function() {
      window.location.href = 'index.html';
    }, 30000); // 30 seconds in milliseconds

    // Function to cancel the redirect timeout when the span is clicked
    document.getElementById('cancelRedirect').addEventListener('click', function() {
      clearTimeout(redirectTimeout);
      // Reset the cursor back to default
      this.style.cursor = 'default';
      // Hide the tooltip after click and clearTimeout
      tooltip.style.visibility = 'hidden';
      // Remove event listener to prevent further clicks
      this.removeEventListener('click', arguments.callee);
    });

    // Show tooltip when hovering over the span
    document.getElementById('cancelRedirect').addEventListener('mouseover', function(event) {
      tooltip.style.visibility = 'visible';
      tooltip.style.left = event.clientX + 'px';
      tooltip.style.top = event.clientY + 20 + 'px'; // Offset to position it below the cursor
    });

    // Hide tooltip when mouse leaves the span
    document.getElementById('cancelRedirect').addEventListener('mouseout', function() {
      tooltip.style.visibility = 'hidden';
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