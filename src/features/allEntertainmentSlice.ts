import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Entertainment from "../../type";

export interface AllEntertainment {
  entertainment: Entertainment[];
}

const initialState: AllEntertainment = {
  entertainment: [],
};

const allEntertainmentSlice = createSlice({
  name: "entertainment",
  initialState,
  reducers: {
    setEntertainment: (state, action: PayloadAction<Entertainment[]>) => {
      state.entertainment = action.payload;
    },
  },
});

export const { setEntertainment } = allEntertainmentSlice.actions;
export default allEntertainmentSlice.reducer;
