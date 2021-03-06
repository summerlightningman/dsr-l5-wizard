import {FC} from 'react';
import FooterStyled from "./footer.styled";

import ControlButton from "../ui/control-button";
import {FooterProps} from "./footer.types";
import {getStorageData} from "../step-pages/step-pages.helpers";

const Footer: FC<FooterProps> = ({onPrevStep, onNextStep, isValid}) => {
    const step = +getStorageData('step') || 1;

    const isPrevDisabled = step === 1;

    return (
        <FooterStyled>
            <ControlButton onClick={onPrevStep} disabled={isPrevDisabled} id="prev">Previous</ControlButton>
            <ControlButton onClick={onNextStep} disabled={!isValid} id="next">Next</ControlButton>
        </FooterStyled>
    );
};

export default Footer;