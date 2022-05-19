import { BorderBelow } from "presentation/styles/mixins/Borders";
import styled from "styled-components";

const ClientCard = styled.section`
  ${BorderBelow()}
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 0.4fr 1fr;

  & header {
    display: flex;
    row-gap: 0.5rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 2rem;
    height: 100%;
    box-sizing: border-box;

    & h2 {
      margin: 0;
      padding-top: 0.3rem;
      font-size: 1.3rem;
    }

    & .subtitle {
      margin-bottom: auto;
    }
  }
`;

export default ClientCard;
