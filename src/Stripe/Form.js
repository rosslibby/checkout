import React from 'react'
import { createCustomer, createPaymentIntent, storePaymentIntent } from 'actions/stripe'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { connect } from 'react-redux'

const Form = ({createCustomer, createPaymentIntent, customer}) => {
  const stripe = useStripe()
  const elements = useElements()
  const handle_submit = async e => {
    e.preventDefault()

    if (!stripe || !elements) return

    await createCustomer()

    const clientSecret = await createPaymentIntent(34.99)
    console.log(clientSecret)
    const payment = await stripe.confirmCardPayment(clientSecret.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: customer.name,
          email: customer.email,
          phone: customer.phone
        }
      },
      setup_future_usage: 'off_session'
    })

    if (payment.paymentIntent.status === 'succeeded') {
      console.log('Success!', payment)
    }
  }

  return (
    <form onSubmit={handle_submit}>
      <div className="input-label">
        <div className="input-text input-text--normal-padding">
          <CardElement />
        </div>
      </div>
      <div className="row row--centered">
        <button type="submit" className="input-button" disabled={!stripe}>
          <i className="fas fa-lock-alt" /> Pay
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = ({customer}) => ({customer})
const mapDispatchToProps = dispatch => ({
  createCustomer: () => dispatch(createCustomer()),
  createPaymentIntent: total => dispatch(createPaymentIntent(total)),
  storePaymentIntent: secret => dispatch(storePaymentIntent(secret))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
