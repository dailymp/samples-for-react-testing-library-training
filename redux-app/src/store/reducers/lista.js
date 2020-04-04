export default function lista(state = [], action) {
    switch (action.type) {
      case "ADD_LISTA":
        return [...state, { id: Math.random(), text: action.payload.text }];
      default:
        return state;
    }
  }