//  Daily Journal - Part 2:
//         Define the keys and value for a JavaScript object that represents a journal entry about what you learned today


// const arrayOfJournalEntryObjects =[];

// arrayOfJournalEntryObjects.push({
//     dateOfEntry: "06/01/20",
//     conceptsCovered: "design, flexbox, components, objects, properties",
//     journalEntry: "Martin's Aquarium Day 1",
//     moodForTheDay: "Pretty Good"
// });
// arrayOfJournalEntryObjects.push({
//     dateOfEntry: "06/02/20",
//     conceptsCovered: "functions, string templates, iteration",
//     journalEntry: "Martin's Aquarium Day 2",
//     moodForTheDay: "Fantastic!"
// });
// arrayOfJournalEntryObjects.push({
//     dateOfEntry: "06/03/20",
//     conceptsCovered: "functions, filtering, modulo, debugger",
//     journalEntry: "Martin's Aquarium Day 3",
//     moodForTheDay: "Hnaging In There"
// });
// arrayOfJournalEntryObjects.push({
//     dateOfEntry: "06/04/20",
//     conceptsCovered: "JSON, json-server, fetch, functions",
//     journalEntry: "Martin's Aquarium Day 4",
//     moodForTheDay: "Got Some Work To Do"
// });
// arrayOfJournalEntryObjects.push({
//     dateOfEntry: "06/05/20",
//     conceptsCovered: "browser events, functions, filtering, DOM",
//     journalEntry: "Martin's Aquarium Day 5",
//     moodForTheDay: "Really Good"
// });

// console.log(arrayOfJournalEntryObjects)
// should log an array of objects to the console

// ******************************
// Daily Journal - Part 2:

const arrayOfJournalEntryObjects =[
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

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const journalEntryConverter = (journalEntryObject) => {
    // Create your own HTML structure for a journal entry
    const journalHTMLRepresentation = `<section class="journalEntryCard">

        <div class="singleEntryDate">${journalEntryObject.dateOfEntry}</div> <br>
        <div>${journalEntryObject.conceptsCovered}</div> <br>
        <div>${journalEntryObject.journalEntry}</div> <br>
        <div>${journalEntryObject.moodForTheDay}</div> <br>
    </section>`
    
    return journalHTMLRepresentation
}

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const journalEntryList = (journalEntries) => {
    // Iterate the collection of taco objects
    for (const journalEntry of journalEntries) {

        // Convert the current object to its HTML representation
        const journalHTML = journalEntryConverter(journalEntry)

        // Find the <article> element in index.html
        const journalEntryArticleElement = document.querySelector(".entryLog")

        // Put the taco HTML representation inside the <article> element
        journalEntryArticleElement.innerHTML += journalHTML
        // console.log("it works!")
    }
}

// Invoke the render function
journalEntryList(arrayOfJournalEntryObjects);
