import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function BasicFormValidation() {
    const [state,setstate] = useState("");
    const [states,setstates] = useState("");
    const [stat,setstat] = useState(false);
    function hello(e){
       e.priventDefault()
    }
    function userhandler(e){
       let items = e.target.value;
       if(items.length<3)
       {
           setstat(true);
       }
       else
       {
           setstat(false);
       }
    }
       
    return (
        <div>
            <h1>Login form</h1>
            <form onSubmit={hello}>
            <input type="text" placeholder="enter user ID" onChange = {userhandler}/>{ stat ?<span>User not valid</span>:""}
            <br/><br/>
            <input type="text" placeholder="Enter user password"/>
            <br/><br/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
