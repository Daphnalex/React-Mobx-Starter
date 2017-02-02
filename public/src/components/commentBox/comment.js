import React, {Component} from 'react';
import { observer } from 'mobx-react';
import styles from './comment.scss';

class popComment extends Component{
  render(){
    return(
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    )
  }
}

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
      <div className="row">
        <div className ="col s8 offset-s2">
          {this.state.box.map((todo, index)=>
            <ul key={index} className="collection with-header">
              <li  className="collection-header">
                <h1>{todo.name}</h1>
              </li>
              <li className="collection-item">{todo.commentary}</li>
              <li>
                <div className="collection-item">
                  <button onClick={()=>this.addComment()} className="right btn btn-primary" value="1">Commenter</button>
                </div>
              </li>
          </ul>)}
        </div>

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
      <div className="col s8 offset-s2 card">
        <div className="card-content">
          <span className="card-title">Poster un commentaire</span>
          <form className="col s12" onSubmit={(event) => this.props.fonctionSubmit(event, this.state.name, this.state.commentary)}>
            <div className="row">
              <div className="input-field col s12">
                <input onChange={(name) => this.nameChange(name)} placeholder="Nom" id="first_name" type="text" className="validate" />
              </div>
            </div>
            <div className="row">
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
          {"name" : "Zoo de Beauval", "commentary" : "Notre soigneur accompagne aujourd'hui notre girafe dans sa nouvelle demeure au zoo de la Palmyre"}
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
