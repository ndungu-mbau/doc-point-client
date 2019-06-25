import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <nav class="navbar navbar-expand-lg fixed-top navbar-transparent " color-on-scroll="300">
  <div class="container">
    <div class="navbar-translate">
      <Link class="navbar-brand" to="/">Doc Point</Link>
      <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
        aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-bar bar1"></span>
        <span class="navbar-toggler-bar bar2"></span>
        <span class="navbar-toggler-bar bar3"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse justify-content-end" id="navigation">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/admin" class="btn btn-danger btn-round">Admin</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)