

// *************************
// Daily Journal Part 5

// Consider this file an independent, helper module now. It should not directly execute any logic for the application.
const url = "http://localhost:3000";


const journalAPI = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
            
        },
//   **Daily Journal Part 7**
    saveJournalEntry: (newEntryObject) => {
        return fetch(`${url}/entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    },
    // Fetch call for the delete journal entry feature
    deleteJournalEntry: (id) => {
        return fetch(`${url}/entries/${id}`, {
            method: "DELETE"
        }).then(response => response.json());
   }

    editJournalEntry: (id) => {
        return fetch()

    }
}  

export default journalAPI;