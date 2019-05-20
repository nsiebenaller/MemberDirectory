import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  People,
  Person,
  Add,
  Check
} from '@material-ui/icons'
import {Button, Chip, TextField} from '@material-ui/core'
import {getTags} from '../../../actions/index'

@connect(
  state => ({
    tags: state.general.tags,
    fetching: state.general.fetching,
    fetched: state.general.fetched
  }),
  {getTags}
)
export default class Tags extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagValue: ""
    }
  }

  componentWillMount() {
    const {fetching, fetched, getTags} = this.props
    if(!Object.keys(fetching).includes("tags") && !Object.keys(fetched).includes("tags")) {
      getTags()
    }
  }

  render() {
    const { props, state } = this
    const searchedTags = (state.tagValue === "") ?
    (props.tags) :
    (props.tags.filter(x => x.name.toUpperCase().includes(state.tagValue.toUpperCase())))
    return(
      <div className="main-container">
        <div className="dashboard-header">Tags</div>
        <div>
          <div className="tags-bar">
            <TextField
              placeholder={'Search Tags...'}
              value={this.state.tagValue}
              onChange={(e) => this.setState({tagValue: e.target.value})}
              fullWidth
              variant={"outlined"}
            />
          <AddTagButton
            disabled={searchedTags.length >= 1}
          />
          </div>
          <div className="general-contents flex-row">
            {
              searchedTags.map((tag, idx) =>
              (
                <Chip
                  key={idx}
                  label={tag.name}
                />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

const AddTagButton = (props) => (
  <div className="tag-btn-container">
    <div className={`new-tag-btn ${props.diabled ? "disabled" : ""}`}>
      <Check />
    </div>
  </div>
)
