import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPerson } from "interfaces/person.d";

interface InitialState {
  personList: IPerson[];
}

const initialState: InitialState = {
  personList: [],
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<IPerson>) => {
      state.personList.push(action.payload);
    },
    updatePerson: (state, action: PayloadAction<IPerson>) => {
      const target = state.personList.findIndex(
        (item: IPerson) => item.id === action.payload.id
      );
      if (target >= 0) state.personList[target] = action.payload;
    },
    refreshPersonList: (state, action: PayloadAction<IPerson[]>) => {
      state.personList = action.payload;
    },
    deletePerson: (state, action: PayloadAction<number>) => {
      state.personList = state.personList.filter(
        (person) => person.id !== action.payload
      );
    },
  },
});

export const { addPerson, updatePerson, refreshPersonList, deletePerson } =
  personSlice.actions;
