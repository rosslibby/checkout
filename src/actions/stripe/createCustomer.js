import { CREATE_STRIPE_CUSTOMER } from 'constants/stripe'
import {API} from 'constants/api'
import store from 'store'

export const createCustomer = () => async dispatch => {
  const {data, payment} = store.getState()
  const customer = await (await fetch(`${API}/stripe/customers`, {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({
      ...data,
      accountId: payment.stripe.accountId
    })
  })).json()

  return dispatch({
    type: CREATE_STRIPE_CUSTOMER,
    customer
  })
}

export default createCustomer
