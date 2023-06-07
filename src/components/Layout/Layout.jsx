
import styled from "styled-components";

import { Outlet } from 'react-router-dom';
import { Navbar } from "components/Navbar/Navbar";
import { Footer } from "components/Footer/Footer";

const LayoutStyled = styled.div`
  
  min-height: 400vh;
  background-color: #F0F0F0;
  max-width:1920px;
  margin: auto;

  @media (max-width:390px){
    flex-direction:column;
    max-width:150px;
    width:100%;
    margin: 0px 0px;
  }
`;
const ContentStyled = styled.div`


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
