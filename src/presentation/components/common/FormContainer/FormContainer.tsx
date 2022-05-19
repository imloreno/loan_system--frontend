import React from "react";
import StyledForm from "./Form.styled";

type Props = {
  children: React.ReactNode;
};

//HandleSubmir
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
  e.preventDefault();

const FormContainer = (props: Props) => {
  return <StyledForm onSubmit={handleSubmit}>{props.children}</StyledForm>;
};

export default FormContainer;
