import styled from "styled-components";
import { BorderAbove } from "presentation/styles/mixins/Borders";

const Button = styled.button`
  ${BorderAbove("hover")}
  padding: 0.7rem 1rem;
  background-color: #d45555;
  border: none;
  cursor: pointer;
`;

export default Button;
