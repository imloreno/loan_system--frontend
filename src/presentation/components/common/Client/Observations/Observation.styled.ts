import styled from "styled-components";

const ObservationStyled = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .observation-item {
    display: flex;
    column-gap: 1rem;
    align-items: center;
    text-align: left;
    padding: 0.8rem 1rem;
    justify-content: space-between;
    border: thin solid black;
  }
`;
export default ObservationStyled;
