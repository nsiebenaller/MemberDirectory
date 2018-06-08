import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List} from './List.jsx';



export class Board extends Component {

render(){
  return (
      <div className="project-board">
        <List status="TODO">
            Todo tasks
        </List>
        <List status="DOING">
            Doing tasks
        </List>
        <List status="DONE">
            Done tasks
        </List>
      </div>
  )}
}
