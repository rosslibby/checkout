import { combineReducers } from 'redux'
import checkout from 'reducers/checkout'
import customer from 'reducers/customer'
import product from 'reducers/product'
import stripe from 'reducers/stripe'

export default combineReducers({
  checkout,
  customer,
  product,
  stripe
})
