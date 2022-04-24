import StepPage from "../../ui/step-page";
import styled from "styled-components";

const MainDataStyled = styled(StepPage)`
  [for=surname], [for=name], [for=lastname] {
    grid-row-start: 2;
  }

  #surname, #name, #lastname {
    grid-row-start: 3;
  }

  [for=surname], #surname {
    grid-column: 1 / 5;
  }

  [for=name], #name {
    grid-column: 6 / 9;
  }

  [for=lastname], #lastname {
    grid-column: 10 / 13;
  }

  [for=dateOfBirth], [for=email] {
    grid-row: 5;
  }

  #dateOfBirth, #email {
    grid-row: 6;
  }

  [for=dateOfBirth], #dateOfBirth {
    grid-column: 1 / 4;
  }

  [for=email], #email {
    grid-column: 5 / 13;
  }

  #gender, #more18, [for=more18] {
    grid-row: 8;
  }

  #gender {
    grid-column: 1 / 4;
  }

  #more18 {
    grid-column: 9;
  }

  [for=more18] {
    grid-column: 10 / 13;
  }
`;

export default MainDataStyled