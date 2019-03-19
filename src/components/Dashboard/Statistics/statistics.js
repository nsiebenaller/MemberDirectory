import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ViewModule,
  BubbleChart,
  People,
  Person
} from '@material-ui/icons'
import {storeParam} from '../../../actions/index'


@connect(
  state => ({
    members: state.general.members
  }),
  {storeParam}
)
export default class Statistics extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }



  render() {

    return(
      <div className="main-container">
        <div className="dashboard-header">Statistics</div>
        <div className="main-contents">
        </div>
      </div>
    )
  }
}
