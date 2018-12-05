import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import {TextField, Button, Card, CardContent } from '@material-ui/core'
import { login } from '../../actions/auth.js'
import { getMembers } from '../../actions/index'


@connect(
  state => ({}),
  {getMembers}
)
export default class Login extends Component {
  constructor(props) {
    super(props)

    this.handleLogin = this.handleLogin.bind(this)

    this.state = {
      username: '',
      password: '',
      error: false,
    }
  }

  async handleLogin() {
    const {
      username,
      password
    } = this.state

    const resp = await login(username, password)
    if(resp.status === 200) {
      this.props.getMembers()
      this.props.history.push('/dashboard')
    }
    else {
      this.setState({error: true})
    }

  }

  render() {
    return (
      <div className="app-background">
      <div className="blue-bg">
        <div className="login-container">
          <Card>
            <CardContent>
              <b>Fox River Membership Directory</b>
            <TextField
              label="Username"
              value={this.state.username}
              onChange={e => this.setState({username: e.target.value})}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({password: e.target.value})}
              margin="normal"
              variant="outlined"
            />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleLogin}
          >Login</Button>
          {
            this.state.error && (
              <div className="error-text">
                Incorrect Username/Password
              </div>
            )
          }
        </CardContent>
        </Card>
        </div>
      </div>
</div>
    )
  }
}
