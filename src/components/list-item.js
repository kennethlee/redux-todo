import React from 'react';

function colorComplete(bool) {
  return bool ? { textDecoration: "line-through" } : {}
}

export default (props) => {
  return (<li
    style={colorComplete(props.task.finished)}
    key={props.task.id}
    onClick={props.markComplete.bind(this, props.task)}
  >
    {props.task.name}
  </li>);
};
