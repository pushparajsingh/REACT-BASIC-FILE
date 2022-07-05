import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor(){
        super();
        this.state={
            data:'Arman'
        }
     }
     componentDidMount()
     {
        console.warn("component did mount");
    }
    render() {
        return (
            <div>
                <h1> hello world {this.state.data}</h1>
                <button onClick={()=>this.setState({data:"pushparaj"})}> Click Me </button>
            </div>
        )
    }
}
