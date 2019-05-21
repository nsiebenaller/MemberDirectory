import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  Person
} from '@material-ui/icons'
import {storeParam} from '../../../actions/index'


@connect(
  state => ({
    members: state.general.members,
    username: state.general.username
  }),
  {storeParam}
)
export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
    }
  }

  handleLogout = () => {
    this.props.history.push('/')
  }

  render(){
    const {opened} = this.state
    return(
      <div className="user-container">
        <div
          tabIndex="0"
          className={`user-box ${opened ? "user-selected" : ""}`}
          onClick={(e) => {
            this.setState({opened: !opened})
          }}
          onBlur={(e) => {
            this.setState({opened: false})
          }}
        >
          <div className="person-container"><Person /></div>
          <div>{this.props.username}</div>
          {!opened ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          <div className="dropdown-container">
            <div className={(opened) ? ("user-dropdown") : ("display-none")}>
              <div
                className="user-option"
                onClick={() => {
                  this.handleLogout()
                }}
              >Logout</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
