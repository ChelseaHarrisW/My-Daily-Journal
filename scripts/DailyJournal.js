// this module is respondsible for structuring the html
// import { htmlRepresentationOfEntry } from "./htmlRepresentationOfEntry.js"

// this module is doing the same thing as { JournalEntriesList } from "./entryList.js"
import { JournalEntriesList } from "./entryList.js"
import { JournalForm} from "./journalForm.js"
import {getJournalEntries} from "./database.js"

export const DailyJournal = () => {
    return `<div class="journalContainer">
    
    <article class="entryForm">
    ${JournalForm()}
    </article>
    <div class="entryList">

    
        </div>
        <div class="fetch-Entries"> 
       
        </div>
        </div>
       
    `
}

// entryList is defined here. but the fetch call over in the database is
// check 