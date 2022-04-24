import {Gender, MainDataAction, MainDataActionType, MainDataState} from "./main-data.types";

const defaultValues = window.localStorage.getItem('3') === null
    ? {}
    // @ts-ignore
    : JSON.parse(window.localStorage.getItem('3'))

export const initialState = {
    surname: defaultValues['surname'] || '',
    name: defaultValues['name'] || '',
    lastname: defaultValues['lastname'] || '',
    dateOfBirth: defaultValues['dateOfBirth'] || new Date().toLocaleString('ru-RU'),
    email: defaultValues['email'] || '',
    gender: defaultValues['gender'] || Gender.NONE,
    more18: defaultValues['more18'] || false
}

const mainDataReducer = (state: MainDataState = initialState, action: MainDataAction): MainDataState => {
    switch (action.type) {
        case MainDataActionType.SET_SURNAME:
            return {...state, surname: action.payload}
        case MainDataActionType.SET_NAME:
            return {...state, name: action.payload}
        case MainDataActionType.SET_LASTNAME:
            return {...state, lastname: action.payload}
        case MainDataActionType.SET_DATE_OF_BIRTH:
            return {...state, dateOfBirth: action.payload}
        case MainDataActionType.SET_EMAIL:
            return {...state, email: action.payload}
        case MainDataActionType.SET_GENDER:
            return {...state, gender: action.payload}
        case MainDataActionType.SET_MORE_18:
            return {...state, more18: action.payload}
    }
    return state
}

export default mainDataReducer