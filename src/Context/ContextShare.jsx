import React, { useEffect, useState } from 'react'
import { createContext } from 'react'


export const AddItemContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  return cart;
}
function ContextShare({ children }) {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => setProducts(data))

    if (localStorage.getItem("auth-token")) {
      fetch('http://localhost:4000/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem("auth-token")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((resp) => resp.json())
        .then((data) => { setCartItems(data) });
    }

    const authToken = localStorage.getItem('auth-token');
    if (authToken) {
      setLoggedIn(true);
    }

  }, [])

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    if (localStorage.getItem("auth-token")) {
      fetch('http://localhost:4000/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem("auth-token")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((resp) => resp.json())
        .then((data) => { console.log(data) });
    }
  }



  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    if (localStorage.getItem("auth-token")) {
      fetch('http://localhost:4000/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem("auth-token")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((resp) => resp.json())
        .then((data) => { console.log(data) });
    }
  }

  const getTotalAmt = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }

    }
    return totalAmount;
  }

  const getTotalCart = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]
      }
    }
    return totalItem;
  }

  const checkout = () => {
    const totalAmount = getTotalAmt(); // Call getTotalAmt function to get the total amount
    sessionStorage.setItem("Total Amount", totalAmount); // Store the total amount in session storage
  }

  const emptyCart = () => {
    const defaultCart = getDefaultCart();
    setCartItems(defaultCart); // Reset cartItems to an empty object
  };
  const contextValue = { getTotalCart, getTotalAmt, products, cartItems, addToCart, removeCart, checkout, loggedIn, emptyCart }
  return (
    <>
      <AddItemContext.Provider value={contextValue}>
        {children}
      </AddItemContext.Provider>

    </>
  )
}

export default ContextShare