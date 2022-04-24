import {FC} from 'react';
import FooterStyled from "./footer.styled";
import ButtonsPanel from "./buttons-panel.styled";
import ControlButton from "../ui/control-button";
import {FooterProps} from "./footer.types";

const Footer: FC<FooterProps> = ({onPrevStep, onNextStep}) => {
    const step = window.localStorage.getItem('step') || 1;

    const isPrevDisabled = +step === 1;

    return (
        <FooterStyled>
            <ButtonsPanel>
                <ControlButton onClick={onPrevStep} disabled={isPrevDisabled}>Previous</ControlButton>
                <ControlButton onClick={onNextStep}>Next</ControlButton>
            </ButtonsPanel>
        </FooterStyled>
    );
};

export default Footer;