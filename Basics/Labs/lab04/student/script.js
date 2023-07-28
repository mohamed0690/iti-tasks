var studentId = 1; 

function addStudent() {
  var nameInput = document.getElementById("name");
  var ageInput = document.getElementById("age");
  var name = nameInput.value.trim();
  var age = parseInt(ageInput.value);

  if (name.length <= 3) {
    alert("Please enter a student name with more than 3 letters.");
    return;
  }

  if (isNaN(age) || age <= 18) {
    alert("Please enter a valid age greater than 18.");
    return;
  }

  var table = document.getElementById("studentTable");
  var newRow = table.insertRow(-1);
  var idCell = newRow.insertCell(0);
  var nameCell = newRow.insertCell(1);
  var ageCell = newRow.insertCell(2);
  var actionCell = newRow.insertCell(3);

  idCell.innerHTML = studentId++; 
  nameCell.innerHTML = name;
  ageCell.innerHTML = age;
  actionCell.innerHTML = '<button class="btn-remove" onclick="removeStudent(this)">Remove</button>';
}

function removeStudent(button) {
  var row = button.parentNode.parentNode; 
  row.parentNode.removeChild(row); 
}