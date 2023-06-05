import React from 'react'
import bg from '../assests/banner.png'
import { Button } from 'components/Button'

import styled from "styled-components";

const BannerStyled = styled.div`
    display:flex;
    justify-content:space-between;
    width:1226px;
    height:562px;
    margin-top:225px;
    margin-left:300px;
    
`


export const Banner = () => {
  return (
    <BannerStyled
                 
            >

                
                    <div>
                        <h3>Collection</h3>
                        <p>you can explore ans shop many differnt collection
                        from various barands here.</p>
                        <Button className="btn"  width={"115px"} height={"46px"} textColor={"white"} bgColor={"#1E2832"}>Shop Now</Button>
                    </div>
                    <div>
                        <img src={bg} alt="bg" width="424px" height="542px"></img>
                    </div>
                    
                
            </BannerStyled>
  )
}
