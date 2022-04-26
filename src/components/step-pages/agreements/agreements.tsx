import {ChangeEventHandler, FC, useState} from 'react';
import Label from "../../ui/label";
import Text from "../../ui/text";
import {boolToStr, getStorageData, setStorageData, strToBool} from "../step-pages.helpers";
import {FormData} from "../step-pages.types";
import FormInput from "../../ui/form-input";
import Footer from "../../footer/footer";
import {AgreementsProps} from "./agreements.types";
import AgreementsStyled from "./agreements.styled";

const Agreements: FC<AgreementsProps> = ({onPrevStep, onNextStep}) => {
    const dataAgreementInitial = strToBool(getStorageData(FormData.DATA_AGREEMENT));
    const cookieAgreementInitial = strToBool(getStorageData(FormData.COOKIE_AGREEMENT));

    const [dataAgreement, setDataAgreement] = useState<boolean>(dataAgreementInitial);
    const [cookieAgreement, setCookieAgreement] = useState<boolean>(cookieAgreementInitial);

    const isValid = dataAgreement && cookieAgreement;
    const login = getStorageData(FormData.LOGIN) || '[Not filled]';
    const email = getStorageData(FormData.EMAIL) || '[Not filled]';

    const handleDataAgreementChange: ChangeEventHandler<HTMLInputElement> = e =>
        setDataAgreement(e.currentTarget.checked);
    const handleCookieAgreementChange: ChangeEventHandler<HTMLInputElement> = e =>
        setCookieAgreement(e.currentTarget.checked);

    const handleNextStepClick = () => {
        setStorageData(FormData.DATA_AGREEMENT, boolToStr(dataAgreement));
        setStorageData(FormData.COOKIE_AGREEMENT, boolToStr(cookieAgreement));
        onNextStep();
    };

    return <>
        <AgreementsStyled>
            <Label htmlFor="login">Login</Label>
            <Text id="login">{login}</Text>
            <Label htmlFor="email">E-Mail</Label>
            <Text id="email">{email}</Text>
            <FormInput type="checkbox" id="data_agreement" checked={dataAgreement} onChange={handleDataAgreementChange}/>
            <Label htmlFor="data_agreement">Agreed with data process</Label>
            <FormInput type="checkbox" id="cookie_agreement" checked={cookieAgreement} onChange={handleCookieAgreementChange}/>
            <Label htmlFor="cookie_agreement">Agreed with cookie collection</Label>
        </AgreementsStyled>
        <Footer onNextStep={handleNextStepClick} onPrevStep={onPrevStep} isValid={isValid}/>
    </>
};

export default Agreements;