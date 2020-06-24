// *******************************

// // Daily Journal Part 8 - Add a radio button that can filter journal entries by mood

// // Access radio button HTML elements in DOM

const radioButtonEvent = () => {
    let radioButtonElement = document.getElementsByName("moodSelect");

radioButtonElement.addEventListener("click", e => {
    const mood = e.document.getElementsByName("moodSelect").value

    // radioButtonElement.forEach()
    console.log("mood", mood)
})


// saveButton.addEventListener("click", event => {
//     const hiddenRecipeId = document.querySelector("#journalId")

//     if (hiddenJournalId.value !== "") {
//         editJournal(journalId)
//     } else {
//         // Save functionality goes here
        
//         journalAPI.updateJournalEntry(journalEntryToEdit)
//             .then(() => {
//                 journalEntryComponent.renderJournalEntryList()
                
//             })
//     }