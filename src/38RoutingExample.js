import react from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Nav from './Nav.js'
import Home from './Home.js'
import About from './About.js'

export default function Rout()
{

return(
<>
<Router>
<Nav/>
<Route path ="/Home"><Home/></Route>
<Route path ="/About"><About/></Route>
</Router>
</>

);

}



