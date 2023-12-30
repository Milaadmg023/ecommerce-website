import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage'
import Navbar from './Pages/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopCart from './Pages/ShopCart/ShopCart';


function App() {

  return (
    <>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/shopcart' element={<ShopCart/>}></Route>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
