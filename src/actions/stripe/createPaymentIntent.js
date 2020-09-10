import {API} from 'constants/api'
import store from 'store'

const createPaymentIntent = dispatch => async (total, currency = 'usd') => {
  const {stripe} = store.getState()
  console.log(stripe)

  const intent = await (await fetch(`${API}/stripe/payments/create`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      amount: total * 100,
      currency,
      customer: stripe.customer.id
    })
  })).json()

  return intent
}

export default createPaymentIntent
