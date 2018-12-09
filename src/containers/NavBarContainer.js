import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { serchChange } from '../actions/index';

const mapStateToProps = (state) => {
  const props = {
    state
  };
  return props;
};

export default connect(
  mapStateToProps,
  { serchChange }
)(NavBar);