import React, {FC} from 'react';
import HeaderStyled from "./header.styled";
import HeaderText from "./header-text.styled";
import Separator from "../ui/separator";
import {HeaderProps} from "./header.types";

const Header: FC<HeaderProps> = ({currStep}) => {

    return (
        <HeaderStyled>
            <HeaderText>
                Fill the form: Step {currStep}
            </HeaderText>
            <Separator/>
        </HeaderStyled>
    );
};

export default Header;