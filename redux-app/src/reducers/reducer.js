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

    if (action.type === "CHANGE_EMAIL") {
        return {
            ...state,
            email: action.payload
        }
    }

    return state;
}

export default reducer;