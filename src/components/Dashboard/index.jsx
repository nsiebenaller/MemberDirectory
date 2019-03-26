import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'

import Frame from './Frame/frame'
import Main from './Main/main'
import Directory from './Directory/directory'
import Statistics from './Statistics/statistics'
import Teams from './Teams/teams'

import {storeParam} from '../../actions/index'

@connect(
  state => ({
    members: state.general.members,
    selectedTab: state.general.selectedTab
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
      members,
      selectedTab,
      history
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
        <Frame history={history}/>
        <div className="dashboard-main">
        {selectedTab === 'Home' && <Main />}
        {selectedTab === 'Statistics' && <Statistics />}
        {selectedTab === 'Directory' && <Directory />}
        {selectedTab === 'Teams' && <Teams />}
        </div>
      </div>
    )
  }
}
