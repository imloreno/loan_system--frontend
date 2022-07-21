import { useGuarantee } from "infraestructure/hooks/redux/useGuarantee";
import { useLoan } from "infraestructure/hooks/redux/useLoan";
import React, { useEffect } from "react";
import LoanItem from "./LoanItem";
import StyledUl from "./LoanList.styled";

type Props = {};

const LoanList = (props: Props) => {
  const { loansList, refreshloans } = useLoan();
  const { guaranteesList, refreshGuarantees } = useGuarantee();

  useEffect(() => {
    (!loansList || loansList.length < 1) && refreshloans();
    (!guaranteesList || guaranteesList.length < 1) && refreshGuarantees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StyledUl>
        {loansList &&
          loansList
            .filter((loan) => loan.pending)
            .map((loan, index) => <LoanItem key={index} />)}
      </StyledUl>
      <StyledUl>
        {loansList &&
          loansList
            .filter((loan) => !loan.pending)
            .map((loan, index) => (
              <LoanItem key={index} pending={loan.pending} />
            ))}
      </StyledUl>
    </>
  );
};

export default LoanList;
