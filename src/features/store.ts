import { configureStore } from "@reduxjs/toolkit";
import allEntertainmentSlice, {
  AllEntertainment,
} from "./allEntertainmentSlice";
import isLoggedInSlice, { IsLoggedIn } from "./isLoggedInSlice";

const store = configureStore({
  reducer: {
    entertainment: allEntertainmentSlice,
    isLoggedIn: isLoggedInSlice,
  },
});

export type RootState = {
  entertainment: AllEntertainment;
  loggedIn: IsLoggedIn;
};

export default store;
