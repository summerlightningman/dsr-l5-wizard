import styled from "styled-components";

const ControlButton = styled.button`
  background: #606E8B;
  width: 472px;
  height: 62px;
  border: none;
  box-shadow: none;
  padding: 11px 11px 50px 11px;
  
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFF;
  text-align: start;
  
  &:hover {
    background: #474f6a;
  }
  
  &:active {
    background: #778898;
  }
  
  &:disabled {
    background: #778898;
  }
`;

export default ControlButton