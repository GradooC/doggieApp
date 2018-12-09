import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { connectRouter } from 'connected-react-router'


const fetchingImgState = handleActions({
  [actions.fetchBreedImgRequest]() {
    return 'requested';
  },
  [actions.fetchBreedImgSuccess]() {
    return 'successed';
  },
  [actions.fetchBreedImgFailyre]() {
    return 'faild';
  }
}, 'none');

const fetchingBreedState = handleActions({
  [actions.fetchBreedsRequest]() {
    return 'requested';
  },
  [actions.fetchBreedsSuccess]() {
    return 'successed';
  },
  [actions.fetchBreedsFailyre]() {
    return 'faild';
  }
}, 'none');

const breeds = handleActions({
  [actions.fetchBreedsSuccess](state, { payload }) {
    return { ...payload };
  },
  [actions.serchChange](state, action) {
    return { ...state };
  }
}, {});

const breedImg = handleActions({
  [actions.fetchBreedImgSuccess](state, { payload }) {
    return payload;
  }
}, '');

const serchValue = handleActions({
  [actions.serchChange](state, { payload }) {
    return payload;
  }
}, '');

export default (history) => combineReducers({
  router: connectRouter(history),
  fetchingBreedState,
  fetchingImgState,
  breeds,
  breedImg,
  serchValue
});