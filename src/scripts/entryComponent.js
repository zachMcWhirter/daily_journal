// *************************
// Daily Journal Part 5

// this code was copied from journalList.js

// brought over the variable renderToDom. (from entryList.js) and added it to line 11. It has to be used with dot notation in conjunction with the converter function.

const journalEntryComponent = {
    journalEntryList() {
        for(const journalEntry of journalEntryData) {   
                const journalHTML = renderToDom.journalEntryConverter(journalEntry)
                const journalEntryArticleElement = document.querySelector(".entryLog")
                journalEntryArticleElement.innerHTML += journalHTML
            }
        }
}