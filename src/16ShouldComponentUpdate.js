import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
    constructor(){
        super();
        this.state={
            data:'Arman'
        }
     }
    componentDidMount(){
        console.warn("ComponentDidMount did mount");
         }  
    componentDidUpdate(){
        console.warn("ComponentDidupdate did mount");
         }
    shouldComponentUpdate(){   //shouldComponentUpdate pahala chalaga, componentDidUpdate sa.
        console.warn("ahould component update");
        return false;  //ya true karna per hi rendring chal ta ha
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
