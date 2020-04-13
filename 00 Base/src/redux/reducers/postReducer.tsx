import { GET_POST_FROM_API, DELETE_POST, ADD_POST } from './../constants';
const initialState = {
  posts: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POST_FROM_API: {
      return {
        ...state,
        posts: action.payload.data,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((e) => e.id !== action.payload),
      };
    }

    case ADD_POST: {
      let tmpPost = {
        id: Math.floor(Math.random() * 1000),
        userId: 1,
        title: action.payload,
        body: action.payload,
      };

      return {
        ...state,
        posts: state.posts.concat([tmpPost]),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
