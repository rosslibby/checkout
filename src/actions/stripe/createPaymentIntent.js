import {API} from 'constants/api'
import store from 'store'

const createPaymentIntent = async () => {
  const {checkout, data, payment, pricing, stripe} = store.getState()
  const shippingRate = data.shippingOption ? parseFloat(data.shippingOption.rate) : 0
  const total = pricing.price + shippingRate

  const intent = await (await fetch(`${API}/stripe/payments/create`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      amount: total * 100,
      currency: checkout.currency,
      accountId: payment.stripe.accountId,
      customer: stripe.customer.id
    })
  })).json()

  return intent
}

export default createPaymentIntent
