import React, { Component } from 'react'
import {
  Search
} from '@material-ui/icons'

const SearchBar = (props) => {
  return(
    <div className="search-container">
      <Search />
      <input
        placeholder="Type to Search..."
        value={props.value}
        onChange={() => console.log("change")}
      />
    </div>
  )
}

export default SearchBar
