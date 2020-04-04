const defectoState = {
    nombre: "Ramon",
    email: 'ramon.w.rocha@gmail.com',
    lista: []
}

const reducer = (state = defectoState, action) => {

    debugger;
    if (action.type === "@@INIT") {
        return state;
    }

    return {
        ...state,
        [action.key]: action.payload
    }

    // if (action.type === "CHANGE_EMAIL") {
    //     return {
    //         ...state,
    //         email: action.payload
    //     }
    // }

    // if (action.type === "CHANGE_LIST") {
    //     return {
    //         lista: action.payload
    //     }
    // }
}

export default reducer;