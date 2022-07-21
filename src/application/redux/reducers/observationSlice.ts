import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IObservation } from "interfaces/observation";

const initialState: { [key: string]: IObservation[] } = {
  observationList: [],
};

const observationSlice = createSlice({
  name: "observation",
  initialState,
  reducers: {
    addObservation: (state, action: PayloadAction<IObservation>) => {
      state.observationList.push(action.payload);
    },
    updateObservation: (state, action: PayloadAction<IObservation>) => {
      const target = state.observationList.findIndex(
        (item: IObservation) => item.id === action.payload.id
      );
      if (target >= 0) state.observationList[target] = action.payload;
    },
    refreshObservationList: (state, action: PayloadAction<IObservation[]>) => {
      state.observationList = action.payload;
    },
    deleteObservation: (state, action: PayloadAction<number>) => {
      state.observationList = state.observationList.filter(
        (Observation) => Observation.id !== action.payload
      );
    },
  },
});

export const {
  addObservation,
  updateObservation,
  refreshObservationList,
  deleteObservation,
} = observationSlice.actions;
export default observationSlice.reducer;
