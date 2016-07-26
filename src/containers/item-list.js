import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markComplete } from '../actions';
import ListItem from '../components/list-item';

class ItemList extends Component {
  renderList() {
    return this.props.tasks.map((task) => {
      if (this.props.activeFilter === "ALL") {
        return (<ListItem
          task={task}
          markComplete={this.props.markComplete}
        />);
      } else if (this.props.activeFilter === "ACTIVE") {
        if (!task.finished) {
          return (<ListItem
            task={task}
            markComplete={this.props.markComplete}
          />);
        }
      } else if (this.props.activeFilter === "COMPLETED") {
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
      <div>{this.renderList()}</div>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks, activeFilter: state.activeFilter };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ markComplete: markComplete }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
