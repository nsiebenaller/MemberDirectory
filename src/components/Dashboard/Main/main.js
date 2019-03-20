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

function getNextMonth(month) {
  return (month === 11) ? (0) : (month++)
}


@connect(
  state => ({
    members: state.general.members
  }),
  {storeParam}
)
export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      birthMembers: null
    }
  }

  calculateBirthdays = () => {
    const today = new Date()
    const tDay = today.getDate()
    const tMonth = today.getMonth()
    const tYear = today.getFullYear()
    const nMonth = tMonth === 11 ? 0 : tMonth + 1
    const dateSorter = (a, b) => {
      if(a.birth_month === b.birth_month) return a.birth_day > b.birth_day ? 1 : -1
      else return a.birth_month > b.birth_month ? 1 : -1
    }
    let birthdayMembers = this.props.members
      .filter(person => person.birth_month === tMonth+1 && person.birth_day >= tDay || person.birth_month === nMonth+1)
      .sort(dateSorter)
    birthdayMembers = birthdayMembers.length > 10 ? birthdayMembers.slice(0, 10) : birthdayMembers
    this.setState({birthMembers: birthdayMembers})
  }


  render() {
    if(this.state.birthMembers === null && this.props.members.length > 0) {
      this.calculateBirthdays()
    }
    return(
      <div className="main-container">
        <div className="dashboard-header">Dashboard</div>
        <div className="main-contents">
          <div className="dashboard-subheader">Upcoming Birthdays</div>
          <div className="dashboard-subheader">Actions</div>
          <div className="card-container">
            {
              this.state.birthMembers && this.state.birthMembers.map((member, idx) => (
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
