// *************************
// Daily Journal Part 5

// this code was copied from journalList.js

// brought over the variable renderToDom. (from entryList.js) and added it to line 11. It has to be used with dot notation in conjunction with the converter function.
import journalAPI from "./data.js"
import renderToDom from "./entryList.js"


const journalEntryComponent = {
    renderJournalEntryList() {
        journalAPI.getJournalEntries().then(response => {
            const journalEntryArticleElement = document.querySelector(".entryLog")   
            journalEntryArticleElement.innerHTML = ""
            for(let journalEntry of response) {   
                    const journalHTML = renderToDom.journalEntryConverter(journalEntry)
                
        
                journalEntryArticleElement.innerHTML += journalHTML
            }
        
        })
    }
}

// addDeleteEvents() {
//     // const entryLogContainer = document.querySelector(".entryLog")
//     let buttons = document.querySelectorAll("#deleteButton")
//     buttons.forEach(button => {
//         button.addEventListener("click", e => {
//             // e.preventDefault();
//             if (event.target.id.startsWith("#deleteButton--")) {
//                 const journalEntryToDelete = event.target.id.split("--")[1];
//                 journalAPI.deleteJournalEntry(journalEntryToDelete);
//         }
//     })
// })
// }
// }
export default journalEntryComponent;