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
import { useEffect } from "react";
import Home from "./components/Home";
import { RootState } from "./features/store";

function App() {
  // Make sure that the user is registered
  const isLoggedIn = useSelector(
    (store: RootState) => store.isLoggedIn.loggedIn
  );
  // catch userEmail to send get request for user's entertainments.
  const userEmail = useSelector(
    (store: RootState) => store.userEmail.userEmail
  );

  console.log(isLoggedIn);
  const dispatch = useDispatch();

  const fetchEntertainment = async (): Promise<void> => {
    if (isLoggedIn === false) {
      //უნდა შეიცვალოს როდესაც ბექ-ის სერვერი გალაივდება
      const url = "http://localhost:3000/getEntertainment";
      //Fetching entertainment from an API and saving it in Redux state.
      try {
        const response = await axios.get<EntertainmentItem[]>(url);
        dispatch(setEntertainment(response.data));
      } catch (error) {
        console.log("can't fetch data");
      }
    } else {
      const url = `http://localhost:3000/user?email=${userEmail}`;

      try {
        const response = await axios.get(url);
        dispatch(setEntertainment(response.data));
      } catch (error) {
        console.error("Error fetching user's data:", error);
      }
    }
  };

  useEffect(() => {
    fetchEntertainment();
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
`;

// Main components container
const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

//  i need this element to wrap the elements below the filter, because the filter should be above them on any screen size
const MainCont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
