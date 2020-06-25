import journalAPI from "./data.js"
import journalEntryComponent from "./entryComponent.js"
import makeJournalEntry from "./createEntry.js"
import renderToDom from "./entryList.js"
import addDeleteEvents from "./buttonEvents.js"
import {clearInputs} from "./editJournalEntry.js"

journalAPI.getJournalEntries().then((response) => {
    journalEntryComponent.renderJournalEntryList(response)
});

addDeleteEvents();

// Event listener for submitEntryButton
const submitJournalEntryButton = document.querySelector(".submitEntryButton")

submitJournalEntryButton.addEventListener("click", e => {
    console.log("clicked submit entry button", )

    const journalDate = document.getElementById("journalDate").value
    const conceptsCovered = document.getElementById("conceptsCovered").value
    const journalEntry = document.getElementById("journalEntry").value
    const mood = document.getElementById("mood").value

    const hiddenJournalId = document.getElementById("journalId")
    const editJournalDate = document.getElementById("journalDate")
    const editConceptsCovered = document.getElementById("conceptsCovered")
    const editJournalEntry = document.getElementById("journalEntry")
    const editMood = document.getElementById("mood")

        if (hiddenJournalId.value !== "") {
            
            journalAPI.updateJournalEntry(hiddenJournalId.value,makeJournalEntry(editJournalDate.value, editConceptsCovered.value, editJournalEntry.value, editMood.value))
                .then(() => {

                    return journalAPI.getJournalEntries()
                }).then((response) => {
                    clearInputs();
                    journalEntryComponent.renderJournalEntryList(response);
                })
        }else{
            if (journalDate === "" || journalEntry === "" || mood === "" || conceptsCovered === "") {
                alert("Please complete all data forms before submitting entry")
            } else {
                const newEntry1 = makeJournalEntry(journalDate, conceptsCovered, journalEntry, mood);
                journalAPI.submitJournalEntry(newEntry1).then(() => {
                    clearInputs()
                    return journalAPI.getJournalEntries()
        
                }).then((journalObj) => {
                    journalEntryComponent.renderJournalEntryList(journalObj)
                })
            }
        }
    })
