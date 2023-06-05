import React from 'react'
import productImg from '../assests/product1.png'
import 'styles/product-card.css'
import { Col } from 'reactstrap'
const ProductCard = () => {
  return (
    <Col lg='3' md='4'>
        <div className='product__item'>
            <div className='product__img'>
                <img src={productImg} alt="prd"></img>
            </div>
            <h3 className='product__name'>Basic Dress Green</h3>
            <div className='product__card-bottom'>
                <span className='category'>Dress</span>
                <span className='price'>$236.00</span>
            </div>
        </div>
    </Col>
  )
}

export default ProductCard