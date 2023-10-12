function toggleDetails(weekId, thinId) {
  const weekDetails = document.getElementById(weekId);
  const thinP = document.getElementById(thinId)
  if (weekDetails.style.display === "flex") {
      weekDetails.style.display = "none";
      thinP.style.display = "none";
  } else {
      weekDetails.style.display = "flex";
      thinP.style.display = "block";
  }
}

currentDate = new Date();
startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));
 
var weekNumber = Math.ceil(days / 7);

function currentWeekToggler(divId) {
  const currentWeek = document.getElementById(divId);
  if (weekNumber === parseInt(divId.replace("week", ""))) {  
    currentWeek.style.backgroundColor = "#f1972d";
  }
}

// Kald currentWeekToggler med de relevante divIds
for (let i = 1; i <= 52; i++) {
  currentWeekToggler('week' + i);
}