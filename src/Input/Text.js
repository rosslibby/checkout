import React from 'react'

class Text extends React.Component {
  constructor() {
    super()
    this._change = this._change.bind(this)
    this.state = {text: ''}
  }

  _change(e) {
    const value = e.target.value
    this.setState({text: value}, () => this.props.change(
      this.props.section,
      this.props.name,
      value,
      this.props.validate(value)
    ))
  }

  render() {
    return (
      <div className="input">
        <label className="input-label">
          <input type="text" className={`input-text${this.state.text.length > 0 ? ' input-text--filled' : ''}`} onChange={this._change} />
          <span className="input-label__text">{this.props.label}</span>
        </label>
      </div>
    )
  }
}

Text.defaultProps = {
  validate: () => true
}

export default Text
