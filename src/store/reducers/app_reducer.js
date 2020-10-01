import {
    AUTH_FAIL,
    AUTH_START,
    AUTH_SUCCESS
} from '../actions/types'

const initialState =  {favoritePictures: []}

export default function (state = initialState, action) {

    switch (action.type) {
        case AUTH_SUCCESS:
            return state
        case AUTH_FAIL:
            return state
        case AUTH_START:
            return state
        default:
            return state
    }
}