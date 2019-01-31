import React, { Component } from "react"
import { connect } from 'react-redux'
import * as Actions from '../../actions'

class signoutComponent extends Component{
    componentDidMount(){
        this.props.signout()
    }
    render(){
        return (
            <div>
                <h1>By bitch</h1>
            </div>
        );
    }
}
export default connect(null, Actions)(signoutComponent)