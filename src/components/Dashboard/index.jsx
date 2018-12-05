import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'

import SideBar from './SubComponents/SideBar.jsx'
import TopBar from './SubComponents/TopBar.jsx'
import MembersTable from './SubComponents/MembersTable.jsx'
import ActionBar from './SubComponents/ActionBar.jsx'
import NewMemberForm from './SubComponents/NewMemberForm.jsx'

import {storeParam} from '../../actions/index'

@connect(
  state => ({
    members: state.general.members
  }),
  {storeParam}
)
export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.searchText = this.searchText.bind(this)
    this.changeType = this.changeType.bind(this)

    this.state = {
      searchTerm: "",
      type: "default",
    }
  }

  searchText(text) {
    this.setState({searchTerm: text})
  }

  changeType(type) {
    this.setState({type})
  }

  render() {
    const {
      members
    } = this.props
    const {
      searchTerm
    } = this.state

    let filteredMembers = members
    if(searchTerm !== '') {
      filteredMembers = members.filter(obj =>
        obj.first_name.includes(searchTerm) ||
        obj.last_name.includes(searchTerm))
    }

    return (
      <div className="dashboard-container">
        <SideBar />
        <div className="dashboard-main">
          <TopBar onChange={this.searchText} />
          <ActionBar type={this.state.type} changeType={this.changeType} />
          {this.state.type === 'default' && <MembersTable members={filteredMembers} />}
          {this.state.type === 'new-form' && <NewMemberForm />}
        </div>
      </div>
    )
  }
}
