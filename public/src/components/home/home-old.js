import React, {Component} from 'react';
import { observer } from 'mobx-react';
import styles from './home.scss';

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      listName : [],
      firstName : ''
    }
  }

  componentWillMount(){
    console.log(this.props.name);
    this.setState({
      listName : ['Annie', 'Mary', 'Sophie']
    });
  }

  handleChange(event) {
    this.setState({
      firstName : event.target.value
    });
  }

  submit(event){
    this.setState({
     listName : this.state.listName.push(this.state.firstName)
    });
    event.preventDefault();
  }

  render(){
    return (
      <div class="row">
        <form class="col s12" onSubmit={(event) => this.submit(event)}>
          <div class="row">
            <div class="input-field col s6">
              <input name="firstname" onChange={(event) => this.handleChange(event)} placeholder="Placeholder" id="first_name" type="text" />
              <label>First Name</label>
            </div>
            <button type="submit" name="modifier" value="1">Enregistrer</button>
          </div>
        </form>
      </div>
    )
  }
}

@observer
class Home extends Component {

  render(){
    return(
      <Input name="toto" />
    )
  }
}
export default Home;
