import React,{useRef,useEffect} from 'react'
import { BiSearchAlt,BiUser,BiShoppingBag } from 'react-icons/bi'
import './navbar.css'
import styled from "styled-components";
const Nav = styled.div`
  display:flex;
  justify-content:space-between;
  padding-top:30px;
  .inputBox{
    margin-left:300px;
  }
  .feature{
    display:flex;
    align-items: center;
text-align: center;
    margin-right:300px;

    
  }


  .feature i{
    margin-left:10px;
  }
  .feature span{
    margin-left:10px;
  }
  
`
const TitleStyled = styled.div`
  
    font-family: 'AmstelvarAlpha'
    width: 179px;
    height: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;
    color: #000000;
  
`
export const Navbar = () => {
  
  // const navRef = useRef(null)

  // const stickyNavbarFunc = () => {
  //   window.addEventListener('scroll', () =>{
  //     if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
  //       navRef.current.classList.add('sticky__navbar')
  //     } else {
  //       navRef.current.classList.add('sticky__navbar')
  //     }
  //   })
  // }

  // useEffect(()=>{
  //   stickyNavbarFunc();

  //   return () => window.removeEventListener('scroll', stickyNavbarFunc)
  // })
  return (
    <Nav className='navigation'>
      <div className='inputBox'>
           
            <i><BiSearchAlt/></i>
      </div>
      <TitleStyled className='title'>Lisa Store</TitleStyled>
      <div className="feature">
            <i className='profileIcon'>
                <BiUser /><span>Account</span>    
            </i> 
            <i className='profileIcon'>
                <BiShoppingBag /><span>Shopping</span>    
            </i> 
            
      </div>
    </Nav>
    
    
  )
}
