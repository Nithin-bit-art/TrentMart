import { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { removeCart } from '../redux/cartSlice';
import Modal from 'react-bootstrap/Modal';
import { clearCart } from '../redux/cartSlice';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Cart() {

  const dispatch=useDispatch()

    const cartArray=useSelector(state=>state.cart)
    console.log(cartArray);

    if(cartArray.length !=0){
      var total=cartArray.map(i=>i.price).reduce((a,b)=>a+b)
    }
    else{
      var total=0
    }

    const [show, setShow] = useState(false);

    const handleClose = () =>{
       setShow(false);
    }
    const handleShow = () => {setShow(true);
    }
  
    const handlePay=()=>{
      dispatch(clearCart())
      setShow(false)
    }
  
  return (
    <div>
      <h1 className='text-center p-5'>Cart Products</h1>
       {
        cartArray.length>0?( <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>product title</th>
            <th>price</th>
            <th>images</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         {
          cartArray.map((i,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{i.title}</td>
            <td>{i.price}</td>
            <td>
              <img 
              style={{height:'100px'}}
              src={i.image} alt="" />
            </td>
            <td className='text-center'>
<Button onClick={()=>dispatch(removeCart(i.id))} className='btn btn-light' >
                <i class="fa-solid fa-trash-can fs-3 mt-3 text-danger" ></i>
  
</Button>
            </td>
          </tr>
         ))
         }
        </tbody>
      </Table>
       )
        : <h1>cart is empty</h1>
  } 
  <div className='text-end'>
    <h5>Total Amount : {total}</h5>
  </div>
  <div className='text-center p-5'>
    <Button className='btn btn-success p-4' onClick={handleShow}>CheckOut</Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay To Continue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <>
      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-3"
      >
        <Form.Control type="phone number" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingUpi" label="UPI ID">
        <Form.Control type="text" placeholder="Enter UPI " />
      </FloatingLabel>
    </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handlePay}>
            Pay
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
    </div>
  )
}

export default Cart