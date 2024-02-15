import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import './Navbars.css';
import { AddItemContext } from '../Context/ContextShare';

function Navbars() {
    const { getTotalCart } = useContext(AddItemContext);
    const [show,setShow] =useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>400){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })

    return (
        <>
            <Navbar expand="lg" className={`${show && 'nav-scroll'} bg-body-tertiary fixed-top`}>
                <Container>
                    <Navbar.Brand>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
                            <img width="30px" height="30px" src={logo} alt="no image" />
                            Game<span style={{ color: show? 'white':'#2E8BC0', fontWeight: 'bold' }}>Mart</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={`${show && 'scroll-cat'} cat`} href="#home">
                                Home
                            </Nav.Link>
                            <Nav.Link className={`${show && 'scroll-cat'} cat`} href="#categories">
                                Categories
                            </Nav.Link>
                            <Nav.Link className={`${show && 'scroll-cat'} cat`} href="#contact-us">
                                Contact Us
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {localStorage.getItem('auth-token') ? (
                                <button
                                    className="btn btn-danger me-3"
                                    onClick={() => {
                                        localStorage.removeItem('auth-token');
                                        window.location.replace('/');
                                    }}
                                >
                                    Logout
                                </button>
                            ) : (
                                <Nav.Link>
                                    <Link className={`${show && 'scroll-cat'} cat`} style={{ textDecoration: 'none' }} to={'/login'}>
                                        Log In
                                    </Link>
                                </Nav.Link>
                            )}
                        </Nav>
                        <div className="cart-nav">
                            <Link style={{ textDecoration: 'none', color:show? 'white':'#2E8BC0' }} to={'/cart'}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                            <div className="cart-count">{getTotalCart()}</div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbars;
