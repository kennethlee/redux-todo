import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.tasks.map((task) => {
      return <li key={task.id}>{task.name}</li>
    })
  }

  render() {
    return (
      <ul>{this.renderList()}</ul>
    )
  }
}

function mapStateToProps(state) {
  return {tasks: state.tasks}
}

export default connect(mapStateToProps)(ItemList);
