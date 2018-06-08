import React, { Component } from 'react';
import Title from './Title';
import AddTask from './AddTask';
import {Board} from './Board.jsx';
import './App.css';



export class App extends Component {

render() {
  return (
    <div>
      <Title />
      <AddTask />
      <Board />
    </div>
    )};

}
