// store.ts
import { configureStore } from "@reduxjs/toolkit";
import allEntertainmentSlice, {
  AllEntertainment,
} from "./allEntertainmentSlice";
import isLoggedInSlice, { IsLoggedIn } from "./isLoggedInSlice";
import userEmailSlice, { UserInfo } from "./userEmailSlice";

const store = configureStore({
  reducer: {
    entertainment: allEntertainmentSlice,
    isLoggedIn: isLoggedInSlice,
    userEmail: userEmailSlice,
  },
});

export type RootState = {
  entertainment: AllEntertainment;
  isLoggedIn: IsLoggedIn;
  userEmail: UserInfo;
};

export default store;
