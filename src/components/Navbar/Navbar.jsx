import React, { Component } from 'react'
import Styles from './Navbar.module.css'
export default class Navbar extends Component {
  render() {
    return (
      <><nav className= {`navbar navbar-expand-lg navbar-dark py-4 ${Styles.fixed_top}`}>
      <div className="container">
        <a className="navbar-brand text-uppercase fw-bold fs-3" href="#">start react</a>
        <button className={`navbar-toggler ${Styles.button}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        menu <span className={`navbar-toggler-icon`} ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${Styles.hvr}`} href="#Portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${Styles.hvr}`} href="#About">About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${Styles.hvr}`} href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav></>
    )
  }
}
