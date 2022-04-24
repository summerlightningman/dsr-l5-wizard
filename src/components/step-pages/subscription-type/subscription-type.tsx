import {ChangeEventHandler, FC, useState} from "react";
import {SubscriptionTypeProps, SubscriptionTypeValue} from "./subscription-type.types";
import SubscriptionTypeStyled from "./subscription-type.styled";
import Label from "../../ui/label";
import Dropdown from "../../ui/Dropdown";

const SubscriptionType: FC<SubscriptionTypeProps> = ({setIsValid}) => {
    const [value, setValue] = useState<SubscriptionTypeValue>('');

    setIsValid(value !== 'none');

    const handleChange: ChangeEventHandler<HTMLSelectElement> = e =>
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