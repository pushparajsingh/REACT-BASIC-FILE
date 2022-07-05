import React from 'react'
import User from './User.js'
import {BrowserRouter as Router,Route,Link } from 'react-router-dom'

export default function DinamicRouting() {
    let users=[
        {name:'anil',id:1,email:"pushparajsingh448@gmial.com"},
        {name:'peter',id:2,email:"pushparajsingh448@gmial.com"},
        {name:'bruce',id:3,email:"pushparajsingh448@gmial.com"},
        {name:'tony',id:4,email:"pushparajsingh448@gmial.com"}
      ]
    return (
        <div>
         <Router>
      <h1>React Dynamic Routing</h1>
      {
        users.map((item)=>
      <div><Link to={"/user/"+ item.id +"/"+item.name}><h3>{item.name}</h3></Link></div>)
      }
      <Route path="/user/:id/:name" ><User /></Route>
      </Router>
        </div>
    );
}
