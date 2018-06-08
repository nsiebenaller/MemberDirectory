import React, { Component } from 'react';

export class Card extends Component {

  render() {
    return (
        <div className="project-card" onClick={() => this.props.onChangeClick(this.props.id)}>
            <p className="card-text">{this.props.text}</p>
            <span className="card-executor">{this.props.executor}</span>
            <span className="card-remove" onClick={() => this.props.onRemoveClick(this.props.id)}>-</span>
        </div>
    );
};

}
