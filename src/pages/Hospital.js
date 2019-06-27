import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import config from '../config'

const { apiUrl } = config[process.env.NODE_ENV]

export default class Hospital extends Component {
  state = {
    hospital: {},
  }

  async componentDidMount() {
    const {
      data: { hospital },
    } = await axios({
      method: 'get',
      url: `${apiUrl}/hospital/${this.props.match.params.id}`,
    })

    this.setState({ hospital })
  }

  render() {
    const { hospital } = this.state
    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-12 mt-5 d-flex align-items-stretch">
            <div className="card border border-info" style={{ flex: 1 }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 col-md-3 d-flex align-items-center">
                    <img src="/assets/img/hospital-icon.png" />
                  </div>
                  <div className="col-sm-12 col-md-9 d-flex align-items-center">
                    <h1 className="text-center">{hospital.name}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-5 d-flex align-items-center justify-content-center">
          <h2>Doctors</h2>
        </div>
        <div className="row">
          {hospital.doctors && hospital.doctors.length !== 0 ? (
            hospital.doctors.map(doc => (
              <div className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch">
                <div className="card border border-info" style={{ flex: 1 }}>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h3 className="card-title">{doc.name}</h3>
                    <hr />
                    <p className="card-text mt-2">Specialization: {doc.specialization}</p>
                    <Link
                      to={`/doctor/${doc._id}`}
                      className="btn btn-primary btn-round text-uppercase"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <div className="card border border-danger">
                <div className="card-body">
                  <h2 className="card-title text-uppercase">OOPS</h2>
                  <hr />
                  <p className="card-text">
                    Sorry, we couldn't find any available doctors in this hospital
                  </p>
                  <Link to="/hospitals" className="btn btn-danger btn-round text-uppercase">
                    Back
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
