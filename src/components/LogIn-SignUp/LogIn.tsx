import styled from "styled-components";
import logo from "../../../public/images/logo.svg";
import { Link } from "react-router-dom";

const LogIn = (): JSX.Element => {
  return (
    <LogInCont>
      <img src={logo} alt="logo img" />
      <div className="logIn">
        <h1>Log In</h1>

        <div className="inputs">
          <label>
            <input className="email" type="text" placeholder="Email address" />
            <hr className="emailHr" />
          </label>

          <label>
            <input className="password" type="text" placeholder="Password" />
            <hr className="passwordHr" />
          </label>
        </div>
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

    .inputs {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 24px;

      label {
        width: 100%;

        input {
          min-width: 100%;
          height: 35px;
          background: none;
          border: none;
          outline: none;
          padding-left: 16px;
          font-size: 15px;
          font-weight: 300;
          color: white;
          cursor: pointer;

          :focus {
            outline: none;
          }
        }

        hr {
          background: var(--Greyish-Blue, #5a698f);
          border: none;
          outline: none;
          height: 1px;
          width: 100%;
        }
      }
    }
  }
`;
