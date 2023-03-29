import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './components/Homepage'
import ProductsList from './components/ProductsList'
import Products from './components/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './components/Checkout'
import About from './components/About'
import CustomerService from './components/CustomerService'
import HowTo from './components/HowTo'
import Club from './components/Club'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/customer" element={<CustomerService />} />
            <Route exact path="/howto" element={<HowTo />} />
            <Route exact path="/club" element={<Club />} />

            <Route
              path="/gammalbilar"
              element={<ProductsList catName="Gammalbilar" catId={2} />}
            />
            <Route
              path="/nyabilar"
              element={<ProductsList catName="Nyabilar" catId={1} />}
            />
            <Route
              path="/smabilar"
              element={<ProductsList catName="Bilar till barn" catId={3} />}
            />
            <Route path="/products/:make/:model" element={<Products />} />
            <Route path="/varukorg" element={<Checkout />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
