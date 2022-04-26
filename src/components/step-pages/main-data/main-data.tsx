import {ChangeEventHandler, FC, KeyboardEventHandler, useReducer} from "react";
import {Gender, MainDataActionType, MainDataProps} from "./main-data.types";
import MainDataStyled from "./main-data.styled";
import FormInput from "../../ui/form-input";
import mainDataReducer, {mainDataInitialState} from "./main-data.reducer";
import Label from "../../ui/label";
import Dropdown from "../../ui/Dropdown";
import Footer from "../../footer/footer";
import {setStorageData} from "../step-pages.helpers";
import {FormData} from "../step-pages.types";

const MainData: FC<MainDataProps> = ({onNextStep, onPrevStep}) => {
    const [{
        surname,
        name,
        lastname,
        dateOfBirth,
        more18,
        gender,
        email
    }, dispatch] = useReducer(mainDataReducer, mainDataInitialState);
    const isValid = [
        !!surname,
        !!name,
        !!lastname,
        more18,
        gender !== Gender.NONE,
        !!email,
        /[a-zA-Z\d-_.]{3,}@([a-z]{2,}\.[a-z]+)+/.test(email)
    ].every(_ => _);

    const handleInput = (type: MainDataActionType): KeyboardEventHandler<HTMLInputElement> => e =>
        // @ts-ignore
        dispatch({type, payload: e.currentTarget.value});
    const handleCheck: ChangeEventHandler<HTMLInputElement> = e =>
        dispatch({type: MainDataActionType.SET_MORE_18, payload: e.currentTarget.checked});
    const handleChange: ChangeEventHandler<HTMLSelectElement> = e =>
        dispatch({type: MainDataActionType.SET_GENDER, payload: e.currentTarget.value as Gender});
    const handleNextStepClick = () => {
        const formValues = {
            [FormData.SURNAME]: surname,
            [FormData.NAME]: name, [FormData.LASTNAME]: lastname,
            [FormData.DATE_OF_BIRTH]: dateOfBirth, [FormData.MORE_18]: String(+more18),
            [FormData.GENDER]: String(gender), [FormData.EMAIL]: email
        };
        Object.entries(formValues).forEach(([key, value]) => setStorageData(key, value));
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
            <Label htmlFor="date_of_birth">Date of birth</Label>
            <FormInput id="date_of_birth" type="date" value={dateOfBirth}
                       onInput={handleInput(MainDataActionType.SET_DATE_OF_BIRTH)}/>
            <Label htmlFor="email">E-Mail</Label>
            <FormInput id="email" type="email" value={email} onInput={handleInput(MainDataActionType.SET_EMAIL)}/>
            <Dropdown id="gender" value={gender} onChange={handleChange}>
                <option value={Gender.NONE}>{Gender.NONE}</option>
                <option value={Gender.MALE}>{Gender.MALE}</option>
                <option value={Gender.FEMALE}>{Gender.FEMALE}</option>
            </Dropdown>
            <Label htmlFor="more_18" alignItems="center">I am 18+ years ago</Label>
            <FormInput id="more_18" type="checkbox" checked={more18} onChange={handleCheck}/>
        </MainDataStyled>
        <Footer onNextStep={handleNextStepClick} onPrevStep={onPrevStep} isValid={isValid}/>
    </>
}

export default MainData