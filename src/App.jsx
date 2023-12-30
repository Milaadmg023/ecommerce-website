import './App.css'
import Navbar from './Pages/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopCart from './Pages/ShopCart/ShopCart';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';



function App() {

  return (
    <>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/shopcart' element={<ShopCart/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
