import { BorderBelow } from "presentation/styles/mixins/Borders";
import styled from "styled-components";
import { getTheme } from "infraestructure/gateways/themeLocalStorage";

const theme = getTheme();

const ClientCard = styled.section`
  ${BorderBelow(theme, "hover")}
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 0.4fr 1fr;

  & header {
    display: flex;
    row-gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 2rem;
    height: 100%;
    box-sizing: border-box;

    & h2 {
      margin: 0;
    }
  }
`;

export default ClientCard;
