import React from 'react';

export default class Counter extends React.Component {

  componentWillMount() {
    const { breed } = this.props.match.params;
    this.props.fetchBreedImg(breed);
  }

  handleBtn = () => {
    const { breed } = this.props.match.params;
    this.props.fetchBreedImg(breed);
  }

  render() {
    const { breed } = this.props.match.params;
    const { breedImg, fetchingImgState } = this.props;
    const disabled = fetchingImgState === 'requested';
    return (
      <div className='text-center'>
        <img className='img-thumbnail text-center' src={breedImg} alt=''></img>
        <h1>{breed}</h1>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={this.handleBtn}
          disabled={disabled}
        >
          Another doggie
        </button>
      </div>
    );
  }
}