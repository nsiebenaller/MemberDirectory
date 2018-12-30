import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ViewModule,
  BubbleChart,
  People,
  Person
} from '@material-ui/icons'
import {storeParam} from '../../actions/index'


@connect(
  state => ({
    members: state.general.members
  }),
  {storeParam}
)
export default class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currPage: 0,
      perPage: 10,
    }
  }



  render() {
    const {members} = this.props
    const {currPage, perPage} = this.state
    const start = currPage * perPage
    const page = members.slice(start,start+perPage)
    return(
      <div className="main-container">
        <div className="dashboard-header">Directory</div>
        <div className="dir-contents">
          {
            page.map((member, idx) => (
              <DirCard member={member} key={`dir-mem-${idx}`} />
            ))
          }
        </div>
      </div>
    )
  }
}

const DirCard = ({member}) => (
  <div className="dir-card">
    <div>{member.first_name}</div>
    <div>{member.last_name}</div>
    <div>{member.address}</div>
    <div>{member.city}</div>
    <div>{member.state}</div>
  </div>
)
