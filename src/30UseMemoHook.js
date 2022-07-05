import React, { useState, useMemo } from 'react'

export default function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const multiCountMemo = useMemo(function multiCount() {
        console.warn("multiCount");
        return count * 5
    }, [count])

    return (
        
        <div>

            <h1> memo hook is use here </h1>
            <h2>Count: {count}</h2>
            <h2>items: { item } </h2>
            <h2> {multiCountMemo} </h2>
            <button onClick={()=>setCount(count + 1)}> Update Count </button>
            <button onClick={()=>setItem(item * 10)}> Update items </button>

        </div>
    )
}
