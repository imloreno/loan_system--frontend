import ButtonStyled from "./Button.styled";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: any;
  className?: string;
  type?: string;
};

const Button = (props: Props) => {
  const { children, onClick = () => {}, type, className } = props;
  return (
    <ButtonStyled onClick={onClick} typeBtn={type} className={className ?? ""}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
