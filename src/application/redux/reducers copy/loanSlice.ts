import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoan } from "interfaces/loan";

const initialState: { [key: string]: ILoan[] } = {
  loanList: [],
};

const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    addLoan: (state, action: PayloadAction<ILoan>) => {
      state.loanList.push(action.payload);
    },
    updateLoan: (state, action: PayloadAction<ILoan>) => {
      const target = state.loanList.findIndex(
        (item: ILoan) => item.id_loan === action.payload.id_loan
      );
      if (target >= 0) state.loanList[target] = action.payload;
    },
    refreshLoanList: (state, action: PayloadAction<ILoan[]>) => {
      state.loanList = action.payload;
    },
    deleteLoan: (state, action: PayloadAction<number>) => {
      state.loanList = state.loanList.filter(
        (loan) => loan.id_loan !== action.payload
      );
    },
  },
});

export const { addLoan, updateLoan, refreshLoanList, deleteLoan } =
  loanSlice.actions;
export default loanSlice.reducer;
