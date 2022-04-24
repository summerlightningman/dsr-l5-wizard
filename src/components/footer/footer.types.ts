import {ButtonPressHandler} from "../step-pages/step-pages.types";


export interface FooterProps {
    onNextStep: ButtonPressHandler,
    onPrevStep: ButtonPressHandler,
    isValid: boolean
}