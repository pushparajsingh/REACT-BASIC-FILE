import React from 'react'

export default function EventAndFunction() {
    var data = "hello raj";
    function apple()
    {
        alert("hello world");
        var data = "ram"; // yaha data ko initialise karna per bi ?
    }
   //importent:- we want to comment things inside the render block. This is because we use JSX inside the render block and must use multi-line comment in curly braces {/* */}.
    return (
        <div>
            <h1>Event And Function</h1>
            <h1>{data}</h1>
            <button onClick={()=>apple()}>chick me</button>
            <h1>{data}</h1>                 
            {/* yaha per data change nahi huwa. that's why we usestate hook keyword */}
        </div>
    )
}
