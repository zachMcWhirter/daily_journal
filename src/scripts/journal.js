import journalAPI from "./data.js"
import journalEntryComponent from "./entryComponent.js"

// To call everything here you need to:

//     1. Use the const from journalData.js (journalAPI) with dot notation connected to the function under it (getJournalEntries()). 

//     2. Next use .then(() => 

//     3. Then plug in the const from entryComponent.js (journalEntryComponent) dot notation and the function under it (journalEntryList())

journalEntryComponent.journalEntryList()

// **Listen for Submit Button Click**

// In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form. 
//When the user clicks the button, you need to create a new entry in your API.

const submitJournalEntryButton = document.querySelector(".submitEntryButton")

submitJournalEntryButton.addEventListener("click", e => {
    console.log(e, "event")
    document.getElementById("button")
    if(document.getElementById("journalDate").value === "" || document.getElementById("conceptsCovered").value === "" || document.getElementById("journalEntry").value === "" || document.getElementById("mood").value === "") { alert("Please complete all data forms before submitting entry")
    }
 
})




    // journalArticleElement.innerHTML += journalHTMLRepresentation
