import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

function ProductScreen() {
  const { id } = useParams();
  const product = products.find((p) => String(p._id) === id);

  if (!product) return null; // or fallback UI

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Back</Link>
      <Row>
        <Col md={6}>
          <Image src={ product.image } alt={ product.name } fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>

            <ListGroup.Item>
              Price:  Rs. {product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col><strong>Rs. {product.price}</strong></Col>
              </Row>  
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{product.countInStock > 0 ? 'Available' : 'Out of stock'}</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Button className='btn btn-danger' type='button' disabled={product.countInStock === 0}>Add to Cart</Button>
            </ListGroup.Item>
            </ListGroup>
          </Card>

        </Col>
      </Row>
    </div>
  );
}
export default ProductScreen
