


const editFormFields = journalEntryId => {

    //     // Get reference to input fields in the form
    const hiddenJournalID = document.getElementById("journalID")
    const editJournalDate = document.getElementById("journalDate").value
    const editConceptsCovered = document.getElementById("conceptsCovered").value
    const editJournalEntry = document.getElementById("journalEntry").value
    const editMood = document.getElementById("mood").value


    const editAPI = {
        updateJournalEntry: (id, updatedJournalObject) => {
            return fetch(`${url}/entries/${id}`, {
                    method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedJournalObject)

        })
    }
}

/*
                Now that you KNOW you have the data, render
                an editing form that represents the current
                state of the resource.
            */
            // hiddenRecipeId.value = recipe.id // Hidden value. User no see. 🙈
            // recipeTitleInput.value = recipe.title
            // recipeInstructionsInput.value = recipe.instructions