import styled from "styled-components";

const ListContainer = styled.section`
  display: flex;
  row-gap: 2rem;
  flex-direction: column;
  margin-top: 2rem;

  & .footer {
    grid-column: span 2;
    padding: 1rem 2rem;
    border-top: 1px solid #c0c0c0;
  }
`;

export default ListContainer;
