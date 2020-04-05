import { combineReducers } from 'redux';
import fruitsReducer from './fruitReducer';

export default combineReducers({
  fruits: fruitsReducer,
});
