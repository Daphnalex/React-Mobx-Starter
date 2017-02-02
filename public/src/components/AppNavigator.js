import React, {Component, IndexRoute} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { observer } from 'mobx-react';
import Home from './home/home.js';
import Comment from './comment/comment.js';
import noMatch from './noMatch/noMatch.js';




@observer
class AppNavigator extends Component {
 render(){
   return(
     <Router history={browserHistory}>
        <Route exact path="/" component={Home}/>
        <Route path='comment' component={Comment}/>
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
