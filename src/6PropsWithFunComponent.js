import React from 'react'

export default function PropsWithFunComponent(props) {
    return (
        <div style={{backgroundColor:'skyblue',margin:10}}>
            <h1>Hello {props.name}</h1>
            <h2>Email Id: {props.email}</h2>
            <h3>address: {props.other.address}</h3>
            <h4>address: {props.other.mobile}</h4>  
        </div>
    )
}
