import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [state, setstate] = useState(0)
    const [stat, setstat] = useState(0)
//this is use in functioncal component only, but, similar to componentDidMount,componentDidUpdate and ComponentWillUnmount.
    {
        useEffect(() => {
            alert("call state");

        }, [state])

        useEffect(() => {
            alert("call stat");

        }, [stat])
    }


    return (
        <div>
            <h1> useEffect in reactjs   {state}  </h1>
            <h1> useEffect in reactjs   {stat}  </h1><br/><br/>
            <button onClick={() => setstate(state + 1)}>Update state</button>
            <button onClick={() => setstat(stat + 1)}>Update stat</button>
        </div>
    );
}
