import React, { Component } from 'react'
import { connect } from 'react-redux'
import {storeParam} from '../../../actions/index'
import TextField from '@material-ui/core/TextField';


@connect(
  state => ({
  }),
  {storeParam}
)
export default class NewMemberForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div className="new-member-form-container">
        <TextField
          placeholder="First Name"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="Last Name"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="Address"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="City"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="State"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="Zip"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="Home Phone"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="Cell Phone"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="Email"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="Membership Date"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="Status"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="Birth Date"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="Birth Year"
          value={''}
          onChange={() => {}}
          margin="normal"
          variant="outlined"
        />


      </div>
    )
  }
}
