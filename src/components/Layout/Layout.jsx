
import styled from "styled-components";

import { Outlet } from 'react-router-dom';
import { Navbar } from "components/Navbar/Navbar";
import { Footer } from "components/Footer/Footer";

const LayoutStyled = styled.div`
  
  min-height: 400vh;
  background-color: #F0F0F0;
  max-width:1920px;
  margin: auto;

 
`;
const ContentStyled = styled.div`

@media only screen and (max-width:768px){
  
  top:0;
  left:0;
  
  width:100%;
  
}
  height: 100%;
`;
const SideBarStyled = styled.div`
background-color: #F0F0F0;
  float: top;
  max-width:1320px;
  margin: auto;
  width: 100%;
  height:89px;
  border-bottom: 2px solid #E3E3E3;
  @media only screen and (max-width:768px){
   
   
    width:100%;
    top:0;
    
  }
`;

const PrimaryLayout = () => {
  return (
    <LayoutStyled>
      
      <SideBarStyled>
        <Navbar />
      </SideBarStyled>
      
        
      <ContentStyled><Outlet></Outlet></ContentStyled>

      <Footer />
      
    </LayoutStyled>
  );
};

export default PrimaryLayout;
