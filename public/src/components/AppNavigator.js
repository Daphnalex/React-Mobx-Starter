import React, {Component, IndexRoute} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { observer } from 'mobx-react';
import Home from './home/home.js';
import Mur from './mur/mur.js';


@observer
class AppNavigator extends Component {
 render(){
   return(
     <Router history={browserHistory}>
        <Route exact path="/" component={Home}/>
        <Route path='murPerso' component={Mur} />
      </Router>
    )
  }
}

export default AppNavigator;
/*
export default {
  component: 'div',
  path: '/',
  indexRoute: require('./index'),
  childRoutes: [
    require('./login'),
    require('./account'),
    ...
  ]
}*/
