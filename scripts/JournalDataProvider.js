let entries = []

export const copyOfEntries = () => entries.slice()

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(r => r.json())  // Parse as JSON
        .then(parsedEntries => {
            entries = parsedEntries
        })
}

export const saveEntry = entry => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries) // After we add an entry, get them all again so our new entry appears in our collection
}