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
        value={props.searchTerm}
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
