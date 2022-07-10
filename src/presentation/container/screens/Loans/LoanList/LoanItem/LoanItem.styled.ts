import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  .button-section {
    display: flex;
    column-gap: 1rem;
  }

  .data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0.5rem;
    border-left: 0.3rem solid gray;
  }
  .pending {
    border-left-color: orange;
  }
`;

export default StyledLi;
