import React, { Component } from "react"
import { reduxForm, Field } from 'redux-form'

class SignUp extends Component{
    onSubmit = props => {
        console.log(props)
    }
    render(){
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email:</label>
                    <Field name="email" type="text" component="input" autoComplete="none" />
                </fieldset>
                <fieldset>
                    <label>Password:</label>
                    <Field name="password" type="password" component="input"autoComplete="none" />
                </fieldset>
                <button>Sign Up!</button>
            </form>
        );
    }
}
export default reduxForm({ form: 'signup' })(SignUp)