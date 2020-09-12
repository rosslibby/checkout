import { combineReducers } from 'redux'
import cart from 'reducers/cart'
import checkout from 'reducers/checkout'
import customer from 'reducers/customer'
import product from 'reducers/product'
import stripe from 'reducers/stripe'

export default combineReducers({
  cart,
  checkout,
  customer,
  product,
  stripe
})
