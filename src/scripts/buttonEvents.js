
import journalAPI from "./data.js"
import renderToDom from "./entryList.js"
import journalEntryComponent from "./entryComponent.js"
import {editFormFields} from "./editJournalEntry.js"

// Function that contains event listeners for the delete button and the edit button
const addDeleteEvents = () => {
    const entryLogContainer = document.querySelector(".entryLog")
    entryLogContainer.addEventListener("click", event => {
        event.preventDefault();
        if (event.target.id.startsWith("deleteButton--")) {
            const journalEntryToDelete = event.target.id.split("--")[1];
            console.log("clicked delete button", journalEntryToDelete)
            journalAPI.deleteJournalEntry(journalEntryToDelete)
                .then(() => {
                    journalEntryComponent.renderJournalEntryList()
                })
        }
    }),
        // Adding event listener to button (#editButton). Give unique id which includes id property of entry
        entryLogContainer.addEventListener("click", event => {
            if (event.target.id.startsWith("editButton--")) {
                const journalEntryToEdit = event.target.id.split("--")[1];
                console.log("clicked edit button", journalEntryToEdit)
                editFormFields(journalEntryToEdit)
            }
        })
}




export default addDeleteEvents