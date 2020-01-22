import React from 'react';
import './App.css';
import Main from './components/main';
import { NavLink} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <menu>
        <NavLink exact={true} activeClassName='is-active' to='/'>Generate</NavLink>
        <NavLink activeClassName='is-active' to='/save'> Saved</NavLink>
      </menu> 	
      <Main />
    </div>
  );
}


export default App;
