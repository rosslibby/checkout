import {API} from 'constants/api'
import store from 'store'

const createPaymentIntent = (total, currency = 'usd') => async dispatch => {
  const {stripe} = store.getState()

  const intent = await (await fetch(`${API}/stripe/payments/create`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      amount: total * 100,
      currency,
      customer: stripe.customer.id,
      secret: stripe.client_secret
    })
  })).json()

  return intent
}

export default createPaymentIntent
