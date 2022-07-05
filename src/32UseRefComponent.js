import React,{useRef} from 'react'

export default function ReffComponent() {
    const inputref = useRef(null);
    
   function getvalue(){
     inputref.current.style.color="red";
    }
    return (
        <div>
        <h1>pushparajsingh448</h1>
            <input type="text" ref={inputref} />
            <button onClick={getvalue}>click me</button>
        </div>
    )
}
