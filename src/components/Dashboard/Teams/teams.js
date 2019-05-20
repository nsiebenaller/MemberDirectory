import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  People,
  Person,
  Add,
} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import {storeParam, createTag, addTag} from '../../../actions/index'

@connect(
  state => ({
    members: state.general.members,
    searchTerm: state.general.searchTerm
  }),
  {storeParam, createTag, addTag}
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
          <button
            onClick={() => this.props.addTag({member_id: 1, tag_id: 1})}
          >Click</button>
        </div>
      </div>
    )
  }
}
