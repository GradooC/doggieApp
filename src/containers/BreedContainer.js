import { connect } from 'react-redux';
import Breed from '../components/Breed';
import { fetchBreedImg } from '../actions/index';

const mapStateToProps = (state) => {
  const { breedImg, fetchingImgState } = state;
  const props = {
    breedImg,
    fetchingImgState
  };
  return props;
};

const BreedContainer = connect(
  mapStateToProps,
  { fetchBreedImg }
)(Breed);

export default BreedContainer;