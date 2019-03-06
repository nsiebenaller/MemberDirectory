import React, { Component } from 'react'
import {Edit, Clear} from '@material-ui/icons'
import {
  TextField,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
  Button,
} from '@material-ui/core'
import {months} from '../../../json/months.json'

const formDaysForMonth = (monthIdx) => {
  const tmp = months[monthIdx].days
  const daysOpts = Array.apply(null, Array(tmp)).map(function (x, i) { return i; })
  return daysOpts
}

export default class SelectedMember extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      editMember: (props.member) ? (props.member) : ({})
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.member && this.props.member !== this.state.editMember) {
      this.setState({editMember: this.props.member})
    }
  }

  handleSetState = (e) => this.setState(e)

  render() {
    const {props, state} = this
    if(!props.member ) {
      return(
        <div className={`table-card-slot ${(props.opened) ? "open" : ""}`}>
          <div className="table-card">
            no member selected
          </div>
        </div>
      )
    }
    return(
      <div className={`table-card-slot ${(props.opened) ? "open" : ""}`}>
        <div className="table-card">
          <div className="card-header bg-primary">
            <div className="header-text">{props.member.last_name}, {props.member.first_name}</div>
            <ActionButtons editing={state.editing} setState={this.handleSetState} />
          </div>
          <div className={`card-body ${state.editing ? 'card-form' : ''}`}>
            <div className="card-subheader">Member Info</div>
            {state.editing ?
              <MemberEditInfo member={state.editMember} setState={this.handleSetState} /> :
              <MemberInfo member={props.member} />}
            <div className="card-subheader">Contact Info</div>
            {state.editing ?
              <ContactEditInfo member={state.editMember} setState={this.handleSetState} /> :
              <ContactInfo member={props.member} />}
            {state.editing &&
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={() => {}}
              >Save</Button>}
          </div>
        </div>
      </div>
    )
  }
}

const ActionButtons = (props) => {
  if(props.editing) {
    return(
      <div
        className="edit-btn"
        onClick={() => props.setState({editing: !props.editing})}
      ><Clear />Cancel</div>
    )
  }
  else {
    return(
      <div>
        <div
          className="edit-btn"
          onClick={() => props.setState({editing: !props.editing})}
        ><Edit />Edit</div>
      </div>
    )
  }
}

const MemberInfo = (props) => (
  <div className="card-info-table">
    <div>First Name:</div><div>{props.member.first_name}</div>
    <div>Last Name:</div><div>{props.member.last_name}</div>
    <div>Address:</div><div>{props.member.address}</div>
    <div>City:</div><div>{props.member.city}</div>
    <div>State:</div><div>{props.member.state}</div>
    <div>Zip:</div><div>{props.member.zip}</div>
  </div>
)

const ContactInfo = (props) => (
  <div className="card-info-table">
    <div>Home Phone:</div><div>{props.member.home_phone}</div>
    <div>Cell Phone:</div><div>{props.member.cell_phone}</div>
    <div>Email:</div><div>{props.member.email}</div>
    <div>Joined:</div><div>{props.member.membership_date}</div>
    <div>Birth Date:</div><div>{props.member.birth_date}</div>
  </div>
)

const MemberEditInfo = (props) => (
  <div class="card-form">
    <TextField
      label="First Name"
      variant={"outlined"}
      value={props.member.first_name}
      onChange={(e) => console.log(e)}
    />
    <TextField
      label="Last Name"
      variant={"outlined"}
      value={props.member.last_name}
      onChange={(e) => console.log(e)}
    />
    <TextField
      label="Address"
      variant={"outlined"}
      value={props.member.address}
      onChange={(e) => console.log(e)}
    />
    <TextField
      label="City"
      variant={"outlined"}
      value={props.member.city}
      onChange={(e) => console.log(e)}
    />
    <TextField
      label="State"
      variant={"outlined"}
      value={props.member.state}
      onChange={(e) => console.log(e)}
    />
    <TextField
      label="Zip"
      variant={"outlined"}
      type="number"
      value={props.member.zip}
      onChange={(e) => console.log(e)}
    />
  </div>
)

const ContactEditInfo = (props) => {
  const birthDayOpts = formDaysForMonth(props.member.birth_month)
  console.log(props.member)
return(
  <div className="card-form">
  <TextField
    label="Home Phone"
    variant="outlined"
    value={props.member.home_phone}
    onChange={(e) => {
      console.log({editMember: {...props.member, home_phone: e.target.value} })
      props.setState({editMember: {...props.member, home_phone: e.target.value} })
    }}
  />
  <TextField
    label="Cell Phone"
    variant="outlined"
    value={props.member.cell_phone}
    onChange={(e) => props.setState({cellphone: e.target.value})}
  />
  <TextField
    label="Email"
    variant="outlined"
    value={props.member.email}
    onChange={(e) => props.setState({email: e.target.value})}
  />
  <TextField
    fullWidth
    label="Membership Year"
    variant="outlined"
    value={props.member.membership_date}
    onChange={(e) => props.setState({membership_date: e.target.value})}
    type="number"
  />
  <div className="new-mem-label">Birth Date</div>
  <div className="date-row">
    <Select
      fullWidth
      value={props.member.birth_month -1}
      onChange={(e) => props.setState({birth_month: e.target.value, birthday: 1})}
      input={<OutlinedInput labelWidth={0} />}
    >
      {
        months.map((obj, idx) => (
          <MenuItem key={idx} value={idx}>{idx + 1} - {obj.long}</MenuItem>
        ))
      }
    </Select>
    <Select
      fullWidth
      value={props.member.birth_day}
      onChange={(e) => props.setState({birth_day: e.target.value})}
      input={<OutlinedInput labelWidth={0} />}
    >
      {
        birthDayOpts.map((obj, idx) => (
          <MenuItem key={`day-${idx}`} value={idx+1}>{idx+1}</MenuItem>
        ))
      }
    </Select>
    <TextField
      fullWidth
      label="Year"
      variant="outlined"
      value={props.member.birth_year}
      onChange={(e) => props.setState({birth_year: e.target.value})}
      type="number"
    />
  </div>
  </div>
)
}
