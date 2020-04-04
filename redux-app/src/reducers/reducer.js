const defectoState = {
    nombre: "Ramon",
    email: 'ramon.w.rocha@gmail.com'
}

const reducer = (state = defectoState, action) => {
    if (action.type === "CHANGE_NAME") {
        return {
            ...state,
            nombre: action.payload
        }
    }

    return state;
}

export default reducer;