import React, { useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams ,useNavigate} from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card,  Form} from "react-bootstrap";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";

import{listProductsDetails} from '../actions/productsActions';
  
  const ProductScreen = () => {
  const product_id =useParams();
  const navigate = useNavigate();

  const [qty, setQty]=useState(1)
  const limit =10;
  const dispatch=useDispatch()
  const productDetails=useSelector(state => state.productDetails)
  const {loading , error,product} =productDetails

  const addToCartHandler =() =>{
       navigate(`/cart/${product_id.id}? qty=${qty}`)


  }

      
  useEffect(()  => {
    dispatch(listProductsDetails(product_id.id))

      
      
  }, [dispatch,product_id.id])
  

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      {loading ?<Loader />
          
          : error
              ?<Message variant='danger'>{error}</Message>
              :(
                <Row>
                        <Col md={6}>
                          <Image width={400} src={product.image} alt={product.name} fluid />
                        </Col>
                        <Col md={3}>
                          <ListGroup variant="flush">
                            <ListGroup.Item>
                              <h3> {product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews `}
                                color={`#f8e825`}
                              />
                            </ListGroup.Item>

                            <ListGroup.Item>
                              price : ???{product.price}</ListGroup.Item>

                        
                            
                            <ListGroup.Item>
                              description : {product.description}
                              </ListGroup.Item>
                          </ListGroup>
                        </Col>

                        <Col md={3}>
                          <Card>
                              <ListGroup>
                                <ListGroup.Item>
                                    <Row>

                                          <Col>Price:</Col>
                                          <Col>
                                          <h4>???{product.price}</h4>
                                            </Col>

                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>

                                          <Col>Status:</Col>
                                          <Col>
                                            {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                            </Col>

                                    </Row>
                                </ListGroup.Item>
                                {product.countInStock > 0 && (
                                  <ListGroup.Item>
                                    <Row>
                                      <Col>Qty</Col>
                                      <Col xs='auto' className="my-1">
                                      <Form.Control 
                                          as='select'
                                          value={qty}
                                          onChange={(e)=> setQty(e.target.value)}
                                          >
                                            {/* qty depents th stock */}
                                            { 
                                              [...Array(product.countInStock.len).keys()].map((x)=>(
                                                <option key={x+1} value={x+1}>
                                                  {x +1 }
                                                </option>
                                              ))
                                            }
                                              
                                      </Form.Control>
                                      </Col>
                                    </Row>
                                  </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                  <Button className=" btn-block" onClick={addToCartHandler} disabled={product.countInStock === 0 } type="button"> Add to Cart</Button>
                                </ListGroup.Item>

                              </ListGroup>            
                          </Card>
                        </Col>
            </Row>
          )
      }






      
    </div>
  );
};

export default ProductScreen;
