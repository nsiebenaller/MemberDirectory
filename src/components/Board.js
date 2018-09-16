import React from 'react';
import { connect } from 'react-redux';
import List from './List.js';

const Board = ({tasks, onChangeClick, onRemoveClick}) => {
  return (
    <div className="project-board">
      <List status="TODO" tasks={tasks}
        onChangeClick={onChangeClick}
        onRemoveClick={onRemoveClick}>
          Todo tasks
      </List>
      <List status="DOING" tasks={tasks}
        onChangeClick={onChangeClick}
        onRemoveClick={onRemoveClick}>
          Doing tasks
      </List>
      <List status="DONE" tasks={tasks}
        onChangeClick={onChangeClick}
        onRemoveClick={onRemoveClick}>
          Done tasks
      </List>
    </div>
  )
}

export default Board
