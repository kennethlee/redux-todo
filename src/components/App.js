import React, { Component } from 'react';

import InputForm from '../containers/input-form';
import ItemList from '../containers/item-list';
import ButtonBar from '../containers/button-bar';
// import ButtonBar.
// import ItemsList ( > TodoItem )

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>TO-DOS.</h3>
        <InputForm />
        <ButtonBar />
        <ItemList />
      </div>
    );
  }
}
