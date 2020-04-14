import { GET_POST_FROM_API, DELETE_POST, ADD_POST } from './../constants';
const initialState = {
  posts: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POST_FROM_API: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((e) => e.id !== action.payload),
      };
    }

    case ADD_POST: {
      return {
        ...state,
        posts: state.posts.concat([action.payload]),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
