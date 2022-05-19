import styled from "styled-components";

const ClientStyled = styled.li`
  .client_data {
    display: grid;
    column-gap: 1rem;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "img name"
      "img address";
    width: fit-content;

    img {
      grid-area: img;
      width: 3rem;
      aspect-ratio: 1/1;
      border-radius: 50%;
      filter: grayscale(1);
    }

    h4 {
      align-self: end;
    }
    p {
      font-size: 0.9em;
    }
  }

  .client_options {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;
  }
`;

export default ClientStyled;
