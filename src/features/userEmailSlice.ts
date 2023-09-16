import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserData {
  userEmail: string;
}

const initialState: UserData = {
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
