// this module is respondsible for structuring the html
import { Entries } from "./Entries.js"

export const DailyJournal = () => {
    return `
        <div class="entry">
            ${ Entries() }
        </div>
        <article class="entryForm">
        on ${entry.date} you wrote about ${entry.concept} ${entry.entry}
    </article>
    `
}