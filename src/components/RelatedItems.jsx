import React, { useContext } from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import all_items from '../Assets/all_items';
import Item from './Item/Item';
import { AddItemContext } from '../Context/ContextShare';

function RelatedItems() {
  const { products } = useContext(AddItemContext);
  const relatedItems = products.filter(item => ["console", "pc", "keyboard", "laptop"].includes(item.category));

  const chunkedItems = [];
  for (let i = 0; i < relatedItems.length; i += 4) {
    chunkedItems.push(relatedItems.slice(i, i + 4));
  }

  return (
    <Container>
      <h1 style={{ textDecoration: "underline" }}>Related Products</h1>

      <Carousel interval={null} controls={true} indicators={false} className="mt-3">
        {chunkedItems.map((items, index) => (
          <Carousel.Item key={index}>
            <Row>
              {items.map((item, i) => (
                <Col xs={6} sm={6} md={3} key={i}>
                  <Item
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default RelatedItems;
