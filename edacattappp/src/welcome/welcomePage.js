import {welcomeView} from './welcomeView.js'
import {initCatsPage} from '../cats/catsPage.js'
import { loadPage } from '../helpers/loadPage.js'


export const initWelcomePage = () =>{
   const onStartClick  = (e) => {
   const parameter = e.target.value
    loadPage (initCatsPage , parameter )
   } 
   const props = {
    onStartClick
   }
   return welcomeView (props)
}

