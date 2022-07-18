import { getTheme } from "infraestructure/gateways/themeLocalStorage";
import styled from "styled-components";

const theme = getTheme();

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
  row-gap: 0.5rem;
  text-align: left;

  input {
    all: unset;
  }
  select {
    outline: none;
  }

  input,
  select,
  textarea {
    padding: 0.8rem 1rem;
    background-color: ${theme.primary};
    border: thin solid transparent;

    &:focus {
      border: thin solid ${theme.secondary};
    }
  }
  textarea {
    box-sizing: border-box;
    width: 100%;
    resize: vertical;
    min-height: 5rem;
    outline: none;
  }
`;

const StyledInputArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;

  .input-labels-content {
    width: 100%;
    margin-top: 0.3rem;
  }

  input,
  select,
  p {
    width: 100%;
    box-sizing: border-box;
  }
  p {
    text-align: center;
  }
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
