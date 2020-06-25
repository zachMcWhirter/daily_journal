// *************************
// Daily Journal Part 5

// this code was copied from journalList.js

// brought over the variable renderToDom. (from entryList.js) and added it to line 17. It has to be used with dot notation in conjunction with the converter function.
import journalAPI from "./data.js"
import renderToDom from "./entryList.js"


const journalEntryComponent = {
    renderJournalEntryList(entry) {
       
            const journalEntryArticleElement = document.querySelector(".entryLog")   
            journalEntryArticleElement.innerHTML = ""
            for(let journalEntry of entry) {   
                    const journalHTML = renderToDom.journalEntryConverter(journalEntry)
                
                journalEntryArticleElement.innerHTML += journalHTML
            }
        
        
    }
}


export default journalEntryComponent;