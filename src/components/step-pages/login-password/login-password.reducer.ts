import {LoginPasswordAction, LoginPasswordActionType, LoginPasswordState} from "./login-password.types";

export const loginPasswordInitialState: LoginPasswordState = {
    login: JSON.parse(localStorage.getItem('1')!)['login'],
    password: JSON.parse(localStorage.getItem('1')!)['password'],
    passwordRetype: ''
}

const loginPasswordReducer = (state = loginPasswordInitialState, action: LoginPasswordAction) => {
    switch (action.type) {
        case LoginPasswordActionType.SET_LOGIN:
            return {...state, login: action.payload}
        case LoginPasswordActionType.SET_PASSWORD:
            return {...state, password: action.payload}
        case LoginPasswordActionType.SET_PASSWORD_RETYPE:
            return {...state, passwordRetype: action.payload}
        default:
            return state
    }
}

export default loginPasswordReducer