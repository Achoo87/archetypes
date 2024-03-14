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
