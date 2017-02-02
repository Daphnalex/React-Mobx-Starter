import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import AppNavigator from './AppNavigator.js';
import {Router} from 'react-router';

class App extends Component {
  @autobind
  render(){
    return(
      <div>
        <AppNavigator />
      </div>
    )
  }

}

export default App;
