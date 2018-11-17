import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'


@connect(
  state => ({}),
  {}
)
export default class NewUserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
    }
  }

  render() {
    return (
      <div className="new-user-form-container">
        <Link to='/roster'>Roster</Link>
        <TextField
          label="Firstname"
          value={this.state.firstname}
          onChange={e => this.setState({firstname: e.target.value})}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Lastname"
          value={this.state.lastname}
          onChange={e => this.setState({lastname: e.target.value})}
          margin="normal"
          variant="outlined"
        />
      </div>
    )
  }
}
