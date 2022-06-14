import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>  {/* BrowserRouter is a component that wraps the entire app */}
      <Header />
      <Routes>  {/* Routes is a component that renders the routes */}
        <Route exact path="/" element={<Home/>} />         
        <Route path="/cars" element={<Cars />} />  {/* element is a prop that is passed to the Route component */}
        <Route path="/car/:id" element={<Car />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
