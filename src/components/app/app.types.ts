export type Step = number
export type Login = string;
export type Password = string;

export interface FormsData {
    currStep: Step,
    login: Login,
    password: Password
}

export type AppContent = Record<number, JSX.Element>