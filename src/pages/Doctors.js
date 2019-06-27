import React, { Component, Fragment } from 'react'
import axios from 'axios'

import Navbar from '../components/Navbar'
import config from '../config'

const { apiUri } = config[process.env.NODE_ENV]

class Doctor extends Component {
  state = {}

  componentDidMount = async () => {
    const data = await axios({
      url: `${apiUri}/hospital`,
    })
    console.log(data)
  }

  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="page-header section-dark">
          <div className="filter"></div>
          <div className="content-center">
            <div className="container">
              <div className="title-brand">
                <h1 className="presentation-title">Doc Point</h1>
                <h3>Your appointment friend</h3>
              </div>
              <h5 className="text-white text-center mt-3">Book an appointment today</h5>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Doctor
