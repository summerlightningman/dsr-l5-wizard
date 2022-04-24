import styled from "styled-components";
import StepPage from "../../ui/step-page";


const LoginPasswordStyled = styled(StepPage)`
  #login, #password, [for=login], [for=password] {
    grid-column: 1/5;
  }

  #login {
    grid-row-start: 4;
  }

  #password, #password_retype {
    grid-row-start: 7
  }

  #password_retype, [for=password_retype] {
    grid-column: 9/13;
  }

  [for=login] {
    grid-row-start: 3;
  }

  [for=password], [for=password_retype] {
    grid-row-start: 6;
  }

`;

export default LoginPasswordStyled