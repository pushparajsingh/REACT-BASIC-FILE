import React, {useState} from 'react'

export default function UseStateHook() {//function and file name must be in capital letter

  const [state, setstate] = useState(10);
  function increment(){
      setstate(state + 1);
  }
  function decrement(){
      setstate(state - 1);
  }
    return (
        <div>
            <h1>Usestate hook</h1>
            <button onClick={increment}>increment</button>
            <h2>{state}</h2>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
