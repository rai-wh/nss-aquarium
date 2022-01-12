import { getTips } from './database.js'
import { TipList } from './TipsList.js'


const parentHTMLElement = document.querySelector(".alltips")
parentHTMLElement.innerHTML = TipList()