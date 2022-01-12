import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax

    let htmlString = `<article class="fish">`

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishies">
            <div class="fish__name">${fish.name}</div>
            <div><img  class="pics image--card" src="${fish.img}" /></div>
            <details>
            <summary class="info">Fish Info</summary>
            <div class="fish__size">${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__food">${fish.food}</div>
            </details>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

export const mostHolyFish = () => {
    const holyFish = [28,30,22,15,16]

    for (const number of holyFish) {
        if (number % 3 === 0) {
            console.log(number)
        }
    }

    return holyFish
}