import {LoginPasswordAction, LoginPasswordActionType, LoginPasswordState} from "./login-password.types";
import {StorageKey} from "../step-pages.types";
import {getStorageDataByKey} from "../step-pages.helpers";

export const getLoginPasswordInitialState = (storageKey: StorageKey): LoginPasswordState => {
    const initialData = getStorageDataByKey(storageKey);
    return {
        login: initialData?.login,
        password: initialData?.password,
        passwordRetype: ''
    }
};

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