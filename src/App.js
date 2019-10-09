import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import CarouselScreen from './screens/CarouselScreen/CarouselScreen';
import pageNotFoundScreen from './screens/pageNotFoundScreen/pageNotFoundScreen';
import './App.css';

const App = () => {

  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/carousel" component={ CarouselScreen } />
          <Route exact path="/test">
            <div> TEST </div>
          </Route>
          <Route exact path="/" component={ LoginScreen } />
          <Route component={pageNotFoundScreen} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
