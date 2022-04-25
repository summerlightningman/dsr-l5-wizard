export type ButtonPressHandler = () => void;
export type StorageKey = string

export interface StepPageProps {
    onNextStep: ButtonPressHandler,
    onPrevStep: ButtonPressHandler,
    storageKey: StorageKey
}