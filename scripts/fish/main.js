import { getFish } from './database.js'
import { FishList } from './FishList.js'

const parentHTMLElement = document.querySelector(".allfish")
parentHTMLElement.innerHTML = FishList()

// const allFish = getFish()

// for (const fish of allFish) {
//     console.log(fish)
// }