function toggleDetails(weekId) {
  const weekDetails = document.getElementById(weekId);
  if (weekDetails.style.display === "block") {
      weekDetails.style.display = "none";
  } else {
      weekDetails.style.display = "block";
  }
}