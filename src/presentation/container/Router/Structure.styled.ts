import styled from "styled-components";

const StyledStructure = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  min-height: 100vh;

  @media screen and (max-width: 60rem) {
    grid-template-columns: 1fr;
  }
`;

export default StyledStructure;
