import React from 'react'
import './footer.css'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaArrowUp } from "react-icons/fa"
import { Container,Row,Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' >
            <div className='owner-name'>
              <h1>Lisa</h1>
            </div>
            <p className='footer-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium, non fugit reiciendis iste reprehenderit commodi nihil illum vel amet voluptates nobis qui quibusdam voluptatibus et nam, mollitia quaerat, officia itaque!
            </p>
            <Row>
              <Col lg='2'><span><FaFacebookF /></span></Col>
              <Col lg='2'><span><FaTwitter /></span></Col>
              <Col lg='2'><span><FaLinkedinIn /></span></Col>
              <Col lg='2'><span><FaInstagram /></span></Col>
            </Row>
            

          </Col>

          <Col lg='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>CATALOG</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>Necklaces</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>Hoodies</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'> 
                  <Link className='text' to='#'>Jewelry Box</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>T-Shirt</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>Jacket</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>ABOUT US</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>Our Producers</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>Sitemap</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'> 
                  <Link className='text' to='#'>FAQ</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>About Us</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>Term & Conditions</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>CUSTOMER SERVICES</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>Contact Us</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>Tract Your Order</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'> 
                  <Link className='text' to='#'>Product Care & Repair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>Book An Appointment</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className='text' to='#'>Shipping & Returns</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
        <Row>
        <div className='footer-tag'>
          <h6 className='tag'>© 2023 LISA</h6>
          <h6 className='tag'>aaaa</h6>
          <Link className='text' to='#'>Scroll To Top <FaArrowUp/></Link>
        </div>
        </Row>
      </Container>
      
    </footer>
  )
}
