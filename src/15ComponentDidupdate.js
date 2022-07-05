import React, { Component } from 'react'

export default class ComponentDidupdate extends Component {
    constructor(){
        super();
        this.state={
            data:'Arman'  //state of props ka update per hi chala ga
        }                 //useEffect component load hona per, state ya props update hona per chalaga 
     }
     componentDidMount(){
        console.warn("ComponentDidMount did mount");
         }
     componentDidUpdate(){
        console.warn("ComponentDidupdate did mount");
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
