import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from 'reducers'
import cart from 'store/cart'
import checkout from 'store/checkout'
import customer from 'store/customer'
import product from 'store/product'
import stripe from 'store/stripe'

const store = createStore(reducer, {
  cart,
  checkout,
  customer,
  product,
  stripe
}, applyMiddleware(reduxThunk))

export default store
