import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Layout from 'components/Layout'
import Home from 'pages/Home'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import './App.css'

 const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
