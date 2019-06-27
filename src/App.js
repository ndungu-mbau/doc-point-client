import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Login from './pages/Login'
import Hospitals from './pages/Hospitals'
import Hospital from './pages/Hospital'
import Doctors from './pages/Doctors'

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login}></Route>
        <Route path="/hospitals" exact component={Hospitals} />
        <Route path="/hospital/:id" exact component={Hospital} />
        <Route path="/doctors" exact component={Doctors} />
      </Router>
    </>
  )
}

export default App
