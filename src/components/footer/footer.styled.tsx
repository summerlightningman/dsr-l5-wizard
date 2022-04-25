import styled from 'styled-components';
import {footerPaddingBottom} from "../ui/variables";

const Footer = styled.footer`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  
  padding-bottom: ${footerPaddingBottom};
  
  #prev {
    grid-column: 1
  }
  
  #next {
    grid-column: 3;
  }
`;

export default Footer