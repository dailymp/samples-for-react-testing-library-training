import { getListOfFruit } from './myApi';

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
});
