import React, { Component } from 'react';
import {Title} from './Title.jsx';
import AddTask from './AddTask';
import {Board} from './Board.jsx';

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
