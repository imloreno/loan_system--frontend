import styled from "styled-components";
import { BorderBelow } from "presentation/styles/mixins/Borders";
import { getTheme } from "infraestructure/gateways/themeLocalStorage";

const theme = getTheme();

const Client = styled.div`
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  & .progress {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }

  & ul {
    ${BorderBelow(theme)}
    display: flex;
    gap: 0.2rem;
    justify-content: start;
    align-items: center;
    height: 1.5rem;
    padding: 0 1rem;

    & li {
      height: 0.5rem;
      width: 100%;
      border-radius: 0.2rem;
      box-shadow: 0.2rem 0.2rem 0.2rem ${theme.shadow[0]};
      background-color: black;

      &.none {
        background-color: ${theme.primary};
      }
    }
  }

  & .features {
    display: flex;
    justify-content: space-between;
  }
`;
export default Client;
