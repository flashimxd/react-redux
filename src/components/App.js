import React, {Component} from "react"
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import {changeAuth} from 'actions'

class App extends Component {
    renderButton() {
        const {auth, changeAuth} = this.props
        if(auth){ 
            return(<button onClick={() => changeAuth(false)}>Sign Out</button>)
        }else{
            return(<button onClick={() => changeAuth(true)}>Sign In</button>)
        }
    }
    renderHeader() {
        return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/post">Post</Link>
            </li>
            <li>
                {this.renderButton()}
            </li>
        </ul>
        )
    }
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post"  component={CommentBox} />
                <Route path="/" exact component={CommentList} />
            </div>
        )
    }
}

const mapStateToProps = ({auth}) => ({
    auth
})

const mapDispatchToProps = {
    changeAuth   
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


