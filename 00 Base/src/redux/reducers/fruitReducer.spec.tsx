import reducer from './fruitReducer';
import { ADD_FRUIT, DELETE_FRUIT } from '../constants';

const initialState = {
  fruitList: [],
};

describe('fruit reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      fruitList: [],
    });
  });

  it('should handle ADD_FRUIT', () => {
    const grape = 'grape';
    expect(
      reducer(initialState, {
        type: ADD_FRUIT,
        payload: grape,
      })
    ).toEqual({
      fruitList: [grape],
    });

    expect(
      reducer(
        {
          fruitList: ['apple'],
        },
        {
          type: ADD_FRUIT,
          payload: grape,
        }
      )
    ).toEqual({
      fruitList: ['apple', grape],
    });
  });

  it('should handle DELETE_FRUIT', () => {
    const grape = 'grape';
    expect(
      reducer(
        { fruitList: [grape, 'apple'] },
        {
          type: DELETE_FRUIT,
          payload: grape,
        }
      )
    ).toEqual({
      fruitList: ['apple'],
    });
  });
});
