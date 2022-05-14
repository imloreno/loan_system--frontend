import React from "react";
import ProfileStyled from "./Profile.styled";

type Props = {};

const Profile = (props: Props) => {
  return (
    <ProfileStyled>
      <div className="profile">
        <img
          src="https://gaveinjaz.com/wp-content/uploads/2019/12/opulent-profile-square-07.jpg"
          alt="Jon White"
        />
      </div>
      <p>Lorenzo Santiago Saul Arias Villegas</p>
    </ProfileStyled>
  );
};

export default Profile;
