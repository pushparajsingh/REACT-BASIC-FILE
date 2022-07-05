//ternary operater
import React from 'react'
import { useState } from 'react'

export default function ConditionalRenderingAnd_IFcon() {
   const [con,conup] = useState(2);
    return (
        <div>{ 
con == 1 ? <h1>Welcome gast 1</h1> : con == 2 ?<h1>Welcome gast 2</h1> : <h2>welcome gast 3</h2>
             } 
        </div>
    )
}
