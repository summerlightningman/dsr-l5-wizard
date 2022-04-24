import styled from 'styled-components';
import {footerHeight, headerHeight} from "../ui/variables";

const AppContent = styled.main`
  width: 100%;
  height: calc(100% - ${headerHeight} - ${footerHeight});
`;

export default AppContent