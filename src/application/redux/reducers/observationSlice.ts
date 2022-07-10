import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IObservation } from "interfaces/observation";

const initialState: IObservation[] = [];

const observationSlice = createSlice({
  name: "observation",
  initialState,
  reducers: {
    addObservation: (state, action: PayloadAction<IObservation>) => {
      state.push(action.payload);
    },
  },
});

export const { addObservation } = observationSlice.actions;
export default observationSlice.reducer;
