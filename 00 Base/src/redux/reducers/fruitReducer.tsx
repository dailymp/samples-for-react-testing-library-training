import { GET_ALL_FRUITS } from './../constants';
const initialState = {
  fruitList: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_FRUITS: {
      return {
        ...state,
        fruitList: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
