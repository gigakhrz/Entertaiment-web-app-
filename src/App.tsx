import { styled } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppContainer>
        <Main>
          <Routes>
            <Route path="/" />
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
