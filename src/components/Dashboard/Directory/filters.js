import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormControlLabel
} from '@material-ui/core'
import {
  FilterList
} from '@material-ui/icons'

@connect(
  state => ({}),
  {}
)
export default class Filters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      childrenOnly: false
    }
  }

  close = () => {
    const { props, state } = this
    if(state.childrenOnly) {
      const filterFn = (member) => {
        if(!member.birth_year) return false
        const thisYear = new Date().getFullYear()
        if(thisYear - member.birth_year <= 18) {
          return true
        }
        return false
      }
      props.setFilter(filterFn)
    }
    else {
      props.setFilter(null)
    }
    this.setState({ open: false })
  }

  render() {
    const { props, state } = this
    return(
      <div className="filters-container">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.setState({ open: true })}
        ><FilterList />Filters</Button>
        <Dialog
          open={state.open}
          onClose={this.close}
        >
          <DialogTitle>Filters</DialogTitle>
          <List>
            <ListItem button>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.childrenOnly}
                    onChange={() => this.setState({ childrenOnly: !state.childrenOnly })}
                    value="Children Only"
                    color="primary"
                  />
                }
                label="Children Only"
              />
            </ListItem>
          </List>
        </Dialog>
      </div>
    )
  }
}
