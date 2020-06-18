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

export default makeJournalEntry;