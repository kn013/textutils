import { getByTitle } from "@testing-library/react";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    
    <nav style={{backgroundColor:`${props.mode}`}} className={`navbar navbar-expand-lg`}>
  <div className="container-fluid">
    {/* <Link  to="/">{props.title}</Link> */}
    <a className={`navbar-brand text-${props.mode!=='white'?`light`:`dark`}`}  href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode!=='white'?`light`:`dark`}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode!=='white'?`light`:`dark`}`} href="#">{props.aboutText}</a>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
      {/* <div className={`form-check form-switch text-${props.mode===`light`?`dark`:`light`}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
</div> */}

 <button type="button" className="btn btn-primary bt-sm mx-2" onClick={()=>props.changeMode('blue')}></button>
 <button type="button" className="btn btn-success bt-sm mx-2" onClick={()=>props.changeMode('green')}></button>
 <button type="button" className="btn btn-danger bt-sm mx-2" onClick={()=>props.changeMode('red')}></button>


    </div>
  </div>
</nav>

  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired };

Navbar.defaultProps = { title: "Set Title here", aboutText: "About Us" };
