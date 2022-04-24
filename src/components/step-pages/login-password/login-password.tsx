import {FC, KeyboardEventHandler, useReducer} from 'react';

import LoginPasswordStyled from "./login-password.styled";
import FormInput from "../../ui/form-input";
import Label from "../../ui/label";
import {LoginPasswordActionType, LoginPasswordProps} from "./login-password.types";
import loginPasswordReducer, {loginPasswordInitialState} from "./login-password.reducer";
import Footer from "../../footer/footer";


const LoginPassword: FC<LoginPasswordProps> = ({onNextStep, onPrevStep}) => {
    const [{login, password, passwordRetype}, dispatch] = useReducer(loginPasswordReducer, loginPasswordInitialState);
    const isValid = [
        !!login,
        !!password,
        !!passwordRetype,
        password === passwordRetype,
        login.length > 5,
        /\w+/.test(password),
        /\d+/.test(password)
    ].every(_ => _);


    const handleInput = (type: LoginPasswordActionType): KeyboardEventHandler<HTMLInputElement> =>
        e => dispatch({type, payload: e.currentTarget.value});

    const handleNextStepClick = () => {
        window.localStorage.setItem('1', JSON.stringify({login, password}));
        onNextStep();
    };

    return <>
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
        <Footer onNextStep={handleNextStepClick} onPrevStep={onPrevStep} isValid={isValid}/>
    </>
};

export default LoginPassword;