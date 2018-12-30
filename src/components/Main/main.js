import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ViewModule,
  BubbleChart,
  People,
  Person
} from '@material-ui/icons'
import {storeParam} from '../../actions/index'
import {months} from '../../json/months'

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

  componentWillReceiveProps(nextProps) {
    if(this.state.birthMembers === null && nextProps.members.length > 0) {

    }
  }


  render() {
    //console.log("motnhs", months)
    //const birthdayMembers = this.state.birthMembers ? this.state.birthMembers : []
    //console.log("birth members", birthdayMembers)

    const today = new Date()
    const tDay = today.getDate()
    const tMonth = today.getMonth()
    const tYear = today.getFullYear()

    //console.log("date", tDay, tMonth, tYear)
    let birthdayMembers = this.props.members
      .filter(person => person.birth_month === tMonth+1)
      .filter(person => person.birth_day >= tDay)
      .sort((a, b) => (a.birth_day - b.birth_day))

    const nMonth = getNextMonth(tMonth)
    const nextMembers = this.props.members
      .filter(person => person.birth_month === nMonth+1)
      .sort((a, b) => (a.birth_day - b.birth_day))
    birthdayMembers = birthdayMembers.concat(nextMembers)

    birthdayMembers = birthdayMembers.slice(0, 10)

    return(
      <div className="main-container">
        <div className="dashboard-header">Dashboard</div>
        <div className="main-contents">
          <div className="dashboard-subheader">Upcoming Birthdays</div>
          <div className="dashboard-subheader">Actions</div>
          <div className="card-container">
            {
              birthdayMembers.map((member, idx) => (
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
