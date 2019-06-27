import React, { Component } from 'react'
import axios from 'axios'

import config from '../config'
import Alert from '../components/Alert'

const { apiUrl } = config[process.env.NODE_ENV]

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      data: {
        ok: true,
      },
    }
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  async onClickHandler(e) {
    e.persist()

    const { name, email, password } = this.state
    console.log(this.state)

    const url = `${apiUrl}/patient`

    console.log(url)

    const res = await axios.post(
      url,
      {
        name: name,
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      },
    )

    console.log(res)

    if (res.data.ok) {
      this.props.history.push('/hospitals')
    } else {
      this.setState({ data: res.data })
    }
  }

  onChangeHandler = e => {
    e.persist()

    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  render() {
    const { data } = this.state
    return (
      <>
        {!data.ok && <Alert message={data.message} />}
        <div
          className="page-header section-dark"
          style={{ backgroundImage: 'url("/assets/img/At_the_hospital@2x.png")' }}
        >
          <div className="filter"></div>
          <div className="content-center">
            <div className="container">
              <div className="title-brand">
                <h1 className="presentation-title">Doc Point</h1>
                <h3>Your appointment friend</h3>
              </div>
              <h5 className="text-white text-center mt-3">Book an appointment today</h5>

              <div className="form-inline mt-3 justify-content-center">
                <div className="form-group mb-2">
                  <label className="sr-only">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                  <label className="sr-only">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <button className="btn btn-primary mb-2" onClick={this.onClickHandler}>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
