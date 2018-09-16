import React from 'react';
import { connect } from 'react-redux';

const Card = (props) => {
  return (
    <div className="project-card" onClick={(e) => {props.onChangeClick(props.id)}}>
        <p className="card-text">{props.text}</p>
        <span className="card-executor">{props.executor}</span>
        <span className="card-remove"
          onClick={(e) => {props.onRemoveClick(props.id)}}
        >-</span>
    </div>
  )
}

export default Card
