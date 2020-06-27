import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import reducer from './reducer'

const store = createStore(reducer)

console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
