import journalEntryComponent from "./entryComponent.js"


const url = "http://localhost:3000";

const editFormFields = journalEntryId => {

    //     // Get reference to input fields in the form
    const hiddenJournalId = document.getElementById("journalId")
    const editJournalDate = document.querySelector("#journalDate")
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

const clearInputs = () => {
    document.querySelector("#journalDate").value = "";
    document.querySelector("#conceptsCovered").value = "";
    document.querySelector("#journalEntry").value = "";
    document.querySelector("#mood").value = "";
}


export {editFormFields, clearInputs}