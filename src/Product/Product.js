import React from 'react'
import Image from 'Product/Image'
import { connect } from 'react-redux'
import 'styles/product.scss'

const Product = ({cart, product}) => {
  console.log(cart, product)
  return (
    <div className="card card--horizontal">
      <Image />
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <h1 className="product-title">${product.cost}</h1>
      </div>
    </div>
  )
}

const mapStateToProps = ({cart, product}) => ({cart, product})
export default connect(mapStateToProps)(Product)
