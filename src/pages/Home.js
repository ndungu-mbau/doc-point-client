import React from 'react'
import Navbar from '../components/Navbar'

export default props => (
  <>
    <Navbar></Navbar>
  <div class="page-header section-dark" style={{backgroundImage: 'url("/assets/img/At_the_hospital@2x.png")'}}>
    <div class="filter"></div>
    <div class="content-center">
      <div class="container">
        <div class="title-brand">
          <h1 class="presentation-title">Doc Point</h1>
          <h3>Your appointment friend</h3>
        </div>
        <h5 class="text-white text-center mt-3">Book an appointment today</h5>
        <form class="form-inline mt-3">
          <div class="form-group mb-2">
            <label class="sr-only">Email</label>
            <input type="text" class="form-control" placeholder="Name"/>
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label class="sr-only">Contact</label>
            <input type="text" class="form-control"placeholder="Contact"/>
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label class="sr-only">Password</label>
            <input type="password" class="form-control"placeholder="Password"/>
          </div>
          <button type="submit" class="btn btn-primary mb-2">Book Appointment</button>
        </form>
      </div>
    </div>
  </div>
  </>
)