import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Login from './Login/index.jsx'
import Dashboard from './Dashboard/index.jsx'


export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Switch>
  </BrowserRouter>
)
