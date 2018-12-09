import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

  handleChange = (e) => {
    const { value } = e.target;
    this.props.serchChange(value)
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to='/'>Breeds list</Link>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search breed" aria-label="Search" onChange={this.handleChange} />
        </form>
      </nav>
    );
  }
}



