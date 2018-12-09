import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BreedsListContainer from './containers/BreedsListContainer';
import BreedContainer from './containers/BreedContainer';
import NavBarContainer from './containers/NavBarContainer';
import NotFound  from "./components/NotFound";
import history from "./history";
import { ConnectedRouter } from 'connected-react-router'


class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <NavBarContainer />
          <Switch>
            <Route exact path='/' component={BreedsListContainer} />
            <Route exact path='/:breed' component={BreedContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
