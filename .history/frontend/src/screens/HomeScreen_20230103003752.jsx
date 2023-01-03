import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../actions/productsActions'



const HomeScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {

    

    }, [])


  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {Products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
            <Product product={product} ></Product>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
