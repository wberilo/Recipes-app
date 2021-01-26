import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeContext from './context/RecipeContext';
import Login from './pages/Login';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const contextValue = {};
  return (
    <div className="meals">
      <RecipeContext.Provider value={ contextValue }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
          </Switch>
        </BrowserRouter>
      </RecipeContext.Provider>
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
    </div>
  );
}

export default App;
