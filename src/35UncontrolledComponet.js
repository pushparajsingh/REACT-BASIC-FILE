import React,{useRef} from 'react'

export default function UncontrolledComponet() {
 const inputref = useRef(null);
 const inputref2 = useRef(null);
   function getelement(e){
    e.preventDefault();
    console.log("value of first text = ",inputref.current.value);
    console.log("value of second text = ",inputref2.current.value);
    let val = document.getElementById("val3").value;
    console.log("value of second text = ",val);

    }
    return (
        <div>
            <h1>UncontrolledComponet</h1>
            <form onSubmit = {getelement}>
            <input type="text" ref={inputref} /><br/><br/>
            <input type="text"  ref={inputref2} /><br/><br/>
            <input type="text" id='val3' /><br/><br/>
            <button>Click me</button>
            </form>
        </div>
    )
}
