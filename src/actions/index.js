import axios from 'axios';
import routes from '../routes';
import { createAction } from 'redux-actions';

export const fetchBreedsRequest =   createAction('FETCH_BREEDS_REQUEST');
export const fetchBreedsSuccess =   createAction('FETCH_BREEDS_SUCCESS');
export const fetchBreedsFailyre =   createAction('FETCH_BREEDS_FAILURE');

export const fetchBreedImgRequest = createAction('FETCH_BREED_IMG_REQUEST');
export const fetchBreedImgSuccess = createAction('FETCH_BREED_IMG_SUCCESS');
export const fetchBreedImgFailyre = createAction('FETCH_BREED_IMG_FAILURE');

export const serchChange =           createAction('SERCH_CHANGE');

export const fetchBreeds = () => async (dispatch) => {
  dispatch(fetchBreedsRequest());
  try {
    const { data: { message } } = await axios.get(routes.breedsListUrl());
    dispatch(fetchBreedsSuccess(message));
  } catch (e) {
    console.log(e);
    dispatch(fetchBreedsFailyre());
  }
};

export const fetchBreedImg = (breed) => async (dispatch) => {
  dispatch(fetchBreedImgRequest());
  try {
    const { data: { message } } = await axios.get(routes.randomBreedImgUrl(breed.toLowerCase()));
    dispatch(fetchBreedImgSuccess(message));
  } catch (e) {
    console.log(e);
    dispatch(fetchBreedImgFailyre());
  }
};