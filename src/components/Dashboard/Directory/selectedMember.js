import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Edit, Clear, Add} from '@material-ui/icons'
import {
  TextField,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
} from '@material-ui/core'
import {months} from '../../../json/months.json'
import {updateMember, getMembers} from '../../../actions'

const formDaysForMonth = (monthIdx) => {
  const tmp = months[monthIdx].days
  const daysOpts = Array.apply(null, Array(tmp)).map(function (x, i) { return i; })
  return daysOpts
}

@connect(
  state => ({}),
  {updateMember, getMembers}
)
export default class SelectedMember extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      editMember: null,
      tagDialogOpen: false
    }
  }

  componentDidUpdate(prevProps) {
    if(!this.state.editMember) {
      this.setState({editMember: this.props.member})
    }
    else if(this.props.member && this.props.member.id !== this.state.editMember.id) {
      this.setState({editMember: this.props.member})
    }
  }

  handleSetState = (e) => {
    this.setState(e)
  }

  handleSave = () => {
    //console.log(this.state.editMember)
    this.props.updateMember(this.state.editMember)
    this.setState({editing: false})
  }

  render() {
    const {props, state} = this
    //console.log(props.member)
    if(!props.member) {
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
        <NewTagDialog
          open={this.state.tagDialogOpen}
          name={this.props.member.first_name+" "+this.props.member.last_name}
        />
        <div className="table-card">
          <div className="card-header bg-primary">
            <div className="header-text">{props.member.last_name}, {props.member.first_name}</div>
            <ActionButtons editing={state.editing} setState={this.handleSetState} close={() => this.props.handleSetState({selectedMember: -1})} />
          </div>
          <div className={`card-body ${state.editing ? 'card-form' : ''}`}>
            <div className="card-section">
              {
                props.member.tags.map((tag) => (state.editing) ?
                  (
                    <Chip
                      key={`key-${tag.name}`}
                      label={tag.name}
                      className="chip"
                      onDelete={() => console.log("delete!")}
                    />
                  ) :
                  (
                    <Chip
                      key={`key-${tag.name}`}
                      label={tag.name}
                      className="chip"
                    />
                  )
                )
              }
              {
                state.editing &&
                  <Chip
                    key={`key-master`}
                    label={<div className={`add-tag-label`}><Add /><div>add</div></div>}
                    className={`add-tag-btn`}
                    variant={`outlined`}
                    color={`secondary`}
                    onClick={() => this.setState({tagDialogOpen: true})}
                  />
              }
            </div>
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
                onClick={this.handleSave}
              >Save</Button>}
          </div>
        </div>
      </div>
    )
  }
}

const ActionButtons = (props) => {
  const action = (props.editing) ?
    (
        <div
          className="edit-btn"
          onClick={() => props.setState({editing: !props.editing})}
        ><Clear /></div>
    ) :
    (
      <div>
        <div
          className="edit-btn"
          onClick={() => props.setState({editing: !props.editing})}
        ><Edit /></div>
      </div>
    )

    return (
      <div className="action-btns">
        {action}
        <div
          className="clear-btn"
          onClick={props.close}
        >
          <Clear />
        </div>
      </div>
    )
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
    <div>Birth Date:</div><div>{props.member.birth_date}{props.member.birth_year ? `/${props.member.birth_year}` : ''}</div>
  </div>
)

const MemberEditInfo = (props) => (
  <div className="card-form">
    <TextField
      label="First Name"
      variant={"outlined"}
      value={props.member.first_name}
      onChange={(e) => props.setState({editMember: {...props.member, first_name: e.target.value}})}
    />
    <TextField
      label="Last Name"
      variant={"outlined"}
      value={props.member.last_name}
      onChange={(e) => props.setState({editMember: {...props.member, last_name: e.target.value}})}
    />
    <TextField
      label="Address"
      variant={"outlined"}
      value={props.member.address}
      onChange={(e) => props.setState({editMember: {...props.member, address: e.target.value}})}
    />
    <TextField
      label="City"
      variant={"outlined"}
      value={props.member.city}
      onChange={(e) => props.setState({editMember: {...props.member, city: e.target.value}})}
    />
    <TextField
      label="State"
      variant={"outlined"}
      value={props.member.state}
      onChange={(e) => props.setState({editMember: {...props.member, state: e.target.value}})}
    />
    <TextField
      label="Zip"
      variant={"outlined"}
      value={props.member.zip}
      onChange={(e) => props.setState({editMember: {...props.member, zip: e.target.value}})}
    />
  </div>
)

const ContactEditInfo = (props) => {
  const birthDayOpts = formDaysForMonth(props.member.birth_month ? props.member.birth_month : 0)
return(
  <div className="card-form">
  <TextField
    label="Home Phone"
    variant="outlined"
    value={props.member.home_phone ? props.member.home_phone : ""}
    onChange={(e) => {
      props.setState({editMember: {...props.member, home_phone: e.target.value} })
    }}
  />
  <TextField
    label="Cell Phone"
    variant="outlined"
    value={props.member.cell_phone}
    onChange={(e) => props.setState({editMember: {...props.member, cell_phone: e.target.value}})}
  />
  <TextField
    label="Email"
    variant="outlined"
    value={props.member.email}
    onChange={(e) => {
      props.setState({editMember: {...props.member, email: e.target.value}})
    }}
  />
  <TextField
    fullWidth
    label="Membership Year"
    variant="outlined"
    value={props.member.membership_date}
    onChange={(e) => props.setState({editMember: {...props.member, membership_date: e.target.value}})}
    type="number"
  />
  <div className="new-mem-label">Birth Date</div>
  <div className="date-row">
    <Select
      fullWidth
      value={props.member.birth_month ? props.member.birth_month -1 : ''}
      onChange={(e) => props.setState({editMember: {...props.member, birth_month: e.target.value, birthday: 1}})}
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
      value={props.member.birth_day ? props.member.birth_day : ''}
      onChange={(e) => props.setState({editMember: {...props.member, birth_day: e.target.value}})}
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
      onChange={(e) => props.setState({editMember: {...props.member, birth_year: e.target.value}})}
      type="number"
    />
  </div>
  </div>
)
}

const NewTagDialog = (props) => (
  <Dialog
    open={props.open}
  >
    <DialogTitle>{`Add Tags to ${props.name}`}</DialogTitle>
    <DialogContent>
          <Select
            value={11}
            onChange={(e) => console.log(e)}
            input={
              <OutlinedInput
                labelWidth={0}
                name="tag"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
    </DialogContent>
  </Dialog>
)
