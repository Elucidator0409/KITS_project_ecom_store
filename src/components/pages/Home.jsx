
import { Banner } from 'components/Banner/Banner'
import { Button } from 'components/Button'
import { News } from 'components/News/News'
import React from 'react'
import { Container, Row , Col } from 'reactstrap'
import bg from '../assests/banner.png'
import banner2 from '../assests/banner2.png'
import'styles/home.css';
import ProductList from 'components/UI/ProductList'
function Home() {
  return (
    <>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className='hero__content'>
              <h2>Collections</h2>
              <p>You can explore ans shop many differnt collection 
                from various barands here.</p>
              <Button className="btn"  width={"115px"} height={"46px"} textColor={"white"} bgColor={"#1E2832"}>Shop Now</Button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={bg} alt="bg" width="424px" height="542px"></img>
              <div class="inner">
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <News />

    <section className='mainContainer'>
        <div className='left'>
            <div className='banner'
                style={{ background: `url(${banner2})` }}
            >

                <div className='textContainer'>
                    <h1>ZARA</h1>
                    <p>Lustrous yet understated. The new evening
                      wear collection exclusively offered at the
                      reopened Giorgio Armani boutique in Los
                      Angeles.</p>
                    <div className='button'>

                        <Button className="btn"  width={"115px"} height={"46px"} borderColor={"#E9E9E9"}>See Collection</Button>
                        
                    </div>
                </div>
            </div>
            
            
        </div>

        

       

        
    </section>


    <section className='trending__products'>
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section__title'>Best Seller</h2>
          </Col>
          <ProductList />
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Home