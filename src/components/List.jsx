import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTaskStatus, removeTask } from '../actions';
import { Card } from './Card.jsx';
import * as actionCreators from '../actions/index'


@connect(state => ({
  tasks: state.tasks
}), Object.assign({}, actionCreators))
export class List extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    console.log(this.props.tasks)
    return (
      <div className={`list ${this.props.status.toLowerCase()}-list`}>
          <h5>{this.props.status}<span>{this.props.tasks.filter(x => x.status === this.props.status).length}</span></h5>
          {this.props.tasks.filter(e => e.status === this.props.status).map((task) =>
              <Card
                  key={task.id}
                  {...task}
                  onChangeClick={this.props.changeTaskStatus}
                  onRemoveClick={this.props.removeTask}
              />
          )}
      </div>
  )};

}
