/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/


export const htmlRepresentationOfEntry = (entry) => {
 
    return `<div>
                <h3> ${entry.concept}</h3 >
                 <p>${entry.entry}</p>
            </div>`

}