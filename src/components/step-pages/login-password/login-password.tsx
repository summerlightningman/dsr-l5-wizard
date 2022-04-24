import {FC, KeyboardEventHandler, useMemo, useReducer} from 'react';

import LoginPasswordStyled from "./login-password.styled";
import FormInput from "../../ui/form-input";
import Label from "../../ui/label";
import {LoginPasswordActionType, LoginPasswordProps} from "./login-password.types";
import loginPasswordReducer, {loginPasswordInitialState} from "./login-password.reducer";


const LoginPassword: FC<LoginPasswordProps> = ({setIsValid}) => {
    const [{login, password, passwordRetype}, dispatch] = useReducer(loginPasswordReducer, loginPasswordInitialState);
    const validators: boolean[] = useMemo(() => [
        !!login,
        !!password,
        !!passwordRetype,
        password === passwordRetype,
        login.length > 5,
        /\w+/.test(password),
        /\d+/.test(password)
    ], [login, password, passwordRetype]);

    setIsValid(
        validators.every(_ => _)
    );

    const handleInput = (type: LoginPasswordActionType): KeyboardEventHandler<HTMLInputElement> =>
        e => dispatch({type, payload: e.currentTarget.value});


    return (
        <LoginPasswordStyled>
            <Label htmlFor="login">Login</Label>
            <Label htmlFor="password">Password</Label>
            <Label htmlFor="password_retype">Password (again)</Label>
            <FormInput id="login" value={login} onInput={handleInput(LoginPasswordActionType.SET_LOGIN)}/>
            <FormInput type="password" id="password" value={password}
                       onInput={handleInput(LoginPasswordActionType.SET_PASSWORD)}/>
            <FormInput type="password" id="password_retype" value={passwordRetype}
                       onInput={handleInput(LoginPasswordActionType.SET_PASSWORD_RETYPE)}/>
        </LoginPasswordStyled>
    );
};

export default LoginPassword;