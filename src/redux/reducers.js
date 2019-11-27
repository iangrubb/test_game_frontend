

const defaultState = {
    currentUser: null,
    allUsers: [],
}


const rootReducer = (state = defaultState, action) => {
    switch(action.type){
        case "LOGIN":
            return {allUsers: action.payload.users, currentUser: action.payload.user}
        case "LOGOUT":
            return {allUsers: null, currentUser: null}
        case "CONNECT":
            const target = state.allUsers.find(user => user.id === action.userId)
            const updated = {...target, logged: true}
            const remainder = state.allUsers.filter(user => user.id !== action.userId)
            return {currentUser: state.currentUser, allUsers: [...remainder, updated]}
        case "DISCONNECT":
            const targ = state.allUsers.find(user => user.id === action.userId)
            const upd = {...targ, logged: false}
            const rem = state.allUsers.filter(user => user.id !== action.userId)
            return {currentUser: state.currentUser, allUsers: [...rem, upd]}
        case "UPDATE":

            const filteredUsers = state.allUsers.filter(user => user.id !== action.payload.id)

            return {currentUser: state.currentUser, allUsers: [...filteredUsers, action.payload]}
        default:
            return state
    }
}

export default rootReducer