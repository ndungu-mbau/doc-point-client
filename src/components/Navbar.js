import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <nav className="navbar navbar-expand-lg fixed-top bg-primary" color-on-scroll="300">
    <div className="container">
      <div className="navbar-translate">
        <Link className="navbar-brand" to="/">
          Doc Point
        </Link>
        <button
          className="navbar-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-bar bar1"></span>
          <span className="navbar-toggler-bar bar2"></span>
          <span className="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse justify-content-end" id="navigation">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <p className="text-uppercase">Log In</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="btn btn-danger btn-round">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
