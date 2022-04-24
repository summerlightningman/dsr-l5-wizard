import React, {useState} from 'react';
import AppStyled from "./app.styled";
import Header from "../header/header";
import Footer from "../footer/footer";
import {AppContent, Step} from "./app.types";


const App = () => {
    const [step, setStep] = useState<Step>(1);

    const goToPrevStep = () => setStep(step - 1);
    const goToNextStep = () => setStep(step + 1);


    window.localStorage.setItem('step', step.toString());

    const appContent: AppContent = {

    }

    return (
        <AppStyled>
            <Header currStep={step}/>
            {/*{appContent[step]}*/}
            <Footer onPrevStep={goToPrevStep} onNextStep={goToNextStep}/>
        </AppStyled>
    );
}

export default App;
