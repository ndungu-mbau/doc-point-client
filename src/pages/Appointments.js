import React, { Component } from 'react'
import axios from 'axios'
import config from ''

export class Appointments extends Component {
  state = {
    appointments: {},
  }

  async componentDidMount() {
    const token = localStorage.getItem('token')

    await axios.get('')
  }
}
