import styled from "styled-components";
import logo from "../../public/images/logo.svg";
const Header = (): JSX.Element => {
  return (
    <HeaderContainr>
      <img src={logo} alt="" />
    </HeaderContainr>
  );
};

export default Header;

const HeaderContainr = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #161d2f;
  padding: 16px;
`;
