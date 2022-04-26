import {LoginPasswordAction, LoginPasswordActionType, LoginPasswordState} from "./login-password.types";
import {FormData} from "../step-pages.types";
import {getStorageData} from "../step-pages.helpers";

export const loginPasswordInitialState = {
        login: getStorageData(FormData.LOGIN),
        password: getStorageData(FormData.PASSWORD),
        passwordRetype: getStorageData(FormData.PASSWORD_RETYPE)
    }


const loginPasswordReducer = (state: LoginPasswordState, action: LoginPasswordAction) => {
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