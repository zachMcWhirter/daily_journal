// ******************************
// Daily Journal - Part 4 Instructions:

// *STEP 2* the fetch call

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
