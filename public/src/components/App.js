import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import AppNavigator from './AppNavigator.js';
import {Router} from 'react-router';
import Header from './header/header.js';

class App extends Component {
  @autobind
  render(){
    return(
      <div>
        <Header />
        <AppNavigator />
      </div>
    )
  }

}

export default App;
