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

      if (this.props.filter === "ALL") {
        return (<ListItem
          task={task}
          markComplete={this.props.markComplete}
        />);
      } else if (this.props.filter === "ACTIVE") {
        if (!task.finished) {
          return (<ListItem
            task={task}
            markComplete={this.props.markComplete}
          />);
        }
      } else if (this.props.filter === "COMPLETED") {
        if (task.finished) {
          return (<ListItem
            task={task}
            markComplete={this.props.markComplete}
          />);
        }
      }

    });
  }

  render() {
    return (
      <ul>{this.renderList()}</ul>
    )
  }
}

function mapStateToProps(state) {
  return {tasks: state.tasks, filter: state.filter}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ markComplete: markComplete }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
