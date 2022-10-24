import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './components/Homepage'
import ProductsList from './components/ProductsList'
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
      </div>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/customer" element={<CustomerService />} />
          <Route exact path="/howto" element={<HowTo />} />
          <Route exact path="/club" element={<Club />} />
          <Route path="/" element={<Homepage />} />

          <Route
            path="/klader"
            exact
            element={<ProductsList catName="Babykläder" catId={2} />}
          />

          <Route
            path="/leksaker"
            exact
            element={<ProductsList catName="Babyleksaker" catId={1} />}
          />

          <Route
            path="/produkter"
            exact
            element={<ProductsList catName="Babyprodukter" catId={3} />}
          />
          <Route path="/varukorg" exact element={<Checkout />} />
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
