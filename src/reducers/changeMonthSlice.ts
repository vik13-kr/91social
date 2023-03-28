/** @format */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CurrentMonth {
	value: string;
}

const initialState: CurrentMonth = {
	value: "",
};

export const changeMonthSlice = createSlice({
	name: "CurrentMonth",
	initialState,
	reducers: {
		changeCurrentMonth: (state, action) => {
			return action.payload;
		},
	},
});

export const { changeCurrentMonth } = changeMonthSlice.actions;
export default changeMonthSlice.reducer;
