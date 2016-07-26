import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAll, filterActive } from '../actions';


class ButtonBar extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <button onClick={this.props.showAll}>All</button>
        <button onClick={this.props.filterActive}>Active</button>
        <button>Completed</button>
        <button>Clear Complete</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showAll: showAll, filterActive: filterActive }, dispatch)
}

export default connect(null, mapDispatchToProps)(ButtonBar);
