import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { serchChange } from '../actions/index';
import { navBarSelector } from "../selectors";

const mapStateToProps = (state) => {
  return { navProps: navBarSelector(state) };
};

export default connect(
  mapStateToProps,
  { serchChange }
)(NavBar);
