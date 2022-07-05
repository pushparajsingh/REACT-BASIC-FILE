import React, { Component } from 'react'

export default class StateWithClassComponent extends Component {
    constructor()
    {                   //component capital letter ma 
        super();         
        this.state ={
            data:1     //semi - colon nahi lagana ha
        }    
    }
    change(){     //function nahi lika jata ha
       this.setState({data:this.state.data + 1})       
    }

    render() {
        return (
            <div>
                <h1>State with ClassComponent</h1>
                <h2>{this.state.data}</h2>
                <button onClick={()=>this.change()}> Click Here </button>
                {/* class component ma hamasa arrow sign//()=>this.chage() laga ka hi call hoga  */}
            </div>
        )
    }
}

// import React, {Component} from 'react'
// export default class Hello extends Component
// {
// constructor()
// {
//     super();
//     this.state ={
//      data:"Aman" //here is string data
//  }
// }
// change()
// {
// this.setState({data:"Ankush"});
// }
// render(){
//     return(
//         <>
//         <h1>hello world</h1>
//         <h2>{this.state.data}</h2>
//         <button onClick={ ()=>this.change() }>Click Me</button>
//         </>
//     )
// }
// }