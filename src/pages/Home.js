import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';
import { fetchProducts } from '../redux/productsSlice';
import { Heart, ShoppingCart } from 'react-feather';


function Home() {
 const dispatch=useDispatch()
  const {allProducts,loading,error}=useSelector((state)=>state.productsSlice)

  
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <div><Row>
      <Col lg={6}>
        <img className='w-100' src='https://i.postimg.cc/BnRBGWX7/shopping-removebg-preview.png' alt='' />


      </Col>
      <Col className='mt-5 p-5'>
        <h1>E-commercerce site</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, impedit, officiis soluta placeat laborum possimus totam voluptates aspernatur consectetur nobis dignissimos! Provident corporis numquam voluptas sapiente porro laborum quidem eaque.</p>
      </Col>

    </Row>
      <Row>
        {
          allProducts.length > 0 ? allProducts.map(i => (
            <Col lg={3} md={4} sm={6} className='p-5'>
              <Card id='cd1' style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ height: '300px' }} src={i.image} />
                <Card.Body>
                  <Card.Title> <h4>{i.title.length > 30 ? i.title.slice(0, 30) + "..." : i.title}</h4>
                  </Card.Title>
                  <Card.Text>
                    <h2 className='text-center'>{i.price} Rs</h2>
                    <h5>Rating: {i.rating.rate}</h5>
                  </Card.Text>
                  <Button onClick={() => dispatch(addToWishlist(i))} size='24' className='ms-5' variant="dark"><Heart></Heart></Button>
                  <Button onClick={() => dispatch(addToCart(i))} size='24' className='ms-5' variant='dark'><ShoppingCart></ShoppingCart></Button>
                </Card.Body>
              </Card>
            </Col>
          )) :
            <div className='text-center p-5 mt-5'>
              <i class="fa-solid fa-spinner fa-spin fa-5x"></i>
            </div>
        }
      </Row>
    </div>
  )
}

export default Home