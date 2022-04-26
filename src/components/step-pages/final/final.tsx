import {FC} from 'react';
import {FormData} from "../step-pages.types";
import Footer from "../../footer/footer";
import FinalStyled from "./final.styled";
import {FinalProps} from "./final.types";
import Label from "../../ui/label";
import Text from "../../ui/text";

const Final: FC<FinalProps> = ({onPrevStep, onNextStep}) => {
    const data = Object.assign({}, window.localStorage);

    return <>
        <FinalStyled>
            <Label htmlFor={FormData.LOGIN}>Login</Label>
            <Text id={FormData.LOGIN}>{data[FormData.LOGIN]}</Text>
            <Label htmlFor={FormData.PASSWORD}>Password</Label>
            <Text id={FormData.PASSWORD}>{data[FormData.PASSWORD_RETYPE]}</Text>
            <Label htmlFor={FormData.PASSWORD_RETYPE}>Retype password</Label>
            <Text id={FormData.PASSWORD_RETYPE}>{data[FormData.PASSWORD_RETYPE]}</Text>
            <Label htmlFor={FormData.SUBSCRIPTION_TYPE}>Subscription type</Label>
            <Text id={FormData.SUBSCRIPTION_TYPE}>{data[FormData.SUBSCRIPTION_TYPE]}</Text>
            <Label htmlFor={FormData.SURNAME}>Surname</Label>
            <Text id={FormData.SURNAME}>{data[FormData.SURNAME]}</Text>
            <Label htmlFor={FormData.NAME}>Name</Label>
            <Text id={FormData.NAME}>{data[FormData.NAME]}</Text>
            <Label htmlFor={FormData.LASTNAME}>Lastname</Label>
            <Text id={FormData.LASTNAME}>{data[FormData.LASTNAME]}</Text>
            <Label htmlFor={FormData.DATE_OF_BIRTH}>Date of birth</Label>
            <Text id={FormData.DATE_OF_BIRTH}>{data[FormData.DATE_OF_BIRTH]}</Text>
            <Label htmlFor={FormData.EMAIL}>E-Mail</Label>
            <Text id={FormData.EMAIL}>{data[FormData.EMAIL]}</Text>
            <Label htmlFor={FormData.GENDER}>Gender</Label>
            <Text id={FormData.GENDER}>{data[FormData.GENDER]}</Text>
            <Label htmlFor={FormData.MORE_18}>I am 18+ years old</Label>
            <Text id={FormData.MORE_18}>{data[FormData.MORE_18]}</Text>
            <Label htmlFor={FormData.DATA_AGREEMENT}>Agreed with data process</Label>
            <Text id={FormData.DATA_AGREEMENT}>{data[FormData.DATA_AGREEMENT]}</Text>
            <Label htmlFor={FormData.COOKIE_AGREEMENT}>Agreed with cookie collection</Label>
            <Text id={FormData.COOKIE_AGREEMENT}>{data[FormData.COOKIE_AGREEMENT]}</Text>
        </FinalStyled>
        <Footer onNextStep={onNextStep} onPrevStep={onPrevStep} isValid={false}/>
    </>
};

export default Final;