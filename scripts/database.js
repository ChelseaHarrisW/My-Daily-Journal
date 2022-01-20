/// this Module is respondsible for managing the aplications state
import{htmlRepresentationOfEntry} from './htmlRepresentationOfEntry.js'
/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

export const database = {
    "entries": [
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
// export const journalEntries = () => {
//     const copyOfData = database.entries.map(entry => ({...entry}))
//     return copyOfData
// }

// this fetch  call directly enjects the fetched object to inner HTML
 export const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
       .then(response => response.json())  // Parse as JSON
         .then(entries => {
        entries.map(entry =>  document.querySelector(".entryList").innerHTML += htmlRepresentationOfEntry(entry))
          })
  }