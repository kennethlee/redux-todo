import React from 'react';
import Radium from 'radium';

import InputForm from '../containers/input-form';
import ItemList from '../containers/item-list';
import ButtonBar from '../containers/button-bar';
import styles from '../styles';

const App = () => {
  return (
    <div style={styles.app}>
      <div style={styles.mainContainer}>
        <InputForm />
        <ButtonBar />
        <ItemList />
      </div>
    </div>
  );
};

module.exports = Radium(App);
