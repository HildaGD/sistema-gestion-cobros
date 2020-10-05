import {
    AUTH_FAIL,
    AUTH_START,
    AUTH_SUCCESS,
    LOGOUT
} from '../actions/types'

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {login: true, user}:{}

export default function (state = initialState, action) {

    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                login:true,
                user:action.user
            }
        case AUTH_FAIL:
            return {}
        case AUTH_START:
            return {
                login:true,
                user:action.user
            }
        case LOGOUT:
            return {}
        default:
            return state
    }
}