import { connect } from 'react-redux';
import BreedsList from '../components/BreedsList';
import { fetchBreeds, fetchBreedImg } from '../actions/index';
import { breedsSelector } from '../selectors';

const mapStateToProps = (state) => {
  const { fetchingBreedState } = state;
  const props = {
    breeds: breedsSelector(state),
    fetchingBreedState
  };
  return props;
};

const BreedsListContainer = connect(
  mapStateToProps,
  { fetchBreeds, fetchBreedImg }
)(BreedsList);

export default BreedsListContainer;