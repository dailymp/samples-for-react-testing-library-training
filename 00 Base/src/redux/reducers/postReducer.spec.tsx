import reducer from './postReducer';
import {
  ADD_FRUIT,
  DELETE_FRUIT,
  GET_POST_FROM_API,
  ADD_POST,
  DELETE_POST,
} from '../constants';

const initialState = {
  posts: [],
};

describe('post reducer', () => {
  const testPost = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  };
  const testPost2 = {
    userId: 2,
    id: 2,
    title: 'another Title',
    body: 'another Title',
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      posts: [],
    });
  });

  it('should handle ADD_POST', () => {
    expect(
      reducer(initialState, {
        type: ADD_POST,
        payload: testPost,
      })
    ).toEqual({
      posts: [testPost],
    });

    expect(
      reducer(
        {
          posts: [testPost],
        },
        {
          type: ADD_POST,
          payload: {
            id: 7,
            userId: 1,
            title: 'newPost',
            body: 'newPost',
          },
        }
      )
    ).toEqual({
      posts: [
        testPost,
        {
          id: 7,
          userId: 1,
          title: 'newPost',
          body: 'newPost',
        },
      ],
    });
  });

  it('should handle DELETE_POST', () => {
    expect(
      reducer(
        { posts: [testPost, testPost2] },
        {
          type: DELETE_POST,
          payload: testPost2.id,
        }
      )
    ).toEqual({
      posts: [testPost],
    });
  });
});
