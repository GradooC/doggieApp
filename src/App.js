import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BreedsListContainer from './containers/BreedsListContainer';
import BreedContainer from './containers/BreedContainer';
import NavBarContainer from './containers/NavBarContainer';
import  NotFound  from "./components/NotFound";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBarContainer />
          <Switch>
            <Route exact path='/' component={BreedsListContainer} />
            <Route exact path='/:breed' component={BreedContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
