import { getTheme } from "infraestructure/gateways/themeLocalStorage";
import styled from "styled-components";
import { BorderAbove } from "presentation/styles/mixins/Borders";

const theme = getTheme();

const StyledHeader = styled.header`
  ${BorderAbove(theme)}
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.2rem;
  height: fit-content;
  background-color: ${theme.primary};
  z-index: 5;

  & .logo {
    svg {
      fill: black;
    }
  }

  & nav {
    & ul {
      margin: 0;
      display: flex;
      gap: 1rem;
      padding: 0;
    }
  }
`;

export default StyledHeader;
