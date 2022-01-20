

export const JournalForm = () => {

return   ` <form class="entryForm">
            <fieldset>
                <label for="entryDate">Date</label>
                <input type="date" name="entryDate" class="entryForm__date">
            </fieldset>
        </form>
        <form class="entryForm">
            <fieldset>
                <label for="entryDate">Journal Entry Title</label>
                <input type="textarea" name="entryTitle" class="entryForm_Titel">
            </fieldset>
        </form>
        <form class="entryForm">
            <fieldset>
                <label for="entryDate">Journal Entry</label>
                <input type="textarea" name="entryTitle" class="entryForm_Entry">
            </fieldset>
        </form>
        <form class="entryForm">
            <fieldset>
                <label for="select">Whats your mood? </label>
                <select name="mood" id="mood">
                    <option value="mood">your mood</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="mad">Mad</option>
                    <option value="excited">Excited</option>
                </select>
            </fieldset>
        </form>
        <form class="RecorderForm">
            <fieldset>
                <label for="RecorderForm"> Ready to record? </label>
                <button>Record Journal Entry</button>
            </fieldset>
        </form>`
}