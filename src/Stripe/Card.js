import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Form from 'Stripe/Form'
import stripe_key from 'constants/stripe'
const stripe_promise = loadStripe(stripe_key)

const Card = () => (
  <Elements stripe={stripe_promise}>
    <Form />
  </Elements>
)

export default Card
