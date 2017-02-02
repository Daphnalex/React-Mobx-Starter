import React, {Component} from 'react';
import { observer } from 'mobx-react';
import styles from './counter.scss';

@observer
  class Counter extends Component {

    constructor(props){
      super(props);
      this.state = {
        counter : 0
      }
    }

    add(){
      this.setState({
        counter : this.state.counter + 1
      })
    }
    remove(){
      this.setState({
        counter : this.state.counter - 1
      })
    }

    render(){
      return(
        <div className="row counter">
          {this.state.counter}
          <div>
            <i onClick={()=>this.remove()} className="material-icons">remove_circle</i>
            <i onClick={()=>this.add()} className="material-icons">add_circle</i>
          </div>
        </div>
      )
    }

  }

export default Counter;
