import React from 'react'
import ProductCard from './ProductCard'
import productImg1 from '../assests/product1.png'
import productImg2 from '../assests/product2.png'
import productImg3 from '../assests/product3.png'
import productImg4 from '../assests/product4.png'
import productImg5 from '../assests/product5.png'
import productImg6 from '../assests/product6.png'
import productImg7 from '../assests/product7.png'
import productImg8 from '../assests/product8.png'
import Filters from './Filters'

const ProductList = () => {
  return (
    <>
        <Filters />

        
        <ProductCard  productImg={productImg8} name={"Adicolor Classics Joggers"} category={"Dress"}  price={63.85}/>
        <ProductCard productImg={productImg2} name={"Nike Sportswear Futura Luxe"} category={"Bag"}  price={130.00}/>
        <ProductCard  productImg={productImg7} name={"Nike Air Zoom Pegasus"} category={"Scarf"}  price={198.00} oldPrice={53.00}/>
        <ProductCard sale={true} productImg={productImg3} name={"Yellow Reserved Hoodie"} category={"Dress"}  price={165.00} oldPrice={364.00}/>
        
        <ProductCard hot={true} productImg={productImg1} name={"Basic Dress Green"} category={"Dress"}  price={236.00}/>
        <ProductCard sale={true} productImg={productImg4} name={"Nike Air Zoom Pegasus"} category={"Shoe"}  price={198.00} oldPrice={220.00}/>
        <ProductCard productImg={productImg5} name={"Nike Repel Miler"} category={"Dress"}  price={120.50}/>
        <ProductCard  productImg={productImg6} name={"Nike Sportswear Futura Luxe"} category={"Glasses"}  price={160.00} oldPrice={364.00}/>
        
        
    </>
  )
}

export default ProductList