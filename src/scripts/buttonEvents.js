
import journalAPI from "./data.js"
import renderToDom from "./entryList.js"

const addDeleteEvents = () => {
    const entryLogContainer = document.querySelector(".entryLog")
    entryLogContainer.addEventListener("click", event => {
            
            // e.preventDefault();
            if (event.target.id.startsWith("deleteButton--")) {
                
                const journalEntryToDelete = event.target.id.split("--")[1];
                console.log("clicked", journalEntryToDelete)
                journalAPI.deleteJournalEntry(journalEntryToDelete)
                .then(() => {
                    entryLogContainer.innerHTML = ""
                    journalAPI.getJournalEntries()     
                })
                .then(renderToDom)
        }
    })
}

export default addDeleteEvents;