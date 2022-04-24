export type ButtonPressHandler = () => void

export interface StepPageProps {
    onNextStep: ButtonPressHandler,
    onPrevStep: ButtonPressHandler,
}