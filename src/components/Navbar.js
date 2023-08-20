import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import navback from '../resource/navback2.png'
import shoperz from '../resource/shoperz.png'
// @ts-ignore
import { Link } from "react-router-dom";
export class Navbar extends Component {
    
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark" style={{backgroundColor:"#000210"}}>
          <div className="container-fluid">
            <img src={shoperz} alt={shoperz} style={{width: '5.5rem', marginRight:"1rem"}}/>
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
              style={{fontSize:"1.4rem"}}
              
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item ">
                   <Link className="nav-link text-white" aria-current="page" to="/" >
                    All
                  </Link>
                </li>
                <li className="nav-item ">
                   <Link className="nav-link text-white" aria-current="page" to="/laptops" >
                    Laptops
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/smartphones">
                    Smartphones
                  </Link>
                </li>
                <li className="nav-item">                  
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/fragrances">
                    Fragrances
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/skincare">
                    Skincare
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/groceries">
                    Groceries
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/homedec">
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
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
