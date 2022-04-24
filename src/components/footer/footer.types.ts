import {MouseEventHandler} from "react";

export type ButtonPressHandler = MouseEventHandler<HTMLButtonElement>

export interface FooterProps {
    onNextStep: ButtonPressHandler,
    onPrevStep: ButtonPressHandler,
    isValid: boolean
}