import React, { Component } from 'react';
import Radium from 'radium';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAll, filterActive, filterCompleted, clearCompleted } from '../actions';
import styles from '../styles';

@Radium
class ButtonBar extends Component {
  constructor(props) {
    super(props)
  }

  selectActive(filter) {
    console.log("GETS HERE")
    if (this.props.activeFilter === filter) {
      return styles.active
    }
  }

  render () {
    return (
      <div>
        <div key={0} style={Object.assign({}, styles.buttons,  this.selectActive("ALL"))}
            onClick={this.props.showAll}>
              All
        </div>
        <div key={1} style={Object.assign({}, styles.buttons, this.selectActive("ACTIVE"))}
          onClick={this.props.filterActive}>Active</div>
        <div key={2} style={Object.assign({}, styles.buttons, this.selectActive("COMPLETED"))}
          onClick={this.props.filterCompleted}>
          Completed
        </div>
        <div key={3} style={styles.buttons}
              onClick={this.props.clearCompleted}>Clear Complete</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {activeFilter: state.activeFilter}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showAll: showAll,
    filterActive: filterActive,
    filterCompleted: filterCompleted,
    clearCompleted: clearCompleted,
   }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBar);
