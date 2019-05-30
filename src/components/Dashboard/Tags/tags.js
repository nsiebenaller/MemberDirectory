import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  People,
  Person,
  Add,
  Check,
} from '@material-ui/icons'
import CloseIcon from '@material-ui/icons/Close'
import {Button, Chip, TextField, IconButton, Snackbar} from '@material-ui/core'
import {getTags, createTag} from '../../../actions/index'

@connect(
  state => ({
    tags: state.general.tags,
    fetching: state.general.fetching,
    fetched: state.general.fetched
  }),
  {getTags, createTag}
)
export default class Tags extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagValue: "",
      snackbarOpen: false,
      snackbarText: ""
    }
  }

  componentWillMount() {
    const {fetching, fetched, getTags} = this.props
    if(!Object.keys(fetching).includes("tags") && !Object.keys(fetched).includes("tags")) {
      getTags()
    }
  }

  createTag = async () => {
    const resp = await this.props.createTag({name: this.state.tagValue})
    if(resp.status === 200) {
      this.setState({snackbarOpen: true, snackbarText: "Tag Created!", tagValue: ""})
      this.props.getTags()
    }
    else {
      this.setState({snackbarOpen: true, snackbarText: "Error!"})
    }
  }

  handleClose = () => this.setState({snackbarOpen: false, snackbarText: ""})

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
            onClick={this.createTag}
          />
          </div>
          <div className="general-contents flex-row">
            {
              searchedTags.map((tag, idx) =>
              (
                <div key={idx} className="chip-container">
                  <Chip
                    label={tag.name}
                  />
                </div>
              ))
            }
            {
              searchedTags.length === 0 &&
              <div>no tags found.</div>
            }
          </div>
        </div>
        <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={state.snackbarOpen}
            autoHideDuration={6000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{state.snackbarText}</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="secondary"
                onClick={this.handleClose}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
      </div>
    )
  }
}

const AddTagButton = (props) => {
  const classname = (props.disabled) ? "disabled" : ""
  return(
    <div
      className="tag-btn-container"
      onClick={props.onClick}
    >
      <div className={`new-tag-btn ${classname}`}>
        <Check />
      </div>
    </div>
  )
}
