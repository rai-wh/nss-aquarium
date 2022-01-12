import { getArea } from './database.js'

export const AreaList = () => {
    // Invoke the function that you imported from the database module
    const areas = getArea()

    // Start building a string filled with HTML syntax

    let htmlString = `<article class="location">`

    htmlString += '<h2 class="quotes">Important quotes!</h2>'
    htmlString += '<p>“Fishing in a place is a meditation on the rhythm of a tide, a season, the arc of a year, and the seasons of life.“ - Carl Safina</p>'
    htmlString += '<p>“Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime.“ - Anne Ritchie</p>'

    htmlString += '<h2 class="loc__banner">Locations</h2>'

    // Create HTNL representations of each fish here
    for (const area of areas) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="areas">
            <div class="area__name">${area.location}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}