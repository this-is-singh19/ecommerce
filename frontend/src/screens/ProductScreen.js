/*
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
function ProductScreen() {
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { loading,error,product} = productDetails
  useEffect(() => {
    dispatch(listProductDetails(match.useParams.id))
  }, []);

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>

            <ListGroup.Item>Price: Rs. {product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>Rs. {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock > 0 ? 'Available' : 'Out of stock'}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className='btn btn-danger' type='button' disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card,Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductDetails } from '../actions/productActions';
function ProductScreen({match}) {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  //const { id } = useParams()
  const productDetails = useSelector(state => state.productDetails)
  const { loading,error,product} = productDetails
  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match]);

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>

            <ListGroup.Item>Price: Rs. {product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>Rs. {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock > 0 ? 'Available' : 'Out of stock'}</Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col xs='auto' className='my-1'>
                      <Form.Control 
                              as="select" 
                              value={qty} 
                              onChange={(e) => setQty(e.target.value)}
                      > 
                        {
                         [...Array(product.countInStock).keys()].map((x) =>(
                            <option key={x+1} value={x+1}>
                              {x+1}
                            </option>
                    ))
                  } 
                      </Form.Control></Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button className='btn btn-danger' type='button' disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
*/
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card,Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';
/*
function ProductScreen() {
  //const { id } = useParams();
  const { id,history } = useParams(); // Extract the "id" parameter from the URL
  const [product, setProduct] = useState({});
  const [qty,setQty] = useState(1)
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  const addToCartHandler = () => {
  //  history.pushState(`/cart/${id}?qty=${qty}`)
      history.push(`/cart/${id}?qty=${qty}`)
  }
  */
  function ProductScreen() {
    const { id } = useParams();
    const navigate = useNavigate(); // Access the navigation function from React Router
  
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1);
  
    useEffect(() => {
      async function fetchProduct() {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
      }
  
      fetchProduct();
    }, [id]);
  
    const addToCartHandler = () => {
      navigate(`/cart/${id}?qty=${qty}`);
    };
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>

            <ListGroup.Item>Price: Rs. {product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>Rs. {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock > 0 ? 'Available' : 'Out of stock'}</Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col xs='auto' className='my-1'>
                      <Form.Control 
                              as="select" 
                              value={qty} 
                              onChange={(e) => setQty(e.target.value)}
                      > 
                        {
                         [...Array(product.countInStock).keys()].map((x) =>(
                            <option key={x+1} value={x+1}>
                              {x+1}
                            </option>
                    ))
                  } 
                      </Form.Control></Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button onClick={addToCartHandler}className='btn btn-danger' type='button' disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;