import { styled } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/LogIn-SignUp/SingUp";
import LogIn from "./components/LogIn-SignUp/LogIn";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Main>
          <Routes>
            <Route path="/" />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
          </Routes>
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
