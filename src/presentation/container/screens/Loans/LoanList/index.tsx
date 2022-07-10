import React from "react";
import LoanItem from "./LoanItem";
import StyledUl from "./LoanList.styled";

type Props = {};

const LoanList = (props: Props) => {
  return (
    <>
      <StyledUl>
        <LoanItem />
        <LoanItem />
        <LoanItem />
      </StyledUl>
      <StyledUl>
        <LoanItem pending={false} />
        <LoanItem pending={false} />
        <LoanItem pending={false} />
      </StyledUl>
    </>
  );
};

export default LoanList;
