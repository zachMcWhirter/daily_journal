// Invoke the render function

journalEntryList(journalEntryData);


// added function calls to main.js

getJournalEntryData().then(
    () => {
        journalEntryList(journalEntryData)
    }
);

journalEntryConverter(journalEntryData);