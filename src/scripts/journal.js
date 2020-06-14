// ***************************
//  Daily Journal - Part 2 Instructions:

//         Define the keys and value for a JavaScript object that represents a journal entry about what you learned today


const journalEntry1 = {
    dateOfEntry: "06/01/20",
    conceptsCovered: "design, flexbox, components, objects, properties",
    journalEntry: "Martin's Aquarium Day 1",
    moodForTheDay: "Pretty Good"
}
const journalEntry2 = {
    dateOfEntry: "06/02/20",
    conceptsCovered: "functions, string templates, iteration",
    journalEntry: "Martin's Aquarium Day 2",
    moodForTheDay: "Fantastic!"
}
const journalEntry3 = {
    dateOfEntry: "06/03/20",
    conceptsCovered: "functions, filtering, modulo, debugger",
    journalEntry: "Martin's Aquarium Day 3",
    moodForTheDay: "Hnaging In There"
}
const journalEntry4 = {
    dateOfEntry: "06/04/20",
    conceptsCovered: "JSON, json-server, fetch, functions",
    journalEntry: "Martin's Aquarium Day 4",
    moodForTheDay: "Got Some Work To Do"
}
const journalEntry5 = {
    dateOfEntry: "06/05/20",
    conceptsCovered: "browser events, functions, filtering, DOM",
    journalEntry: "Martin's Aquarium Day 5",
    moodForTheDay: "Really Good"
}

var journalEntries = [];
journalEntries.push(journalEntry1, journalEntry2, journalEntry3, journalEntry4, journalEntry5);
// console.log("testing:journalEntries", journalEntries);

// *******************************
// Daily Journal - Part 3 Instructions:

//  *Open journal.js and place your journal entry objects inside the journal entries array. Note that you no longer need the variable names for each object. They are now simply elements in the journalEntries array.

// *STEP 1*

const journalEntryData = [
    {
        dateOfEntry: "06/01/20",
        conceptsCovered: "design, flexbox, components, objects, properties",
        journalEntry: "Martin's Aquarium Day 1",
        moodForTheDay: "Pretty Good"
    },
    {
        dateOfEntry: "06/02/20",
        conceptsCovered: "functions, string templates, iteration",
        journalEntry: "Martin's Aquarium Day 2",
        moodForTheDay: "Fantastic!"
    },
    {
        dateOfEntry: "06/03/20",
        conceptsCovered: "functions, filtering, modulo, debugger",
        journalEntry: "Martin's Aquarium Day 3",
        moodForTheDay: "Hnaging In There"
    },
    {
        dateOfEntry: "06/04/20",
        conceptsCovered: "JSON, json-server, fetch, functions",
        journalEntry: "Martin's Aquarium Day 4",
        moodForTheDay: "Got Some Work To Do"
    },
    {
        dateOfEntry: "06/05/20",
        conceptsCovered: "browser events, functions, filtering, DOM",
        journalEntry: "Martin's Aquarium Day 5",
        moodForTheDay: "Really Good"
    }
]
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

console.log("testing2", journalEntryHTMLRepresentation);
return journalEntryHTMLRepresentation;
}

// **Render Journal Entries to the DOM**

// Create a new element in your index.html file that will be the container for all of your journal entries. Place it beneath the form component.

// src/index.html
// ________________________________
// <article class="entryLog">

// </article>
// _________________________________

// *Now write a function whose reponsibility is to iterate your array of journal entries and add them to the DOM.

// src/scripts/journal.js















// const arrayOfJournalEntryObjects =[{k:v}]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
// const journalEntryConverter = (journalEntryObject) => {
//     // Create your own HTML structure for a journal entry
//     const journalHTMLRepresentation = `<section class="journalEntryCard">

//         <div class="singleEntryDate">${journalEntryObject.dateOfEntry}</div> <br>
//         <div>${journalEntryObject.conceptsCovered}</div> <br>
//         <div>${journalEntryObject.journalEntry}</div> <br>
//         <div>${journalEntryObject.moodForTheDay}</div> <br>
//     </section>`
    
//     return journalHTMLRepresentation
// }

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
// const journalEntryList = (journalEntries) => {
//     // Iterate the collection of taco objects
//     for (const journalEntry of journalEntries) {

//         // Convert the current object to its HTML representation
//         const journalHTML = journalEntryConverter(journalEntry)

//         // Find the <article> element in index.html
//         const journalEntryArticleElement = document.querySelector(".entryLog")

//         // Put the taco HTML representation inside the <article> element
//         journalEntryArticleElement.innerHTML += journalHTML
//         // console.log("it works!")
//     }
// }

// // Invoke the render function
// journalEntryList(arrayOfJournalEntryObjects);
