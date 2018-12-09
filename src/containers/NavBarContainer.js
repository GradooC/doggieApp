import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { serchChange } from '../actions/index';

const mapStateToProps = (state) => {
  const { serchValue, router } = state;
  const props = {
    serchValue,
    router
  };
  return props;
};

export default connect(
  mapStateToProps,
  { serchChange }
)(NavBar);