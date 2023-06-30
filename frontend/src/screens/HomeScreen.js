import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, userDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList )
  const {error, loading, products} = productList

  useEffect(()=> {
      dispatch(listProducts())

  } , [])

  return (
    <div>
        <h1>Latest Products</h1>
        {loading ? <h2><Loader/></h2>
          : error ? <Message variant='danger'>{error}</Message>
            :
            <Row>
              {products.map(product => (
                <Col key={product._id} sm={12} md={6} Lg={4} xL={3}>
                  <Product product={product} />
                </Col>
              )
            )}
            </Row>}
    </div>
  )
}

export default HomeScreen