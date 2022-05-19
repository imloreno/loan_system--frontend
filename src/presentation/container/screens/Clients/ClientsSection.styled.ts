import styled from "styled-components";

const StyledClientsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  ul {
    display: flex;
    row-gap: 1rem;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .client_options {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
`;
export default StyledClientsSection;
