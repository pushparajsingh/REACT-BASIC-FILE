import React,{useState} from 'react'

export default function BasicForm() {
    
    const [name,setName] = useState("")
    const [tnc,setTnc]= useState(false)
    const [interest,setInterest]=useState("")
    
    function getFormData(e){
        console.alert({name,tnc,interest});
        e.preventDefault()
        
    }

    return (
        <div>
           <from onSubmit = {getFormData}>
               <fieldset>
                   <legend>company information</legend>
                   <label>Name</label><input type="text" onChange={(e)=>setName(e.target.value)} placeholder="enter name"  /><br/><br/>
                   <select onChange={(e)=>setInterest(e.target.value)}>
                       <option>Ram</option>
                       <option>rohit</option>
                       <option>Satyam</option>
                       <option>Soyam</option>                       
                   </select>
                   <br/><br/>
                   <input type="checkbox"  id="first" value="sec" onChange={(e)=>setTnc(e.target.checked)}/> <label for="first">terma & Condition</label>
                   <br/><br/>

                   <button type="submit">submit</button>
               </fieldset>
           </from>
        </div>
    )
}
