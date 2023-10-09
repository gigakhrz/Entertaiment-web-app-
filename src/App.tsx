import { styled } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/LogIn-SignUp/SingUp";
import LogIn from "./components/LogIn-SignUp/LogIn";
import Header from "./components/Header";
import Filter from "./components/Filter";
import axios from "axios";
import EntertainmentItem from "../type";
import { useDispatch, useSelector } from "react-redux";
import { setEntertainment } from "./features/allEntertainmentSlice";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import { RootState } from "./features/store";
import { setIsLoggedIn } from "./features/isLoggedInSlice";
import { setUserEmail } from "./features/userEmailSlice";
import { Dispatch } from "@reduxjs/toolkit";
import Bookmarked from "./components/Bookmarked";
import TvSeries from "./components/TvSeries";
import Movies from "./components/Movie";
import GridLoader from "react-spinners/GridLoader";

export const fetchEntertainment = async (
  isLoggedIn: boolean,
  userEmail: string,
  dispatch: Dispatch
): Promise<void> => {
  if (isLoggedIn) {
    const url = `http://localhost:3000/user?email=${userEmail}`;

    try {
      const response = await axios.get(url);
      dispatch(setEntertainment(response.data));
    } catch (error) {
      console.error("Error fetching user's data:", error);
    }
  } else {
    const url = "http://localhost:3000/getEntertainment";

    try {
      const response = await axios.get<EntertainmentItem[]>(url);
      dispatch(setEntertainment(response.data));
    } catch (error) {
      console.log("can't fetch data");
    }
  }
};

function App() {
  const dispatch = useDispatch();
  const loggedIn = localStorage.getItem("isLoggedIn");
  const userEmailAdres = localStorage.getItem("userEmail");

  if (loggedIn && userEmailAdres) {
    dispatch(setIsLoggedIn(true));
    dispatch(setUserEmail(userEmailAdres));
  }
  // Make sure that the user is logged in
  const isLoggedIn = useSelector(
    (store: RootState) => store.isLoggedIn.loggedIn
  );

  // catch userEmail to send get request for user's entertainments.
  const userEmail = useSelector(
    (store: RootState) => store.userEmail.userEmail
  );

  console.log(userEmail);

  useEffect(() => {
    fetchEntertainment(isLoggedIn, userEmail, dispatch);
  }, [isLoggedIn]);

  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [isLoggedIn]);

  return (
    <Router>
      <AppContainer>
        <Header />
        <Main>
          <Filter />
          <MainCont>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/logIn" element={<LogIn />} />
              <Route path="/bookmarked" element={<Bookmarked />} />
              <Route path="/tv-series" element={<TvSeries />} />
              <Route path="/movies" element={<Movies />} />
            </Routes>
          </MainCont>
        </Main>
      </AppContainer>
    </Router>
  );
}

export default App;

// whole app container
const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #10141e;
  gap: 26px;
  @media screen and (min-width: 768px) {
    padding: 24px;
    gap: 34px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: baseline;
  }
`;

// Main components container
const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    margin-top: 65px;
  }
`;

//  i need this element to wrap the elements below the filter, because the filter should be above them on any screen size
const MainCont = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  margin-bottom: 50px;
`;
