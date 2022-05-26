import styled from "styled-components";
import { getTheme } from "infraestructure/gateways/themeLocalStorage";

const theme = getTheme();

const StyledForm = styled.form`
  display: flex;
  row-gap: 0.8rem;
  flex-direction: column;

  input,
  select {
    width: 100%;
    padding: 0.8rem 1rem;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  .button {
    width: fit-content;
  }

  .ci {
    display: grid;
    width: 100%;
    column-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    box-sizing: border-box;
  }

  .actions {
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    margin-top: 1.4rem;
  }
`;

export default StyledForm;
