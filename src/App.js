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
 const [productId, setProductId] = useState("");
 const [element, setElement] = useState({});
//  const [elements, setElements] = useState([{}]);

  return (
   
    <div style={{backgroundImage:`url(${star})` , height:"initial" , minHeight:"100%" }}>
      
      <BrowserRouter>
      <Navbar setSearch={setSearch} setNavClicked={setNavClicked}/>
      <Routes>
      
          <Route path="/" element={<Products key={"All"+search+navClicked} category="all" search={navClicked?'':search} navClicked={navClicked} setProductId={setProductId} setElement={setElement}/> }/>                         
          <Route path="/smartphones" element={<Products key={"Smartphones"+search+navClicked} category="smartphones" search={navClicked?'':search} navClicked={navClicked} setProductId={setProductId} setElement={setElement}/> }/>       
          <Route path="/laptops" element={<Products key={"Laptops"+search+navClicked} category="laptops" search={navClicked?'':search} navClicked={navClicked} setProductId={setProductId} setElement={setElement}/> }/>                        
          <Route path="/fragrances" element={<Products key={"Fragrances"+search+navClicked} category="fragrances" search={navClicked?'':search} navClicked={navClicked} setProductId={setProductId} setElement={setElement}/> }/>               
          <Route path="/skincare" element={<Products key={"Skincare"+search+navClicked} category="skincare" search={navClicked?'':search} navClicked={navClicked} setProductId={setProductId} setElement={setElement}/> }/>               
          <Route path="/groceries" element={<Products key={"Groceries"+search+navClicked} category="groceries" search={navClicked?'':search} navClicked={navClicked} setProductId={setProductId} setElement={setElement}/> }/>
          <Route path="/homedec" element={<Products key={"Homedec"+search+navClicked} category="home-decoration" search={navClicked?'':search} navClicked={navClicked} setProductId={setProductId} setElement={setElement}/> }/>

          <Route path={"/product_"+productId} element={<Product element={element}/>}/> 

          {/* <Route path={"/product_1"} key={1} element={<Product element={elements[1]}/>}/>
          {
            elements.map((element)=>{
              return(<Route path={"/product_"+element.id} key={element.id} element={<Product element={element}/>}/> )
            })            
          }  */}
       
       
            
                                    
      </Routes>
      {/* <h1 className="text-white">Hey {elements[0].id}</h1> */}

          {/* {()=>{
            elements.map((element)=>{
              return(<h1 className="text-white">{element.title}</h1>)
            })            
            }}  */}
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
