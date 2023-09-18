import styled from "styled-components";
import logo from "../../public/images/logo.svg";
import { Link } from "react-router-dom";
import avatar from "../../public/images/image-avatar.png";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

const Header = (): JSX.Element => {
  //If the path is 'Login' or 'SignUp', the header must be hidden.
  const path = window.location.pathname;

  // Make sure that the user is registered
  const isLoggedIn = useSelector(
    (store: RootState) => store.isLoggedIn.loggedIn
  );

  console.log(path);

  return (
    <HeaderContainr path={path}>
      <img src={logo} alt="Logo img" />

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
        <Link className="movies" to="">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
        <Link className="series" to="">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
        <Link className="bookmarked" to="">
          <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
      </div>

      <div className="profileControler">
        <img className="avatarImg" src={avatar} alt="avatar image" />
        <div className="logInLogOut">
          {isLoggedIn === false ? (
            <div className="login">
              <Link to="/logIn">Login</Link>
              <Link to="/signUp">Sign Up</Link>
            </div>
          ) : (
            <button className="signOut">Sign out</button>
          )}
        </div>
      </div>
    </HeaderContainr>
  );
};

export default Header;

const HeaderContainr = styled.header<{ path: string }>`
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

  .category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 133.5px;
    a {
      text-decoration: none;
      width: 20;
      height: 16px;
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
    }

    .logInLogOut {
      position: absolute;
      width: 150px;
      height: 75px;
      top: 50px;
      left: -125px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background-color: #161d2f;

      button {
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
