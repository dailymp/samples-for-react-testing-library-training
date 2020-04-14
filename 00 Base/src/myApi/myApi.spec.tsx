import { getListOfFruit, getPosts } from './myApi';

describe('myApi tests', () => {
  it('getListOfFruit should return an array of string', () => {
    expect(getListOfFruit()).resolves.toEqual([
      'grape',
      'pineapple',
      'watermelon',
      'orange',
      'lemon',
      'strawberry',
      'cherry',
      'peach',
    ]);
  });
  it('should fecth some post from the api', () => {
    expect(getPosts()).rejects.toThrowError('Error fetching');
  });
});
