// *************************
// Daily Journal Part 5

// Consider this file an independent, helper module now. It should not directly execute any logic for the application.
let journalEntryData = [];

const journalAPI = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json()).then(
                (arrayOfJournalEntries) =>
                    journalEntryData = arrayOfJournalEntries
                
            )
        }
}

