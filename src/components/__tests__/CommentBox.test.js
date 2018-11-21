import React from 'react'
import {mount} from 'enzyme'
import Root from 'Root'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    )
})

afterEach(() => {
    wrapped.unmount()
})

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})

describe('the textarea', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new coment'}
        })
        wrapped.update()
    })

    it('has a textarea that use can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new coment')
    })

    it('submit the form and clean the textarea', () => {
        wrapped.find('form').simulate('submit')
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})