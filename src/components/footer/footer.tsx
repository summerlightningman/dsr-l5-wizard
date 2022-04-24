import {FC} from 'react';
import FooterStyled from "./footer.styled";

import ControlButton from "../ui/control-button";
import {FooterProps} from "./footer.types";

const Footer: FC<FooterProps> = ({onPrevStep, onNextStep}) => {
    const step = window.localStorage.getItem('step') || 1;

    const isPrevDisabled = +step === 1;

    return (
        <FooterStyled>
            <ControlButton onClick={onPrevStep} disabled={isPrevDisabled} id="prev">Previous</ControlButton>
            <ControlButton onClick={onNextStep} id="next">Next</ControlButton>
        </FooterStyled>
    );
};

export default Footer;