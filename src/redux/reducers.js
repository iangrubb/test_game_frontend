

const defaultState = {
    currentUser: null,
    allUsers: [],
}


const rootReducer = (state = defaultState, action) => {
    switch(action.type){
        case "LOGIN":
            return {allUsers: [...state.allUsers], currentUser: action.payload}
        case "LOGOUT":
            return {allUsers: [...state.allUsers], currentUser: null}
        default:
            return state
    }
}

export default rootReducer