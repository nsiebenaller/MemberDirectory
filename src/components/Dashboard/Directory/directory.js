import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ViewModule,
  BubbleChart,
  People,
  Person,
  Add,
  SaveAlt
} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import {storeParam, getMembers} from '../../../actions/index'
import Paginator from './paginator.js'
import NewMemberForm from './NewMember.js'
import SelectedMember from './SelectedMember.js'
import Filters from './filters.js'

@connect(
  state => ({
    members: state.general.members,
    searchTerm: state.general.searchTerm
  }),
  {storeParam, getMembers}
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
      birthMonth: 0,
      selectedMember: -1,
      filterFn: null
    }
  }

  handleSetState = (obj) => this.setState(obj)

  toggleForm = (show) => {
    this.setState({newMemOpened: show, selectedMember: -1})
    if(!show) {
      this.form.wrappedInstance.setState({
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
      })
    }
  }

  render() {
    const { members } = this.props
    const { currPage, perPage, maxPage, newMemOpened, selectedMember, filterFn } = this.state
    const start = currPage * perPage
    const lastnameSort = (a, b) => {
      var aL = a.last_name.toUpperCase()
      var bL = b.last_name.toUpperCase()
      return (aL < bL) ? -1 : (aL > bL) ? 1 : 0
    }
    const filtered = filterFn !== null ? members.filter(filterFn) : members
    const page = filtered.sort(lastnameSort).slice(start,start+perPage)
    const selMemOpened = this.state.selectedMember !== -1

    return(
      <div className="main-container">
        <div className="dash-top">
          <div className="dashboard-header">Directory</div>
          <div className="right-actions">
            <Button
              className="export-btn"
              variant="outlined"
            ><SaveAlt/>Export</Button>
            <Filters setFilter={(fn) => this.setState({ filterFn: fn })} />
            <NewMember opened={newMemOpened} toggleForm={this.toggleForm}/>
            <Paginator
              setState={this.handleSetState}
              currPage={currPage}
              maxPage={maxPage}
            />
          </div>
        </div>
        <div className={`dash-contents ${newMemOpened || selMemOpened ? "short" : ""}`}>
          <div className={`dir-contents ${newMemOpened || selMemOpened ? "short" : ""}`}>
            {
              page.map((member, idx) =>
              (<DirCard
                key={`dir-mem-${idx}`}
                member={member}
                isSelected={this.state.selectedMember === member.id}
                setState={this.handleSetState}
                minified={newMemOpened || selMemOpened}
              />))
            }
          </div>
          <NewMemberForm ref={form => this.form = form} opened={newMemOpened} {...this.state} />
          <SelectedMember
            opened={selMemOpened}
            member={members.find(x => x.id === selectedMember)}
            handleSetState={this.handleSetState}
          />
        </div>
      </div>
    )
  }
}


const DirCard = ({member, isSelected, setState, minified}) => {
  if(minified) {
    return(
      <div
        className={`dir-card-min ${isSelected ? 'dir-card-selected' : ''}`}
        onClick={() => setState({selectedMember: isSelected ? -1 : member.id, newMemOpened: false})}
      >
        <div>{member.last_name}, {member.first_name}</div>
        <div className="left-align">{member.email || 'no email'}</div>
      </div>
    )
  }
  return(
    <div
      className={`dir-card ${isSelected ? 'dir-card-selected' : ''}`}
      onClick={() => setState({selectedMember: isSelected ? -1 : member.id, newMemOpened: false})}
    >
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
}

const NewMember = (props) => {
  //console.log("props", props)
  return(
    <div className="new-member-btn">
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => props.toggleForm(!props.opened)}
      ><Add className="new-member-icon"/>{(props.opened) ? ("close") : ("create")}</Button>
    </div>
  )
}
