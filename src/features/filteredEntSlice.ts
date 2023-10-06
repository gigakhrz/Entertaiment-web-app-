import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Entertainment from "../../type";

export interface FilteredEnt {
  filtered: Entertainment[];
}

const initialState: FilteredEnt = {
  filtered: [],
};

const filteredEntSlice = createSlice({
  name: "filteredEnt",
  initialState,
  reducers: {
    setFilteredEnt: (state, action: PayloadAction<Entertainment[]>) => {
      state.filtered = action.payload;
    },
  },
});

export const { setFilteredEnt } = filteredEntSlice.actions;
export default filteredEntSlice.reducer;
