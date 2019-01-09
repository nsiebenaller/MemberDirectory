import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ViewModule,
  BubbleChart,
  People,
  Person,
  Add,
} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import {storeParam} from '../../actions/index'
import {createMember, getMembers} from '../../actions/index'
import Paginator from './paginator.js'
import NewMemberForm from './NewMember.js'

@connect(
  state => ({
    members: state.general.members
  }),
  {storeParam, createMember, getMembers}
)
export default class Directory extends Component {
  constructor(props) {
    super(props)
    const perPage = 10
    const max = Math.floor(props.members.length / perPage)
    this.state = {
      currPage: 0,
      perPage: perPage,
      maxPage: max,
      newMemOpened: false,
    }
  }

  setVal = (obj) => this.setState(obj)

  render() {
    const {members} = this.props
    const {currPage, perPage, maxPage, newMemOpened} = this.state
    const start = currPage * perPage
    const page = members.slice(start,start+perPage)
    return(
      <div className="main-container">
        <div className="dash-top">
          <div className="dashboard-header">Directory</div>
          <div className="right-actions">
            <NewMember setState={this.setVal}/>
            <Paginator
              setState={this.setVal}
              currPage={currPage}
              maxPage={maxPage}
            />
          </div>
        </div>
        <div className={`dash-contents ${newMemOpened ? "short" : ""}`}>
          <div className={`dir-contents ${newMemOpened ? "short" : ""}`}>
            {
              page.map((member, idx) => (
                <DirCard member={member} key={`dir-mem-${idx}`} />
              ))
            }
          </div>
          <NewMemberForm />
        </div>
      </div>
    )
  }
}

const DirCard = ({member}) => (
  <div className="dir-card">
    <div>{member.last_name}</div>
    <div>{member.first_name}</div>
    <div>{member.address}</div>
    <div>{member.city}</div>
    <div>{member.state}</div>
    <div>
      {(member.cell_phone) ?
        (`cell: ${member.cell_phone}`) :
        ((member.home_phone) ?
        (`home: ${member.home_phone}`) :
        (`no phone`))}
    </div>
    <div>{member.email}</div>
  </div>
)

const NewMember = (props) => {
  console.log("props", props)
  return(
    <div className="new-member-btn">
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => props.setState({newMemOpened: true})}
      ><Add className="new-member-icon"/>create</Button>
    </div>
  )
}
