import styled from "styled-components";
import logo from "../../../public/images/logo.svg";
import { Link } from "react-router-dom";

const LogIn = (): JSX.Element => {
  return (
    <LogInCont>
      <img src={logo} alt="logo img" />
      <div className="logIn">
        <h1>Log In</h1>
      </div>
    </LogInCont>
  );
};

export default LogIn;

const LogInCont = styled.div`
  margin-top: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 58.5px;

  .logIn {
    width: 327px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    border-radius: 10px;
    background: var(--Semi-Dark-Blue, #161d2f);
    padding: 24px;

    h1 {
      font-size: 32px;
      font-weight: 300;
      letter-spacing: -0.5px;
      color: white;
      align-self: flex-start;
    }
  }
`;
