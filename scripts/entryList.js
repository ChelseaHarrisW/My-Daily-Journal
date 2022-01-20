import { htmlRepresentationOfEntry } from './htmlRepresentationOfEntry.js';
import { getJournalEntries, database} from "./database.js"



// defined a function that will be the list of entries
export const JournalEntriesList = () => {

    let journalEntries = getJournalEntries()
    database.entries.map((entry) => {
        entryTemplate += htmlRepresentationOfEntry(entry)
    })
    return entryTemplate
    
}

