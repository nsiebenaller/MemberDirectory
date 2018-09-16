import React, { Component } from 'react';
import Card from './Card.js';

const List = (props) => {
  const {
    status,
    tasks,
    onChangeClick,
    onRemoveClick,
    children: text
  } = props
  return (
    <div className={`list ${status.toLowerCase()}-list`}>
        <h5>{text.toUpperCase()}<span>{tasks.filter(x => x.status === status).length}</span></h5>
        {tasks.filter(e => e.status === status).map((task) =>
            <Card
                key={task.id}
                {...task}
                onChangeClick={onChangeClick}
                onRemoveClick={onRemoveClick}
            />
        )}
    </div>
  )
}

export default List
