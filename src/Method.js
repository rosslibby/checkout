import React from 'react'
import Text from 'Input/Text'

class Method extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <Text label="Shipping method" />
            <Text label="Expedited" />
          </div>
        </div>
      </div>
    )
  }
}

export default Method
