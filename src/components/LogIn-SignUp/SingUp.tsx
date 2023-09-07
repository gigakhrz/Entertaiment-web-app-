import styled from "styled-components";
import logo from "../../../public/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./signUpSchema";
import axios from "axios";
import { useState } from "react";

interface SignUpTypes {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGoToHomePage = (): void => {
    // უნდა შეიცვალოს როცა გალაივდება საიტი
    window.location.href = "http://localhost:5173/";
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpTypes>({
    resolver: yupResolver(schema),
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = (data: SignUpTypes) => {
    const email = data.email;
    const password = data.password;
    const createUser = async (): Promise<void> => {
      try {
        await axios.post("http://localhost:3000/signUp", {
          email: email,
          password: password,
        });
        navigate("/logIn");
      } catch (error) {
        const err = error as any;
        if (err.response && err.response.status === 400) {
          setErrorMessage("Email is already in use");
        } else console.log(error);
      }
    };
    createUser();
  };

  return (
    <SingUpCont errorMessage={errorMessage}>
      <img onClick={handleGoToHomePage} src={logo} alt="logo img" />

      <form className="signUp" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>

        <div className="inputs">
          <label>
            <input
              {...register("email")}
              className="email"
              type="text"
              placeholder="Email address"
            />
            <hr
              className="emailHr"
              style={{ background: errors.email ? "red" : "" }}
            />
            <p>{errors.email?.message}</p>
            <p className="errorMesage">Email is already in use</p>
          </label>

          <label>
            <input
              {...register("password")}
              className="password"
              type="password"
              placeholder="Password"
            />
            <hr
              className="passwordHr"
              style={{ background: errors.password ? "red" : "" }}
            />
            <p>{errors.password?.message}</p>
          </label>

          <label>
            <input
              {...register("confirmPassword")}
              className="repeat-password"
              type="password"
              placeholder="Repeat Password"
            />
            <hr
              className="passwordRepeatHr"
              style={{ background: errors.confirmPassword ? "red" : "" }}
            />
            <p>{errors.confirmPassword?.message}</p>
          </label>
        </div>

        {/* here are create acount button and if already have account login link tag */}

        <div className="buttonCont">
          <button type="submit">Create an account</button>

          <div className="textCont">
            <p>Already have an account?</p>
            <Link to="/logIn">LogIn</Link>
          </div>
        </div>
      </form>
    </SingUpCont>
  );
};

export default SignUp;

const SingUpCont = styled.div<{ errorMessage: string }>`
  margin-top: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 58.5px;

  .signUp {
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

        .errorMesage {
          left: 0;
          top: 67%;
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

        .repeat-password:focus + .passwordRepeatHr {
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
