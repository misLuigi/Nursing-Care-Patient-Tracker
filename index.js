// Firebase code imports starts here.
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js"
import { getDatabase,
          ref,
          push,
          onValue,
          remove
        } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://spending-tracker-da10e-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

// Firebase variables here.
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "inputData")
*/
// JavaScript logic starts here.
// Necessary variables and elements:

const addSpendingBtn = document.getElementById("add-spending-el")
console.log(addSpendingBtn)
const modalOverlay = document.querySelector(".modal-overlay")
console.log(modalOverlay)
const closeOverlayBtn = document.querySelector(".close-overlay-btn")
console.log(closeOverlayBtn)

addSpendingBtn.addEventListener("click", function() {
  modalOverlay.showModal();
})

closeOverlayBtn.addEventListener("click", function() {
  modalOverlay.close();
})

// onValue section. 
/*onValue(referenceInDB, function(snapshot) {
  const snapshotDoesExist = snapshot.exists()
  if (snapshotDoesExist) {
    const snapshotValue = snapshot.val()
    console.log(snapshotValue);
    const personsData = Object.values(snapshotValue)
    console.log(personsData)
    let result = personsData.filter(function() {
      typeOfFood === "Joushouku"
    })
    console.log(result);
    console.log(result.length)
  } else {
    console.log("No, content!")
  }
  
})


// Render data into the html (data cells) to visualize.


// Add-patient event.
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

// Stop-meal event.
stopMealBtn.addEventListener("click", function() {
  remove(referenceInDB)
})*/