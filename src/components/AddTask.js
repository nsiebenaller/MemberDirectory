import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import * as actionCreators from '../actions/index'


@connect(state => ({}), Object.assign({}, actionCreators))
export class AddTask extends Component {
    constructor(props) {
      super(props)

      this.submitTask = this.submitTask.bind(this);

      this.state = {
        inputText: '',
        inputExecutor: ''
      }
    }

    submitTask(e) {
      e.preventDefault()
      if (!this.state.inputText.trim())
        return
      this.props.addTask({
        text: this.state.inputText,
        executor: this.state.inputExecutor.trim() ? this.state.inputExecutor : 'All'
      })
      this.setState({
        inputText: '',
        inputExecutor: ''
      })
    }


    render() {
      return (
          <div className="form-container">
              <form onSubmit={(e) => this.submitTask(e)}>
                  <input className="task-form-text"
                    placeholder="New task..."
                    value={this.state.inputText}
                    onChange={(e) => this.setState({inputText: e.target.value})}
                  />
                  <input className="task-form-executor"
                    placeholder="Who..."
                    value={this.state.inputExecutor}
                    onChange={(e) => this.setState({inputExecutor: e.target.value})}
                  />
                  <input className="task-form-submit" type="submit" value="Add"/>
              </form>
          </div>
      )}
};
