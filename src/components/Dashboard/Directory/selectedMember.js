import React, { Component } from 'react'
import {Edit} from '@material-ui/icons'

const SelectedMember = (props) => {
  if(!props.member ) {
    return(
      <div className={`sel-mem-form ${(props.opened) ? "open" : ""}`}>
        <div className="new-mem-card">
          no member selected
        </div>
      </div>
    )
  }

  return(
    <div className={`sel-mem-form ${(props.opened) ? "open" : ""}`}>
      <div className="new-mem-card">
        <div className="card-header">
          <div>{props.member.last_name}, {props.member.first_name}</div>
          <EditBtn />
        </div>
        <div className="card-subheader">Member Info</div>
        <MemberInfo member={props.member} />
        <div className="card-subheader">Contact Info</div>

      </div>
    </div>
  )
}

export default SelectedMember

const EditBtn = (props) => (
  <div
    className="edit-btn"
  ><Edit />Edit</div>
)

const MemberInfo = (props) => (
  <div className="card-contents">
    <div>First Name:</div><div> {props.member.first_name}</div>
    <div>Last Name:</div><div> {props.member.last_name}</div>
    <div>Address:</div><div> {props.member.address}</div>
    <div>City:</div><div> {props.member.city}</div>
    <div>State:</div><div> {props.member.state}</div>
    <div>Zip:</div><div> {props.member.zip}</div>
  </div>
)
