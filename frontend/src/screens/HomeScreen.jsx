import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";


import { listProducts } from "../actions/productsActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {/* while the page loading */}
      {loading ?  <Loader /> 
                    // if the data request is fail 
          : error ? <Message variant='danger'>{error}</ Message> 
               : 
                <Row>
                  {/* show data */}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <h3>{product.name}</h3>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      }

     
    </div>
  );
};

export default HomeScreen;
