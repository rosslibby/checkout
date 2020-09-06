import React from 'react'
import Select from 'Input/Select'
import Text from 'Input/Text'
import states from 'data/states'

class Shipping extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <Text
              label="Email address"
              change={this.props.update}
              validate={value => value.length > 5
                && value.indexOf('@') > 0
                && value.indexOf('@') < value.length - 2
                && value.lastIndexOf('.') > value.indexOf('@') + 1
                && value.lastIndexOf('.') < value.length - 2}
              section="shipping"
              name="email" />
            <Text
              label="Mobile phone"
              change={this.props.update}
              validate={value => value.length > 6}
              section="shipping"
              name="phone" />
          </div>
          <div className="row">
            <Text
              label="First name"
              change={this.props.update}
              validate={value => value.length > 0}
              section="shipping"
              name="first_name" />
            <Text
              label="Last name"
              change={this.props.update}
              validate={value => value.length > 0}
              section="shipping"
              name="last_name" />
          </div>
          <div className="row">
            <Text
              label="Address"
              change={this.props.update}
              validate={value => value.length > 0}
              section="shipping"
              name="address" />
            <Text
              label="Apt/Ste"
              change={this.props.update}
              section="shipping"
              name="address2" />
          </div>
          <div className="row">
            <Text
              label="Zip code"
              change={this.props.update}
              validate={value => value.length > 4}
              section="shipping"
              name="zip" />
            <Text
              label="City"
              change={this.props.update}
              validate={value => value.length > 0}
              section="shipping"
              name="city" />
            <Select name="state" default="State" label="State" options={states} required={true} value="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Shipping
