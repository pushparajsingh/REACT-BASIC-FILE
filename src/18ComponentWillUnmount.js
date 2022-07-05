import React, { Component } from 'react'
import componentwillunmountchild from './18componentwillunmountchild'

export default class ComponentWillUnmount extends Component {
    constructor() 
{                             //one's again to see this structure.
    super();
    this.state ={
      data:false
    }
}
    render() {
        return (
            <div>
            <button onClick={ ()=>this.setState({ data:!this.state.data }) }> toggle</button>
           {
              this.state.data?  <componentwillunmountchild/> : "component will remove"
           }
                
            </div>
        )
    }
}
