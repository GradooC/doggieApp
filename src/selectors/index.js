import { createSelector } from 'reselect';
import { capitalize } from 'lodash';


export const breedsSelector = createSelector(
  state => state.breeds,
  state => state.serchValue,
  (breeds, serchValue) => {
    return Object.keys(breeds)
      .filter(breed => breed.startsWith(serchValue))
      .map(breed => capitalize(breed));
  }
);

export const navBarSelector = createSelector(
  state => state.serchValue,
  state => state.router.location.pathname,
  (serchValue, pathname) => {
    return { serchValue, pathname };
  }
);

