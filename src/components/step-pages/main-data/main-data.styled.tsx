import StepPage from "../../ui/step-page";
import styled from "styled-components";

const MainDataStyled = styled(StepPage)`
  [for=surname], [for=name], [for=lastname] {
    grid-row-start: 2;
  }

  #surname, #name, #lastname {
    grid-row-start: 3;
  }

  [for=surname], #surname, #date_of_birth, [for=date_of_birth], #gender {
    grid-column: 1 / span 3;
  }

  [for=name], #name, #email, [for=email], #more_18 {
    grid-column-start: 5;
  }
  
  #name, [for=name] {
    grid-column-end: span 4;
  }
  
  #email, [for=email] {
    grid-column-end: span 9;
  }

  [for=lastname], #lastname {
    grid-column: 10 / span 4;
  }

  [for=date_of_birth], [for=email] {
    grid-row: 5;
  }

  #date_of_birth, #email {
    grid-row: 6;
  }
  
  #gender, #more_18, [for=more_18] {
    grid-row: 8;
  }
  
  [for=more_18] {
    grid-column: 6 / 12;
  }
`;

export default MainDataStyled