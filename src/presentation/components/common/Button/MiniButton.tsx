import React from "react";
import StyledMiniButton from "./MiniButton.styled";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

const MiniButton = (props: Props) => {
  const { onClick, children } = props;
  return <StyledMiniButton onClick={onClick}>{children}</StyledMiniButton>;
};

export default MiniButton;
