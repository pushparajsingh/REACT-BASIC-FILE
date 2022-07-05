import React from 'react'
import './style.css'
import style from './costum.module.css'

export default function StyleInReact() {
    return (
        <div>
            <h1 className="primary">Pushparaj singh</h1>
            <h1 style={{color:"red",backgroundColor:"black"}}> style type 1 Pushparaj singh</h1>
            <h1 className={style.success}> style type 1 Pushparaj singh</h1> 
        </div>
    )
}          // edhar enline style ma double coat , semi-colon, nahi lag raha ha.

