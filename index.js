// Description: This file is used to handle the logic for the patient form.

// necessary variables and elements.
const patientName = document.getElementById("patient-name");
console.log(patientName);
const patientRoomNumber = document.getElementById("patient-room-number");
console.log(patientRoomNumber);
const secondThirdFloor = document.getElementById("second-or-third-floor");
console.log(secondThirdFloor);
const ricePreference = document.getElementById("rice-preference");
console.log(ricePreference);
const typeOfFood = document.getElementById("type-of-food");
console.log(typeOfFood);
const prohibition = document.getElementById("prohibition");
console.log(prohibition);
const allergies = document.getElementById("allergies");
console.log(allergies);
const options = document.getElementById("options");
console.log(options);
const addBtn = document.getElementById("add-btn");
console.log(addBtn);
const msgPanel = document.getElementById("msg");
console.log(msgPanel);

// Array to store the patient data
let patientData = [];

// Add patient event
const addPatient = (e) => {
  e.preventDefault();
  let patient = {
    name: patientName.value,
    roomNumber: patientRoomNumber.value,
    floor: secondThirdFloor.value,
    rice: ricePreference.value,
    typeOfFood: typeOfFood.value,
    prohibition: prohibition.value,
    allergies: allergies.value,
    options: options.value
  }
  patientData.push(patient);
  document.forms[0].reset();

  // Save the data to local storage as a string
  localStorage.setItem('patientData', JSON.stringify(patientData));

  // Display the message
  console.warn('added', {patientData});
  msgPanel.textContent = '\n' + JSON.stringify(patientData, '\t', 2);
}

document.addEventListener('DOMContentLoaded', () => {
  addBtn.addEventListener('click', addPatient);
});

