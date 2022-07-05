import React,{useRef} from 'react'
import Childforwordref from './Childforwordref.js'

export default function Forwardref() {

    const inputref = useRef(null);

    function getvalue(){                      
     inputref.current.value = "1000";
     inputref.current.style.color='red';
    }
    return (
        <div>
            <h1>forword ref</h1>
           <Childforwordref ref={inputref}/>
            <button onClick={getvalue}>click me</button>
           
        </div>
    )
}