import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
import React from "react";

type Props = {};

const AddLoan = (props: Props) => {
  return (
    <Button type="success">
      <Icons type="loan" />
      <span>Agregar un préstamo</span>
    </Button>
  );
};

export default AddLoan;
