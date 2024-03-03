import './App.css'
import Navbar from './components/Navbar'
import ProductCart from './components/ProductCart'
import Footer from './components/Footer'
import CartPage from "./components/CartPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
   

   <Router>
   <Navbar />
    <Routes>

      <Route exact path='/' element={<ProductCart />} />
      <Route exact path='/cart' element={<CartPage />} />
      <Route path='/practice' element= {<LogicPractice/>} />

    </Routes>
    <Footer/>
   </Router>

   

    </>
  )
}

export default App
