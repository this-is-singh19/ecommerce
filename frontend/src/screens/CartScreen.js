import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect, useLocation, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message  from '../components/Message';
import { addToCart,reomveFromCart } from '../actions/cartActions';

function CartScreen() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);
  const reomveFromCartHandler = (id) => {
    dispatch(reomveFromCart(id))
  }
  const checkoutHandler = () => {
    redirect('/login?redirect=shipping')
  }
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant='info'>
            Your cart is empty
          </Message>
        ) :(
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.image} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>
                    ${item.price}
                  </Col>
                  <Col md={2}>
                      <Form.Control 
                              as="select" 
                              value={item.qty} 
                              onChange={(e) => dispatch(addToCart(item.product,Number(e.target.value)))}
                      > 
                        {
                         [...Array(item.countInStock).keys()].map((x) =>(
                            <option key={x+1} value={x+1}>
                              {x+1}
                            </option>
                    ))
                  } 
                      </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button type='button' variant='light' onClick={() => reomveFromCartHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
             <ListGroup.Item>
                  <h2>Subtotal ({cartItems.reduce((acc,item) => acc + item.qty,0)}) items</h2>
                  Rs.{cartItems.reduce((acc,item)=> acc + item.qty*item.price,0).toFixed(2)}
             </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Button type='button' variant="danger" disabled={cartItems.length ===0} onClick={checkoutHandler}>
              Proceed To Checkout
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  );
}

export default CartScreen;