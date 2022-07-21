import styled from "styled-components";

const StyledIconInfo = styled.div`
  display: grid;
  column-gap: 0.5rem;
  grid-template-columns: 2.5rem 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "img name"
    "img address";
  width: fit-content;

  .image {
    grid-row: span 2;
    grid-area: img;
    width: 2.5rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
      filter: grayscale(1);
    }
  }

  h4 {
    align-self: end;
  }
  p {
    font-size: 0.9em;
  }
`;

export default StyledIconInfo;
