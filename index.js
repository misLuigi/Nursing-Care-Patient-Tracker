// Firebase code imports starts here.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js"
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

console.log(database)

// JavaScript logic starts here.
// Necessary variables and elements.
const addSpendingBtn = document.getElementById("add-spending-el")
console.log(addSpendingBtn)
const modalOverlay = document.querySelector(".modal-overlay")
console.log(modalOverlay)
const closeOverlayBtn = document.querySelector(".close-overlay-btn")
console.log(closeOverlayBtn)
const deleteDataBtn = document.getElementById("delete-btn-el")
console.log(deleteDataBtn)

// variables and elements of form and its values.
const nameOfItem = document.getElementById("name-of-item")
console.log(nameOfItem)
const placeToBuy = document.getElementById("where")
console.log(placeToBuy)
const cost = document.getElementById("cost-of-item")
console.log(cost)
const submitBtn = document.querySelector(".submit-btn")
console.log(submitBtn)
const panel = document.getElementById("panel-el")

// opens the modal for adding new item.
addSpendingBtn.addEventListener("click", function() {
  modalOverlay.showModal();
})
// clicking the 'X' button closes the modal. But, clicking the 'submit' button will also do the same thing.
closeOverlayBtn.addEventListener("click", function() {
  modalOverlay.close();
})

//functions:
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

  push(referenceInDB, newItems)
  document.forms[0].reset();

  modalOverlay.close();
  
  
  

}
// this listen for the event that when submit button is clicked, then the addItem event will be push to newData array.
document.addEventListener('DOMContentLoaded', () => {
  submitBtn.addEventListener('click', addItem);
})



// onValue section. 
onValue(referenceInDB, function(snapshot) {
  const snapshotDoesExist = snapshot.exists()
  if (snapshotDoesExist) {
    const snapshotValue = snapshot.val()
    console.log(snapshotValue);
    const itemsData = Object.values(snapshotValue)
    console.log(itemsData)
    render(itemsData)
  } else {
    console.log("No, content!")
  }
})

// Render data into the html to visualize.
function render(itemsData) {
  let listItems = ""
  for (let i=0; i < itemsData.length; i++) {
    listItems += // make it multiple divs. fix the display.
    `
    <div>
    <li>
      Name: ${itemsData[i].name}<br>
      Store: ${itemsData[i].store}<br>
      Price: ${itemsData[i].price}<br>
      Payment Method: ${itemsData[i].methodOfPayment}
    </li>
    </div>
    `
  }
  panel.innerHTML = listItems;
}


// Stop-meal event.
deleteDataBtn.addEventListener("click", function() {
  remove(referenceInDB)
  panel.textContent = "Data Successfuly Deleted!"
})

//to do:
//add total to the all price
//fix display
//make a edit button, delete button on every items.
//add save button, so that we can have data every month.