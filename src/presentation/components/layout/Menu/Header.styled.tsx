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
  padding-right: 2.2rem;
  padding-left: 2.2rem;
  height: 5rem;
  background-color: ${theme.primary};
  user-select: none;
  z-index: 5;

  .logo {
    svg {
      fill: black;
    }
  }

  .burguer-menu {
    display: none;
  }

  & nav {
    & ul {
      margin: 0;
      display: flex;
      gap: 1rem;
      padding: 0;
    }
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: row-reverse;

    nav {
      transition: all 0.2s;
      position: fixed;
      left: 0;
      width: 100%;
      height: 100%;
      top: 0;
      top: 5rem;
      background-color: #c5cada;
      backdrop-filter: blur(0.1rem);
      padding: 2rem;
      box-sizing: border-box;
      opacity: 0;
      pointer-events: none;

      ul {
        flex-direction: column;
        li {
          width: 100%;
        }
      }

      &.open {
        opacity: 1;
        pointer-events: all;
      }
    }

    .burguer-menu {
      display: flex;
      align-items: center;
      position: relative;
      padding: 0.5rem;
      padding-left: 0;
      height: fit-content;
      font-size: 2rem;
      cursor: pointer;
    }

    .logo {
      display: none;
    }
  }
`;

export default StyledHeader;
