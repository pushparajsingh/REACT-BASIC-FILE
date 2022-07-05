import React, { createRef, Component } from 'react'

export default class RefComponent extends Component {
    constructor(){
        super();
        this.inputRef = createRef();
        this.inputtwoRef = createRef();
    }
    componentDidMount()
    {
        console.warn(this.inputRef.current.value="1000");
        this.inputRef.current.style.backgroundColor= "black";
        this.inputRef.current.style.color ="red";
        
    } //create ref only run in componentDidMount

    getval()
    {
        this.inputtwoRef.current.style.color = "red";
    }
    render() {
       
        return (
            <div>
            <h1 ref = {this.inputtwoRef}> ref in react </h1>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.getval}>click me</button>
            </div>
        )
    }
}
