import styled from 'styled-components';
import {footerHeight, headerHeight} from "./variables";

const StepPage = styled.form`
  width: 100%;
  height: calc(100% - ${headerHeight} - ${footerHeight});

  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 20px;
`;

export default StepPage