import React from 'react'
import Method from 'Method'
import Shipping from 'Shipping'
import Card from 'Stripe/Card'
import { updateCustomer } from 'actions/customer'
import { connect } from 'react-redux'

class Form extends React.Component {
  constructor() {
    super()

    this._continue = this._continue.bind(this)
    this._changeSection = this._changeSection.bind(this)
    this._shippingComplete = this._shippingComplete.bind(this)
    this._methodComplete = this._methodComplete.bind(this)
    this._paymentComplete = this._paymentComplete.bind(this)
    this._update = this._update.bind(this)
    this._updateMethod = this._updateMethod.bind(this)
    this._valid = this._valid.bind(this)
    this.state = {
      shipping_complete: false,
      method_complete: true,
      payment_complete: false,
      section: 'shipping',
      method: 'standard',
      shipping: {
        email: {
          valid: false,
          value: ''
        },
        phone: {
          valid: false,
          value: ''
        },
        first_name: {
          valid: false,
          value: ''
        },
        last_name: {
          valid: false,
          value: ''
        },
        address: {
          valid: false,
          value: ''
        },
        address2: {
          valid: false,
          value: ''
        },
        city: {
          valid: false,
          value: ''
        },
        state: {
          valid: true,
          value: ''
        },
        zip: {
          valid: false,
          value: ''
        }
      }
    }
  }

  _updateMethod(method) {
    this.setState({method})
  }

  _update(section, key, value, valid = false) {
    const data = this.state
    const update_object = {}
    update_object[key] = value
    data[section][key] = {value, valid}
    this.setState(data, () => {
      this._valid(section)
      this.props.updateCustomer(update_object)
    })
  }

  _valid(section) {
    if (section === 'shipping') {
      let shipping_complete = Object.keys(this.state.shipping).findIndex(key => this.state.shipping[key].valid === false) === -1
      this.setState({shipping_complete})
    } else if (section === 'method') this.setState({method_complete: false})
    else if (section === 'payment') this.setState({payment_complete: false})
  }

  _shippingComplete(status) {
    this.setState({shipping_complete: status})
  }

  _methodComplete(status) {
    this.setState({method_complete: status})
  }

  _paymentComplete(status) {
    this.setState({payment_complete: status})
  }

  _continue() {
    const section = this.state.section === 'shipping'
      ? 'method'
      : this.state.section === 'method'
        ? 'payment'
        : 'complete'
    this.setState({section})
  }

  _changeSection(section) {
    this.setState({section})
  }

  render() {
    const enabled = this.state.section === 'shipping'
      ? this.state.shipping_complete
      : this.state.section === 'method'
        ? this.state.method_complete
        : this.state.payment_complete

    return (
      <div className="card card--heading">
        <div className="progress">
          <div
            onClick={() => this._changeSection('shipping')}
            className={`progress-title${this.state.section === 'shipping' ? ' progress-title--active' : ''}`}>Shipping info</div>
          <div
            onClick={() => this._changeSection('method')}
            className={`progress-title${this.state.section === 'method' ? ' progress-title--active' : ''}`}>Method</div>
          <div
            onClick={() => this._changeSection('payment')}
            className={`progress-title${this.state.section === 'continue' ? ' progress-title--active' : ''}`}>Payment</div>
        </div>
        {this.state.section === 'shipping' && <Shipping
          complete={this._shippingComplete}
          update={this._update} />}
        {this.state.section === 'method' && <Method
          options={this.state.method}
          complete={this._methodComplete}
          update={this._updateMethod} />}
        {this.state.section === 'payment' && <Card />}
        {this.state.section !== 'payment' && <div className="row row--centered">
          <button className="input-button" disabled={!enabled} onClick={this._continue}>
            <i className="fas fa-lock-alt" /> Continue
          </button>
        </div>}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCustomer: data => dispatch(updateCustomer(data))
})

export default connect(null, mapDispatchToProps)(Form)
