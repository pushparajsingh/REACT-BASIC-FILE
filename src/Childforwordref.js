import React,{forwardRef} from 'react'
 function Childforwordref(props,ref) {
    return (
        <div>
        <h1>Rorward ref in react js</h1>
        
            <input type="text" ref={ref}/>

        </div>
    )
}
export default forwardRef(Childforwordref);