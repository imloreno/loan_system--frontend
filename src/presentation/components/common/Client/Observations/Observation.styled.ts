import styled from "styled-components";

const ObservationStyled = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .observation-item {
    display: flex;
    align-items: center;
    padding: 0.8rem 1rem;
    justify-content: space-between;
    border: thin solid black;
  }

  .button-list {
    display: flex;
    justify-content: center;
    column-gap: 1rem;
    margin-top: 2rem;
  }
`;
export default ObservationStyled;
