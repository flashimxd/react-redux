import React, {Component} from 'react'
import {connect} from 'react-redux'

export default ChildComponent => {
    class ComposedComponent extends Component {
        componentWillMount() {
            this.shouldNavigateWay()
        }
        componentDidUpdate() {
            this.shouldNavigateWay()
        }
        shouldNavigateWay() {
            const {history, auth} = this.props
            if(!auth){
                history.push('/')
            }

        }
        render() {
            return <ChildComponent {...this.props}/>
        }
    }

    const mapStateToProps = ({auth}) => ({
        auth
    })

    return  connect(mapStateToProps)(ComposedComponent)
}