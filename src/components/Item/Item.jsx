import React, { useContext } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { AddItemContext } from '../../Context/ContextShare'
import  {toast}  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Item(props) {
  const { loggedIn, addToCart } = useContext(AddItemContext);

  const handleAddToCart = () => {
    if (loggedIn) {
      addToCart(props.id);
      toast.success("Product Added to the cart")
    } else {

      toast.error('Please log in to add items to the cart');
      window.location.href = '/login';
    }
  };
  return (
    <div className='item'>
        <Link to={`/item/${props.id}`}><img onClick={window.scrollTo(0,0)} width="200px" src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                Rs.{props.new_price}
            </div>
            <div className="item-price-old">
                Rs.{props.old_price}
            </div>
        </div>
        <div className='mb-4'>
          <button onClick={handleAddToCart} className='btn btn-success'>Add Cart</button>
        </div>
    </div>
  )
}

export default Item