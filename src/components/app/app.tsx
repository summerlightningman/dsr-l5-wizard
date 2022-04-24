import React, {useState} from 'react';
import AppStyled from "./app.styled";
import Header from "../header/header";
import Footer from "../footer/footer";
import {AppContent, Step} from "./app.types";
import LoginPassword from "../step-pages/login-password/login-password";
import SubscriptionType from "../step-pages/subscription-type/subscription-type";


const App = () => {
    const [step, setStep] = useState<Step>(1);
    const [isValid, setIsValid] = useState<boolean>(false);

    const goToPrevStep = () => setStep(step - 1);
    const goToNextStep = () => setStep(step + 1);


    window.localStorage.setItem('step', step.toString());

    const appContent: AppContent = {
        1: <LoginPassword setIsValid={setIsValid}/>,
        2: <SubscriptionType setIsValid={setIsValid}/>
    };

    return (
        <AppStyled>
            <Header currStep={step}/>
            {appContent[step]}
            <Footer onPrevStep={goToPrevStep} onNextStep={goToNextStep} isValid={isValid}/>
        </AppStyled>
    );
}

export default App;
