import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { serchChange } from '../actions/index';

const mapStateToProps = (state) => {
  const { serchValue, router: { location: { pathname } } } = state;
  const props = {
    serchValue,
    pathname
  };
  return props;
};

export default connect(
  mapStateToProps,
  { serchChange }
)(NavBar);