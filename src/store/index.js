import { createStore, applyMiddleware, compose } from "redux";
import reducers from '../reducers/index';
import thunk from 'redux-thunk';

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    devtoolMiddleware
  ),
);

//dev only
window.store = store;

export default store;