import React, { Component } from 'react'
import axios from 'axios'

import config from '../config'
import Alert from '../components/Alert'

const { apiUrl } = config[process.env.NODE_ENV]

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    data: {
      ok: true,
    },
  }

  onChangeHandler = e => {
    e.persist()

    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  onClickHandler = async e => {
    e.persist()

    const { email, password } = this.state

    const res = await axios.post(`${apiUrl}/patient/login`, {
      email: email,
      password: password,
    })

    console.log(res)

    if (res.data.ok) {
      this.props.history.push('/hospitals')
    } else {
      this.setState({ data: res.data })
    }
  }

  render() {
    const { data } = this.state
    return (
      <>
        {!data.ok && <Alert message={data.message} />}
        <div
          className="page-header mt-5"
          style={{ backgroundImage: "url('../assets/img/At_the_hospital@2x.png')" }}
        >
          <div className="filter"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 ml-auto mr-auto">
                <div className="card card-register">
                  <h3 className="title mx-auto">Welcome Back</h3>
                  <div className="register-form">
                    <label>Email</label>
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      onChange={this.onChangeHandler}
                    />
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={this.onChangeHandler}
                    />
                    <button
                      className="btn btn-default btn-block btn-round"
                      onClick={this.onClickHandler}
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
