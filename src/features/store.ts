import { configureStore } from "@reduxjs/toolkit";
import allEntertainmentSlice, {
  AllEntertainment,
} from "./allEntertainmentSlice";

const store = configureStore({
  reducer: {
    entertainment: allEntertainmentSlice,
  },
});

export type RootState = {
  entertainment: AllEntertainment;
};

export default store;
