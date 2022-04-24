import React, {useCallback, useMemo, useState} from 'react';
import AppStyled from "./app.styled";
import Header from "../header/header";
import {Step} from "./app.types";
import LoginPassword from "../step-pages/login-password/login-password";
import SubscriptionType from "../step-pages/subscription-type/subscription-type";
import MainData from "../step-pages/main-data/main-data";


const App = () => {
    const [step, setStep] = useState<Step>(3);
    const goToPrevStep = useCallback(() => setStep(step - 1), [step]);
    const goToNextStep = useCallback(() => setStep(step + 1), [step]);

    const content = useMemo(() => {
        switch (step) {
            case 1:
                return <LoginPassword onPrevStep={goToPrevStep} onNextStep={goToNextStep}/>
            case 2:
                return <SubscriptionType onPrevStep={goToPrevStep} onNextStep={goToNextStep}/>
            case 3:
                return <MainData onPrevStep={goToPrevStep} onNextStep={goToNextStep}/>
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
