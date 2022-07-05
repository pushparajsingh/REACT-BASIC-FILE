import './App.css'
import Nav from './Nav.js'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'


//it is not working.
export default function routeee()
{
    return(
        <div>
        <Router>                
        <Link to="/">Home</Link><br/><br/>
        <Link to="/About">About</Link><br/><br/>
        <Link to="/Login">Login</Link><br/><br/>
        

        <Switch>
        <Route Path="/" exact={true}><Home/></Route>
        <Route path="/About"><About/></Route>
        <Route Path="*"> <Page/> </Route>
        </Switch>
        
        </Router>
           
        </div>
    );
}

function Home()
{

    return(
        <>
            <h1> Home Page</h1>
            <p>this is Home Page</p>
        </>
    );
}

function About()
{
return(
    <>
        <h1> About </h1>
        <p>This is About Page</p>
    </>
);
}
function Page()
{
    return(
        <>
            <h1>Page Not Found: 404 Page</h1>
        </>
    );
}