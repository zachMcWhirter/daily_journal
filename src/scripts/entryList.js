// *************************
// Daily Journal Part 5

// this code was copied from journal.js
const renderToDom = {
journalEntryConverter(journalEntryObject) {
    const journalEntryHTMLRepresentation = `<section class="journalEntryCard">

    <div class="singleEntryDate"><font color="white"; font-weight:bold;>Date:</font> ${journalEntryObject.dateOfEntry}</div> <br>
    <div><font color="white"; font-weight:bold;>Concepts:</font> ${journalEntryObject.conceptsCovered}</div> <br>
    <div><font color="white"; font-weight:bold;>Journal Entry:</font> ${journalEntryObject.journalEntry}</div> <br>
    <div><font color="white"; font-weight:bold;>Mood:</font> ${journalEntryObject.moodForTheDay}</div> <br>
</section>`

return journalEntryHTMLRepresentation
    }
}

export default renderToDom;
