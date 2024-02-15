import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer({navigation}) {
  return (
    <>
        
            { navigation &&
                <section id='contact-us'>
                    <div style={{overflowX:'hidden'}}>
        
                    
                        
                        <Row style={{backgroundColor:'#2E8BC0'}}  className='ps-5 pt-4'>
                            <Col lg={3}>
                                <h5 style={{ color:'black',textDecoration: 'underline', overflowY: 'hidden' }}>GameMart</h5>
                                <p style={{color:'white'}}><span className='fw-bold'>GameMart</span> is an innovative ecommerce platform tailored specifically for gamers, offering a vast array of video games, consoles, accessories, and merchandise. With a user-friendly interface and secure payment options, GameMart ensures a seamless shopping experience for enthusiasts worldwide.</p>
                            </Col>
                            <Col lg={3} className='d-flex flex-column'>
                                <h5  style={{ color:'black',textDecoration: 'underline', overflowY: 'hidden' }}>Categories</h5>
                                <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to={'/consoles'}>Consoles</Link>
                                <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to={'/gaming-pc'}>PC</Link>
                                <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to={'/keyboard'}>Keyboards</Link>
                                <Link className='mb-4 link' style={{ textDecoration: 'none', color: 'white' }} to={'/laptops'}>Laptops</Link>
        
                            </Col>
                            <Col lg={3} className='d-flex flex-column'>
                                <h5 style={{color:'black', textDecoration: 'underline', overflowY: 'hidden' }}>Guides</h5>
                                <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to={'https://react.dev/'}>React</Link>
                                <Link className='link' style={{ textDecoration: 'none', color: 'white' }} to={'https://react-bootstrap.netlify.app/'}>React-Bootstrap</Link>
                                <Link  className='mb-4 link' style={{ textDecoration: 'none', color: 'white' }} to={'https://mui.com/material-ui/'}>Material UI</Link>
        
                            </Col>
                            <Col lg={3}>
                                <h5 style={{color:'black', textDecoration: 'underline', overflowY: 'hidden' }}>Contact Us</h5>
                                <div className='d-flex justify-content-evenly mt-3'>
                                    <div className='icons'><Link className='icon1' to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram fa-2x w-100"></i></Link></div>
                                    <div className='icons'><Link className='icon2' to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter fa-2x w-100"></i></Link></div>
                                    <div className='icons'><Link className='icon3' to={'https://linkedin.com/in/prajith-prakash-878112295'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin fa-2x"></i></Link></div>
                                    <div className='icons'><Link className='icon4' to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link></div>
                                </div>
                            </Col>
                            <p className='text-center mt-3'>Copyright 2023 GameMart. Built with MERN</p>
                        </Row>
        
        
        
        
        
        
                </div>
                </section>
}
    </>
  )
}

export default Footer