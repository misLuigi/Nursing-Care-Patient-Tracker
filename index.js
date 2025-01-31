// Description: This file is used to handle the logic for the patient form.

// Firebase code starts here.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase,
          ref,
          push,
          onValue
        } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://patient-meal-tracker-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "patientData")

onValue(referenceInDB, function(snapshot) {
    console.log(snapshot.val())
})

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
  
  push(referenceInDB, patient)
  document.forms[0].reset();


  // Display the message
  //console.warn('added', {patient});
}

document.addEventListener('DOMContentLoaded', () => {
  addBtn.addEventListener('click', addPatient);
});

