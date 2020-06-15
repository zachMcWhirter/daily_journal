// *************************
// Daily Journal Part 5

// this code was copied from journalData.js 

let journalEntryData = []

const getJournalEntryData = () => {
    return fetch("http://localhost:3000/entries").then(
            (httpResponse) => {
                return httpResponse.json()
        }
    )
        .then(
            (arrayOfJournalEntries) => {
                journalEntryData = arrayOfJournalEntries
            }
        )
}