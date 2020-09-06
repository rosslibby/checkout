import React from 'react'

class Radio extends React.Component {
  constructor() {
    super()
    this._change = this._change.bind(this)
  }

  _change(e) {
    this.props.change(this.props.id)
  }

  render() {
    return (
      <div className="input input__radio">
        <label className={`input-radio ${this.props.checked && 'input-radio--active'}`} htmlFor={this.props.id} onClick={this._change}>
          <input name={this.props.name} id={this.props.id} type="radio" />
          {this.props.checked && <i className="fad fa-circle active" />}
          {!this.props.checked && <i className="far fa-circle" />}
          <span className="input-radio__text">{this.props.label}</span>
        </label>
      </div>
    )
  }
}

Radio.defaultProps = {
  checked: false
}

export default Radio
