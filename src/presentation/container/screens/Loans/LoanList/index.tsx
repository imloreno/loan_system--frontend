import { useGuarantee } from "infraestructure/hooks/redux/useGuarantee";
import { useLoan } from "infraestructure/hooks/redux/useLoan";
import React, { useEffect } from "react";
import LoanItem from "./LoanItem";
import StyledUl from "./LoanList.styled";

type Props = {};

const LoanList = (props: Props) => {
  const { loansList, refreshloans } = useLoan();
  const { guaranteesList, refreshGuarantees } = useGuarantee();
  console.log(guaranteesList);

  useEffect(() => {
    (!loansList || loansList.length < 1) && refreshloans();
    (!guaranteesList || guaranteesList.length < 1) && refreshGuarantees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
