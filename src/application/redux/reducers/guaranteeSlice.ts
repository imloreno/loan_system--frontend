import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGuarantee } from "interfaces/guarantee";

const initialState: { [key: string]: IGuarantee[] } = {
  guaranteeList: [],
};

const guaranteeSlice = createSlice({
  name: "guarantee",
  initialState,
  reducers: {
    addGuarantee: (state, action: PayloadAction<IGuarantee>) => {
      state.guaranteeList.push(action.payload);
    },
    updateGuarantee: (state, action: PayloadAction<IGuarantee>) => {
      const target = state.guaranteeList.findIndex(
        (item: IGuarantee) => item.id_guarantee === action.payload.id_guarantee
      );
      if (target >= 0) state.guaranteeList[target] = action.payload;
    },
    refreshGuaranteeList: (state, action: PayloadAction<IGuarantee[]>) => {
      state.guaranteeList = action.payload;
    },
    deleteGuarantee: (state, action: PayloadAction<number>) => {
      state.guaranteeList = state.guaranteeList.filter(
        (guarantee) => guarantee.id_guarantee !== action.payload
      );
    },
  },
});

export const {
  addGuarantee,
  updateGuarantee,
  refreshGuaranteeList,
  deleteGuarantee,
} = guaranteeSlice.actions;
export default guaranteeSlice.reducer;
