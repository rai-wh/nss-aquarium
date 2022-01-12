import { getArea } from './database.js'

export const AreaList = () => {
    // Invoke the function that you imported from the database module
    const areas = getArea()

    // Start building a string filled with HTML syntax

    let htmlString = `<article class="location">`

    htmlString += '<p class="fishquotes">“Fishing in a place is a meditation on the rhythm of a tide, a season, the arc of a year, and the seasons of life.“ - Carl Safina</p>'
    htmlString += '<p class="fishquotes">“Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime.“ - Anne Ritchie</p>'
    htmlString += '<p class="fishquotes">"The charm of fishing is that it is the pursuit of what is elusive but attainable, a perpetual series of occasions for hope." - John Buchan</p>'
    
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