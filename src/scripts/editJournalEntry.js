
const url = "http://localhost:3000";

const editFormFields = journalEntryId => {

    //     // Get reference to input fields in the form
    const hiddenJournalId = document.getElementById("journalId")
    const editJournalDate = document.getElementById("journalDate")
    const editConceptsCovered = document.getElementById("conceptsCovered")
    const editJournalEntry = document.getElementById("journalEntry")
    const editMood = document.getElementById("mood")

    fetch(`${url}/entries/${journalEntryId}`)
        .then(response => response.json())
        .then(entry => {
            hiddenJournalId.value = entry.id
            editConceptsCovered.value = entry.conceptsCovered
            editJournalDate.value = entry.dateOfEntry
            editJournalEntry.value = entry.journalEntry
            editMood.value = entry.moodForTheDay
            console.log("test")
        })
}

// const clearInputs = () => {
// 	document.querySelector("#journalId").value = "";
// 	document.querySelector("#journalDate").value = "";
// 	document.querySelector("#conceptsCovered").value = "";
// 	document.querySelector("#journalEntry").value = "";
// 	document.querySelector("#mood").value = "";
// }

// saveEditButton.addEventListener("click", event => {
//     const hiddenJournalId = document.querySelector("#journalId");

//     if (hiddenJournalId.value !== "") {
// 		const journalDateInput = document.querySelector("#journalDtae").value;
// 		const conceptsCoveredInput = document.querySelector("#conceptsCovered").value;
// 		const journalEntryInput = document.querySelector("#journalEntry").value;
// 		const moodInput = document.querySelector("#mood").value;
		
// 		API.updateJournalEntry(hiddenJournalId.value, submitJournalEntry(journalDateInput,conceptsCoveredInput, journalEntryInput, moodInput))
// 		.then(() => {
// 			clearInputs();
// 			renderJournalEntryList();
// 		});
//     } else {
// 		// Save functionality goes here
// 		console.log("this is the save a new one functionality");
//     }
// });



export default editFormFields