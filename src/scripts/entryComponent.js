// *************************
// Daily Journal Part 5

// this code was copied from journalList.js


const journalEntryList = (journalEntryData) => {
    for(const journalEntry of journalEntryData) {
        const journalHTML = journalEntryConverter(journalEntry)
        const journalEntryArticleElement = document.querySelector(".entryLog")
        journalEntryArticleElement.innerHTML += journalHTML
    }
}