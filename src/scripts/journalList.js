// **************************
// Daily Journal - Part 3 Instructions: STEP 3

// **Render Journal Entries to the DOM**

// Create a new element in your index.html file that will be the container for all of your journal entries. Place it beneath the form component.

// src/index.html
// ________________________________
// <article class="entryLog">

// </article>
// _________________________________


// *Now write a function whose reponsibility is to iterate your array of journal entries and add them to the DOM.

// src/scripts/journal.js

const journalEntryList = (journalEntryData) => {
    for(const journalEntry of journalEntryData) {
        const journalHTML = journalEntryConverter(journalEntry)
        const journalEntryArticleElement = document.querySelector(".entryLog")
        journalEntryArticleElement.innerHTML += journalHTML
    }
}

//  Function will be invoked on main.js
// journalEntryList(journalEntryData);
