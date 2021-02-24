import { deleteMessage, getEntries, useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryLog = document.querySelector("#entryList")

export const EntryListComponent = () => {
    getEntries().then(() => {
    
    let entries = useEntries()

    for (const entry of entries) {
      entryLog.innerHTML += JournalEntryComponent(entry)
    }
  })
}

const eventHub = document.querySelector("#entryList")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("delete-entry")) {
    const idToDelete = eventObject.target.id.split("--")[1]
    
    deleteMessage(idToDelete) // Call the deleteNote function and pass in the appropriate id
    .then(EntryListComponent) // Then call messageList to refresh the list of notes
  }
})