import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTask } from '../actions/';

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.term) {
      this.props.addTask(this.state.term);
      this.setState({ term: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          onChange={this.onInputChange}
          value={this.state.term}
          placeholder="Add a todo."
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask: addTask }, dispatch);
}

export default connect(null, mapDispatchToProps)(InputForm);

