import React from 'react'
import {shallow} from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import commentList from 'components/CommentList'

let wrapped

beforeEach(() => {
    wrapped = shallow(<App />)
})

it('shows commentBox', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('show commentList', () => {
    expect(wrapped.find(commentList).length).toEqual(1)
})