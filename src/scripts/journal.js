
// *******************************
// Daily Journal - Part 3 Instructions: STEP 2 
// (step 1 is on the journalData.js module)

// ***Now write the CONVERTER FUNCTION that builds a HTML string template, and then return the HTMLRepresentation ***

journalEntryConverter = (journalEntryObject) => {
    const journalEntryHTMLRepresentation = `<section class="journalEntryCard">

    <div class="singleEntryDate"><font color="white"; font-weight:bold;>Date:</font> ${journalEntryObject.dateOfEntry}</div> <br>
    <div><font color="white"; font-weight:bold;>Concepts:</font> ${journalEntryObject.conceptsCovered}</div> <br>
    <div><font color="white"; font-weight:bold;>Journal Entry:</font> ${journalEntryObject.journalEntry}</div> <br>
    <div><font color="white"; font-weight:bold;>Mood:</font> ${journalEntryObject.moodForTheDay}</div> <br>
</section>`

return journalEntryHTMLRepresentation
}


