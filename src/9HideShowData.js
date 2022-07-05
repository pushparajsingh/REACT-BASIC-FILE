import React, { useState } from 'react'

export default function HideShowData() {

    const [state, setstate] = useState(false)
    return (
        <div>
        {
            state?
            <h1>hello world</h1>:null
        }
        <button onClick={()=>setstate(!state)}>Toggle</button>
        </div>
    )
}