import { GET_ALL_FRUITS, DELETE_FRUIT, ADD_FRUIT } from './../constants';
import { getListOfFruit } from '../../myApi/index';

export const getAllFruits = (res) => {
  return {
    type: GET_ALL_FRUITS,
    payload: res,
  };
};
export const fetchfruits = () => {
  return (dispatch) => {
    return getListOfFruit().then((res) => dispatch(getAllFruits(res)));
  };
};

export const deleteFruit = (name) => {
  return {
    type: DELETE_FRUIT,
    payload: name,
  };
};

export const addFruit = (name) => {
  return {
    type: ADD_FRUIT,
    payload: name,
  };
};
