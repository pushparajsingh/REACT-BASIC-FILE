//it also called 'lifting State Up'
import React from 'react'

export default function SendDataChildToParent(props) {
    const a = "hello world";
    return (
        <div>
            <h1>hello world</h1>
            <button onClick={()=>props.alert(a)}>click me</button>
        </div>
    )
}
