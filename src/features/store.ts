// store.ts
import { configureStore } from "@reduxjs/toolkit";
import allEntertainmentSlice, {
  AllEntertainment,
} from "./allEntertainmentSlice";
import isLoggedInSlice, { IsLoggedIn } from "./isLoggedInSlice";
import userEmailSlice, { UserInfo } from "./userEmailSlice";
import inputValueSlice, { InputType } from "./inputValueSlice";

const store = configureStore({
  reducer: {
    entertainment: allEntertainmentSlice,
    isLoggedIn: isLoggedInSlice,
    userEmail: userEmailSlice,
    inputValue: inputValueSlice,
  },
});

export type RootState = {
  entertainment: AllEntertainment;
  isLoggedIn: IsLoggedIn;
  userEmail: UserInfo;
  inputValue: InputType;
};

export default store;
