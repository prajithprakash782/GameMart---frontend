import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbars from './components/Navbars';
import Home from './pages/Home';
import GamingPC from './pages/GamingPC';
import Laptops from './pages/Laptops';
import Consoles from './pages/Consoles';
import Footer from './components/Footer';
import Keyboard from './pages/Keyboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery';

function App() {
  const location = useLocation();

  // Check if the current location is login or register
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Navbars />} {/* Render Navbars if not on login or register page */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gaming-pc' element={<GamingPC category="pc"/>} />
        <Route path='/laptops' element={<Laptops category="laptop" />} />
        <Route path='/consoles' element={<Consoles category="console"/>} />
        <Route path='/keyboard' element={<Keyboard category="keyboard"/>} />
        <Route path='/item/:itemId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/order' element={<Delivery/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
