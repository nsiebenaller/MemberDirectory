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

const NewMemberForm = (props) => {
  const daysOpts = [...Array(months[props.birthMonth].days)]
  return(
    <div className={`new-mem-form ${(props.opened) ? "open" : ""}`}>
      <div className="new-mem-card">
        <h2>Create a New Member</h2>
        <div className="new-mem-contents">
          <div className="new-mem-label">Member Info</div>
          <TextField
            label="First Name"
            variant="outlined"
          />
          <TextField
            label="Last Name"
            variant="outlined"
          />
          <TextField
            label="Address"
            variant="outlined"
          />
          <TextField
            label="City"
            variant="outlined"
          />
          <TextField
            label="State"
            variant="outlined"
          />
          <TextField
            label="Zip"
            variant="outlined"
            type="number"
          />
          <div className="new-mem-label">Contact Info</div>
          <TextField
            label="Home Phone"
            variant="outlined"
          />
          <TextField
            label="Cell Phone"
            variant="outlined"
          />
          <TextField
            label="Email"
            variant="outlined"
          />
          <div className="new-mem-label">Birth Date</div>
          <Select
            value={props.birthMonth}
            onChange={(e) => console.log(e)}
            input={<OutlinedInput labelWidth={0} />}
          >
            {
              months.map((obj, idx) => (
                <MenuItem key={idx} value={idx}>{idx + 1} - {obj.short}</MenuItem>
              ))
            }
          </Select>
          <Select
            value={1}
            onChange={(e) => console.log(e)}
            input={<OutlinedInput labelWidth={0} />}
          >
            {
              daysOpts.map((obj, idx) => (
                <MenuItem key={`day-${idx}`} value={idx+1}>{idx+1}</MenuItem>
              ))
            }
          </Select>
          <TextField
            label="Year"
            variant="outlined"
            value={""}
            onChange={() => {}}
            type="number"
          />
          <Button
            color="secondary"
            variant="contained"
            onClick={() => console.log("click!")}
          >Create</Button>
        </div>
      </div>
    </div>
  )
}

export default NewMemberForm
