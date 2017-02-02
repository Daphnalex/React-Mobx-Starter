import React, {Component} from 'react';
import { observer } from 'mobx-react';
import styles from './mur.scss';
import CommentBox from '../commentBox/comment.js';

@observer
class Mur extends Component{
  render(){
    return(
      <div className="row background">
        <img src="../images/zoo-de-beauval.jpg"/>
        <CommentBox />
      </div>
    )
  }
}

export default Mur;
