import React from 'react'
import Card from 'Card'
import Method from 'Method'
import Shipping from 'Shipping'

class Form extends React.Component {
  constructor() {
    super()

    this._continue = this._continue.bind(this)
    this._changeSection = this._changeSection.bind(this)
    this.state = {section: 'shipping'}
  }

  _continue() {
    const section = this.state.section === 'shipping'
      ? 'method'
      : this.state.section === 'method'
        ? 'continue'
        : 'complete'
    this.setState({section})
  }

  _changeSection(section) {
    this.setState({section})
  }

  render() {
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
            onClick={() => this._changeSection('continue')}
            className={`progress-title${this.state.section === 'continue' ? ' progress-title--active' : ''}`}>Payment</div>
        </div>
        {this.state.section === 'shipping' && <Shipping />}
        {this.state.section === 'method' && <Method />}
        <div className="row row--centered">
          <button className="input-button" onClick={this._continue}>
            <i className="fas fa-lock-alt" /> Continue
          </button>
        </div>
      </div>
    )
  }
}

export default Form
