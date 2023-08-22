import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import star from './resource/starseam.jpg'
// @ts-ignore
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
function App() {
 const [search, setSearch] = useState("");
 const [navClicked, setNavClicked] = useState(false);

  return (
   
    <div style={{backgroundImage:`url(${star})` , height:"initial" , minHeight:"100%" }}>
      
      <BrowserRouter>
      <Navbar setSearch={setSearch} setNavClicked={setNavClicked}/>
      <Routes>
      
          <Route path="/" element={<Products key={"All"+search+navClicked} category="all" search={navClicked?'':search} navClicked={navClicked} /> }/>                         
          <Route path="/smartphones" element={<Products key="Smartphones" category="smartphones" search={navClicked?'':search} navClicked={navClicked}/> }/>       
          <Route path="/laptops" element={<Products key="Laptops" category="laptops" search={navClicked?'':search} navClicked={navClicked}/> }/>                        
          <Route path="/fragrances" element={<Products key="Fragrances" category="fragrances" search={navClicked?'':search} navClicked={navClicked}/> }/>               
          <Route path="/skincare" element={<Products key="Skincare" category="skincare" search={navClicked?'':search} navClicked={navClicked}/> }/>               
          <Route path="/groceries" element={<Products key="Groceries" category="groceries" search={navClicked?'':search} navClicked={navClicked}/> }/>
          <Route path="/homedec" element={<Products key="Homedec" category="home-decoration" search={navClicked?'':search} navClicked={navClicked}/> }/>              
          
          
          <Route path="/product" element={<Product/> }/>              
      </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
