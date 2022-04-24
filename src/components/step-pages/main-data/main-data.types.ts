import {StepPageProps} from "../step-pages.types";


export interface MainDataProps extends StepPageProps {

}



export type Surname = string;
export type Name = string;
export type Lastname = string;
export type DateOfBirth = string;
export type Email = string;
export enum Gender {
    NONE = 'NONE',
    MALE = 'male',
    FEMALE = 'female'
}

export interface MainDataState {
    surname: Surname,
    name: Name,
    lastname: Lastname,
    dateOfBirth: DateOfBirth,
    email: Email,
    gender: Gender,
    more18: boolean
}

export enum MainDataActionType {
    SET_SURNAME = 'SET_SURNAME',
    SET_NAME = 'SET_NAME',
    SET_LASTNAME = 'SET_LASTNAME',
    SET_DATE_OF_BIRTH = 'SET_DATE_OF_BIRTH',
    SET_EMAIL = 'SET_EMAIL',
    SET_GENDER = 'SET_GENDER',
    SET_MORE_18 = 'SET_MORE_18'
}

interface SetSurnameAction {
    type: MainDataActionType.SET_SURNAME,
    payload: Surname
}

interface SetNameAction {
    type: MainDataActionType.SET_NAME,
    payload: Name
}

interface SetLastNameAction {
    type: MainDataActionType.SET_LASTNAME,
    payload: Lastname
}

interface SetDateOfBirth {
    type: MainDataActionType.SET_DATE_OF_BIRTH,
    payload: DateOfBirth
}

interface SetEmail {
    type: MainDataActionType.SET_EMAIL,
    payload: Email
}

interface SetGender {
    type: MainDataActionType.SET_GENDER,
    payload: Gender
}

interface SetMore18 {
    type: MainDataActionType.SET_MORE_18,
    payload: boolean
}

export type MainDataAction = SetSurnameAction | SetNameAction | SetLastNameAction | SetDateOfBirth | SetEmail | SetGender | SetMore18