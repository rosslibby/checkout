import React from 'react'
import Card from 'Card'
import Text from 'Input/Text'
import 'styles/index.scss'

function App() {
  return (
    <div className="card card--heading">
      <div className="progress">
        <div className="progress-title progress-title--active">Shipping info</div>
        <div className="progress-title">Method</div>
        <div className="progress-title">Payment</div>
      </div>
      <div className="col">
        <div className="row">
          <Text label="Email address" />
          <Text label="Mobile phone" />
        </div>
        <div className="row">
          <Text label="First name" />
          <Text label="Last name" />
        </div>
        <div className="row">
          <Text label="Address" />
          <Text label="Apt/Ste" />
        </div>
        <div className="row">
          <Text label="Zip code" />
          <Text label="City" />
          <Text label="State" />
        </div>
        <div className="row row--centered">
          <button className="input-button"><i className="fas fa-lock-alt" /> Continue</button>
        </div>
      </div>
    </div>
  )
}

export default App
