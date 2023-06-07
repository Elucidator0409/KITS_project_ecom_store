import React from 'react'
import ProductCard from './ProductCard'
import productImg1 from '../assests/product1.png'
import productImg2 from '../assests/product2.png'
import productImg3 from '../assests/product3.png'
import productImg4 from '../assests/product4.png'
import Filters from './Filters'
import arrow from '../assests/arrow.png'
import 'styles/trending.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const TrendingProductList = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    minidesktop: {
      breakpoint: { max: 1190, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1080, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
        <Filters />
        
        <Carousel responsive={responsive}>
          <ProductCard hot={true} productImg={productImg1} name={"Basic Dress Green"} category={"Dress"}  price={236.00}/>
          <ProductCard productImg={productImg2} name={"Nike Sportswear Futura Luxe"} category={"Bag"}  price={130.00}/>
          <ProductCard sale={true} productImg={productImg3} name={"Yellow Reserved Hoodie"} category={"Dress"}  price={165.00} oldPrice={364.00}/>
          <ProductCard sale={true} productImg={productImg4} name={"Nike Air Zoom Pegasus"} category={"Shoe"}  price={198.00} oldPrice={220.00}/>
          <ProductCard sale={true} productImg={productImg4} name={"Nike Air Zoom Pegasus"} category={"Shoe"}  price={198.00} oldPrice={220.00}/>
          <ProductCard sale={true} productImg={productImg4} name={"Nike Air Zoom Pegasus"} category={"Shoe"}  price={198.00} oldPrice={220.00}/>
          <ProductCard sale={true} productImg={productImg4} name={"Nike Air Zoom Pegasus"} category={"Shoe"}  price={198.00} oldPrice={220.00}/>
          <ProductCard sale={true} productImg={productImg4} name={"Nike Air Zoom Pegasus"} category={"Shoe"}  price={198.00} oldPrice={220.00}/>
        </Carousel>;
        
    </>
  )
}

export default TrendingProductList