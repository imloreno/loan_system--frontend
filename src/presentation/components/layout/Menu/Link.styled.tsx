import styled from "styled-components";
import { BorderBelow } from "presentation/styles/mixins/Borders";
import { getTheme } from "infraestructure/gateways/themeLocalStorage";
import { NavLink } from "react-router-dom";

const theme = getTheme();

const Link = styled(NavLink)`
  ${BorderBelow({ trigger: "hover" })}
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
  padding: 0.7rem 1rem;
  color: ${theme.secondary};
  background-color: ${theme.primary};
  user-select: none;

  .menu-icon {
    font-size: 1.2rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;
export default Link;
