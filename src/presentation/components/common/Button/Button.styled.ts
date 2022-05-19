import styled from "styled-components";
import { BorderAbove } from "presentation/styles/mixins/Borders";
import { getTheme } from "infraestructure/gateways/themeLocalStorage";

interface IButton {
  readonly typeBtn?: string;
}

const theme = getTheme();

//Types of buttons
const types = (type = "primary"): string => {
  switch (type) {
    case "primary":
      return theme.buttons.primary;
    case "error":
      return theme.buttons.error;
    case "warning":
      return theme.buttons.warning;
    case "success":
      return theme.buttons.success;
    case "info":
      return theme.buttons.info;
    default:
      return theme.buttons.primary;
  }
};

const ButtonStyled = styled.button<IButton>`
  ${BorderAbove("hover")}
  border: none;
  height: fit-content;
  cursor: pointer;
  padding: 0.7rem 1rem;
  background-color: ${(props) => types(props.typeBtn)};
`;

export default ButtonStyled;
