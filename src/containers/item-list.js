import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListItem from '../components/list-item';

class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.tasks.map((task) => {
      return <ListItem key={task.id} name={task.name} />
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
