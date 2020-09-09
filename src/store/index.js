import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from 'reducers'
import checkout from 'store/checkout'

const store = createStore(reducer, {checkout}, applyMiddleware(reduxThunk))

export default store
