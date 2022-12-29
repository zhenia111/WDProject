import { combineReducers } from "@reduxjs/toolkit"

const intitialAuthState = {
    password: 55555,
    isAuth: false,
}

const authenticationReducer = (state = intitialAuthState, action) => {
    switch (action.type) {
        case "AUTH":
            return { ...state, isAuth: action.payload }
        case "LOGOUT":
            return { ...state, isAuth: action.payload }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    authenticationReducer,
})
