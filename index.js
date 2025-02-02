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

// variables and elements of form and its values.
const nameOfItem = document.getElementById("name-of-item")
console.log(nameOfItem)
const placeToBuy = document.getElementById("where")
console.log(placeToBuy)
const cost = document.getElementById("cost-of-item")
console.log(cost)


const submitBtn = document.querySelector(".submit-btn")
console.log(submitBtn)

// opens the modal for adding new item.
addSpendingBtn.addEventListener("click", function() {
  modalOverlay.showModal();
})
// closes the modal. but, clicking the 'submit' button will also do the same thing.
closeOverlayBtn.addEventListener("click", function() {
  modalOverlay.close();
})

//functions:
let newData = [] // data will be store in this array when addItem event is successful.
const addItem = (event) => {
  event.preventDefault();
  const paymentMethod = document.querySelector('input[name = "payment-method"]:checked') // this get the selected value of the radio button. and it should be inside the scope of this event.
  console.log(paymentMethod)
  let newItems = {
    name: nameOfItem.value,
    store: placeToBuy.value,
    price: cost.value,
    methodOfPayment: paymentMethod ? paymentMethod.value : null // check if one of the radio button is selected.
  }

  newData.push(newItems)
  console.log(newData)
  document.forms[0].reset();

  modalOverlay.close();
  
  const panel = document.getElementById("panel-el")
console.log(panel.textContent = JSON.stringify(newData))
}
// this listen for the event that when submit button is clicked, then the addItem event will be push to newData array.
document.addEventListener('DOMContentLoaded', () => {
  submitBtn.addEventListener('click', addItem);
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