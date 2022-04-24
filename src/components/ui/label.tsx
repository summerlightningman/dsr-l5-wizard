import styled from "styled-components";
import {LabelProps} from "./types";


const Label = styled.label<LabelProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #778898;
  
  display: flex;
  align-items: ${props => props.alignItems || 'flex-end'};
`;

export default Label