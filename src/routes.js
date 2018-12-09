const protocol = 'https:/';
const path = 'dog.ceo/api';

export default {
  breedsListUrl: () => [protocol, path, 'breeds', 'list/all'].join('/'),
  randomBreedImgUrl: (breed) => [protocol, path, 'breed', breed, 'images/random'].join('/')
};
