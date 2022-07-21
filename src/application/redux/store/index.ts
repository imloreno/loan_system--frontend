import { configureStore } from "@reduxjs/toolkit";
import { personSlice } from "../reducers/personSlice";
import observationSlice from "../reducers/observationSlice";
import loanSlice from "../reducers/loanSlice";
import guaranteeSlice from "../reducers/guaranteeSlice";

export const store = configureStore({
  reducer: {
    persons: personSlice.reducer,
    observations: observationSlice,
    loan: loanSlice,
    guarantee: guaranteeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
