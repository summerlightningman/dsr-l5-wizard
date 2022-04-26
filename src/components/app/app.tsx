import React, {useCallback, useMemo, useState} from 'react';
import AppStyled from "./app.styled";
import Header from "../header/header";
import {Step} from "./app.types";
import LoginPassword from "../step-pages/login-password/login-password";
import SubscriptionType from "../step-pages/subscription-type/subscription-type";
import MainData from "../step-pages/main-data/main-data";
import BankCard from "../step-pages/bank-card/bank-card";
import Agreements from "../step-pages/agreements/agreements";
import Final from "../step-pages/final/final";


const App = () => {
    const [step, setStep] = useState<Step>(1);
    const goToPrevStep = useCallback(() => setStep(step - 1), [step]);
    const goToNextStep = useCallback(() => setStep(step + 1), [step]);

    const content = useMemo(() => {
        const props = {onPrevStep: goToPrevStep, onNextStep: goToNextStep};
        switch (step) {
            case 1:
                return <LoginPassword {...props}/>
            case 2:
                return <SubscriptionType {...props}/>
            case 3:
                return <MainData {...props}/>
            case 4:
                return <BankCard {...props}/>
            case 5:
                return <Agreements {...props}/>
            case 6:
                return <Final {...props}/>
        }
        return <></>
    }, [goToNextStep, goToPrevStep, step])

    window.localStorage.setItem('step', step.toString());

    return (
        <AppStyled>
            <Header currStep={step}/>
            {content}
        </AppStyled>
    );
}

export default App;
