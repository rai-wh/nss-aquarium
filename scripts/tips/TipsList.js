import { getTips } from './database.js'

export const TipList = () => {
    // Invoke the function that you imported from the database module
    const tipses = getTips()

    // Start building a string filled with HTML syntax

    let htmlString = `<article class="tips">`

    htmlString += '<h2 class="tipbanner">Helpful Tips</h2>'

    // Create HTNL representations of each fish here
    for (const tips of tipses) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tipss">
            <div class="tips__name">${tips.name}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}