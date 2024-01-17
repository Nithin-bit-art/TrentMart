import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector ,useDispatch} from 'react-redux'
import { removeWishlist } from '../redux/wishlistSlice';
import { Button } from 'react-bootstrap';
import { addToCart } from '../redux/cartSlice';



function Wishlist() {

    const dispatch=useDispatch()


    const wishlistArray=useSelector(state=>state.wishList)
    console.log(wishlistArray);

    const handleAddCart=(product)=>{

      // add to cart
      dispatch(addToCart(product))

      // remove from wishlist
      dispatch(removeWishlist(product.id))
    }

    return (
        <div>
          <h1 className='text-center p-5'>Wishlist</h1>
           {
            wishlistArray.length>0? (
            <Table striped bordered hover size="sm">
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
              wishlistArray.map((i,index)=>(
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
    <Button onClick={()=>dispatch(removeWishlist(i.id))} className='btn btn-light' >
                    <i class="fa-solid fa-trash-can fs-3 mt-3 text-danger" ></i>
      
    </Button>
    <Button onClick={()=>handleAddCart(i)} className='btn btn-light' >
                    <i class="fa-solid fa-cart-shopping fs-3 mt-3 text-danger" ></i>
      
    </Button>

                </td>
              </tr>
             ))
             }
            </tbody>
          </Table>
           
           )   : <h1>wishlist is empty</h1>
      } 
        </div>
      );
    }
    
export default Wishlist