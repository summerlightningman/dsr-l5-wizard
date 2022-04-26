import {ChangeEventHandler, FC, useState} from "react";
import {Subscription, SubscriptionTypeProps} from "./subscription-type.types";
import SubscriptionTypeStyled from "./subscription-type.styled";
import Label from "../../ui/label";
import Dropdown from "../../ui/Dropdown";
import Footer from "../../footer/footer";
import {getStorageData, setStorageData} from "../step-pages.helpers";
import {FormData} from "../step-pages.types";

const SubscriptionType: FC<SubscriptionTypeProps> = ({onPrevStep, onNextStep}) => {
    const initialValue = getStorageData(FormData.SUBSCRIPTION_TYPE) as Subscription || Subscription.NONE;
    const [value, setValue] = useState<Subscription>(initialValue);
    const isValid = value !== Subscription.NONE

    const handleChange: ChangeEventHandler<HTMLSelectElement> = e =>
        setValue(e.currentTarget.value as Subscription);

    const goToNextStep = () => {
        setStorageData(FormData.SUBSCRIPTION_TYPE, value);
        onNextStep();
    }

    return <>
        <SubscriptionTypeStyled>
            <Label htmlFor="subscription_type">Subscription type</Label>
            <Dropdown value={value} onChange={handleChange} id="subscription_type">
                <option value={Subscription.NONE}>Not selected</option>
                <option value={Subscription.FREE}>Free</option>
                <option value={Subscription.MONTHLY}>Monthly</option>
                <option value={Subscription.YEARLY}>Yearly</option>
            </Dropdown>
        </SubscriptionTypeStyled>
        <Footer onPrevStep={onPrevStep} onNextStep={goToNextStep} isValid={isValid}/>
    </>
}

export default SubscriptionType