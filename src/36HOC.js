import React,{useState} from 'react'

export default function Hoc() {
    
    return (
        <div>
            <HighOrderComponent cmp = {Counter}/><br/><br/>
            <HighOrdergreen cmp = {Counter}/><br/><br/>
            <HighOrderyellow cmp = {Counter}/><br/><br/>
        </div>
    );                        //ham yaha function bi pass kar raha ha
}
function HighOrderComponent(props){
    return ( <h1 style={{backgroundColor:"red",width:300}}> <props.cmp/> </h1>)
}

function HighOrdergreen(props){
    return ( <h1 style={{backgroundColor:"green",width:300}}> <props.cmp/> </h1>)
}

function HighOrderyellow(props){
    return ( <h1 style={{backgroundColor:"yellow",width:300}}> <props.cmp/> </h1>)
}                                     //yaha bus props.cmp hoga. or sub same ha props jasa

function Counter()
{
    const [state, setstate] = useState(0);
    return (
        <div>
            <h1>High Order Component</h1>
            <h2>{state}</h2>
            <button onClick={()=>setstate(state + 1)}> Update Value </button>
        </div>
        )
}
