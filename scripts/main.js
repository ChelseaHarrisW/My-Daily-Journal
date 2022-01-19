// this module is respondsible for dynamically displaying and updating HTML to the DOM

import { DailyJournal } from "./DailyJournal.js"

const container = document.querySelector("#entries")

const render = () => {
    container.innerHTML = DailyJournal()
}

