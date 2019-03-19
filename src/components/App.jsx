import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Login from './Login/index.jsx'
import Dashboard from './Dashboard/index.jsx'
import * as actionCreators from '../actions/index'

@connect(state => ({
}), Object.assign({}, actionCreators))
export class App extends Component {
render() {
  const {
    tasks,
    removeTask,
    changeTaskStatus
  } = this.props
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
      </BrowserRouter>
    )};

}
