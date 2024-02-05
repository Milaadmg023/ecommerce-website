import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from './contexts/Filter';
import FilterdProducts from "./pages/FilterdProducts";


const App = () => {
  const [filter , setFilter] = React.useState({})
  return (
    <Filter.Provider value={{filter , setFilter}}>
      <div className="overflow-hidden">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
            <Route path="/filterdproducts" element={<FilterdProducts/>} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </Filter.Provider>
  );
};

export default App;
