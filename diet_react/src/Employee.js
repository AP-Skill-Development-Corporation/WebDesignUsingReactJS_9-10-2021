import React, { Component } from 'react'

export default class Employee extends Component {
    //  rconst 
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Udhay",
             employees:[
                 {name:"Akhil"},
                 {name:"Chaithu"}
             ]
        }
    }
    
    
    render() {

        setTimeout(()=>
        this.setState({name:"Kalyan"})
      ,5000 )

        return (
            <div>
                <h1>{this.state.employees[1].name }</h1>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}
