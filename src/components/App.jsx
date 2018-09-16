import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from './Title.js';
import {AddTask} from './AddTask';
import Board from './Board.js';
import * as actionCreators from '../actions/index'

@connect(state => ({
  tasks: state.tasks
}), Object.assign({}, actionCreators))
export class App extends Component {
render() {
  const {
    tasks,
    removeTask,
    changeTaskStatus
  } = this.props
  return (
    <div>
      <Title cardsCount={tasks.length}/>
      <AddTask />
      <Board
        tasks={tasks}
        onChangeClick={changeTaskStatus}
        onRemoveClick={removeTask}
      />
    </div>
    )};

}
