import { combineReducers } from 'redux';
import fruitsReducer from './fruitReducer';
import postReducer from './postReducer'

export default combineReducers({
  fruits: fruitsReducer,
  posts: postReducer
});
