import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  People,
  Person,
  Add,
} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import {storeParam} from '../../../actions/index'

@connect(
  state => ({
    members: state.general.members,
    searchTerm: state.general.searchTerm
  }),
  {storeParam}
)
export default class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div className="main-container">
        <div className="dashboard-header">Teams</div>
        <div className="main-contents">
        </div>
      </div>
    )
  }
}
