import styled from "styled-components";

const ControlButton = styled.button`
  background: #606E8B;
  border: none;
  box-shadow: none;
  padding: 11px;

  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFF;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;


  &:hover {
    background: #474f6a;
  }

  &:active {
    background: #778898;
  }

  &:disabled {
    background: #d3d6da;
  }
`;

export default ControlButton