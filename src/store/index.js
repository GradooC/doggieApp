import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import history from "../history";
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
    devtoolMiddleware
  ),
);

export default store;