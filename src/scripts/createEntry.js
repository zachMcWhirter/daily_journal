// **Factory Function**

const makeJournalEntry = (date, concepts, entry, mood) => {
    const newEntry = {
        dateOfEntry: date,
        conceptsCovered: concepts,
        journalEntry: entry,
        moodForTheDay: mood
    }
    return newEntry
}

const newEntry1 = makeJournalEntry("05/10/2020", "Coding", "Today I coded", "Pretty Good");

console.log("Here is the new entry", newEntry1);

export default makeJournalEntry;