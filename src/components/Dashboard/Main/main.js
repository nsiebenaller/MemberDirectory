import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ViewModule,
  BubbleChart,
  People,
  Person
} from '@material-ui/icons'
import {storeParam} from '../../../actions/index'
import {months} from '../../../json/months'

@connect(
  state => ({
    birthdayMembers: state.general.birthdayMembers
  }),
  {storeParam}
)
export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div className="main-container">
        <div className="dashboard-header">Dashboard</div>
        <div className="main-contents">
          <div className="dashboard-subheader">Upcoming Birthdays</div>
          <div className="dashboard-subheader">Actions</div>
          <div className="card-container">
            {
              this.props.birthdayMembers.map((member, idx) => (
                <Card
                  key={`birth-member-${idx}`}
                  member={member}
                />
              ))
            }
          </div>
          <div className="action-container">
            <Action title={"Home"} icon={<BubbleChart />} />
            <Action title={"Statistics"} icon={<ViewModule />} />
            <Action title={"Directory"} icon={<People />} />
          </div>
        </div>
      </div>
    )
  }
}

const Card = ({member}) => {
  return(
  <div className="card">
    <div className="icon-holder"><Person /></div>
    <div className="card-contents">
      <div className="title">{member.first_name} {member.last_name}</div>
      <div className="subtitle">{months[member.birth_month-1].short} {member.birth_day}</div>
    </div>
  </div>
)}

const Action = ({title, icon}) => {
  return(
    <div className="action-btn">
      <div>
        <div className="icon-holder">{icon}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  )
}
