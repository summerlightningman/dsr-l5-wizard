export type ButtonPressHandler = () => void;
export type StorageKey = string;
export type StorageValue = string;

export interface StepPageProps {
    onNextStep: ButtonPressHandler,
    onPrevStep: ButtonPressHandler,
}

export enum FormData {
    LOGIN = 'login',
    PASSWORD = 'password',
    PASSWORD_RETYPE = 'passwordRetype',
    SURNAME = 'surname',
    NAME = 'name',
    LASTNAME = 'lastname',
    DATE_OF_BIRTH = 'dateOfBirth',
    MORE_18 = 'more18',
    GENDER = 'gender',
    EMAIL = 'email',
    SUBSCRIPTION_TYPE = 'subscriptionType',
    BANK_ACCOUNT_NUM = 'bankAccountNum',
    DATA_AGREEMENT = 'dataAgreement',
    COOKIE_AGREEMENT = 'cookieAgreement'
}