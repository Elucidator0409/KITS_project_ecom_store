import React from 'react'
import ProductCard from './ProductCard'
import productImg1 from '../assests/product1.png'
import productImg2 from '../assests/product2.png'
import productImg3 from '../assests/product3.png'
import productImg4 from '../assests/product4.png'
import Filters from './Filters'

const TrendingProductList = () => {
  return (
    <>
        <Filters />
        <ProductCard hot={true} productImg={productImg1} name={"Basic Dress Green"} category={"Dress"}  price={236.00}/>
        <ProductCard productImg={productImg2} name={"Nike Sportswear Futura Luxe"} category={"Bag"}  price={130.00}/>
        <ProductCard sale={true} productImg={productImg3} name={"Yellow Reserved Hoodie"} category={"Dress"}  price={165.00} oldPrice={364.00}/>
        <ProductCard sale={true} productImg={productImg4} name={"Nike Air Zoom Pegasus"} category={"Shoe"}  price={198.00} oldPrice={220.00}/>
    </>
  )
}

export default TrendingProductList