

// *************************
// Daily Journal Part 5

// Consider this file an independent, helper module now. It should not directly execute any logic for the application.
const url = "http://localhost:3000/entries";


const journalAPI = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json()).then(
                (response) => {
                    return response
                })
        },
//   **Daily Journal Part 7**
    saveJournalEntry: (newEntryObject) => {
        return fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    },
    
}

export default journalAPI;