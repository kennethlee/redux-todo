import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAll, filterActive, filterCompleted } from '../actions';


class ButtonBar extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <button onClick={this.props.showAll}>All</button>
        <button onClick={this.props.filterActive}>Active</button>
        <button onClick={this.props.filterCompleted}>
          Completed
        </button>
        <button>Clear Complete</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showAll: showAll,
    filterActive: filterActive,
    filterCompleted: filterCompleted,
   }, dispatch)
}

export default connect(null, mapDispatchToProps)(ButtonBar);