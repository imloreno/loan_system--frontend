import styled from "styled-components";
import { BorderAbove } from "presentation/styles/mixins/Borders";

const Section = styled.section`
  ${BorderAbove({})}
  position: relative;
  padding: 1.5rem;
  z-index: 1000;
`;

export default Section;
