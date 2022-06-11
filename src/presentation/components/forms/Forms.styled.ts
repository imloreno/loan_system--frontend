import { getTheme } from "infraestructure/gateways/themeLocalStorage";
import styled from "styled-components";

const theme = getTheme();

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
  row-gap: 0.5rem;

  input {
    all: unset;
  }
  select {
    outline: none;
  }

  input,
  select {
    padding: 0.8rem 1rem;
    background-color: ${theme.primary};
    border: thin solid transparent;

    &:focus {
      border: thin solid ${theme.secondary};
    }
  }
`;

const StyledInputArea = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const StyledButtonArea = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledDateArea = styled.div`
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
`;

export { StyledForm, StyledButtonArea, StyledInputArea, StyledDateArea };
