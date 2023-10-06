import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Entertainment from "../../type";

export interface FilteredEnt {
  filtered: Entertainment[] | undefined;
}

const initialState: FilteredEnt = {
  filtered: undefined,
};

const filteredEntSlice = createSlice({
  name: "filteredEnt",
  initialState,
  reducers: {
    setFilteredEnt: (state, action: PayloadAction<Entertainment[]>) => {
      state.filtered = action.payload;
    },
    setFilteredUndefined: (state) => {
      state.filtered = undefined;
    },
  },
});

export const { setFilteredEnt, setFilteredUndefined } =
  filteredEntSlice.actions;
export default filteredEntSlice.reducer;
