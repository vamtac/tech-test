import React from 'react';
import './App.css';
import Main from './components/main';
import { NavLink} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";



const App: React.FC = () => {
  return (
    <div className="App">
      <menu>
        <NavLink exact={true} activeClassName='is-active' to='/'>Generate</NavLink>
        <NavLink activeClassName='is-active' to='/saved'>Saved</NavLink>
      </menu> 
      <Provider store={store}>	
      <Main />
      </Provider>
    </div>
    
  );
}


export default App;
