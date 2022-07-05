import React,{useState} from 'react'

export default function ControlledComponent() {
    const [state, setstate] = useState(0);
    return (
        <div>
            <h1>Hello pushparaj singh</h1>
            <input type="text" value={state} onChange={(e)=>setstate(e.target.value)}/>
        </div>
    )
}
