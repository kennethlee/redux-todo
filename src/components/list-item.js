import React from 'react';
import Radium from 'radium';
import styles from '../styles';

function colorComplete(bool) {
  return bool ? { textDecoration: "line-through", color: '#79BD9A' } : {}
}

const ListItem = (props) => {
  return (<div
    style={Object.assign({}, styles.task, colorComplete(props.task.finished))}
    key={props.task.id}
    onClick={props.markComplete.bind(this, props.task)}
  >
    {props.task.name}
  </div>);
}

module.exports = Radium(ListItem);
