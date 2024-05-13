import './App.css';
import {Routes, Route } from 'react-router-dom';
import BodyWrapper from './components/BodyWrapper/BodyWrapper';
import About from './components/about/About';
import Categories from './components/categories/Categories';
import Checkout from './components/checkout/Checkout';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BodyWrapper />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" component={Cart} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
