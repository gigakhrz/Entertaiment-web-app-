// store.ts
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
  isLoggedIn: IsLoggedIn; // Update this line
};

export default store;
