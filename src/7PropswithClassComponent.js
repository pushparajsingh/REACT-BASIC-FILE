import React, { Component } from 'react'

export default class PropswithClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            data:"Aman"
        }
    }
    render() {
       
        return (
            <div style={{backgroundColor:'skyblue',margin:10}}>
                <h1>Props with class Component with rerendring with the help of setState</h1>
                <h2>{this.props.name} {this.state.data}</h2>
                <h3>{this.props.email}</h3>
                <h4>{this.props.other.address}</h4>
                <h4>{this.props.other.mobile}</h4>
                <button onClick={()=>this.setState({data:"raj"})}>Click here </button>
            </div>
        )
    }
}
