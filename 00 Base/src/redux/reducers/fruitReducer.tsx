import { GET_ALL_FRUITS, DELETE_FRUIT, ADD_FRUIT } from './../constants';
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
    case DELETE_FRUIT: {
      return {
        ...state,
        fruitList: state.fruitList.filter((e: string) => e !== action.payload),
      };
    }
    case ADD_FRUIT: {
      return {
        ...state,
        fruitList: state.fruitList.concat([action.payload]),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
