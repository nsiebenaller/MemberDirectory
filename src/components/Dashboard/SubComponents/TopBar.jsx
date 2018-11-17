import React from 'react'
import {Search} from '@material-ui/icons'
import {TextField} from '@material-ui/core'

const TopBar = (props) => {
  return(
    <div className="top-bar-container">
      <div className="icon-holder">
        <Search />
      </div>
      <TextField
        className="search-field"
        onChange={(e) => props.onChange(e.target.value)}
        placeholder="Search Anything..."
        margin="normal"
      />
    </div>
  )
}
export default TopBar
