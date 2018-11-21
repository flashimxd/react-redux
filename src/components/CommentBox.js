import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveComment} from 'actions'

class CommentBox extends Component {
    state = {comment: ''}
    onChangeHandler = evt => {
        this.setState({comment: evt.target.value})
    }
    onSubmitHandler = evt => {
        evt.preventDefault()
        const {saveComment} = this.props
        this.setState({comment: ''})
        saveComment(this.state.comment)
    }
    render(){
        return (
            <form onSubmit={this.onSubmitHandler}>
                <h4>Add a comment</h4>
                <textarea value={this.state.comment} onChange={this.onChangeHandler}/>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = {
    saveComment
}

export default connect(null, mapDispatchToProps)(CommentBox)