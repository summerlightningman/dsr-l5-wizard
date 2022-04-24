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

    return <SubscriptionTypeStyled>
        <Label htmlFor="subscription_type">Subscription type</Label>
        <Dropdown value={value} onChange={handleChange} id="subscription_type">
            <option value="none">Not selected</option>
            <option value="free">Free</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
        </Dropdown>
    </SubscriptionTypeStyled>
}

export default SubscriptionType