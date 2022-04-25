import {Gender, MainDataAction, MainDataActionType, MainDataState} from "./main-data.types";
import {StorageKey} from "../step-pages.types";
import {getStorageDataByKey} from "../step-pages.helpers";


export const getInitialState = (key: StorageKey) => {
    const initialData = getStorageDataByKey(key);
    return ({
        surname: initialData?.surname || '',
        name: initialData?.name || '',
        lastname: initialData?.lastname || '',
        dateOfBirth: initialData?.dateOfBirth || new Date().toLocaleString('ru-RU'),
        email: initialData?.email || '',
        gender: initialData?.gender || Gender.NONE,
        more18: initialData?.more18 || false
    })
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