import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(){
        super();
        this.state ={
            count:1
        }
    }
    render() {
        console.warn('check rerendaring');
        return (
            <div>
               <h1>PureComponent {this.state.count}</h1>
               <button onClick={()=>this.setState({count:this.state.count + 1})}>Update Count</button>
            </div>
        )
    }
}
