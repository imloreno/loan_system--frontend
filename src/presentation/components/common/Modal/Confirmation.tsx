import React from "react";
import Button from "../Button";

interface Props {
  onClose: () => void;
  onSuccess: () => void;
  text: string;
}

const Confirmation = (props: Props) => {
  return (
    <>
      <p>{props.text}</p>
      <div className="buttons">
        <Button type="success" onClick={props.onSuccess}>
          Aceptar
        </Button>
        <Button type="info" onClick={props.onClose}>
          Cancelar
        </Button>
      </div>
    </>
  );
};

export default Confirmation;
