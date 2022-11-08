import {welcomeView} from './welcomeView.js'
import {initCatsPage} from '../cats/catsPage.js'
import { loadPage } from '../helpers/loadPage.js'


export const initWelcomePage = () =>{
   const onStartClick  = (e) => {
   const number = e.target.value
    loadPage (initCatsPage , number )
   } 
   const props = {
    onStartClick
   }
   return welcomeView (props)
}

