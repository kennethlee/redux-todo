import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markComplete } from '../actions';
import ListItem from '../components/list-item';

class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.tasks.map((task) => {
      return (<ListItem
        task={task}
        markComplete={this.props.markComplete}
      />);
    });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ markComplete: markComplete }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
