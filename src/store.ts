/** @format */

import { configureStore } from "@reduxjs/toolkit";
import CurrentMonthReducer from "./reducers/changeMonthSlice";

export const store = configureStore({
	reducer: {
		currentMonth: CurrentMonthReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
