import styled from "styled-components";
import logo from "../../../public/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./schema";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../features/isLoggedInSlice";
import { setUserEmail } from "../../features/userEmailSlice";

interface LogInTypes {
  email: string;
  password: string;
}

const LogIn = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleGoToHomePage = (): void => {
    // უნდა შეიცვალოს როცა გალაივდება საიტი, ამასთან ერთად ყველა აქსიოს რექვესთი
    window.location.href = "http://localhost:5173/";
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInTypes>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data: LogInTypes) => {
    const email = data.email;
    const password = data.password;
    const logIn = async () => {
      try {
        await axios.post("http://localhost:3000/validate", {
          email: email,
          password: password,
        });
        dispatch(setIsLoggedIn(true));
        dispatch(setUserEmail(email));
        navigate("/");
      } catch (error) {
        const err = error as any;
        if (err.response && err.response.status === 401) {
          console.log("setted");
          setErrorMessage("Wrong password");
        } else if (err.response && err.response.status === 404) {
          setErrorMessage("Email cannot be found");
        } else {
          console.log(error);
        }
      }
    };
    logIn();
  };

  return (
    <LogInCont err={errorMessage}>
      <img onClick={handleGoToHomePage} src={logo} alt="logo img" />
      <form className="logIn" onSubmit={handleSubmit(onSubmit)}>
        <h1>Log In</h1>

        <div className="inputs">
          <label>
            <input
              className="email"
              type="text"
              {...register("email")}
              placeholder="Email address"
            />
            <hr
              className="emailHr"
              style={{ background: errors.email ? "red" : "" }}
            />
            <p>{errors.email?.message}</p>
            <p className="emailError">Email is already in use</p>
          </label>

          <label>
            <input
              className="password"
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            <hr
              className="passwordHr"
              style={{ background: errors.password ? "red" : "" }}
            />
            <p>{errors.password?.message}</p>
            <p className="passwordError">{errorMessage}</p>
          </label>
        </div>

        {/* here are log in button and if do not have account sing up link tag */}

        <div className="buttonCont">
          <button type="submit">Login to your account</button>

          <div className="textCont">
            <p>Don’t have an account</p>
            <Link to="/signUp">Sign Up</Link>
          </div>
        </div>
      </form>
    </LogInCont>
  );
};

export default LogIn;

const LogInCont = styled.div<{ err: string }>`
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
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;
        position: relative;

        p {
          color: #fc4747;
          font-size: 13px;
          font-weight: 300;
          position: absolute;
          top: 15%;
          left: 65%;
        }
        .emailError {
          display: ${(props) =>
            props.err === "Email cannot be found" ? "block" : "none"};
          left: 6%;
          top: 55%;
        }
        .passwordError {
          display: ${(props) =>
            props.err === "Wrong password" ? "block" : "none"};
          left: 6%;
          top: 55%;
        }

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

        .email:focus + .emailHr {
          background: white;
        }

        .password:focus + .passwordHr {
          background: white;
        }
      }
    }

    .buttonCont {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 24px;

      button {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 6px;
        background: var(--Red, #fc4747);
        font-size: 15px;
        font-weight: 300;
        color: white;
        cursor: pointer;
      }
    }

    .textCont {
      font-size: 15px;
      font-weight: 300;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      p {
        color: white;
      }

      a {
        color: red;
        text-decoration: none;
      }
    }
  }
`;
