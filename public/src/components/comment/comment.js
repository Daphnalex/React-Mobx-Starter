import React, {Component} from 'react';
import { observer } from 'mobx-react';
import styles from './comment.scss';

class ListComment extends Component {
  constructor(props){
    console.log('jentre');
    super(props);
    this.state = {
      box : this.props.box
    };
    console.log(this.state.box);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    console.log(this.props.box);
    this.setState({
      box : nextProps.box
    });
  }

  render(){
    return(
      <div className ="col s8 offset-s2">
        <ul className="collection with-header">
          <li  className="collection-header">Liste des commentaires - {this.state.box.length} commentaire(s) :</li>
          {this.state.box.map((todo, index)=>
            <li className="collection-item" key={index}><b>{todo.name}</b><br/> {todo.commentary}</li>) }
        </ul>
      </div>
    )
  }
}

class Comment extends Component {
  constructor(props){
    super(props);
    this.state={
      box : this.props.box,
      name : '',
      commentary : ''
    }
  }

  nameChange(name){
    console.log(name.target.value);
    this.setState({
      name : name.target.value
    });
  }

  commentChange(commentary){
    console.log(commentary.target.value);
    this.setState({
      commentary : commentary.target.value
    })
  }

  render(){
    return(
      <div className="col s8 offset-s2 card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Ecrire un commentaire</span>
          <form className="col s12" onSubmit={(event) => this.props.fonctionSubmit(event, this.state.name, this.state.commentary)}>
            <div className="row">
              Nom :
              <div className="input-field col s12">
                <input onChange={(name) => this.nameChange(name)} placeholder="Nom" id="first_name" type="text" className="validate" />
              </div>
            </div>
            <div className="row">
              Commentaire :
              <div className="input-field col s12">
                <input onChange={(commentary) => this.commentChange(commentary)} placeholder="Commentaire" id="text" type="text" className="validate"/>
              </div>
            </div>
            <div className="col s12">
              <button className="right btn btn-primary" type="submit" value="1">Enregistrer</button>
            </div>
          </form>
        </div>
      </div>

    )
  }
}

@observer
class CommentBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      box : [],
      contenuBox : {},
      name : '',
      commentary : ''
    }
    this.submit = this.submit.bind(this);
  }

  componentWillMount(){
    this.setState({
        box : [
          {"name" : "Daphné", "commentary" : "La bouilloire est vide"}
        ]
    });
  }

  submit(event, name, commentary){
    //console.log(name);
    //console.log(commentary);
    var array = this.state.box;
    array.push({"name" : name, "commentary" : commentary });
    this.setState({
      box : array
    })
    console.log(this.state.box);
    event.preventDefault();
  }

  render(){
    return(
      <div className="row">
          <div className="col s12">
            <Comment fonctionSubmit={this.submit} name={this.state.name} commentary={this.state.commentary}/>
            <ListComment box={this.state.box}/>
          </div>
      </div>
    );
  }
}

export default CommentBox;
