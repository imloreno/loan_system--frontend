import styled from "styled-components";
import { getTheme } from "infraestructure/gateways/themeLocalStorage";

const theme = getTheme();

const StyledMiniButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.buttons.error};
  color: ${theme.primary};
  border-radius: 0.6rem;
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.1s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
export default StyledMiniButton;
