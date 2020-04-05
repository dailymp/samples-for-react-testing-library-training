import { GET_ALL_FRUITS } from './../constants';
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
