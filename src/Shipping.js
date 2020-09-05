import React from 'react'
import Text from 'Input/Text'

class Shipping extends React.Component {
  render() {
    return (
      <div className="row">
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
        </div>
      </div>
    )
  }
}

export default Shipping
