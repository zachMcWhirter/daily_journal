import journalAPI from "./data.js"
import journalEntryComponent from "./entryComponent.js"
import makeJournalEntry from "./createEntry.js"
import renderToDom from "./entryList.js"
import addDeleteEvents from "./buttonEvents.js"

// To call everything here you need to:

//     1. Use the const from journalData.js (journalAPI) with dot notation connected to the function under it (getJournalEntries()). 

//     2. Next use .then(() => 

//     3. Then plug in the const from entryComponent.js (journalEntryComponent) dot notation and the function under it (journalEntryList())

journalEntryComponent.renderJournalEntryList();
addDeleteEvents();
// **Listen for Submit Button Click**

// In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form. 
//When the user clicks the button, you need to create a new entry in your API.

const submitJournalEntryButton = document.querySelector(".submitEntryButton")
 
submitJournalEntryButton.addEventListener("click", e => {
    // console.log(e, "event")

    const journalDate = document.getElementById("journalDate").value
    const conceptsCovered = document.getElementById("conceptsCovered").value
    const journalEntry = document.getElementById("journalEntry").value
    const mood = document.getElementById("mood").value

    if(journalDate === "" || journalEntry === "" || mood === "" || conceptsCovered === "" ) { alert("Please complete all data forms before submitting entry")
    }else{
        const newEntry1 = makeJournalEntry(journalDate, conceptsCovered, journalEntry, mood);
        journalAPI.saveJournalEntry(newEntry1).then(() => {
            return journalAPI.getJournalEntries()
        }).then((journalObj) => {
            return renderToDom.journalEntryConverter(journalObj)
        })
    }
})


// const updateFormFields = journalEntryId => {

//     // Get reference to input fields in the form
//     const hiddenJournalEntryId = document.querySelector("#recipeId")
//     const recipeTitleInput = document.querySelector("#recipeTitle")
//     const recipeInstructionsInput = document.querySelector("#recipeInstructions")

//     fetch(`http://localhost:8088/recipes/${recipeId}`)
//         .then(response => response.json())
//         .then(recipe => {
//             /*
//                 Now that you KNOW you have the data, render
//                 an editing form that represents the current
//                 state of the resource.
//             */
//             hiddenRecipeId.value = recipe.id // Hidden value. User no see. 🙈
//             recipeTitleInput.value = recipe.title
//             recipeInstructionsInput.value = recipe.instructions
//         })
// }


