import {ChangeEventHandler, FC, KeyboardEventHandler, useReducer} from "react";
import {Gender, MainDataActionType, MainDataProps} from "./main-data.types";
import MainDataStyled from "./main-data.styled";
import FormInput from "../../ui/form-input";
import mainDataReducer, {initialState} from "./main-data.reducer";
import Label from "../../ui/label";
import Dropdown from "../../ui/Dropdown";
import Footer from "../../footer/footer";

const MainData: FC<MainDataProps> = ({onNextStep, onPrevStep}) => {
    const [{
        surname,
        name,
        lastname,
        dateOfBirth,
        more18,
        gender,
        email
    }, dispatch] = useReducer(mainDataReducer, initialState);
    const isValid = [
        !!surname,
        !!name,
        !!lastname,
        more18,
        gender !== Gender.NONE,
        !!email,
        /[a-zA-Z0-9-_.]{3,}@([a-z]{2,}\.[a-z]+)+/.test(email)
    ].every(_ => _);

    const handleInput = (type: MainDataActionType): KeyboardEventHandler<HTMLInputElement> => e =>
        // @ts-ignore
        dispatch({type, payload: e.currentTarget.value});
    const handleCheck: ChangeEventHandler<HTMLInputElement> = e =>
        dispatch({type: MainDataActionType.SET_MORE_18, payload: e.currentTarget.checked});
    const handleChange: ChangeEventHandler<HTMLSelectElement> = e =>
        // @ts-ignore
        dispatch({type: MainDataActionType.SET_GENDER, payload: e.currentTarget.value});
    const handleNextStepClick = () => {
        window.localStorage.setKey('3', JSON.stringify({
            surname, name, lastname, dateOfBirth, more18, gender, email
        }));
        onNextStep();
    }

    return <>
        <MainDataStyled>
            <Label htmlFor="surname">Surname</Label>
            <FormInput id="surname" value={surname} onInput={handleInput(MainDataActionType.SET_SURNAME)}/>
            <Label htmlFor="name">Name</Label>
            <FormInput id="name" value={name} onInput={handleInput(MainDataActionType.SET_NAME)}/>
            <Label htmlFor="lastname">Lastname</Label>
            <FormInput id="lastname" value={lastname} onInput={handleInput(MainDataActionType.SET_LASTNAME)}/>
            <Label htmlFor="dateOfBirth">Date of birth</Label>
            <FormInput id="dateOfBirth" type="date" value={dateOfBirth}
                       onInput={handleInput(MainDataActionType.SET_DATE_OF_BIRTH)}/>
            <Label htmlFor="email">E-Mail</Label>
            <FormInput id="email" type="email" value={email} onInput={handleInput(MainDataActionType.SET_EMAIL)}/>
            <Dropdown id="gender" value={gender} onChange={handleChange}>
                <option value={Gender.NONE}>{Gender.NONE}</option>
                <option value={Gender.MALE}>{Gender.MALE}</option>
                <option value={Gender.FEMALE}>{Gender.FEMALE}</option>
            </Dropdown>
            <Label htmlFor="more18" alignItems="center">I am 18+ years ago</Label>
            <FormInput id="more18" type="checkbox" checked={more18} onChange={handleCheck}/>
        </MainDataStyled>
        <Footer onNextStep={handleNextStepClick} onPrevStep={onPrevStep} isValid={isValid}/>
    </>
}

export default MainData