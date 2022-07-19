import { useDispatch, useSelector } from "react-redux";
import {
  updateLoan,
  refreshLoanList,
  addLoan as addLoanAction,
  deleteLoan as deleteLoanAction,
} from "application/redux/reducers/loanSlice";
import {
  formatLoanToApi,
  formatLoanToRedux,
} from "infraestructure/gateways/format/loanReduxFormat";
import { ILoan } from "interfaces/loan";
import { RootState } from "application/redux/store";
import {
  apiAddLoan,
  apiDeleteLoan,
  apiGetLoanList,
} from "infraestructure/api/loan";

const useLoan = () => {
  const dispatch = useDispatch();
  const loansList = useSelector((state: RootState) => state.loan.loanList);

  //Refresh Loan list
  const refreshloans = async () => {
    const data = await apiGetLoanList();
    const formatted: ILoan[] = data.map(formatLoanToRedux);
    dispatch(refreshLoanList(formatted));
  };

  //refresh once
  const refreshOnce = (Loan: ILoan) => {
    dispatch(updateLoan(Loan));
  };

  //AddLoan
  const addLoan = (Loan: ILoan) => {
    apiAddLoan(formatLoanToApi(Loan));
    dispatch(addLoanAction(Loan));
  };

  //Delete Loan
  const deleteLoan = (id: number) => {
    apiDeleteLoan(id);
    dispatch(deleteLoanAction(id));
  };

  return {
    loansList,
    refreshloans,
    addLoan,
    refreshOnce,
    deleteLoan,
  };
};

export { useLoan };
