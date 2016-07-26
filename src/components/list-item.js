import React from 'react';
import { Component } from 'react';
import Radium from 'radium';
import styles from '../styles';

function colorComplete(bool) {
  return bool ? { textDecoration: "line-through", color: '#79BD9A' } : {}
}

@Radium

export default class ListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div
      style={Object.assign({}, styles.task, colorComplete(this.props.task.finished))}
      key={this.props.task.id}
      onClick={this.props.markComplete.bind(this, this.props.task)}
    >
      {this.props.task.name}
    </div>);
  }
}
