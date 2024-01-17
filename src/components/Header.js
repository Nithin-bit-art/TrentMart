import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ShoppingCart } from 'react-feather';
import { searchProducts } from '../redux/productsSlice';



function Header() {
  const cartArray = useSelector(state => state.cart)
const dispatch=useDispatch()
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img
            src="https://i.postimg.cc/C1jvK4nV/pngtree-cart-plain-shoping-trolly-icon-vector-illustration-for-web-png-image-1928471.jpg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
          />
          <Navbar.Brand href="/home"><b>ShopBuddy</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Form inline>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search Products"
                      className=" mr-sm-2"
                      onChange={(e)=>dispatch(searchProducts(e.target.value))}
                    />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit">Submit</Button>
                  </Col>
                </Row>
              </Form>

            </Nav>
            <Nav className="mr-auto">
            <Link style={{textDecoration:'none'}} to={'/cart'}>
            <Nav.Link href="#link">
           <p> <ShoppingCart size={34} className='ms-5'></ShoppingCart>
            <b className='ms-2'>{cartArray.length}</b></p>
                </Nav.Link>
                </Link>
              <Nav.Link href="./wishlist"><i class="fa-solid fa-heart fs-3 me-1 ms-3"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header