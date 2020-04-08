import { addFruit, deleteFruit, getAllFruits } from './index';
import { GET_ALL_FRUITS, DELETE_FRUIT, ADD_FRUIT } from '../constants';

describe('actions', () => {
  it('should create an action to add a fruit', () => {
    const fruit = 'grape';
    const expectedAction = {
      type: ADD_FRUIT,
      payload: fruit,
    };
    expect(addFruit(fruit)).toEqual(expectedAction);
  });

  it('should create an action to delete a fruit', () => {
    const fruit = 'grape';
    const expectedAction = {
      type: DELETE_FRUIT,
      payload: fruit,
    };
    expect(deleteFruit(fruit)).toEqual(expectedAction);
  });
  
  it('should create an action to fetch', () => {
    const fruit = ['grape','banana'];
    const expectedAction = {
      type: GET_ALL_FRUITS,
      payload: fruit,
    };
    expect(getAllFruits(fruit)).toEqual(expectedAction);
  });
});
