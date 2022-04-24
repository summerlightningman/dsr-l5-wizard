import {StepPageProps} from "../step-pages.types";

export type Login = string;
export type Password = string;

export interface LoginPasswordProps extends StepPageProps {

}

export interface LoginPasswordState {
    login: Login,
    password: Password,
    passwordRetype: Password
}

export enum LoginPasswordActionType {
    SET_LOGIN = 'SET_LOGIN',
    SET_PASSWORD = 'SET_PASSWORD',
    SET_PASSWORD_RETYPE = 'SET_PASSWORD_RETYPE'
}

interface SetLogin {
    type: LoginPasswordActionType.SET_LOGIN,
    payload: Login
}

interface SetPassword {
    type: LoginPasswordActionType.SET_PASSWORD,
    payload: Password
}

interface SetPasswordRetype {
    type: LoginPasswordActionType.SET_PASSWORD_RETYPE,
    payload: Password
}

export type LoginPasswordAction = SetLogin | SetPassword | SetPasswordRetype