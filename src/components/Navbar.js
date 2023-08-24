import React, { useState } from "react";
// import PropTypes from 'prop-types';
// import navback from '../resource/navback2.png'
import shoperz from "../resource/shoperz.png";
// @ts-ignore
import { Link } from "react-router-dom";

function Navbar(props) {
  const sendMessage = () => {
    props.setSearch(searchMsg);
  };
  const [searchMsg, setSearchMsg] = useState("");
  const setMessage = (event) => {
    setSearchMsg(event.target.value);
  };
  const searchClicked=()=>{
    sendMessage()
    props.setNavClicked(false)
  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  navbar-dark"
        style={{ backgroundColor: "#000210" }}
        
      >
        <div className="container-fluid">
          <img
            src={shoperz}
            alt={shoperz}
            style={{ width: "5.5rem", marginRight: "1rem" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ fontSize: "1.4rem" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/" 
                  onClick={async()=>{await setSearchMsg('');props.setNavClicked(true);await sendMessage();}}                
                >
                  All
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/laptops"
                  onClick={async()=>{await setSearchMsg('');props.setNavClicked(true);await sendMessage();}} 
                >
                  Laptops
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/smartphones"
                  onClick={async()=>{await setSearchMsg('');props.setNavClicked(true);await sendMessage();}} 
                >
                  Smartphones
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/fragrances"
                  onClick={async()=>{await setSearchMsg('');props.setNavClicked(true);await sendMessage();}} 
                >
                  Fragrances
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/skincare" onClick={async()=>{await setSearchMsg('');props.setNavClicked(true);await sendMessage();}} 
                >
                  Skincare
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/groceries" onClick={async()=>{await setSearchMsg('');props.setNavClicked(true);await sendMessage();}} 
                >
                  Groceries
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/homedec" onClick={async()=>{await setSearchMsg('');props.setNavClicked(true);await sendMessage();}} 
                >
                  Home-Decoration
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchMsg}
                onChange={setMessage}
              />
            </form>
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={searchClicked}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
