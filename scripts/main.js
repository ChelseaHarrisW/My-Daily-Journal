// this module is respondsible for dynamically displaying and updating HTML to the DOM

import { DailyJournal } from "./DailyJournal.js"
import { JournalEntriesList } from "./entryList.js"
import { getJournalEntries } from "./database.js"
// defining a varible container for displaying using the document.querySelector
const container = document.querySelector("#container")

//defining a function that renders the Daily Journal Html to the DOM
const render = () => {
    container.innerHTML = DailyJournal()
   getJournalEntries()
}

 render()

//Questions: is this a higher order function?
// based on this function type should the return value have a let, or const defintion
// is this going to be where all of the items? 