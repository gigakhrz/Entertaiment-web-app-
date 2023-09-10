import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Entertainment from "../../type";

export interface allEntertainment {
  entertainment: Entertainment[];
}

const initialState: allEntertainment = {
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
