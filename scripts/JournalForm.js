import {saveEntry} from "./JournalDataProvider.js"
// import {EntryListComponent} from "./JournalEntryList"

const contentTarget = document.querySelector('#entryLog')

export const JournalFormComponent = () => {
    contentTarget.innerHTML = `
    <h2>Daily Journal</h2>
    <form>
        <fieldset>
            <label for="journalDate">Date of entry:</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
            <fieldset>
                <label for="titleOfEntry">Title of Entry:</label>
                <input type="text" name="titleOfEntry" id="titleOfEntry">
            </fieldset>
            <fieldset>
                <label for="journalEntry">Journal Entry:</label>
                <textarea name="textarea" name="journalEntry" id="journalEntry" rows="10" cols="60"></textarea>
            </fieldset>
            <fieldset>
                <label for="moodOfTheDay">How ya feelin', bud?</label>
                <select name="moodOfTheDay" id="moodOfTheDay">
                    <option class="mood-options" value="Happy">Happy</option>
                    <option class="mood-options" value="Happy">Happy</option>
                    <option class="mood-options" value="Happy">Happy</option>
                    <option class="mood-options" value="Happy">Happy</option>
                    <option class="mood-options" value="Happy">Happy</option>
                </select>
            </fieldset>
            <fieldset>
                <button type="button" id="recordEntry">Record Entry</button>
            </fieldset>
    </form>`
}




contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "recordEntry") {
    
        const newEntryObject = {
            date: document.querySelector("#journalDate").value,
            concept: document.querySelector("#conceptsCovered").value,
            entry: document.querySelector("#journalEntry").value,
            mood: document.querySelector("#moodOfTheDay").value
        }
        saveEntry(newEntryObject)
        // .then(EntryListComponent)
    }
})