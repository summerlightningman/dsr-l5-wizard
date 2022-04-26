import styled from 'styled-components';
import StepPage from "../../ui/step-page";
import Label from "../../ui/label";
import Text from "../../ui/text";

const FinalStyled = styled(StepPage)`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(${window.localStorage.length - 1}, 1fr);
  overflow-y: auto;
  
  ${Label} {
    grid-column: 1;
  }
  
  ${Text} {
    grid-column: 2;
  }
`;

export default FinalStyled