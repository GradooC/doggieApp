import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  return (
    <Link
    to={`/${props.children}`}
    className='list-group-item list-group-item-action'
    onClick={props.handleLink}
  >
    {props.children}
  </Link>
  );
}

export default class DogList extends React.Component {

  handleLink = (breed) => () => {
    this.props.fetchBreedImg(breed);
  }

  componentWillMount() {
    this.props.fetchBreeds();
  }

  render() {
    const { breeds } = this.props;
    return (
      <div className='list-group'>
        {breeds.length === 0 ? <h2 className='display-4 text-center'>No breed found</h2> :
          breeds.map(breed => 
            <ListItem key={breed} handleLink={this.handleLink(breed)}>{breed}</ListItem>)}
      </div>
    );
  }
}
