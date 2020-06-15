// To call everything here you need to:

//     1. Use the const from journalData.js (journalAPI) with dot notation connected to the function under it (getJournalEntries()). 

//     2. Next use .then(() => 

//     3. Then plug in the const from entryComponent.js (journalEntryComponent) dot notation and the function under it (journalEntryList())

journalAPI.getJournalEntries().then(() => journalEntryComponent.journalEntryList())



