import React, {Component} from 'react'
import {connect} from 'react-redux'

class CommentList extends Component {
    renderComments() {
        const {comments} = this.props
        return comments.map(comment => {
            return (
                <li key={comment}>{comment}</li>
            )
        })
    }
    render(){
        return (
            <div>
                <h4>Comment List</h4>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({comments}) => (
    {comments}
)

export default connect(mapStateToProps, {})(CommentList)