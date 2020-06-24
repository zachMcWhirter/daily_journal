
const url = "http://localhost:3000";

const editFormFields = journalEntryId => {

    //     // Get reference to input fields in the form
    const hiddenJournalID = document.getElementById("journalID")
    const editJournalDate = document.getElementById("journalDate")
    const editConceptsCovered = document.getElementById("conceptsCovered")
    const editJournalEntry = document.getElementById("journalEntry")
    const editMood = document.getElementById("mood")

    fetch(`${url}/entries/${journalEntryId}`)
        .then(response => response.json())
        .then(entry => {
            hiddenJournalID.value = entry.id
            editConceptsCovered.value = entry.conceptsCovered
            editJournalDate.value = entry.dateOfEntry
            editJournalEntry.value = entry.journalEntry
            editMood.value = entry.moodForTheDay
            console.log("test")
        })
}

export default editFormFields