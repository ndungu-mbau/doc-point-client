import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//import cookie from 'js-cookie'

import config from '../config'

const { apiUrl } = config[process.env.NODE_ENV]

class Hospitals extends Component {
  state = {
    hospitals: [],
  }

  async componentDidMount() {
    // const auth = cookie.get('auth')

    // console.log(auth)

    // if (!auth) {
    //this.props.history.push('/login')
    //}
    const {
      data: { hospitals },
    } = await axios({
      method: 'get',
      url: `${apiUrl}/hospital`,
    })

    this.setState({ hospitals })
  }

  render = () => {
    const { hospitals } = this.state
    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Hospitals</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>Pick the hospital of your choice from some of the best hospitals in our catalog</p>
          </div>
        </div>
        <div className="mt-5"></div>
        <div className="row">
          {hospitals && hospitals.length !== 0 ? (
            hospitals.map(hos => (
              <div className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch">
                <div className="card border border-info" style={{ flex: 1 }}>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h3 className="card-title">{hos.name}</h3>
                    <p className="card-text">Location : {hos.location}</p>
                    <Link
                      to={`/hospital/${hos._id}`}
                      className="btn btn-primary btn-round text-uppercase"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="card border border-info">
                <div className="card-body">
                  <h2 className="card-title text-uppercase">OOPS</h2>
                  <hr />
                  <p className="card-text">Sorry, we couldn't find any hospitals in your area</p>
                  <Link to="/" className="btn btn-danger btn-round text-uppercase">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Hospitals
