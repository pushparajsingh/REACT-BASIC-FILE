import React from 'react'
import {useState} from 'react'

export default function GetInputBoxValue() {
    const [state, setstate] = useState(0)
    const [data, setdata] = useState(false)
    
    function getdata(val){ // value send karta time {getdata} aasa likan ga
    setstate(val.target.value); 
    }                    //always use without arrow symbol => ,only use this for sending data
    return (
                
        <div>
      {  data? <h1>{state}</h1>:null } 
        <input type = "text" onChange={getdata}/> 
           <button onClick={()=>setdata(true)}>Click me</button>

        </div>
    )
}

