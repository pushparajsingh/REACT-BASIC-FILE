import React,{useState} from 'react'
 //useState is the example of hooks. starting from 'use' is all hooks.

export default function HooksInReactJs() {
    const [state, setstate] = useState("anil")
    
    return (
        <div>
        <h1>Hook in react js</h1>
        <h2>{state}</h2>
        <button onClick={()=>setstate("pushparaj")}> click me </button>
            
        </div>
    )
}
