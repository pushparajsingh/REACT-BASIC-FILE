import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default function Routing() {
    return (
        <div>
            <Router>
                <Link to="/Home">Home page</Link>
                <br />
                <Link to="/About">About page</Link>
                <Route path="/Home"> <Home/></Route>
                <Route path="/About"> <About/></Route>
            </Router>

        </div>
    )
}

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>THIS IS HOME PAGE OF WEBSITE</p>
        </div>
    );
}
function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>THIS IS ABOUT PAGE WEBSITE</p>
        </div>
    );
}