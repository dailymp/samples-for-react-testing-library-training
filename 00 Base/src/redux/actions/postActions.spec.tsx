import { addPost, deletePost, fetchPosts } from './index';
import { ADD_POST, DELETE_POST, GET_POST_FROM_API } from '../constants';
import { getPostFromApi } from './postActions';

describe('actions', () => {
  const testPost = {
    id: 7,
    userId: 1,
    title: 'newPost',
    body: 'newPost',
  };
  const testPost2 = {
    id: 8,
    userId: 1,
    title: 'newPost2',
    body: 'newPost2',
  };
  it('should create an action to add a post', () => {
    const expectedAction = {
      type: ADD_POST,
      payload: testPost,
    };
    expect(addPost(testPost)).toEqual(expectedAction);
  });

  it('should create an action to delete a post', () => {
    const expectedAction = {
      type: DELETE_POST,
      payload: testPost.id,
    };
    expect(deletePost(testPost.id)).toEqual(expectedAction);
  });

  it('should create an action to get all posts', () => {
    const arrayOfPosts=[testPost,testPost2]
    const expectedAction = {
      type: GET_POST_FROM_API,
      payload: arrayOfPosts,
    };
    expect(getPostFromApi(arrayOfPosts)).toEqual(expectedAction);
  });
});
