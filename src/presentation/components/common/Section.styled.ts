import styled from "styled-components";
import { BorderAbove } from "presentation/styles/mixins/Borders";
import { getTheme } from "infraestructure/gateways/themeLocalStorage";

const theme = getTheme();

const Section = styled.section`
  ${BorderAbove(theme)}
  padding: 1.5rem;
`;

export default Section;
