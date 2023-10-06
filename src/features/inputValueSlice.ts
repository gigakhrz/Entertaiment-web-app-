import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InputType {
  value: string;
}

const initialState: InputType = {
  value: "",
};

const inputValueSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = inputValueSlice.actions;

export default inputValueSlice.reducer;
