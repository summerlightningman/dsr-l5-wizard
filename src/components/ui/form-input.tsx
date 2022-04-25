import styled from "styled-components";
import {FormInputProps} from "./types";

const FormInput = styled.input<FormInputProps>`
  background: #778898;
  padding: 11px;
  width: 100%;
  height: auto;
  border: none;

  color: #FFF;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: ${props => props.textAlign || 'start'};
  
  outline: none;
`;

export default FormInput