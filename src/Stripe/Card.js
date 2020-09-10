import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Form from 'Stripe/Form'
import { connect } from 'react-redux'

const Card = ({stripe}) => {
  const stripe_promise = loadStripe(stripe.client_id)

  return (
    <Elements stripe={stripe_promise}>
      <Form />
    </Elements>
  )
}

const mapStateToProps = ({stripe}) => ({stripe})

export default connect(mapStateToProps)(Card)
