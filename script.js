document.getElementById('attendance-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get values from input fields
  let lecture = parseFloat(document.getElementById('lecture').value) || 0;
  let tutorial = parseFloat(document.getElementById('tutorial').value) || 0;
  let practical = parseFloat(document.getElementById('practical').value) || 0;
  let skilling = parseFloat(document.getElementById('skilling').value) || 0;
  
  // Calculate total attendance
  let totalAttendance = (lecture + tutorial + practical + skilling) / 4;
  
  // Display result
  document.getElementById('result').textContent = `${totalAttendance}%`;
});
