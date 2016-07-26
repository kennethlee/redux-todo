import React, { Component } from 'react';
import Radium from 'radium';

import InputForm from '../containers/input-form';
import ItemList from '../containers/item-list';
import ButtonBar from '../containers/button-bar';
import styles from '../styles';

@Radium
export default class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <div style={styles.mainContainer}>
          <InputForm />
          <ButtonBar />
          <ItemList />
        </div>
      </div>
    );
  }
}
