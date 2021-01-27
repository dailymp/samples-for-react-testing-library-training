const initState = {
    nombre: "Ramon",
    email: 'ramon.w.rocha@gmail.com',
    lista: [],
    model: {}
}

const reducer = (state = initState, action) => {
    if (action.type === "@@INIT") {
        return state;
    }
    
    return {
        ...state,
        [action.key]: action.payload
    }
}

export default reducer;