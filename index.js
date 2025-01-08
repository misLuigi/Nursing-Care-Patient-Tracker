const newPatient = document.getElementById("new-patient-btn");
console.log(newPatient)
const workFlowArea = document.getElementById("work-flow-console");
console.log(workFlowArea)
const saveInputBtn = document.getElementById("save-btn");
console.log(saveInputBtn)
let patientName = []
function newBtn() {
  workFlowArea.textContent = "What is the patient name?"
}
saveInputBtn.addEventListener ("click", function() {
  patientName.push(input.value)
  console.log(patientName)
})


