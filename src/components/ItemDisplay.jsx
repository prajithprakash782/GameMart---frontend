import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AddItemContext } from '../Context/ContextShare';
import  {toast}  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ItemDisplay(props) {
  const { item } = props
  const { loggedIn, addToCart } = useContext(AddItemContext);
  const handleBuyNow = () => {
    if (loggedIn) {
      addToCart(item.id);
      window.location.href = '/cart';
      toast.success("Product added to the cart")
    } else {

      toast.error('Please log in to buy items');
      window.location.href = '/login';
    }
  };

  const handleAddToCart = () => {
    if (loggedIn) {
      addToCart(item.id);
      toast.success("Product added to the cart")
    } else {

      toast.error('Please log in to add items to the cart');
      window.location.href = '/login';
    }
  };


  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={12} md={6}>
          <img width="420px" height="350px" src={item.image} alt="" />
        </Col>
        <Col className='mt-5' xs={12} md={6}>
          <h2>{item.name}</h2>
          <p><strong>Desciption:</strong> {item.desc}</p>
          <p>
            <strong>New Price: </strong>Rs. {item.new_price}
          </p>
          <p>
            <strong>Old Price: </strong><del>Rs. {item.old_price}</del>
          </p>
          <Button onClick={handleAddToCart} variant="primary">Add to Cart</Button>
          <Button onClick={handleBuyNow} className='ms-3' variant="success">Buy Now</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDisplay