import { styled } from "styled-components";
import AllEntertainment from "./AllEntertainments";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

const Home = (): JSX.Element => {
  const isLoggedIn = useSelector((store: RootState) => store.loggedIn);

  console.log(isLoggedIn);

  return (
    <HomeWrapper>
      <AllEntertainment />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 0 16px;
`;
