import { Component,setState } from "react";
export default class Hello extends Component{
    constructor()
    {
        super();
        this.state = {
          
            data:1
        }
    }

    putdata()
    {
        // alert("Hello World");
        this.setState({data:this.state.data + 1});
    }
    render()
    {
        return(
            <>
            <h1>hello world</h1>
            <h2>{this.state.data}</h2>
            <button onClick={()=>this.putdata()}>Click Me</button>
            </>
        );
    }
}