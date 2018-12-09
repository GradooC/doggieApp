import { createSelector } from 'reselect';
import store from '../store';
import { capitalize } from 'lodash';


const getBreeds = state => state.breeds;
export const breedsSelector = createSelector(
  getBreeds,
  breeds => {
    const { serchValue } = store.getState();
    return Object.keys(breeds)
      .filter(breed => breed.startsWith(serchValue))
      .map(breed => capitalize(breed));
  }
);
