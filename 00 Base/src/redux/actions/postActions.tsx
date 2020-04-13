import { GET_POST_FROM_API,DELETE_POST,ADD_POST } from './../constants';
import { getPosts } from '../../myApi/index';

export const getPostFromApi = ( posts: Object[]) => {
  return {
    type: GET_POST_FROM_API,
    payload: posts,
  };
};
export const fetchPosts = () => {
  return (dispatch) => {
    return getPosts().then((res) => dispatch(getPostFromApi(res)));
  };
};

 export const deletePost = (id: Number) => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};

export const addPost = (name: string) => {
  return {
    type: ADD_POST,
    payload: name,
  };
};
