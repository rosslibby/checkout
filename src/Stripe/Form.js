import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

const Form = () => {
  const stripe = useStripe()
  const elements = useElements()
  const handle_submit = async e => {
    e.preventDefault()

    if (!stripe || !elements) return

    const card_element = elements.getElement(CardElement)
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: card_element
    })

    if (error) console.log('[error]', error)
    else console.log('[PaymentMethod]', paymentMethod)
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

export default Form
