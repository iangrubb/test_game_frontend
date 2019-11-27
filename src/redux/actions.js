
const URL = 'http://localhost:3000'

export const login = name => {
    return dispatch => {
        fetch(URL + `/users/${name}`)
        .then(data => data.json())
        .then(resp => dispatch({type: "LOGIN", payload: resp }))
    }
}