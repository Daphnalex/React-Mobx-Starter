import React, {Component} from 'react';
import { observer } from 'mobx-react';
import Comment from "../commentBox/comment.js";

@observer
class popComment extends Component{
  render(){
    return(
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Poster un commentaire</h4>
          <p>
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
          </p>
        </div>
        <div class="modal-footer">
          <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>

    )
  }
}

export default popComment;
