function updateTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4]; // Get HH:MM:SS part
  utcTimeElement.textContent = utcTime;
}

// Update the time every refresh
setInterval(updateTime, 1000);

// Initialize time on load
updateTime();
