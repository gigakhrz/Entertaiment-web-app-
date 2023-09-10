import { styled } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/LogIn-SignUp/SingUp";
import LogIn from "./components/LogIn-SignUp/LogIn";
import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Main>
          <Filter />
          <MainCont>
            <Routes>
              <Route path="/" />
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
`;

// Main components container
const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

//  i need this element to wrap the elements below the filter, because the filter should be above them on any screen size
const MainCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
