import React, { Component } from 'react'
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
  Button,
} from '@material-ui/core'
import {months} from '../../json/months.json'


const formDaysForMonth = (monthIdx) => {
  const tmp = months[monthIdx].days
  const daysOpts = Array.apply(null, Array(tmp)).map(function (x, i) { return i; })
  return daysOpts
}

export default class NewMemberForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      homephone: "",
      cellphone: "",
      email: "",
      membershipyear: "",
      birthmonth: 0,
      birthday: 1,
      birthyear: ""
    }
  }

  handleSubmit = () => {
    const {state} = this
    console.log("TIME TO SUBMIT", this.state)
    const valid = (
      state.firstname !== "" &&
      state.lastname !== "" &&
      state.address !== "" &&
      state.city !== "" &&
      state.state !== "" &&
      state.zip !== ""
    )
    if(valid) {
      const newMember = {
        first_name: state.firstname,
        last_name: state.lastname,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        home_phone: state.homephone,
        cell_phone: state.cellphone,
        email: state.email,
        membership_date: state.membershipyear,
        status: "member",
        birth_date: state.birthmonth + "/" + state.birthday,
        birth_year: state.birthyear
      }
      console.log("check!", newMember)
    }
    else {
      window.alert("Please Fill In All Fields!")
    }

  }

  render() {
    const {props, state} = this
    const birthDayOpts = formDaysForMonth(state.birthmonth)
    return(
      <div className={`new-mem-form ${(props.opened) ? "open" : ""}`}>
        <div className="new-mem-card">
          <h2>Create a New Member</h2>
          <div className="new-mem-contents">
            <div className="new-mem-label">Member Info</div>
            <TextField
              label="First Name"
              variant="outlined"
              onChange={(e) => this.setState({firstname: e.target.value})}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              onChange={(e) => this.setState({lastname: e.target.value})}
            />
            <TextField
              label="Address"
              variant="outlined"
              onChange={(e) => this.setState({address: e.target.value})}
            />
            <TextField
              label="City"
              variant="outlined"
              onChange={(e) => this.setState({city: e.target.value})}
            />
            <TextField
              label="State"
              variant="outlined"
              onChange={(e) => this.setState({state: e.target.value})}
            />
            <TextField
              label="Zip"
              variant="outlined"
              type="number"
              onChange={(e) => this.setState({zip: e.target.value})}
            />
            <div className="new-mem-label">Contact Info</div>
            <TextField
              label="Home Phone"
              variant="outlined"
              onChange={(e) => this.setState({homephone: e.target.value})}
            />
            <TextField
              label="Cell Phone"
              variant="outlined"
              onChange={(e) => this.setState({cellphone: e.target.value})}
            />
            <TextField
              label="Email"
              variant="outlined"
              onChange={(e) => this.setState({email: e.target.value})}
            />
            <TextField
              fullWidth
              label="Membership Year"
              variant="outlined"
              value={state.membershipyear}
              onChange={(e) => this.setState({membershipyear: e.target.value})}
              type="number"
            />
            <div className="new-mem-label">Birth Date</div>
            <div className="date-row">
              <Select
                fullWidth
                value={state.birthmonth}
                onChange={(e) => this.setState({birthmonth: e.target.value, birthday: 1})}
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
                value={state.birthday}
                onChange={(e) => this.setState({birthday: e.target.value})}
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
                value={state.birthyear}
                onChange={(e) => this.setState({birthyear: e.target.value})}
                type="number"
              />
            </div>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.handleSubmit}
            >Create</Button>
          </div>
        </div>
      </div>
    )
  }
}
