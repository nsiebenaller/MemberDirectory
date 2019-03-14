import React, { Component } from 'react'
import { connect } from 'react-redux'
import KeyDown from '@material-ui/icons/KeyboardArrowDown'
import {
  ViewModule,
  BubbleChart,
  People,
  ChromeReaderMode
} from '@material-ui/icons'

import {storeParam} from '../../../actions/index'
import User from './user'
import Search from './search'


@connect(
  state => ({
    selTab: state.general.selectedTab,
    searchTerm: state.general.searchTerm,
  }),
  {storeParam}
)
export default class Frame extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  setSearchTerm = (term) => this.props.storeParam({searchTerm: term})

  render() {
    const {
      selTab,
      history
    } = this.props
    return(
      <div className="frame-container">
        <div className="frame-col-container">
          <ColItem
            class={"primary-option option"}
            option={"Home"}
            storeParam={this.props.storeParam}
            icon={<BubbleChart />}
            hideLabel
          />
          <ColItem
            class={`option ${(selTab === 'Statistics') ? ("sel-option") : ("")}`}
            option={"Statistics"}
            storeParam={this.props.storeParam}
            icon={<ViewModule />}
          />
          <ColItem
            class={`option ${(selTab === 'Directory') ? ("sel-option") : ("")}`}
            option={"Directory"}
            storeParam={this.props.storeParam}
            icon={<ChromeReaderMode />}
          />
          <ColItem
            class={`option ${(selTab === 'Teams') ? ("sel-option") : ("")}`}
            option={"Teams"}
            storeParam={this.props.storeParam}
            icon={<People />}
          />
        </div>
        <div className="frame-row-container">
          <Search setSearchTerm={this.setSearchTerm} searchTerm={this.props.searchTerm} />
          <User history={history}/>
        </div>
      </div>
    )
  }
}

const ColItem = (props) => {
  return(
    <div
      className={props.class}
      onClick={() => props.storeParam({selectedTab: props.option})}
    >
      {props.icon}
      {!props.hideLabel && <div className="option-text">{props.option}</div>}
    </div>
  )
}
