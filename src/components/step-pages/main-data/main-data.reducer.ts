import {Gender, MainDataAction, MainDataActionType, MainDataState} from "./main-data.types";
import {FormData} from "../step-pages.types";
import {getStorageData, strToBool} from "../step-pages.helpers";

export const mainDataInitialState: MainDataState = {
    surname: getStorageData(FormData.SURNAME) || '',
    name: getStorageData(FormData.NAME) || '',
    lastname: getStorageData(FormData.LASTNAME) || '',
    dateOfBirth: getStorageData(FormData.DATE_OF_BIRTH) || new Date().toLocaleString('ru-RU'),
    email: getStorageData(FormData.EMAIL) || '',
    gender: getStorageData(FormData.GENDER) as Gender || Gender.NONE,
    more18: strToBool(getStorageData(FormData.MORE_18))
}

const mainDataReducer = (state: MainDataState, action: MainDataAction): MainDataState => {
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