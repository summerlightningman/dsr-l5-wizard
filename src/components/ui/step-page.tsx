import styled from 'styled-components';
import {footerHeight, headerHeight} from "./variables";

const StepPage = styled.main`
  width: 100%;
  height: calc(100% - ${headerHeight} - ${footerHeight});

  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;

export default StepPage