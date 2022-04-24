import StepPage from "../../ui/step-page";
import styled from "styled-components";

const SubscriptionTypeStyled = styled(StepPage)`
  #subscription_type, [for=subscription_type] {
    grid-column: 1/13;
    
  }

  #subscription_type {
    grid-row-start: 6;
  }

  [for=subscription_type] {
    grid-row-start: 5;
  }
`;

export default SubscriptionTypeStyled