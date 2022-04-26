import styled from 'styled-components';
import StepPage from "../../ui/step-page";

const AgreementsStyled = styled(StepPage)`
  [for=login], [for=email], #data_agreement, #cookie_agreement {
    grid-column-start: 1;
  }
  
  [for=login], [for=email] {
    grid-column-end: 3;
  }

  #login, #email, [for=data_agreement], [for=cookie_agreement] {
    grid-column: 3 / 12;
  }
  
  #login, [for=login] {
    grid-row: 2;
  }
  
  #email, [for=email] {
    grid-row: 4;
  }
  
  #data_agreement, [for=data_agreement] {
    grid-row: 6;
  }
  
  #cookie_agreement, [for=cookie_agreement] {
    grid-row: 8;
  }
`;

export default AgreementsStyled