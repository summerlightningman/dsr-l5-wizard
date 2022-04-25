import {FC, KeyboardEventHandler, useState} from 'react';
import BankCardStyled from "./bank-card.styled";
import Footer from "../../footer/footer";
import {BankCardProps, BankNum} from "./bank-card.types";
import FormInput from "../../ui/form-input";
import Label from "../../ui/label";
import {replaceRight} from "../main-data/main-data.helpers";
import {getStorageDataByKey} from "../step-pages.helpers";

const BankCard: FC<BankCardProps> = ({onPrevStep, onNextStep, storageKey}) => {
    const initialData = getStorageDataByKey(storageKey)?.bankAccount || '____ — ____ — ____ — ____';
    const [num, setNum] = useState<BankNum>(initialData);
    const isValid: boolean = !num.includes('_');

    const handleInput: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === 'Backspace')
            return setNum(replaceRight(/\d/, num));
        if (!/\d/.test(e.key))
            return
        return setNum(num.replace('_', e.key));
    };

    const handleNextStepClick = () => {
        window.localStorage.setItem(storageKey, JSON.stringify({bankAccount: num}));
        onNextStep()
    }

    return <>
        <BankCardStyled>
            <Label htmlFor="card_num">Number of your bank account</Label>
            <FormInput id="card_num" type="tel" value={num} onKeyDown={handleInput} textAlign="center"/>
        </BankCardStyled>
        <Footer onNextStep={handleNextStepClick} onPrevStep={onPrevStep} isValid={isValid}/>
    </>
};

export default BankCard;