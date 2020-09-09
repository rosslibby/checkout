import { STORE_PAYMENT_INTENT } from 'constants/stripe'

const storePaymentIntent = payment_intent => ({
  type: STORE_PAYMENT_INTENT,
  payment_intent
})

export default storePaymentIntent
