import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Navbar from './components/Navbar'
import Ticker from './components/Ticker'
import CartProvider from './CartManaget/CartProvider'
import Cart from './Pages/Cart'

function App() {
  return (
   <CartProvider>
     <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Product' element={<Product />}></Route>
      <Route path='/Gallery' element={<Gallery />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>
      <Route path='/Cart' element={<Cart />}></Route>
    </Routes>
    <Ticker />
    </BrowserRouter>
   </CartProvider>
  )
}

export default App
