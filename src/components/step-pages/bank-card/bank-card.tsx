import {FC, KeyboardEventHandler, useState} from 'react';
import BankCardStyled from "./bank-card.styled";
import Footer from "../../footer/footer";
import {BankCardProps, BankNum} from "./bank-card.types";
import FormInput from "../../ui/form-input";
import Label from "../../ui/label";

const BankCard: FC<BankCardProps> = ({onPrevStep, onNextStep}) => {
    const [num, setNum] = useState<BankNum>('____ — ____ — ____ — ____');
    const isValid: boolean = !num.includes('_');

    const handleInput: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === 'Backspace'){
            const result = num
                .split('').reverse().join('')
                .replace(/\d/, '_')
                .split('').reverse().join('');
            setNum(result);
        }

        if (!/\d/.test(e.key))
            return
        setNum(num.replace('_', e.key));
    };

    const handleNextStepClick = () => {
        window.localStorage.setItem('4', JSON.stringify({bankAccount: num}));
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