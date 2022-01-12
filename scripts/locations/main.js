import { getArea } from './database.js'
import { AreaList } from './LocationList.js'

const parentHTMLElement = document.querySelector(".allareas")
parentHTMLElement.innerHTML = AreaList()