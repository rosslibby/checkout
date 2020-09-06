import React from 'react'

class Select extends React.Component {
  constructor() {
    super()
    this.selectRef = React.createRef()
    this._change = this._change.bind(this)
    this._toggleSelect = this._toggleSelect.bind(this)
    this.state = {open: false, text: ''}
  }

  componentDidMount() {
    document.addEventListener('click', e => {
      if (this.state.open && e.target.getAttribute('data-type') !== `select-${this.props.name}`) this._toggleSelect()
    })
  }

  _change(e) {
    this.setState({text: e.target.value})
  }

  _toggleSelect() {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div className="input" onClick={this._toggleSelect} data-type={`select-${this.props.name}`}>
        <label className="input-label input-label--select" data-type={`select-${this.props.name}`}>
          <div className={`input__select ${this.state.open ? 'input__select--visible' : ''}`} data-type={`select-${this.props.name}`}>
            {this.props.options.map((option, i) => (
              <div key={i} className="input__select-item" value={option.value} data-type={`select-${this.props.name}`}>{option.name}</div>
            ))}
          </div>
          <span className="input-label__text" data-type={`select-${this.props.name}`}>{this.props.label}</span>
          <i className="fas fa-angle-down" onClick={this._toggleSelect} data-type={`select-${this.props.name}`} />
        </label>
      </div>
    )
  }
}

export default Select
