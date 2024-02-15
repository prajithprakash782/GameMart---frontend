import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import console from '../Assets/console.webp'
import gamingpc from '../Assets/pc.jpg'
import games from '../Assets/ps5.jpeg'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap'
import about from '../Assets/about.jpg'
import './Home.css'

import ps5 from '../Assets/ps.png'
import keyboard from '../Assets/keyboard.webp'
import pc from '../Assets/PC.png'
import laptop from '../Assets/laptop.png'

import Footer from '../components/Footer';


function Home() {
  return (
    
    <div style={{ overflowX: 'hidden' }}>
      
      <section id='home'>
        <Carousel className='mt-5' data-bs-theme="dark" fade controls={false}>
          <Carousel.Item interval={2000}>
            <Link to={'/consoles'}>
              <img
                width="100%"
                height="500px"
                src={console}
                alt="First slide"
              />
            </Link>
  
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Link to={'/gaming-pc'}>
              <img
                width="100%"
                height="500px"
                src={gamingpc}
                alt="Second slide"
              />
            </Link>
  
          </Carousel.Item >
          <Carousel.Item interval={2000}>
            <Link to={'/consoles'}>
              <img
                width="100%"
                height="500px"
                src={games}
                alt="Third slide"
              />
            </Link>
  
          </Carousel.Item>
        </Carousel>
      </section>
      <Container>
        <Row className='mt-5'>
          <Col lg={6} md={12}>
            <img className='mb-5' style={{ width: '400px', height: '350px' }} src={about} alt="about image" />
          </Col>
          <Col lg={6} md={12}>
            <section id='about'>
              <h2 className='mb-3' style={{ textDecoration: 'underline', overflowY: 'hidden' }}>About Us</h2>
              <p>Welcome to Game<span style={{ color: '#2E8BC0', fontWeight: 'bold' }}>Mart</span>, where passion for gaming meets unparalleled selection and exceptional service. As avid gamers ourselves, we understand the thrill of embarking on epic adventures, mastering challenging levels, and connecting with fellow gamers worldwide. .</p>
              <br />
              <p>At Game<span style={{ color: '#2E8BC0', fontWeight: 'bold' }}>Mart</span> , we take pride in curating a diverse and extensive collection of the latest and greatest games, consoles, accessories, and gaming gear. Whether you're a seasoned pro looking for the hottest releases or a newcomer eager to explore the world of gaming, our carefully selected range caters to every gaming taste and preference.</p>
            </section>
          </Col>
        </Row>
        <section id='categories'>
          <Row>
            <h2 className='text-center'>Categories</h2>
            <Col >
              <div className="box-category">
                <div className="category">
                  <Link to={'/consoles'}>
                    <img
                      width="100%"
                      height="100px"
                      src={ps5}
                      alt="category1"
                    />
                    
                  </Link>
                  <p>Consoles</p>
                </div>
                <div className="category">
                <Link to={'/gaming-pc'}>
                    <img
                      width="100%"
                      height="100px"
                      src={pc}
                      alt="category2"
                    />
                  </Link>
                  <p>Gaming PC</p>
                </div>
                <div className="category">
                <Link to={'/keyboard'}>
                    <img
                      width="100%"
                      height="100px"
                      src={keyboard}
                      alt="category3"
                    />
                  </Link>
                  <p>Keyboard</p>
                </div>
                <div className="category">
                <Link to={'/laptops'}>
                    <img
                      width="100%"
                      height="100px"
                      src={laptop}
                      alt="category4"
                    />
                  </Link>
                  <p>Laptop</p>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer navigation/>
    </div>

  )
}

export default Home