import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserInfo {
  userEmail: string;
}

const initialState: UserInfo = {
  userEmail: "",
};

const userEmailSlice = createSlice({
  name: "userEmail",
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
  },
});

export const { setUserEmail } = userEmailSlice.actions;
export default userEmailSlice.reducer;
