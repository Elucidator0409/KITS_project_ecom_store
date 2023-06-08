import { Button } from 'components/Button';
import React from 'react'
import styled from "styled-components";
import { Container, Row , Col } from 'reactstrap'
import'styles/news.css';


import brand1 from '../assests/brand-1.png'
import brand2 from '../assests/brand-2.png'
import brand3 from '../assests/brand-3.png'
import brand4 from '../assests/brand-4.png'
import brand5 from '../assests/brand-5.png'

import cat1 from '../assests/cat1.png'
import cat2 from '../assests/cat2.png'
import cat3 from '../assests/cat3.png'
import cat4 from '../assests/cat4.png'
import cat5 from '../assests/cat5.png'

const NewsStyled = styled.div`
    background: white;
    width:1420px;
    height:900px;
    margin-top: 80px;
    margin-left:220px;
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width:768px){
      width:100%;
      margin-left:0;
      
    }
    
`
export const News = () => {
  return (
    <NewsStyled>
        <div className='logo'>
          <div className='logo-com'><img src={brand1} alt='brand' width="200px" height="70px" ></img></div>
          <div className='logo-com'><img src={brand2} alt='brand' width="200px" height="70px" ></img></div>
          <div className='logo-com'><img src={brand3} alt='brand' width="200px" height="70px" ></img></div>
          <div className='logo-com'><img src={brand4} alt='brand' width="200px" height="70px" ></img></div>
          <div className='logo-com'><img src={brand5} alt='brand' width="200px" height="70px" ></img></div>

          {/* <img src={brand1} alt='brand' width="200px" height="70px" ></img>
          <img src={brand2} alt='brand' width="200px" height="70px" ></img>
          <img src={brand3} alt='brand' width="200px" height="70px" ></img>
          <img src={brand4} alt='brand' width="200px" height="70px" ></img>
          <img src={brand5} alt='brand' width="200px" height="70px" ></img> */}
        </div>
        <div className='img__category'>
          <div className='main__img'>
            
            <h5>Explore new and popular styles</h5>
            
            <img className='pos-relative' src={cat1} alt="cate" width="648px" height="648px"></img>
          </div>
          <div className='sub__img'>
            <div className='item'>
              <div class="blank-containers"></div>
              <img src={cat2} alt="cate" width="312px" height="312px"></img>
              <img src={cat3} alt="cate" width="312px" height="312px"></img>
            </div>
            <div className='item'>
              <div class="blank-containers"></div>
              <img src={cat4} alt="cate" width="312px" height="312px"></img>
              <img src={cat5} alt="cate" width="312px" height="312px"></img>
            </div>

          
          </div>
        </div>
    </NewsStyled>
  )
}
