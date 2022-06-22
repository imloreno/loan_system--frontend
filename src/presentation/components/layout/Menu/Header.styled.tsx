import { getTheme } from "infraestructure/gateways/themeLocalStorage";
import styled from "styled-components";

const theme = getTheme();

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 0;
  padding: 2rem 2.2rem;
  background-color: ${theme.primary};
  box-shadow: 1rem 0 10rem rgba(82, 92, 105, 0.185);
  user-select: none;
  z-index: 5;

  .logo {
    svg {
      fill: black;
    }
  }

  .burguer-menu {
    display: none;
    cursor: pointer;
  }

  & nav {
    margin-bottom: auto;
    & ul {
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0;
    }
  }

  .profile-container {
    position: sticky;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
  }

  @media screen and (max-width: 60rem) {
    position: sticky;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3rem 1fr;
    grid-template-areas:
      "profile logo"
      "menu menu";
    padding: 1rem;
    top: 0;
    left: 0;
    height: 3rem;

    &.open {
      row-gap: 2rem;
      height: 100%;
    }

    .logo {
      display: none;
    }

    .burguer-menu {
      display: flex;
      align-items: center;
      font-size: 2rem;
      margin-left: auto;
    }

    nav {
      display: none;
      grid-area: menu;

      &.open {
        display: block;
      }
    }

    .profile-container {
      grid-area: profile;
    }
  }
`;

export default StyledHeader;
