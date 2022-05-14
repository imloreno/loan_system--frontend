import { css } from "styled-components";
import Theme from "interfaces/theme";

/*
  Those two elements are used to create a border around the elements.
*/
const BorderAbove = (props: Theme, trigger = "empty") => css`
  position: relative;
  border-radius: 0.4rem;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    transition: opacity 0.5s;
    pointer-events: none;
  }

  &::before {
    opacity: 0;
    box-shadow: inset -0.2rem -0.2rem 0.2rem ${props.shadow[1]},
      inset 0.2rem 0.2rem 0.2rem ${props.shadow[0]};
  }
  &::after {
    box-shadow: 0.2rem 0.2rem 0.2rem ${props.shadow[0]},
      -0.1rem -0.1rem 0.2rem ${props.shadow[1]};
  }

  &${":" + trigger}, &.active {
    &::after {
      opacity: 0;
    }
    &::before {
      opacity: 1;
    }
  }
`;

const BorderBelow = (props: Theme, trigger = "empty") => css`
  position: relative;
  border-radius: 0.4rem;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    transition: opacity 0.5s;
    pointer-events: none;
  }

  &::before {
    box-shadow: inset -0.2rem -0.2rem 0.2rem ${props.shadow[1]},
      inset 0.2rem 0.2rem 0.2rem ${props.shadow[0]};
  }
  &::after {
    opacity: 0;
    box-shadow: 0.2rem 0.2rem 0.2rem ${props.shadow[0]},
      inset 0.2rem 0.2rem 1rem ${props.shadow[1]};
  }

  &${":" + trigger}, &.active {
    &::before {
      opacity: 0;
    }
    &::after {
      opacity: 1;
    }
  }
`;

export { BorderAbove, BorderBelow };
