import styled from "styled-components";
import { getTheme } from "infraestructure/gateways/themeLocalStorage";

const theme = getTheme();

const DialogStyled = styled.dialog`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  top: 0;
  left: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.3rem);
  box-sizing: border-box;
  transition: opacity 0.3s;
  z-index: 6;

  .content {
    padding: 2rem;
    max-width: 50rem;
    background-color: ${theme.background};

    .buttons {
      display: flex;
      justify-content: center;
      column-gap: 1rem;
      margin-top: 1rem;
    }
  }

  //verify if is closed
  &.closed {
    opacity: 0;
    pointer-events: none;
  }

  @keyframes start {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.9);
    }
  }
`;
export default DialogStyled;
