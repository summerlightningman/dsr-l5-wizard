import React, {FC} from 'react';
import HeaderStyled from "./header.styled";
import HeaderText from "./header-text.styled";
import Separator from "../ui/separator";
import {HeaderProps} from "./header.types";

const Header: FC<HeaderProps> = ({currStep}) => {
    const headerText = currStep === 6 ? 'Final' : `Fill the form: Step ${currStep}`;

    return (
        <HeaderStyled>
            <HeaderText>
                {headerText}
            </HeaderText>
            <Separator/>
        </HeaderStyled>
    );
};

export default Header;