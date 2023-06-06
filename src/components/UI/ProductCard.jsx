import React from 'react'

import 'styles/product-card.css'
import { Container, Row , Col, Button } from 'reactstrap'
const ProductCard = ({name,category,price,oldPrice,sale,hot,productImg}) => {
  const roundedPrice = price?.toFixed(2);
  const roundedOldPrice = oldPrice?.toFixed(2);
  return (
    <>
    

    <Col lg='3' md='4'>
        <div className='product__item'>
            <div className='product__img'>
                {sale?
                <span className='sale'>
                  Sale
                </span>
                :
                <></>
                }
                {hot?
                <span className='hot'>
                  HOT
                </span>
                :
                <></>
                }
                <span><img src={productImg} alt="prd"></img></span>
                
            </div>
            <h6 className='product__name'>{name}</h6>
            <div className='product__card-bottom d-flex align-items-center 
            justify-content-between' >
                <span className='category'>{category}</span>
                <div className='product__price'>
                  {oldPrice?
                  <h3 className='oldPrice'>${roundedOldPrice}</h3>
                  
                    :
                  <></>
                  }
                  {oldPrice?
                  <h3 className='saledPrice'>${roundedPrice}</h3>
                  :
                  <h3 className='price'>${roundedPrice}</h3>
                  }
                </div>
                
                
            </div>
        </div>
      
      </Col>
    
    
    </>
      
      
    
  )
}

export default ProductCard