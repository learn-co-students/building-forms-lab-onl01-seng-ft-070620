import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App';
import manageBand from './reducers/manageBand'

const initialState = {bands: [{name: "Van Halen"}, {name: "ACDC"}]}
const store = createStore(manageBand, initialState, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
