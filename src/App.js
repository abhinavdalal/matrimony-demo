import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import pageNotFoundScreen from './screens/pageNotFoundScreen/pageNotFoundScreen';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/test">
            <div> TEST </div>
          </Route>
          <Route exact path="/" component={ LoginScreen } />
          <Route component={pageNotFoundScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
