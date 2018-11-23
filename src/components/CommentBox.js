import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveComment, fetchComments} from 'actions'
import requireAuth from 'components/requireAuth'

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
        const {fetchComments} = this.props
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h4>Add a comment</h4>
                    <textarea value={this.state.comment} onChange={this.onChangeHandler}/>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <button  className="fetch-comments" onClick={fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    saveComment,
    fetchComments
}

export default connect(null, mapDispatchToProps)(requireAuth(CommentBox))