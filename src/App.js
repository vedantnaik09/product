import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import star from './resource/starseam.jpg'
// @ts-ignore
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 
  return (
    
    <div style={{backgroundImage:`url(${star})`}}>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
          <Route path="/" element={<Products key="All" category="all"/> }/>                         
          <Route path="/smartphones" element={<Products key="Smartphones" category="smartphones" /> }/>       
          <Route path="/laptops" element={<Products key="Laptops" category="laptops"/> }/>                        
          <Route path="/fragrances" element={<Products key="Fragrances" category="fragrances"/> }/>               
          <Route path="/skincare" element={<Products key="Skincare" category="skincare"/> }/>               
          <Route path="/groceries" element={<Products key="Groceries" category="groceries"/> }/>
          <Route path="/homedec" element={<Products key="Homedec" category="home-decoration"/> }/>              
      </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
