import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'

import SideBar from './SubComponents/SideBar.jsx'
import TopBar from './SubComponents/TopBar.jsx'
import MembersTable from './SubComponents/MembersTable.jsx'

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

    this.state = {
      searchTerm: ""
    }
  }

  searchText(text) {
    this.setState({searchTerm: text})
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
          <MembersTable members={filteredMembers} />
        </div>
      </div>
    )
  }
}
