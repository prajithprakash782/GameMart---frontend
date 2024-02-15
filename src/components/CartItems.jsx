import React, { useContext } from 'react'
import { AddItemContext } from '../Context/ContextShare'
import './CartItems.css'
import { Link } from 'react-router-dom'

function CartItems() {
    const { getTotalAmt, products, cartItems, removeCart, checkout } = useContext(AddItemContext)
    const cartIsEmpty = Object.values(cartItems).every(item => item === 0);

    if (cartIsEmpty) {
        return (
            <div className="d-flex justfy-content-center align-items-center flex-column mt-4">
                <img width="500px" height="500px" src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" alt="Empty Cart" className="empty-cart-image" />
                <h1>Your cart is empty</h1>
            </div>
        );
    }

    return (
        <div className='cartitems'>
            <div className="cartitems-table">
                <p>Items</p>
                <p>Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p></p>
            </div>
            <hr />
            {products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-content cartitems-table">
                                <img className='item-image' src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>Rs {e.new_price || 0}</p> {/* Conditional check for new_price */}
                                <button className='quantity'>{cartItems[e.id]}</button>
                                <p>Rs {(e.new_price || 0) * cartItems[e.id]}</p> {/* Conditional check for new_price */}
                                <button className='btn btn-danger w-50' onClick={() => removeCart(e.id)}><i className="fa-solid fa-trash"></i></button>

                            </div>
                            <hr />
                        </div>
                    );
                }

                return null;
            })
            }
            <div className="cart-total-section">
                <h2>Cart Total</h2>
                <p>Sub-total: <span style={{ float: "right", fontWeight: "bold" }}>Rs {getTotalAmt()} </span> </p>
                <p>Shipping Fee: <span style={{ float: "right", fontWeight: "bold" }}>Free</span> </p>
                <p>Total: <span style={{ float: "right", fontWeight: "bold" }}>Rs {getTotalAmt()}</span></p>
                <Link style={{ textDecoration: 'none' }} to={'/order'}><button onClick={checkout()} className="btn btn-primary proceed-to-checkout">Proceed to Checkout</button></Link>
            </div>
        </div>
    )
}

export default CartItems
