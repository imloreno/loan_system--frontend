import React from "react";
import Header from "./Header.styled";

type Props = {
  children: React.ReactNode;
};

const HeaderPage = (props: Props) => {
  return <Header>{props.children}</Header>;
};

export default HeaderPage;
