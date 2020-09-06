import React from 'react'
import Radio from 'Input/Radio'

class Method extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="col">
            <Radio name="shipping"
              checked={this.props.options === 'standard'}
              change={this.props.update}
              section="method"
              id="standard"
              label="Shipping method" />
            <Radio name="shipping"
              checked={this.props.options === 'expedited'}
              change={this.props.update}
              section="method"
              id="expedited"
              label="Expedited" />
          </div>
        </div>
      </div>
    )
  }
}

export default Method
