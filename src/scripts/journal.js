
// *******************************
// Daily Journal - Part 3 Instructions: STEP 2 
// (step 1 is on the journalData.js module)

// ***Now write the CONVERTER FUNCTION that builds a HTML string template, and then return the HTMLRepresentation ***

journalEntryConverter = (journalEntryObject) => {
    const journalEntryHTMLRepresentation = `<section class="journalEntryCard">

    <div class="singleEntryDate">${journalEntryObject.dateOfEntry}</div> <br>
    <div>${journalEntryObject.conceptsCovered}</div> <br>
    <div>${journalEntryObject.journalEntry}</div> <br>
    <div>${journalEntryObject.moodForTheDay}</div> <br>
</section>`

return journalEntryHTMLRepresentation
}


