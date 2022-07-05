import React, { Component } from 'react'
import student from './student.js'

export default class ComponentWillUnmount extends Component {
    constructor(){
        super();
        this.state={
            data:true
        }
    }
    componentWillUnmount(){
        alert("component will unmount call");
    }
    render() {
        return (
            <div>
            {
                this.state.data? <student/> :<h1> child component remove </h1>
            }
                <h1>ComponentWillUnmount Uses</h1>
                <button onClick={()=>this.setState({data:!this.state.data})}>Click me</button>
            </div>
        )
    }
}
