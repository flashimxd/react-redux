import React, { Component } from "react"
import requireAuth from './requireAuth'

class featureComponent extends Component{
    render(){
        return (
            <div>
                <h1>featureComponent</h1>
            </div>
        );
    }
}
export default requireAuth(featureComponent)