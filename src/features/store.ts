// store.ts
import { configureStore } from "@reduxjs/toolkit";
import allEntertainmentSlice, {
  AllEntertainment,
} from "./allEntertainmentSlice";
import isLoggedInSlice, { IsLoggedIn } from "./isLoggedInSlice";
import userEmailSlice, { UserInfo } from "./userEmailSlice";
import inputValueSlice, { InputType } from "./inputValueSlice";
import filteredEntSlice, { FilteredEnt } from "./filteredEntSlice";

const store = configureStore({
  reducer: {
    entertainment: allEntertainmentSlice,
    isLoggedIn: isLoggedInSlice,
    userEmail: userEmailSlice,
    inputValue: inputValueSlice,
    filteredEnt: filteredEntSlice,
  },
});

export type RootState = {
  entertainment: AllEntertainment;
  isLoggedIn: IsLoggedIn;
  userEmail: UserInfo;
  inputValue: InputType;
  filteredEnt: FilteredEnt;
};

export default store;
