import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
<<<<<<< HEAD
import Home from './components/Home'
=======
import Footer from './components/Footer'
>>>>>>> 0fdb040fbf840019ad5979fc09b8728983141b45
import Products from './pages/Products'
import Product from './pages/Product'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>  {/* BrowserRouter is a component that wraps the entire app */}
      <Header />
      <Routes>  {/* Routes is a component that renders the routes */}
        <Route exact path="/" element={<Home/>} />         
        <Route path="/products" element={<Products />} />  {/* element is a prop that is passed to the Route component */}
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
<<<<<<< HEAD
      <Footer/>
=======
      <Footer />
>>>>>>> 0fdb040fbf840019ad5979fc09b8728983141b45
    </BrowserRouter>
  )
}

export default App
