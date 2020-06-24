// *************************
// Daily Journal Part 5

// this code was copied from journal.js
const renderToDom = {
    journalEntryConverter(journalEntryObject) {
        // the following will produce the html representation of a single journal entry card 
        const journalEntryHTMLRepresentation = `<section class="journalEntryCard">

            <div class="singleEntryDate"><font color="white"; font-weight:bold;>Date:</font> ${journalEntryObject.dateOfEntry}</div> <br>
            <div><font color="white"; font-weight:bold;>Concepts:</font> ${journalEntryObject.conceptsCovered}</div> <br>
            <div><font color="white"; font-weight:bold;>Journal Entry:</font> ${journalEntryObject.journalEntry}</div> <br>
            <div><font color="white"; font-weight:bold;>Mood:</font> ${journalEntryObject.moodForTheDay}</div> <br>
            <button id="editButton--${journalEntryObject.id}">Edit</button> 
            <button id="deleteButton--${journalEntryObject.id}">Delete</button> <br><br>
            <button id="saveEditButton--${journalEntryObject.id}">Save Edit</button>
        </section>`

        return journalEntryHTMLRepresentation
    }
}

export default renderToDom;
