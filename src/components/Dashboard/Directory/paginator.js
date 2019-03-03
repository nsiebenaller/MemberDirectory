import React, { Component } from 'react'

const Paginator = (props) => {
  const {currPage, maxPage} = props
  return(
    <div className="paginator-container">
      <div
        className="pag-btn"
        onClick={() => {props.setState({currPage: 0})}}
      >0</div>
      <div
        className="pag-btn"
        onClick={() => {props.setState({currPage: currPage === 0 ? 0 : currPage - 1})}}
      >{"<"}</div>
      <div className="pag-btn pag-disable">{currPage}</div>
      <div
        className="pag-btn"
        onClick={() => {props.setState({currPage: currPage === maxPage ? maxPage : currPage + 1})}}
      >{">"}</div>
      <div
        className="pag-btn"
        onClick={() => {props.setState({currPage: maxPage})}}
      >{maxPage}</div>
    </div>
  )
}
export default Paginator
