import React, { Component } from 'react';

import InputForm from '../containers/input-form';
// import ButtonBar.
// import ItemsList ( > TodoItem )

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>TO-DOS.</h3>
        <InputForm />
      </div>
    );
  }
}
