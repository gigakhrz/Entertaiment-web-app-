import styled from "styled-components";
import logo from "../../public/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../public/images/image-avatar.png";
import defaultAvatar from "../../public/images/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import { useState } from "react";
import { setIsLoggedIn } from "../features/isLoggedInSlice";
import { setUserEmail } from "../features/userEmailSlice";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoToHomePage = (): void => {
    window.location.href = "https://entertaiment-web-app-rosy.vercel.app/";
  };
  //If the path is 'Login' or 'SignUp', the header must be hidden.
  const path = window.location.pathname;

  // Make sure that the user is registered
  const isLoggedIn = useSelector(
    (store: RootState) => store.isLoggedIn.loggedIn
  );

  //state wich will open frame
  const [openFrame, setOpenFrame] = useState<boolean>(false);

  //signOut function
  const logOut = (): void => {
    dispatch(setIsLoggedIn(false));
    dispatch(setUserEmail(""));

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setOpenFrame(!openFrame);
  };

  return (
    <HeaderContainr path={path} openFrame={openFrame}>
      <img
        src={logo}
        alt="Logo img"
        className="logoImg"
        onClick={handleGoToHomePage}
      />

      {/* Nav bar for categories which will redirect to another page based on the selected shape. */}
      <div className="category">
        <Link className="home" to="/">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
        <Link className="movies" to="/movies">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
        <Link className="series" to="/tv-series">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
        <Link className="bookmarked" to="/bookmarked">
          <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
      </div>

      <div className="profileControler">
        <img
          onClick={() => setOpenFrame(!openFrame)}
          className="avatarImg"
          src={isLoggedIn ? avatar : defaultAvatar}
          alt="avatar image"
        />
        <div className="logInLogOut">
          {isLoggedIn === false ? (
            <div className="login">
              <button
                onClick={() => {
                  setOpenFrame(!openFrame);
                  navigate("/logIn");
                }}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setOpenFrame(!openFrame);
                  setTimeout(() => {
                    navigate("/signUp");
                  }, 500);
                }}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                logOut();
              }}
              className="signOut"
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </HeaderContainr>
  );
};

export default Header;

const HeaderContainr = styled.header<{ path: string; openFrame: boolean }>`
  display: ${(props) =>
    props.path === "/logIn"
      ? "none"
      : props.path === "/signUp"
      ? "none"
      : "flex"};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #161d2f;
  padding: 16px;
  @media screen and (min-width: 768px) {
    padding: 21px 16px 19px 24px;
  }
  @media screen and (min-width: 1024px) {
    min-height: 960px;
    min-width: 96px;
    max-width: 96px;
    flex-direction: column;
    justify-content: flex-start;
    align-self: flex-start;
    padding: 35px 0 32px;
    border-radius: 20px;
  }

  .category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 133.5px;
    @media screen and (min-width: 1024px) {
      flex-direction: column;
      width: 20px;
      height: 200px;
      margin-top: 75px;
      margin-bottom: 552px;
    }
    a {
      text-decoration: none;
      width: 20;
      height: 16px;
      @media screen and (min-width: 1024px) {
        cursor: pointer;
        :hover {
          fill: red;
        }
      }
    }

    /* for active color */
    .home svg path {
      fill: ${(props) => (props.path === "/" ? "white" : "")};
    }
    .movies svg path {
      fill: ${(props) => (props.path === "/movies" ? "white" : "")};
    }
    .series svg path {
      fill: ${(props) => (props.path === "/tv-series" ? "white" : "")};
    }
    .bookmarked svg path {
      fill: ${(props) => (props.path === "/bookmarked" ? "white" : "")};
    }
  }

  .profileControler {
    position: relative;
    .avatarImg {
      width: 24px;
      height: 24px;
      border: 1px solid var(--Pure-White, #fff);
      border-radius: 24px;
      cursor: pointer;
      @media screen and (min-width: 768px) {
        width: 32px;
        height: 32px;
      }
    }

    .logInLogOut {
      position: absolute;
      width: 150px;
      height: 75px;
      top: 60px;
      left: -125px;
      display: ${(props) => (props.openFrame ? "flex" : "none")};
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      z-index: 3;
      background-color: #161d2f;
      @media screen and (min-width: 1024px) {
        left: 80px;
        top: -20px;
        height: 100px;
      }

      button {
        width: 90px;
        padding: 5px 0;
        background-color: #fc4747;
        border: none;
        outline: none;
        color: white;
        font-weight: 300px;
        font-size: 15px;
        border-radius: 5px;
        cursor: pointer;
      }
    }

    .login {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      padding: 10px 0 10px;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;
