import styled from "styled-components";
import { getTheme } from "infraestructure/gateways/themeLocalStorage";

const theme = getTheme();

const DialogStyled = styled.dialog`
  position: fixed;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  top: 0;
  left: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.3rem);
  transition: opacity 0.3s;
  z-index: 6;

  .content {
    position: relative;
    width: 100%;
    width: 30rem;
    max-width: 30rem;
    max-height: 95vh;
    overflow: auto;
    padding: 2rem;
    margin: 2rem;
    backdrop-filter: blur(0.3rem);
    box-sizing: border-box;
    text-align: center;
    background-color: ${theme.background};

    .close-button {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      top: 0rem;
      right: 0rem;
      transform: scale(1);
      background-color: ${theme.buttons.error};
      color: ${theme.primary};
      cursor: pointer;

      .close-icon {
        font-size: 1.5rem;
      }
    }

    .modal-title {
      font-size: 1.3em;
      font-weight: bold;
      text-transform: uppercase;
      color: ${theme.secondary};
    }

    .modal-separator {
      width: 70%;
      margin-top: 1rem;
      margin-bottom: 2rem;
      border: none;
      border-bottom: 0.1rem solid ${theme.secondary};
    }

    .buttons {
      display: flex;
      justify-content: center;
      column-gap: 1rem;
      margin-top: 1rem;
    }
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
