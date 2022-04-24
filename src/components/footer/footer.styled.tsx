import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  
  padding-bottom: 80px;
  
  #prev {
    grid-column: 1
  }
  
  #next {
    grid-column: 3;
  }
`;

export default Footer