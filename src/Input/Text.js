import React from 'react'
import 'styles/input.scss'

class Text extends React.Component {
  constructor() {
    super()
    this._change = this._change.bind(this)
    this.state = {text: ''}
  }

  _change(e) {
    this.setState({text: e.target.value})
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

export default Text
