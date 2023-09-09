import styled from "styled-components";
import logo from "../../public/images/logo.svg";
const Header = (): JSX.Element => {
  //If the path is 'Login' or 'SignUp', the header must be hidden.
  const path = window.location.pathname;
  console.log(path);

  return (
    <HeaderContainr path={path}>
      <img src={logo} alt="Logo img" />
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
`;
