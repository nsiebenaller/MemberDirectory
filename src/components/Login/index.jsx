import React, {Component} from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
import {
  TextField,
  Button,
  Card,
  CardContent,
} from '@material-ui/core'
import ArrowDown from '@material-ui/icons/KeyboardArrowDown'
import {login} from '../../actions/auth.js'
import {getMembers} from '../../actions/index'


@connect(
  state => ({
  }), {
    getMembers
  }
)
export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      error: false,
    }
  }

  handleLogin = async () => {
    const {
      username,
      password
    } = this.state

    const resp = await login(username, password)
    if (resp.status === 200) {
      this.props.getMembers()
      this.props.history.push('/dashboard')
    } else {
      console.log("err", resp)
      this.setState({
        error: true
      })
    }
  }

  render() {
    return (
      <div className="app-background" >
        <div className="login-container">
          <div className="login-preheader">welcome</div>
          <div className="login-header">Fox River Directory</div>
          <div className="login-subheader">Please login to your account.</div>
          <div className="text-label">Username</div>
          <TextField
            className="username-input"
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <div className="text-label">Password</div>
          <TextField
            className="password-input"
            type="password"
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}
            onKeyPress={e => {if(e.key === 'Enter') this.handleLogin()}}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <div className="btn-container">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleLogin}
            >login</Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {console.log("Feature not Enabled.")}}
            >sign up</Button>
          </div>
          <div className="fab-container">
            <Button variant="fab" color="secondary" aria-label="Add">
              <ArrowDown />
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
//<Fab color="primary" aria-label="Add"></Fab>
/*
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
*/
