function toggleDetails(weekId, thinId) {
  const weekDetails = document.getElementById(weekId);
  const thinP = document.getElementById(thinId)
  if (weekDetails.style.display === "block") {
      weekDetails.style.display = "none";
      thinP.style.display = "none";
  } else {
      weekDetails.style.display = "block";
      thinP.style.display = "block";
  }
}
