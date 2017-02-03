import React, {Component} from 'react';
import { observer } from 'mobx-react';
import styles from './comment.scss';

class ResponseBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameResponse : "",
      commentResponse : "",
      response : this.props.response
    }
    console.log("responsebox", this.state.response);
  }

  nameChange(event){
    console.log('Nom', event.target.value);
    this.setState({
      name : event.target.value
    })
  }

  commentChange(event){
    console.log('Commentaire', event.target.value);
    this.setState({
      commentary : event.target.value
    })
  }

  render(){
    return(
      <div className="card-content">
        <span className="card-title">Poster un commentaire</span>
        <div className="row">
            <div className="input-field col s12">
              <input onChange={(event) => this.nameChange(event)} placeholder="Nom" id="first_name" type="text" className="validate" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input onChange={(event) => this.commentChange(event)} placeholder="Commentaire" id="text" type="text" className="validate"/>
            </div>
          </div>
          <div className="col s12">
            <button className="right btn btn-primary" onClick={(event) => this.props.submit2(event, this.state.response, this.state.name, this.state.commentary)} value="1">Enregistrer</button>
          </div>
      </div>
    )
  }
}

class Response extends Component {
  constructor(props){
    super(props);
    console.log("v'est moi", this.props.response);
    this.state={
      response : this.props.response
    }
  }
  render(){
    return(
      <div>
        {this.state.response.map((res, index)=>
          <ul key={index} className="col s8 offset-s2 collection with-header">
            <li  className="collection-header">
              <h1>{res.name}</h1>
            </li>
            <li className="collection-item">{res.commentary}</li>
          </ul>
        )}
      </div>
    )
  }
}


class ListComment extends Component {
  constructor(props){
    console.log('jentre');
    super(props);
    this.state = {
      box : this.props.box,
      click : this.props.click

    };
    console.log(this.state.box);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    console.log(this.props.box);
    this.setState({
      box : nextProps.box,
      click : nextProps.click
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
              <li className="collection-item">{todo.commentary}<br/>
                <div className="collection-item">
                  <button onClick={(event)=>this.props.changeClick(event, this.state.click)} className="right btn btn-primary" value="1">Commenter</button>
                </div>
              </li>
              <li>
                {(this.state.click === true) ? <ResponseBox submit2={this.props.fonctionSubmit2} response={todo.response}/> : <Response response={todo.response}/>}
              </li>
          </ul>)}
        </div>

      </div>
    )
  }
}

class CommentPost extends Component {
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
      commentary : '',
      response : [],
      click : false
    }

    this.submit = this.submit.bind(this);
    this.submit2 = this.submit2.bind(this);
    this.change = this.change.bind(this);
  }

  change(event, clic){
    console.log('coucou', clic);
    this.setState({
      click : !clic
    })
    console.log(this.state.click);
  }

  componentWillMount(){
    this.setState({
        box : [
          {"name" : "Zoo de Beauval", "commentary" : "Notre soigneur accompagne aujourd'hui notre girafe dans sa nouvelle demeure au zoo de la Palmyre", response : [{"name" : "Zoo de Thoiry", "commentary" : "Bonne route à toi petite girafe !"}]}
        ]
    });
  }

  submit(event, name, commentary){
    //console.log(name);
    //console.log(commentary);
    var array = this.state.box;
    array.push({"name" : name, "commentary" : commentary , "response": []});
    this.setState({
      box : array
    })
    console.log("box", this.state.box);
    event.preventDefault();
  }

  submit2(event, response, name, commentary){
    console.log(response);
    console.log(name);
    console.log(commentary);
    var array2 = response;
    let res = {"name" : name, "commentary" : commentary};
    array2.push(res);
    this.setState({
      click : false
    })
    console.log('réponse', array2);

  }

  render(){
    return(
      <div className="row">
          <div className="col s12">
            <CommentPost fonctionSubmit={this.submit} name={this.state.name} commentary={this.state.commentary}/>
            <ListComment box={this.state.box} changeClick={this.change} click={this.state.click} fonctionSubmit2={this.submit2}/>
          </div>
      </div>
    );
  }
}

export default CommentBox;
