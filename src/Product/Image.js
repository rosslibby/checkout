import React from 'react'
import { connect } from 'react-redux'

const Image = ({product}) => product.images.length > 0
  ? <img className="product-image" src={product.images[0]} alt={`${product.title} featured`} />
  : null

const mapStateToProps = ({product}) => ({product})

export default connect(mapStateToProps)(Image)
