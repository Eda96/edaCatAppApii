import { loadPage } from "./helpers/loadPage.js"
import { initWelcomePage } from "./welcome/welcomePage.js"

const loadApp = () => {

loadPage (initWelcomePage)

}

window.addEventListener ("load" , loadApp) 
