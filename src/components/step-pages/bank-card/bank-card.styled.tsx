import styled from 'styled-components';
import StepPage from "../../ui/step-page";

const BankCardStyled = styled(StepPage)`
  #card_num, [for=card_num] {
    grid-column: 3 / span 8;
  }

  [for=card_num] {
    grid-row: 4;
  }

  #card_num {
    grid-row: 5;
  }
`;

export default BankCardStyled