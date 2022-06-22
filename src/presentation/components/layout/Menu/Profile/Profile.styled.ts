import styled from "styled-components";

const Profile = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 2.5rem 1fr;
  align-items: center;
  max-width: 15rem;

  & .profile {
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: grayscale(100%);
    }

    & p {
      text-overflow: ellipsis;
    }
  }
`;
export default Profile;
