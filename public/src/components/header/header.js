import React, {Component} from 'react';
import { observer } from 'mobx-react';
import styles from './header.scss';

class Header extends Component{
  render(){
    return(
      <nav>
         <div className="nav-wrapper">
           <a class="brand-logo"><img src="../images/SocialZoo.png" alt='logo'></img></a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a href="/murPublic">Fil d'actualité</a></li>
             <li><a href="/murPerso">Mon mur</a></li>
             <li><a href="/listZoo">Liste des zoos</a></li>
           </ul>
         </div>
       </nav>
    )
  }
}
export default Header;
