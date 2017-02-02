import React, {Component} from 'react';
import { observer } from 'mobx-react';
import styles from './home.scss';

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      listName : this.props.listName,
      firstName : ''
    }
  }

  handleChange(event){
    this.setState({
      firstName : event.target.value
    });
  };

  render(){
    return(
      <div className="row">
        <form className="col s4" onSubmit={(event) => this.props.fonctionSubmit(event,this.state.firstName)}>
          <div className="row">
            <div className="input-field col s12">
              <input className="firstname" placeholder="Placeholder" onChange={(event) => this.handleChange(event)} id="first_name" type="text" />
              <label>First Name</label>
            </div>
            <div className="col s12">
              <button className="btn btn-primary" type="submit" name="modifier" value="1">Enregistrer</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

class Todolist extends Component {

  constructor(props){
    super(props);
    this.state = {
      listName : this.props.listName
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    console.log(this.props.listName);
    this.setState({
      listName : nextProps.listName
    });
  }

  render(){
    return(
      <ul className="collection with-header">
        <li className="collection-header"><h4>Liste de prénoms :</h4></li>
        {this.state.listName.map((todo, index)=>
          <li className="collection-item" key={index}>{todo}</li>
        )}
      </ul>
    )
  }


}

@observer
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      listName : [],
      firstName : ''
    }
    this.submit= this.submit.bind(this);
  }

  componentWillMount(){
    this.setState({
        listName : ['Annie', 'Marie', 'Sophie']
    });
  }

  submit(event, firstName){
    console.log(firstName);
    var array = this.state.listName.slice();
    console.log(array);
    array.push(firstName);
    this.setState({
      listName : array
    });
    //console.log(this.state.listName);
    event.preventDefault();
  }

  componentDidUpdate(){
    console.log(this.state.listName);
  }

  render(){
    return(
      <div>
        <Input firstName={this.state.firstName} fonctionSubmit={this.submit} />
        <Todolist listName={this.state.listName} />
      </div>
    )
  }
}

export default Home;
