import React, { Component } from 'react';
import { connect } from 'react-redux';



@connect(state => ({
  cardsCount: state.tasks.length
}), Object.assign({}, {}, {}))
export class Title extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
    <div className="project-info">
        <h1>Trololo Board</h1>
        <p>There are {this.props.cardsCount} tasks on board</p>
        <span>Type task text and executor name. Click on card to move to another list.</span>
    </div>
  )}

}
