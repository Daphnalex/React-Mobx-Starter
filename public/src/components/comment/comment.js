import React, {Component} from 'react';
import { observer } from 'mobx-react';
import styles from './comment.scss';

class listComment extends Component {
  constructor(props){
    super(props);
    this.state = {
      box : this.props.box;
    }
  }
}

class Comment extends Component {
  constructor(props){
    super(props);
    this.state = {
      box : [],
      contenuBox : {},
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

  submit(event, name, commentary){
    console.log(event);
    console.log(name);
    console.log(commentary);
    this.state.box.push({"name" : name, "commentary" : commentary });
    console.log(this.state.box);
    exit();
  }

  render(){
    return(
      <div className="row">
          <div className="col s12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Ecrire un commentaire</span>
                <form className="col s12" onSubmit={(event) => this.submit(event, this.state.name, this.state.commentary)}>
                  <div className="row">
                    <div className="input-field col s6">
                      <input onChange={(name) => this.nameChange(name)} placeholder="Nom" id="first_name" type="text" className="validate" />
                      <label>Nom</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      Commentaire:
                      <div className="input-field col s12">
                        <input onChange={(commentary) => this.commentChange(commentary)} id="text" type="text" className="validate"/>
                        <label>Commentaire</label>
                      </div>
                    </div>
                  </div>
                  <div className="col s12">
                    <button className="right btn btn-primary" type="submit" value="1">Enregistrer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

@observer
class CommentBox extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Comment />
    );
  }
}

export default CommentBox;
