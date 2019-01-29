import React from 'react'
import ReactDom from 'react-dom'
import Thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import { BrowserRouter, Route } from 'react-router-dom'
import reducers from './reducers'
import Welcome from './components/Welcome'
import SignUp from './components/auth/Signup'

const store = createStore(reducers, {}, applyMiddleware(Thunk))

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={ Welcome }/>
                <Route path="/signup" component={ SignUp } />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)