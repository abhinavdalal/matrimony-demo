import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Matrimony.com</h1>
        </header>
        <Switch>
          <Route path="/test">
            <div> TEST </div>
          </Route>
          <Route path="/">
            <LoginScreen />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
