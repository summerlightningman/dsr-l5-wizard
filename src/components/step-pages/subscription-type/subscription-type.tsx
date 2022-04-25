import {ChangeEventHandler, FC, useState} from "react";
import {Subscription, SubscriptionTypeProps} from "./subscription-type.types";
import SubscriptionTypeStyled from "./subscription-type.styled";
import Label from "../../ui/label";
import Dropdown from "../../ui/Dropdown";
import Footer from "../../footer/footer";
import {getStorageDataByKey} from "../step-pages.helpers";

const SubscriptionType: FC<SubscriptionTypeProps> = ({onPrevStep, onNextStep, storageKey}) => {
    const initialValue = getStorageDataByKey(storageKey)?.subscriptionType || Subscription.NONE;
    const [value, setValue] = useState<Subscription>(initialValue);
    const isValid = value !== Subscription.NONE

    const handleChange: ChangeEventHandler<HTMLSelectElement> = e =>
        // @ts-ignore
        setValue(e.currentTarget.value);

    const goToNextStep = () => {
        window.localStorage.setItem(storageKey, JSON.stringify({subscriptionType: value}));
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