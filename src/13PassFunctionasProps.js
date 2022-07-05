import React from 'react'

export default function PassFunctionasProps(props) {
    return (
        <div>
            <h1> pass function  </h1>
            <button onClick = {props.fun}>click me</button>
        </div>
    )
}
 

