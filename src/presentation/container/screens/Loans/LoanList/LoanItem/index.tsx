import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
import React from "react";
import StyledLi from "./LoanItem.styled";

type Props = {
  pending?: boolean;
};

const LoanItem = (props: Props) => {
  const { pending = true } = props;
  return (
    <StyledLi>
      <div className={`data ${pending && "pending"}`}>
        <p>
          <b>Nombre: </b>Lorenzo Arias Villegas
        </p>
        <p>
          <b>Estado: </b>1300bs / 2500bs
        </p>
      </div>
      <div className="button-section">
        <Button>
          <Icons type="details" />
          <span>Detalles</span>
        </Button>
        <Button type="info">
          <Icons type="edit" />
          <span>Editar</span>
        </Button>
      </div>
    </StyledLi>
  );
};

export default LoanItem;
