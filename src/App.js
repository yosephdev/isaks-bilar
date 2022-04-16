import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Products from './pages/Products'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>  {/* BrowserRouter is a component that wraps the entire app */}
      <Header />
      <Routes>  {/* Routes is a component that renders the routes */}
        <Route path="/products" element={<Products />} />  {/* element is a prop that is passed to the Route component */}
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
