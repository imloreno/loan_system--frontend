import ButtonStyled from "./Button.styled";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: any;
  type?: string;
};

const Button = (props: Props) => {
  const { children, onClick = () => {}, type } = props;
  return (
    <ButtonStyled onClick={onClick} typeBtn={type}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
