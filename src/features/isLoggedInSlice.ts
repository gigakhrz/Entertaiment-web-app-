import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IsLoggedIn {
  loggedIn: boolean;
}

const initialState: IsLoggedIn = {
  loggedIn: false,
};

const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
